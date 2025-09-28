import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      year: "2024",
      grade: "CGPA: 8.46",
      icon: GraduationCap,
    },
    {
      degree: "12th Grade",
      institution: "Bihar Public School (CBSE Board)",
      year: "2020",
      grade: "",
      icon: GraduationCap,
    },
    {
      degree: "10th Grade", 
      institution: "Cambridge Senior Secondary School (CBSE Board)",
      year: "2018",
      grade: "",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-up">
            <Card className="p-8 gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  I'm a passionate <strong className="text-primary">DevOps Engineer</strong> with 1+ years of hands-on experience 
                  in release engineering, CI/CD automation, and infrastructure management. My expertise spans across 
                  Azure DevOps pipeline development, Git-based version control, and end-to-end deployment optimization.
                </p>
                <p>
                  As a <strong className="text-primary">Certified Azure DevOps Engineer</strong>, I've successfully automated 
                  software releases, integrated quality assurance tools, and enhanced security protocols in production 
                  environments. My approach combines technical excellence with innovative problem-solving to deliver 
                  scalable and reliable infrastructure solutions.
                </p>
                <p>
                  I'm passionate about <strong className="text-primary">cloud technologies</strong>, infrastructure as code, 
                  and continuous improvement. My goal is to bridge the gap between development and operations, ensuring 
                  seamless deployment processes and optimal system performance.
                </p>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-8 text-gradient">Education Timeline</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 gradient-card border-border/50 shadow-card hover-scale transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        {edu.grade && (
                          <div className="text-primary font-medium">
                            {edu.grade}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;