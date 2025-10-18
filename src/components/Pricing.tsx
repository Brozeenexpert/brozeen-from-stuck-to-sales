import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "$497",
      original: "$997",
      best: false,
      description: "Perfect for beginners ready to launch their first digital product",
      features: [
        "5 Premium Digital Products with MRR",
        "Done-For-You Sales Funnel Templates",
        "Email Marketing Sequences",
        "Basic Traffic Training (Organic)",
        "Private Community Access",
        "Email Support"
      ],
      notIncluded: [
        "1-on-1 Coaching Calls",
        "Advanced Paid Traffic Training",
        "Done-For-You Ads Setup"
      ]
    },
    {
      name: "Pro Package",
      price: "$1,497",
      original: "$2,997",
      best: true,
      description: "Most popular choice for serious entrepreneurs",
      features: [
        "20+ Premium Digital Products with MRR",
        "Complete Sales Funnel System",
        "Advanced Email Automation",
        "Organic + Paid Traffic Mastery",
        "4 Weekly 1-on-1 Coaching Calls",
        "Private VIP Community",
        "WhatsApp Direct Support",
        "Done-For-You Ad Templates"
      ],
      notIncluded: []
    },
    {
      name: "Elite Package",
      price: "$2,997",
      original: "$5,997",
      best: false,
      description: "For those who want the fastest path to $10K/month",
      features: [
        "50+ Premium Digital Products with MRR",
        "Complete Business-in-a-Box System",
        "Unlimited 1-on-1 Coaching (90 days)",
        "Done-For-You Ad Campaign Setup",
        "Personal Account Manager",
        "Advanced Automation Setup",
        "Exclusive Masterclasses",
        "Lifetime Product Updates",
        "Priority 24/7 Support"
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-6">
              <p className="text-accent font-bold text-sm">💰 INVESTMENT OPTIONS</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Choose Your <span className="text-gradient-gold">Path to Freedom</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-gold rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every package includes a <span className="font-bold text-success">30-day money-back guarantee</span>. 
              If you do not see results, you get a full refund. Zero risk.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-3xl p-8 shadow-soft border-2 transition-all duration-300 ${
                  pkg.best 
                    ? 'border-accent shadow-gold scale-105 hover:scale-110' 
                    : 'border-border hover:border-accent/50 hover-lift'
                }`}
              >
                {/* Best Value Badge */}
                {pkg.best && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold px-6 py-2 rounded-full shadow-gold">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent-foreground" />
                      <span className="text-accent-foreground font-bold text-sm">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-muted-foreground line-through text-xl">{pkg.original}</span>
                  </div>
                  <div className="text-5xl font-extrabold text-gradient-gold mb-1">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {pkg.notIncluded.length > 0 && pkg.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  asChild 
                  variant={pkg.best ? "gold" : "outline"}
                  size="lg"
                  className={`w-full font-bold ${pkg.best ? 'shadow-glow hover:shadow-gold' : ''}`}
                >
                  <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                    Get Started Now →
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-success/10 backdrop-blur-sm border border-success/30 rounded-xl p-6 text-center">
              <div className="text-success text-3xl mb-2">✓</div>
              <p className="text-foreground font-bold">30-Day Guarantee</p>
              <p className="text-muted-foreground text-sm">Full refund if not satisfied</p>
            </div>
            <div className="bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center">
              <div className="text-accent text-3xl mb-2">🔒</div>
              <p className="text-foreground font-bold">Secure Payment</p>
              <p className="text-muted-foreground text-sm">Your information is protected</p>
            </div>
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-foreground text-3xl mb-2">⚡</div>
              <p className="text-foreground font-bold">Instant Access</p>
              <p className="text-muted-foreground text-sm">Start immediately after payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
