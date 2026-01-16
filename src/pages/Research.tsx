import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// To add a new research paper, add it to the TOP of this array
// Format: { date: "MM-DD-YYYY" or "In Progress", title: "...", link: "...", venue: "Zenodo/SMMG Research", highlight: true/false }
const researchPapers = [
  {
    date: "Aug 7, 2025",
    title: "Hot Potato Effect in a CLOB Within the Same Cent: An Agent-Based Inventory Model",
    link: "https://zenodo.org/records/16760452",
    venue: "Zenodo",
    highlight: true,
  },
  {
    date: "Aug 19, 2025",
    title: "Foundations of Dealer Markets: A Replication and Analysis of the Treynor Model",
    link: "https://zenodo.org/records/16921558",
    venue: "Zenodo",
    highlight: false,
  },
  {
    date: "In Progress",
    title: "Quantifying Hot Potato Effect and Its Dynamics with PFOF and Internalisation",
    link: "#",
    venue: "SMMG Research",
    highlight: false,
  },
];

// To add a new GitHub repo, add it to the TOP of this array
// Use "Jan 2026 – Ongoing" format for active research, or "Jul 2025 – Ongoing" for continuing projects
const openSourceProjects = [
  {
    date: "Jan 2026 – Ongoing",
    title: "spoofing-experiment-large-event",
    description: "Spoofing research experiment with large event analysis",
    link: "https://github.com/Stealth-Market-Microstructure-Group/spoofing-experiment-large-event",
  },
  {
    date: "Jul 2025 – Ongoing",
    title: "NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
    description: "Market Simulation of agent showing hot potato transfer in same cent, sim using ITCH NASDAQ tick data",
    link: "https://github.com/Stealth-Market-Microstructure-Group/NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
  },
  {
    date: "Sep 2025 – Ongoing",
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
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 pt-24 sm:pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Research</h1>
          <p className="text-sm text-primary-foreground/60">
            White Papers and Research Publications
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Research Papers Section */}
        <section className="mb-16">
          <h2 className="text-lg border-b border-border pb-2 mb-6 text-foreground">
            Research Papers
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {researchPapers.map((paper, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-3 pr-4 whitespace-nowrap align-top text-muted-foreground" style={{ width: '120px' }}>
                      {paper.date}
                    </td>
                    <td className="py-3">
                      <a 
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-professional ${paper.highlight ? 'font-semibold' : ''}`}
                      >
                        {paper.title}
                      </a>
                      <span className="text-xs ml-2 text-muted-foreground">
                        [{paper.venue}]
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Open Source Section */}
        <section>
          <h2 className="text-lg border-b border-border pb-2 mb-6 text-foreground">
            Open Source
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {openSourceProjects.map((project, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-3 pr-4 whitespace-nowrap align-top text-muted-foreground" style={{ width: '120px' }}>
                      {project.date}
                    </td>
                    <td className="py-3">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-professional"
                      >
                        {project.title}
                      </a>
                      <p className="mt-1 text-muted-foreground">
                        {project.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
