import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin,
  Send,
  Clock,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ankishtechsolution@gmail.com",
      href: "mailto:ankishtechsolution@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6203370516",
      href: "tel:+916203370516",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ankit-pathak-8a8646207",
      href: "https://linkedin.com/in/ankit-pathak-8a8646207",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Ankit-pathak23",
      href: "https://github.com/Ankit-pathak23",
      color: "text-gray-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_itfvmmo',
        'template_rwr6eyq',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'IHRxn5cf_djNgzJUo'
      );
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your DevOps needs? Let's connect and explore how I can help 
            streamline your development processes and scale your infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="p-8 gradient-card border-border/50 shadow-card h-fit">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/50 transition-smooth hover-scale group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-smooth">
                      <info.icon className={`w-5 h-5 ${info.color} group-hover:text-primary transition-smooth`} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 gradient-card border-border/50 shadow-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project discussion, consultation, etc."
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project requirements, timeline, and how I can help..."
                    rows={6}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 transition-smooth resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="p-8 gradient-card border-border/50 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Prefer a Quick Call?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Sometimes a conversation is worth a thousand emails. Schedule a quick 15-minute call 
              to discuss your DevOps needs and see how I can help.
            </p>
            <Button variant="outline" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Schedule a Call
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;