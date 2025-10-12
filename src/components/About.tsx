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
    <section id="about" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Proof Banner */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-success/10 border-2 border-success/30 rounded-full px-8 py-4 mb-6">
              <span className="text-3xl">🏆</span>
              <span className="text-success font-bold text-lg">1,000+ Success Stories & Counting</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Enhanced Visual */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative aspect-square rounded-3xl bg-gradient-hero shadow-primary overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center text-primary-foreground">
                    <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center shadow-gold animate-pulse">
                      <span className="text-8xl font-extrabold text-accent">B</span>
                    </div>
                    <p className="text-2xl font-bold mb-3">Brozeen</p>
                    <p className="text-lg font-medium opacity-90">Your Digital Success Partner</p>
                    <div className="mt-6 flex gap-1 justify-center">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className="text-accent text-2xl">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enhanced Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-4">
                  <p className="text-primary font-bold text-sm">💼 PROVEN TRACK RECORD</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  From <span className="text-destructive">Struggling</span> to <span className="text-gradient-gold">$15K/Month</span>
                </h2>
                <div className="h-2 w-24 bg-gradient-accent rounded-full mb-6"></div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-soft">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  I am <span className="font-extrabold text-primary text-xl">Brozeen</span>, and I have cracked the code to digital marketing success. 
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I have helped <span className="font-bold text-accent">1,000+ entrepreneurs</span> from 9 to 5 workers to affiliate marketers, 
                  break free from the struggle and build <span className="font-bold underline decoration-primary">real, sustainable income</span>. 
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-5 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
                  <div className="text-sm font-semibold text-foreground">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-xl p-5 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl font-extrabold text-accent mb-2">$5M+</div>
                  <div className="text-sm font-semibold text-foreground">Revenue Generated</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-success/10 border-2 border-success/30 rounded-xl p-5">
                <CheckCircle2 className="w-7 h-7 text-success flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-bold text-lg">
                  Zero fluff. Zero BS. Just proven strategies that have generated millions in revenue.
                </p>
              </div>

              <Button asChild variant="gold" size="lg" className="mt-6 text-lg px-10 py-7 w-full sm:w-auto">
                <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                  🚀 Start My Success Story
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
