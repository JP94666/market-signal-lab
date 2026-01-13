import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate input
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: result.data
      });

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We will respond shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 pt-24 sm:pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2">Contact Us</h1>
          <p className="text-sm text-primary-foreground/60">
            Get in touch with SMMG Research
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="mb-8 text-muted-foreground">
          Please send tips, feedback, and questions using the contact form.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
          <div>
            <label className="block text-sm mb-2 text-foreground font-medium">
              Your Name (required)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm mb-2 text-foreground font-medium">
              Your Email (required)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm mb-2 text-foreground font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              maxLength={200}
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-foreground font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              required
              maxLength={5000}
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent resize-y"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 border border-foreground bg-background text-foreground hover:bg-secondary transition-colors text-sm"
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
