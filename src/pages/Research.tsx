import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const researchPapers = [
  {
    date: "08-19-2025",
    title: "Foundations of Dealer Markets: A Replication and Analysis of the Treynor Model",
    link: "https://zenodo.org/records/13345447",
    venue: "Zenodo",
    highlight: false,
  },
  {
    date: "In Progress",
    title: "Myths in Market Microstructure Research I: Passive Liquidity Providers",
    link: "#",
    venue: "SMMG Research",
    highlight: true,
  },
  {
    date: "In Progress",
    title: "Quantifying Hot Potato Effect and Its Dynamics with PFOF and Internalisation",
    link: "#",
    venue: "SMMG Research",
    highlight: false,
  },
];

const openSourceProjects = [
  {
    date: "Jul 2025",
    title: "NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
    description: "Market Simulation of agent showing hot potato transfer in same cent, sim using ITCH NASDAQ tick data",
    link: "https://github.com/Stealth-Market-Microstructure-Group/NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
  },
  {
    date: "Sep 2025",
    title: "Imbalance-signal-generation-using-DMA-screens",
    description: "Inferring order-flow imbalance from DMA trading screens using OCR (Tesseract)",
    link: "https://github.com/Stealth-Market-Microstructure-Group/Imbalance-signal-generation-using-DMA-screens",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-16 pt-32">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl mb-2">Research</h1>
          <p className="text-sm text-primary-foreground/60">
            White Papers and Research Publications
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Research Papers Section */}
        <section className="mb-16">
          <h2 className="text-xl border-b border-border pb-2 mb-6" style={{ color: 'hsl(0 0% 20%)' }}>
            Research Papers
          </h2>
          
          <table className="w-full text-sm">
            <tbody>
              {researchPapers.map((paper, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 pr-4 whitespace-nowrap align-top" style={{ color: 'hsl(0 0% 45%)', width: '120px' }}>
                    {paper.date}
                  </td>
                  <td className="py-3">
                    <a 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-simple ${paper.highlight ? 'font-semibold' : ''}`}
                    >
                      {paper.title}
                    </a>
                    <span className="text-xs ml-2" style={{ color: 'hsl(0 0% 55%)' }}>
                      [{paper.venue}]
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Open Source Projects Section */}
        <section>
          <h2 className="text-xl border-b border-border pb-2 mb-6" style={{ color: 'hsl(0 0% 20%)' }}>
            Open Source Projects
          </h2>
          
          <table className="w-full text-sm">
            <tbody>
              {openSourceProjects.map((project, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 pr-4 whitespace-nowrap align-top" style={{ color: 'hsl(0 0% 45%)', width: '120px' }}>
                    {project.date}
                  </td>
                  <td className="py-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-simple"
                    >
                      {project.title}
                    </a>
                    <p className="mt-1" style={{ color: 'hsl(0 0% 45%)' }}>
                      {project.description}
                    </p>
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

export default Research;
