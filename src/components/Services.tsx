import { Rocket, PenTool, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Done-for-You Promotion Setup",
      description: "Complete campaign setup from strategy to execution. I handle everything so you can focus on your core business.",
      features: [
        "Audience research & targeting",
        "Campaign strategy development",
        "Platform setup & optimization",
        "Performance tracking systems"
      ]
    },
    {
      icon: PenTool,
      title: "Content & Social Strategy",
      description: "Engaging content that converts followers into customers. Build authority and trust in your niche.",
      features: [
        "Content calendar planning",
        "Social media management",
        "Brand voice development",
        "Engagement optimization"
      ]
    },
    {
      icon: Target,
      title: "Lead Generation Automation",
      description: "Automated systems that attract, nurture, and convert leads 24/7 without manual intervention.",
      features: [
        "Email funnel automation",
        "Lead magnet creation",
        "CRM integration",
        "Follow-up sequences"
      ]
    },
    {
      icon: TrendingUp,
      title: "Scaling & Optimization",
      description: "Take your existing campaigns to the next level with data-driven optimization and scaling strategies.",
      features: [
        "Performance analytics",
        "A/B testing & optimization",
        "Budget scaling strategies",
        "ROI maximization"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-6">
              <p className="text-accent font-bold text-sm">⚡ PROVEN SYSTEMS</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Services That Actually Drive Results
            </h2>
            <div className="h-2 w-32 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Choose the service that fits your goals — or let me create a <span className="font-bold text-primary">custom strategy</span> just for you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border group"
                >
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:shadow-gold transition-shadow">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent">
                    <a href="#contact">
                      Learn More
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-lg border-2 border-primary/30 rounded-3xl p-12 shadow-primary">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Book a <span className="font-bold text-accent">FREE 30-minute strategy call</span> and I'll create a custom plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="gold" size="lg" className="text-lg font-bold px-10 py-7">
                  <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                    📞 Book My Free Call Now
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-success font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
