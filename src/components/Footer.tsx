import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-gradient">
            Ankit Pathak
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground max-w-md">
            DevOps Engineer passionate about automating workflows and scaling cloud infrastructure.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-border/50 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Ankit Pathak. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  Always learning. Always improving.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="gap-2 text-muted-foreground hover:text-primary"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                  Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;