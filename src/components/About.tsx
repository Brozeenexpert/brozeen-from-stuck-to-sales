import { CheckCircle2, Target, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Plans",
      description: "Custom strategies designed specifically for your business goals and target audience"
    },
    {
      icon: Zap,
      title: "Hands-Free Automation",
      description: "Streamlined systems that work for you 24/7, generating leads while you focus on growth"
    },
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "Proven methodologies backed by years of experience and thousands of success stories"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-hero shadow-gold overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent">B</span>
                    </div>
                    <p className="text-xl font-semibold">Your Digital Success Partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  From Overwhelm to <span className="text-gradient-gold">Overflowing Leads</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-accent rounded-full mb-6"></div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm <span className="font-semibold text-primary">Brozeen</span>, a digital marketing strategist who specializes in 
                turning struggling entrepreneurs into thriving business owners. Whether you're a side hustler balancing a 9-5, 
                an affiliate marketer looking to scale, or a business owner overwhelmed by the digital landscape — I've been there.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My mission is simple: <span className="font-semibold text-accent">Help you unlock your business potential</span> through 
                proven promotion strategies, automation systems, and personalized guidance. No fluff, no empty promises — just real results 
                that transform your digital presence and bottom line.
              </p>

              <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">
                  Over 1,000 clients promoted to success with strategies tailored to their unique challenges
                </p>
              </div>

              <Button asChild variant="hero" size="lg" className="mt-6">
                <a href="#services">
                  Explore My Services
                </a>
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
