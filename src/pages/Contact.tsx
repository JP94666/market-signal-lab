import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We will respond shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
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
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
            />
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
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent"
            />
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
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-accent resize-y"
            />
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
