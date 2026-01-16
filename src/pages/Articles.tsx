import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// To add a new article, add it to the TOP of this array
// Format: { date: "YYYY", title: "...", description: "...", link: "...", highlight: true/false }
const articles = [
  {
    date: "Dec 17, 2025",
    title: "Financial research has a problem — and Marcos López de Prado explains it perfectly",
    description: "Most financial models look great on paper — but collapse when they meet real markets",
    link: "https://www.linkedin.com/pulse/financial-research-has-problem-marcos-l%C3%B3pez-de-prado-explains-m--z39ue/?trackingId=vRUPQDp9an5eGQ4gb0Zp6w%3D%3D",
    highlight: true,
  },
  {
    date: "Mar 11, 2024",
    title: "Myths in Market Microstructure Research I: Passive Liquidity Providers",
    description: "Our empirical validation showing the shift in understanding passive liquidity providers",
    link: "https://www.linkedin.com/pulse/myths-market-microstructure-research-i-passive-liquidity-david-m--rezrf/?trackingId=stsIwxriQbKflzXOWyw8OA%3D%3D",
    highlight: false,
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 pt-24 sm:pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Articles & Updates</h1>
          <p className="text-sm text-primary-foreground/60">
            Market observations, research notes, and commentary
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Featured Articles */}
        <section>
          <h2 className="text-lg border-b border-border pb-2 mb-6 text-foreground">
            Articles
          </h2>
          
          <div className="space-y-6">
            {articles.map((article, i) => (
              <div key={i} className="border-l-2 border-accent pl-4">
                <span className="text-xs text-muted-foreground">
                  {article.date}
                </span>
                <h3 className="mt-1">
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link-professional ${article.highlight ? 'font-semibold' : ''}`}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
