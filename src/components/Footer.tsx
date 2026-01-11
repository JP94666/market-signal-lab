import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'hsl(0 0% 45%)' }}>
            © {new Date().getFullYear()} SMMG Research. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
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
