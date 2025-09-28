import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Settings, 
  Shield, 
  Container, 
  Zap,
  Terminal,
  Cloud,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Scripting",
      icon: Code,
      skills: [
        { name: "PowerShell", level: 90 },
        { name: "Bash", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "YAML", level: 95 },
      ]
    },
    {
      title: "DevOps Tools",
      icon: Settings,
      skills: [
        { name: "Azure DevOps", level: 95 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "CI/CD Pipelines", level: 92 },
      ]
    },
    {
      title: "Quality & Security",
      icon: Shield,
      skills: [
        { name: "SonarQube", level: 88 },
        { name: "Trivy", level: 85 },
        { name: "Defender", level: 80 },
        { name: "Code Analysis", level: 85 },
      ]
    },
    {
      title: "Containers & Infrastructure",
      icon: Container,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes (AKS)", level: 85 },
        { name: "Azure Container Apps", level: 88 },
        { name: "Terraform", level: 92 },
      ]
    }
  ];

  const certifications = [
    {
      name: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      icon: Cloud,
      color: "text-blue-400"
    },
    {
      name: "Infrastructure as Code",
      issuer: "Terraform",
      icon: Zap,
      color: "text-purple-400"
    },
    {
      name: "Container Orchestration",
      issuer: "Kubernetes",
      icon: Container,
      color: "text-cyan-400"
    },
    {
      name: "Git & Version Control",
      issuer: "GitHub",
      icon: GitBranch,
      color: "text-green-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card border-border/50 shadow-card hover-scale transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/90 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary/50"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
            Certifications & Specializations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 text-center gradient-card border-border/50 shadow-card hover-scale transition-smooth group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-smooth">
                    <cert.icon className={`w-8 h-8 ${cert.color} group-hover:text-primary transition-smooth`} />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Spot Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60%</div>
            <div className="text-sm text-muted-foreground">Time Reduced</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;