import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin, Phone, Code, Server, Cloud, Zap, Shield, Settings } from "lucide-react";
import { scrollToSection } from "@/hooks/useLenis";
import profileImage from "@/assets/ankit-profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const techIcons = [
    { Icon: Code, delay: "0s", position: "top-20 left-10" },
    { Icon: Server, delay: "0.5s", position: "top-40 right-20" },
    { Icon: Cloud, delay: "1s", position: "bottom-40 left-20" },
    { Icon: Zap, delay: "1.5s", position: "bottom-20 right-10" },
    { Icon: Shield, delay: "2s", position: "top-1/3 left-1/4" },
    { Icon: Settings, delay: "2.5s", position: "bottom-1/3 right-1/4" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90"></div>
        </div>
      </div>

      {/* Enhanced Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} animate-float opacity-20 hover:opacity-40 transition-opacity duration-500`}
            style={{ animationDelay: delay }}
          >
            <div className="p-3 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        ))}
        
        {/* Additional animated elements */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-primary/20 rounded-full animate-rotate-slow opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-primary/30 rounded-full animate-pulse opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Profile Image with Animation */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block group">
            <img
              src={profileImage}
              alt="Ankit Pathak - DevOps Engineer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-glow mx-auto transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-pulse-glow"></div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-bounce shadow-glow">
              Available
            </div>
          </div>
        </div>

        {/* Enhanced Hero Content */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient bg-clip-text">Ankit Pathak</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-foreground/90">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              DevOps Engineer
            </span>
            <span className="text-primary mx-2">|</span>
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Cloud & Automation Specialist
            </span>
          </h2>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Automating deployments, securing pipelines, and scaling cloud infrastructure. 
              <br className="hidden md:block" />
              <span className="text-primary font-medium">Transforming development workflows</span> with cutting-edge DevOps practices.
            </p>
          </div>

          {/* Enhanced Stats Bar */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: "1s" }}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-center">
              <div className="group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">1+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-xs text-muted-foreground">Users Served</div>
              </div>
              {/* <div className="group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">3</div>
                <div className="text-xs text-muted-foreground">Awards Won</div>
              </div> */}
              <div className="group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">60%</div>
                <div className="text-xs text-muted-foreground">Time Saved</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: "1.2s" }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="hover-scale group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/20 to-primary-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="hover-scale group border-primary/30 hover:border-primary/60 hover:shadow-glow"
            >
              Get in Touch
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="animate-fade-in-up flex justify-center gap-6 mb-12" style={{ animationDelay: "1.4s" }}>
            <a 
              href="mailto:ankishtechsolution@gmail.com"
              className="p-4 rounded-full bg-secondary/30 backdrop-blur-sm hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover-scale group relative overflow-hidden"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </a>
            <a 
              href="https://linkedin.com/in/ankit-pathak-8a8646207"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary/30 backdrop-blur-sm hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover-scale group relative overflow-hidden"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </a>
            <a 
              href="https://github.com/Ankit-pathak23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary/30 backdrop-blur-sm hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover-scale group relative overflow-hidden"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </a>
            <a 
              href="tel:+916203370516"
              className="p-4 rounded-full bg-secondary/30 backdrop-blur-sm hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover-scale group relative overflow-hidden"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2 group-hover:mb-3 transition-all">Scroll to explore</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
              <ChevronDown className="w-6 h-6 absolute top-0 opacity-30 animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;