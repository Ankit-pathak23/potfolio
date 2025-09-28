import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Award, Rocket, Shield, Zap } from "lucide-react";

const Experience = () => {
  const achievements = [
    { icon: Rocket, text: "Terraform automation reducing provisioning time by 60%" },
    { icon: Shield, text: "Integrated SonarQube + Trivy for enhanced security" },
    { icon: Zap, text: "Blue-green deployments for zero-downtime releases" },
    { icon: Award, text: "3 Spot Awards for exceptional performance" },
  ];

  const technologies = [
    "Azure DevOps", "Terraform", "Kubernetes (AKS)", "Docker", 
    "GitHub", "SonarQube", "Trivy", "PowerShell", "Bash", "Python"
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="animate-fade-in-up">
          <Card className="p-8 md:p-12 gradient-card border-border/50 shadow-card">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="p-4 rounded-xl bg-primary/20 border border-primary/30 w-fit">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  Cloud Analyst (DevOps Engineer)
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <span className="text-lg font-medium text-primary">Optimus Information Inc., India</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>August 2024 – September 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-smooth hover-scale"
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground/90">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Core Responsibilities</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Designed and implemented CI/CD pipelines using Azure DevOps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Automated infrastructure provisioning with Terraform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Managed AKS cluster upgrades and maintenance</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Integrated security scanning with SonarQube and Trivy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Implemented blue-green deployment strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/90">Maintained GitHub repositories and release management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-smooth"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;