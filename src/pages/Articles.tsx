import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const articles = [
  {
    date: "2025",
    title: "LIMIT ≠ PASSIVE — The Myth That Shakes Market Microstructure",
    description: "Our empirical validation showing the shift in understanding passive liquidity providers",
    link: "#",
    highlight: true,
  },
  {
    date: "2025",
    title: "From the $11.5M Position Iceberg and the Nanex/Flash Crash Friction",
    description: "How decade-old ideas began and the empirical dissection proving LIMIT ≠ PASSIVE",
    link: "#",
    highlight: false,
  },
];

const newsMedia = [
  {
    date: "2025",
    title: "Financial research has a problem — Marcos López de Prado explains it perfectly",
    source: "LinkedIn",
    link: "#",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-16 pt-32">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl mb-2">Articles & Updates</h1>
          <p className="text-sm text-primary-foreground/60">
            Market observations, research notes, and commentary
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-xl border-b border-border pb-2 mb-6" style={{ color: 'hsl(0 0% 20%)' }}>
            Featured Articles
          </h2>
          
          <div className="space-y-6">
            {articles.map((article, i) => (
              <div key={i} className="border-l-4 border-accent pl-4">
                <span className="text-xs" style={{ color: 'hsl(0 0% 45%)' }}>
                  {article.date}
                </span>
                <h3 className="mt-1">
                  <a 
                    href={article.link}
                    className={`link-simple text-lg ${article.highlight ? 'font-semibold' : ''}`}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'hsl(0 0% 45%)' }}>
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* News & Media */}
        <section>
          <h2 className="text-xl border-b border-border pb-2 mb-6" style={{ color: 'hsl(0 0% 20%)' }}>
            News & Commentary
          </h2>
          
          <table className="w-full text-sm">
            <tbody>
              {newsMedia.map((item, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 pr-4 whitespace-nowrap align-top" style={{ color: 'hsl(0 0% 45%)', width: '120px' }}>
                    {item.date}
                  </td>
                  <td className="py-3">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-simple"
                    >
                      {item.title}
                    </a>
                    <span className="text-xs ml-2" style={{ color: 'hsl(0 0% 55%)' }}>
                      [{item.source}]
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
