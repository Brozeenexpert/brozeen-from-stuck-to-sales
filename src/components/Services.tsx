import { Rocket, PenTool, Target, TrendingUp } from "lucide-react";
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Services That Drive <span className="text-gradient-gold">Real Results</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your unique business needs and growth goals
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

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-foreground mb-6">
              Not sure which service is right for you?
            </p>
            <Button asChild variant="gold" size="lg">
              <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
