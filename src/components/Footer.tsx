import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SMMG Research. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <Link to="/about" className="link-simple">About</Link>
            <Link to="/research" className="link-simple">Research</Link>
            <Link to="/contact" className="link-simple">Contact</Link>
            <a 
              href="https://github.com/Stealth-Market-Microstructure-Group"
              target="_blank"
              rel="noopener noreferrer"
              className="link-simple"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/company/smmg-research"
              target="_blank"
              rel="noopener noreferrer"
              className="link-simple"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
