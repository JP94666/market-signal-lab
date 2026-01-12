import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const recentResearch = [
  {
    date: "2025",
    title: "Hot Potato Effect in a CLOB Within the Same Cent: An Agent-Based Inventory Model",
    link: "https://zenodo.org/records/16760452",
    highlight: true,
  },
  {
    date: "08-19-2025",
    title: "Foundations of Dealer Markets: A Replication and Analysis of the Treynor Model",
    link: "https://zenodo.org/records/16921558",
    highlight: false,
  },
];

const recentArticles = [
  {
    date: "2025",
    title: "Financial research has a problem — and Marcos López de Prado explains it perfectly",
    link: "https://www.linkedin.com/pulse/financial-research-has-problem-marcos-l%C3%B3pez-de-prado-explains-m--z39ue/?trackingId=vRUPQDp9an5eGQ4gb0Zp6w%3D%3D",
    highlight: true,
  },
  {
    date: "2025",
    title: "Myths in Market Microstructure Research I: Passive Liquidity Providers",
    link: "https://www.linkedin.com/pulse/myths-market-microstructure-research-i-passive-liquidity-david-m--rezrf/?trackingId=stsIwxriQbKflzXOWyw8OA%3D%3D",
    highlight: false,
  },
];

const openSource = [
  {
    title: "NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
    link: "https://github.com/Stealth-Market-Microstructure-Group/NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
  },
  {
    title: "Imbalance-signal-generation-using-DMA-screens",
    link: "https://github.com/Stealth-Market-Microstructure-Group/Imbalance-signal-generation-using-DMA-screens",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-16 pt-32">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl mb-4" style={{ fontWeight: 400 }}>
            SMMG Research
          </h1>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'hsl(0 0% 70%)' }}>
            A maverick research lab at the intersection of simulation and market microstructure. 
            60TB+ of raw ITCH data. HPC workflows. Revealing what conventional analysis cannot.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Three column layout like Nanex */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Research Column */}
          <div>
            <h2 className="text-base border-b border-border pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
              Research
            </h2>
            <p className="text-xs mb-4" style={{ color: 'hsl(0 0% 55%)' }}>
              White Papers and Publications
            </p>
            <ul className="space-y-3">
              {recentResearch.map((item, i) => (
                <li key={i}>
                  <span className="text-xs block" style={{ color: 'hsl(0 0% 55%)' }}>
                    {item.date}
                  </span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link-simple text-sm ${item.highlight ? 'font-semibold' : ''}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/research" className="link-simple text-sm mt-4 inline-block">
              View all research →
            </Link>
          </div>

          {/* Articles Column */}
          <div>
            <h2 className="text-base border-b border-border pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
              Articles
            </h2>
            <p className="text-xs mb-4" style={{ color: 'hsl(0 0% 55%)' }}>
              Notes and Commentary
            </p>
            <ul className="space-y-3">
              {recentArticles.map((item, i) => (
                <li key={i}>
                  <span className="text-xs block" style={{ color: 'hsl(0 0% 55%)' }}>
                    {item.date}
                  </span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link-simple text-sm ${item.highlight ? 'font-semibold' : ''}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/articles" className="link-simple text-sm mt-4 inline-block">
              View all articles →
            </Link>
          </div>

          {/* Open Source Column */}
          <div>
            <h2 className="text-base border-b border-border pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
              Open Source
            </h2>
            <p className="text-xs mb-4" style={{ color: 'hsl(0 0% 55%)' }}>
              GitHub
            </p>
            <ul className="space-y-3">
              {openSource.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-simple text-sm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="https://github.com/Stealth-Market-Microstructure-Group"
              target="_blank"
              rel="noopener noreferrer"
              className="link-simple text-sm mt-4 inline-block"
            >
              View GitHub →
            </a>
          </div>
        </div>

        {/* About snippet */}
        <section className="mt-16 pt-8 border-t border-border">
          <p className="max-w-2xl text-sm" style={{ color: 'hsl(0 0% 35%)' }}>
            Our core advantage: a deterministic ITCH-based limit order book simulator designed 
            for event-level analysis. This matching engine emulator enables controlled experimentation 
            on order flow, agent interaction, and inventory dynamics while preserving strict 
            price–time priority and causal event ordering.
          </p>
          <Link to="/about" className="link-simple text-sm mt-4 inline-block">
            Learn more about us →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;