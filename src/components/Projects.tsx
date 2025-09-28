import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp,
  Rocket,
  Shield,
  Users,
  Zap,
  Cloud,
  Container
} from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Enterprise Application Release Automation",
      description: "Built automated 3-tier architecture serving 1,000+ users monthly with 60% reduced provisioning time.",
      icon: Rocket,
      color: "text-blue-400",
      technologies: ["Azure DevOps", "Terraform", "Trivy", "AKS", "PowerShell"],
      achievements: [
        "Reduced infrastructure provisioning time by 60%",
        "Automated deployment for 1,000+ monthly users",
        "Implemented 3-tier architecture with high availability",
        "Integrated security scanning with Trivy",
        "Zero-downtime deployment strategy"
      ],
      details: {
        challenge: "The client needed a scalable, automated deployment solution for their enterprise application that could handle growing user demand while maintaining security standards.",
        solution: "Designed and implemented a comprehensive CI/CD pipeline using Azure DevOps with Terraform for infrastructure as code. Integrated security scanning and automated testing to ensure reliable deployments.",
        impact: "Achieved 60% reduction in deployment time, improved system reliability, and enhanced security posture through automated scanning and compliance checks."
      },
      metrics: [
        { label: "Users Served", value: "1,000+" },
        { label: "Time Reduced", value: "60%" },
        { label: "Uptime", value: "99.9%" },
        { label: "Security Score", value: "A+" }
      ]
    },
    {
      title: "Application Migration & Security Automation",
      description: "Migrated applications to Azure Container Apps with comprehensive security integration and automated workflows.",
      icon: Shield,
      color: "text-green-400",
      technologies: ["Azure Container Apps", "SonarQube", "Defender", "GitHub Actions", "Docker"],
      achievements: [
        "Seamless migration to Azure Container Apps",
        "Integrated Defender and SonarQube for security",
        "Automated release gates and approval workflows",
        "Implemented container security best practices",
        "Enhanced code quality and security posture"
      ],
      details: {
        challenge: "Client required migration of legacy applications to modern containerized infrastructure while maintaining strict security and quality standards.",
        solution: "Orchestrated migration to Azure Container Apps with comprehensive security integration using Defender and SonarQube. Implemented automated quality gates and approval workflows.",
        impact: "Achieved modern, scalable infrastructure with enhanced security posture, automated quality checks, and streamlined deployment processes."
      },
      metrics: [
        { label: "Applications Migrated", value: "15+" },
        { label: "Security Incidents", value: "0" },
        { label: "Code Quality", value: "95%" },
        { label: "Deployment Speed", value: "3x Faster" }
      ]
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world DevOps implementations that have delivered measurable results 
            for enterprise clients and improved operational efficiency.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 gradient-card border-border/50 shadow-card transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/30 flex-shrink-0">
                  <project.icon className={`w-8 h-8 ${project.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.achievements.slice(0, 4).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/90 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center p-3 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="text-lg font-bold text-primary">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  
                 
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleProject(index)}
                  className="gap-2"
                >
                  {expandedProject === index ? (
                    <>Less Details <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>More Details <ChevronDown className="w-4 h-4" /></>
                  )}
                </Button>
              </div>

              {/* Expanded Details */}
              {expandedProject === index && (
                <div className="mt-8 pt-8 border-t border-border/50 space-y-6 animate-fade-in-up">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Challenge</h5>
                    <p className="text-muted-foreground">{project.details.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Solution</h5>
                    <p className="text-muted-foreground">{project.details.solution}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Impact</h5>
                    <p className="text-muted-foreground">{project.details.impact}</p>
                  </div>
                  {project.achievements.length > 4 && (
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Additional Achievements</h5>
                      <div className="space-y-2">
                        {project.achievements.slice(4).map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/90 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="p-8 gradient-card border-border/50 shadow-card">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to build scalable, secure, and efficient DevOps solutions 
              that drive your business forward.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;