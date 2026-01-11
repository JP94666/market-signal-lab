import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const recentResearch = [
  {
    date: "08-19-2025",
    title: "Foundations of Dealer Markets: A Replication and Analysis of the Treynor Model",
    link: "https://zenodo.org/records/13345447",
    highlight: false,
  },
  {
    date: "In Progress",
    title: "Myths in Market Microstructure Research I: Passive Liquidity Providers",
    link: "#",
    highlight: true,
  },
];

const recentArticles = [
  {
    date: "2025",
    title: "LIMIT ≠ PASSIVE — The Myth That Shakes Market Microstructure",
    link: "#",
    highlight: true,
  },
  {
    date: "2025",
    title: "From the $11.5M Position Iceberg and the Nanex/Flash Crash Friction",
    link: "#",
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
      <section className="bg-primary text-primary-foreground py-20 pt-36">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm mb-4" style={{ color: 'hsl(0 0% 60%)' }}>
            Stealth Market Microstructure Group
          </p>
          <h1 className="text-2xl md:text-3xl leading-relaxed max-w-3xl">
            A maverick research lab operating at the intersection of simulation and market microstructure. 
            Leveraging <strong>60TB+</strong> of raw data and HPC workflows to reveal what conventional 
            analysis cannot.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Three column layout like Nanex */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Research Column */}
          <div>
            <h2 className="text-lg border-b-2 border-accent pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
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
            <h2 className="text-lg border-b-2 border-accent pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
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
            <h2 className="text-lg border-b-2 border-accent pb-2 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>
              Open Source
            </h2>
            <p className="text-xs mb-4" style={{ color: 'hsl(0 0% 55%)' }}>
              GitHub Projects
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
          <p className="max-w-2xl" style={{ color: 'hsl(0 0% 35%)' }}>
            Our work focuses on analyzing full depth-of-book (ITCH/EOBI) data to uncover novel 
            patterns in order book dynamics. We build terabyte-scale infrastructure to power our 
            analysis and translate our research on Market Microstructure into high-impact systems 
            that directly address real-world market behavior.
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
