import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark hero section */}
      <section className="bg-primary text-primary-foreground py-16 pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl mb-2">About Us</h1>
          <p className="text-sm text-primary-foreground/60">
            The Stealth Market Microstructure Group
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'hsl(0 0% 35%)' }}>
            SMMG Research is a maverick research lab operating at the intersection of simulation 
            and market microstructure. We leverage 60TB+ of raw data and HPC workflows (MetaCentrum) 
            to build the tools that reveal what conventional analysis cannot.
          </p>

          <p className="leading-relaxed mb-6" style={{ color: 'hsl(0 0% 35%)' }}>
            Our work focuses on analyzing full depth-of-book (ITCH/EOBI) data to uncover novel 
            patterns in order book dynamics. We build terabyte-scale infrastructure to power our 
            analysis and translate our research on Market Microstructure into high-impact systems 
            that directly address real-world market behavior.
          </p>

          <h2 className="text-xl mt-10 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>Our Focus</h2>
          
          <ul className="list-disc pl-6 space-y-2 mb-8" style={{ color: 'hsl(0 0% 35%)' }}>
            <li>Full depth-of-book ITCH/EOBI data analysis</li>
            <li>Order book dynamics and liquidity research</li>
            <li>High-frequency trading pattern recognition</li>
            <li>F1-inspired market simulators</li>
            <li>Agent-based modeling of market behavior</li>
          </ul>

          <h2 className="text-xl mt-10 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>The Team</h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-border pl-4">
              <h3 className="text-lg mb-1" style={{ color: 'hsl(0 0% 20%)' }}>Pankaj Jat</h3>
              <p className="text-sm mb-2" style={{ color: 'hsl(0 0% 45%)' }}>
                Founding Researcher & Systems Architect / Co-founder
              </p>
              <p className="text-sm" style={{ color: 'hsl(0 0% 35%)' }}>
                Spearheading market microstructure research using terabytes of full depth-of-book 
                (ITCH) data. Architecting the group's research infrastructure and overseeing the 
                engineering of high-performance data pipelines. B.Tech Computer Science at IIIT Kota.
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
              <h3 className="text-lg mb-1" style={{ color: 'hsl(0 0% 20%)' }}>David M.</h3>
              <p className="text-sm mb-2" style={{ color: 'hsl(0 0% 45%)' }}>
                Principal & Co-founder
              </p>
              <p className="text-sm" style={{ color: 'hsl(0 0% 35%)' }}>
                Experienced proprietary trader bringing practical market knowledge to academic 
                research. Focus on bridging theory with real-world trading dynamics. Based in 
                Barcelona, Universitat de Barcelona.
              </p>
              <a 
                href="https://www.linkedin.com/in/david-m-trading"
                target="_blank"
                rel="noopener noreferrer"
                className="link-simple text-sm mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <h2 className="text-xl mt-10 mb-4" style={{ color: 'hsl(0 0% 20%)' }}>Location</h2>
          <p style={{ color: 'hsl(0 0% 35%)' }}>
            Barcelona, Catalonia, Spain (Remote)
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
