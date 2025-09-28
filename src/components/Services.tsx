import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  GitBranch, 
  Cloud, 
  Container,
  ArrowRight,
  Zap,
  Shield,
  Monitor
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "DevOps Consulting & Automation",
      description: "End-to-end DevOps strategy, process optimization, and automation implementation to streamline your development workflow.",
      features: [
        "DevOps strategy assessment",
        "Process optimization",
        "Tool selection & integration",
        "Best practices implementation"
      ],
      color: "text-blue-400"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Development",
      description: "Design and implement robust CI/CD pipelines that ensure fast, reliable, and secure software delivery.",
      features: [
        "Azure DevOps pipelines",
        "Automated testing integration",
        "Release management",
        "Quality gates & approvals"
      ],
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      description: "Scalable and secure cloud infrastructure design and implementation using Azure cloud services.",
      features: [
        "Infrastructure as Code (Terraform)",
        "Azure cloud architecture",
        "Scalability planning",
        "Cost optimization"
      ],
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "SecOps & Cloud Security",
      description: "Comprehensive security operations for cloud and DevOps environments, integrating leading security tools and best practices.",
      features: [
        "SonarQube code quality & security",
        "Microsoft Defender for Cloud integration",
        "Trivy vulnerability scanning",
        "GitHub Advanced Security setup"
      ],
      color: "text-cyan-400"
    },
    {
      icon: Cloud,
      title: "AKS & Kubernetes Solutions",
      description: "Expert deployment, scaling, and management of Kubernetes clusters on Azure Kubernetes Service (AKS).",
      features: [
        "AKS cluster provisioning",
        "Kubernetes workload management",
        "Helm chart deployments",
        "Cluster monitoring & scaling"
      ],
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Cloud Cost Optimization",
      description: "Reduce your cloud spend with best practices, automation, and continuous cost monitoring.",
      features: [
        "Cost analysis & reporting",
        "Resource right-sizing",
        "Automated scaling & shutdowns",
        "FinOps best practices"
      ],
      color: "text-yellow-400"
    }
  ];

  const additionalServices = [
    { icon: Zap, title: "Performance Optimization", description: "Infrastructure and deployment performance tuning" },
    { icon: Shield, title: "Security Integration", description: "Comprehensive security scanning and compliance" },
    { icon: Monitor, title: "Monitoring & Alerting", description: "Real-time monitoring and alerting solutions" }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive DevOps solutions to help organizations accelerate their development 
            processes and achieve reliable, scalable infrastructure.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 gradient-card border-border/50 shadow-card hover-scale transition-smooth animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-smooth">
                  <service.icon className={`w-8 h-8 ${service.color} group-hover:text-primary transition-smooth`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary/10 transition-smooth"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
            Additional Expertise
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                className="p-6 text-center gradient-card border-border/50 shadow-card hover-scale transition-smooth group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="p-8 gradient-card border-border/50 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Transform Your DevOps?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help streamline your development processes, 
              enhance security, and scale your infrastructure efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;