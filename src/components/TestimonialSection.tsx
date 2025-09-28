import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

const testimonials = [
  {
    name: "Udit Kumar",
    feedback:
      "Working with Ankit has been an incredible experience. His deep expertise in DevOps automation and CI/CD pipelines helped us streamline our release cycles significantly. He implemented scalable cloud infrastructure and security integrations that directly improved our delivery speed and product reliability. His problem-solving mindset and ability to bridge development and operations make him a valuable asset to any organization.",
    role: "Co-Founder, Scale It More",
  },
  {
    name: "Rupesh",
    feedback:
      "Ankit consistently demonstrated professionalism, dedication, and technical excellence throughout our projects. His innovative use of Terraform and Azure DevOps pipelines reduced deployment times while ensuring system uptime and compliance. He has a strong grasp of both infrastructure management and security practices, which gave us the confidence to deliver large-scale projects smoothly. I would highly recommend him for any future DevOps initiatives.",
    role: "Project Manager",
  },
  {
    name: "Govind",
    feedback:
      "Ankit's expertise in automating complex deployment processes and managing cloud infrastructure has been instrumental in the success of our projects. His commitment to quality and security ensures that our releases are both reliable and efficient. Ankit’s collaborative approach and technical skills make him a trusted partner in any DevOps initiative.",
    role: "Senior Software Engineer",
  },
  {
    name: "Shubham",
    feedback:
      "Throughout our collaboration, Ankit brought a high level of professionalism and in-depth knowledge of DevOps best practices. His ability to optimize CI/CD pipelines and integrate security tools significantly enhanced our team's productivity and code quality. I admire his passion for continuous improvement and cloud-native technologies.",
    role: "Technical Lead",
  },
  {
    name: "Fredendo",
    feedback:
      "Ankit delivered exceptional DevOps solutions that transformed our development workflow. His skills in Kubernetes management, Terraform automation, and security integration helped us achieve higher scalability and faster releases. He’s a results-driven engineer who consistently exceeds expectations with innovative solutions.",
    role: "Engineering Manager",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 6 seconds unless paused
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current, isPaused]);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Calculate indices for previous, current, and next
  const prevIdx = (current - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (current + 1) % testimonials.length;

  // Card hover handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Endorsements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 animate-fade-in-up">
          {/* Previous testimonial */}
          <div className="flex-1 flex justify-center items-stretch opacity-60 transition-transform duration-300 grayscale hover:grayscale-0">
            <Card
              className="border-border/50 shadow-card w-full max-w-md bg-card flex flex-col h-full group hover:scale-110"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader>
                <CardTitle className="text-base italic font-normal">"{testimonials[prevIdx].feedback}"</CardTitle>
                <CardDescription className="mt-2">
                  <span className="font-semibold not-italic text-base text-card-foreground">{testimonials[prevIdx].name}</span><br />
                  <span className="text-sm">{testimonials[prevIdx].role}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Centered testimonial */}
          <div className="flex-1 flex justify-center items-stretch transition-transform duration-300 z-10">
            <Card
              className="border-border/50 shadow-card w-full max-w-xl bg-card flex flex-col h-full group scale-105 hover:scale-125 hover:z-20"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader>
                <CardTitle className="text-lg italic font-normal">"{testimonials[current].feedback}"</CardTitle>
                <CardDescription className="mt-2">
                  <span className="font-semibold not-italic text-base text-card-foreground">{testimonials[current].name}</span><br />
                  <span className="text-sm">{testimonials[current].role}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Next testimonial */}
          <div className="flex-1 flex justify-center items-stretch opacity-60 transition-transform duration-300 grayscale hover:grayscale-0">
            <Card
              className="border-border/50 shadow-card w-full max-w-md bg-card flex flex-col h-full group hover:scale-110"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader>
                <CardTitle className="text-base italic font-normal">"{testimonials[nextIdx].feedback}"</CardTitle>
                <CardDescription className="mt-2">
                  <span className="font-semibold not-italic text-base text-card-foreground">{testimonials[nextIdx].name}</span><br />
                  <span className="text-sm">{testimonials[nextIdx].role}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
            aria-label="Previous Endorsement"
          >
            <span className="text-xl">&#8592;</span>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
            aria-label="Next Endorsement"
          >
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

