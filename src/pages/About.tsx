import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 pt-24 sm:pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">About Us</h1>
          <p className="text-sm text-primary-foreground/60">
            The Stealth Market Microstructure Group
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-none">
          <p className="leading-relaxed mb-6 text-muted-foreground">
            SMMG Research is a maverick research lab operating at the intersection of simulation 
            and market microstructure. We leverage 60TB+ of raw data and HPC workflows (MetaCentrum) 
            to build the tools that reveal what conventional analysis cannot.
          </p>

          <h2 className="text-lg mt-10 mb-4 text-foreground">The Emulator</h2>
          
          <p className="leading-relaxed mb-6 text-muted-foreground">
            At the core of our research is a deterministic ITCH-based limit order book simulator 
            designed for event-level analysis. This matching engine emulator enables controlled 
            experimentation on order flow, agent interaction, and inventory dynamics—preserving 
            strict price–time priority and causal event ordering. Everything we build revolves 
            around this foundation: from agent-based models studying the hot potato effect to 
            research on passive liquidity provision.
          </p>

          <h2 className="text-lg mt-10 mb-4 text-foreground">Our Focus</h2>
          
          <ul className="list-disc pl-6 space-y-2 mb-8 text-muted-foreground">
            <li>Full depth-of-book ITCH/EOBI data analysis</li>
            <li>Order book dynamics and liquidity queue research</li>
            <li>Modeling and detection of spoofing and layering strategies</li>
            <li>Agent-based modeling of market behavior</li>
            <li>Event-level inventory transfer simulation</li>
          </ul>

          <h2 className="text-lg mt-10 mb-4 text-foreground">The Team</h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-border pl-4">
              <h3 className="text-base mb-1 text-foreground">David Rodríguez M.</h3>
              <p className="text-sm mb-2 text-muted-foreground">
                Principal & Co-founder
              </p>
              <p className="text-sm text-muted-foreground">
                Experienced proprietary trader bringing practical market knowledge to academic 
                research. Focus on bridging theory with real-world trading dynamics. Based in 
                Barcelona, Universitat de Barcelona.
              </p>
              <a 
                href="https://www.linkedin.com/in/david-m-27693ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-simple text-sm mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="border-l-2 border-border pl-4">
              <h3 className="text-base mb-1 text-foreground">Pankaj J.</h3>
              <p className="text-sm mb-2 text-muted-foreground">
                Founding Researcher & Systems Architect / Co-founder
              </p>
              <p className="text-sm text-muted-foreground">
                Lead architect of the research infrastructure and primary builder of the market 
                emulator/simulator. Overseeing the overall architecture and simulation engine 
                development.
              </p>
              <a 
                href="https://www.linkedin.com/in/pankaj-jat-666p"
                target="_blank"
                rel="noopener noreferrer"
                className="link-simple text-sm mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="border-l-2 border-border pl-4">
              <h3 className="text-base mb-1 text-foreground">Bhavik P.</h3>
              <p className="text-sm mb-2 text-muted-foreground">
                Data & Infrastructure Engineer
              </p>
              <p className="text-sm text-muted-foreground">
                The person behind building and maintaining the data pipelines. Responsible for 
                NASDAQ ITCH data parsing, Kafka integration, and ensuring reliable data flow 
                across the research infrastructure.
              </p>
              <a 
                href="https://www.linkedin.com/in/bp-sde/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-simple text-sm mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <h2 className="text-lg mt-10 mb-4 text-foreground">Location</h2>
          <p className="text-muted-foreground">
            Barcelona, Catalonia, Spain
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
