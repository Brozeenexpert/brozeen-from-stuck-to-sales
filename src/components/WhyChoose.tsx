import { Target, TrendingUp, Users, Zap } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Target,
      title: "Custom Strategy Built For You",
      description: "No cookie cutter templates. Every plan is tailored to your specific business, goals, and market position."
    },
    {
      icon: TrendingUp,
      title: "Real Results & Transparent Process",
      description: "Track every metric, see every improvement. You will know exactly how your investment turns into revenue."
    },
    {
      icon: Users,
      title: "Personal Support & Mentorship",
      description: "Direct access to proven expertise. Get guidance, troubleshooting, and strategic advice when you need it."
    },
    {
      icon: Zap,
      title: "Traffic That Converts Into Sales",
      description: "We do not just drive clicks. We bring qualified buyers ready to invest in what you offer."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient-gold">Brozeen</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on proven systems that have generated millions in revenue for clients worldwide
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-gold">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3">
              <span className="text-accent text-2xl">✓</span>
              <span className="text-foreground font-semibold">
                Trusted by 1,000+ entrepreneurs who scaled to 6 figures
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
