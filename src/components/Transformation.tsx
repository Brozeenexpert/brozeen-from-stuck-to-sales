import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Transformation = () => {
  const before = [
    "Working 9-5 with no time freedom",
    "Living paycheck to paycheck",
    "Posting content that gets zero sales",
    "Confused about what actually works",
    "Spending money on courses with no results",
    "Feeling stuck and overwhelmed"
  ];

  const after = [
    "Running your business on YOUR schedule",
    "Making $10K+ per month consistently",
    "Automated sales while you sleep",
    "Clear roadmap and proven system",
    "Real mentorship and support",
    "Confident and in control of your future"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-destructive/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-success/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Your Life <span className="text-gradient-gold">Before vs After</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-gold rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is not just about making money. This is about transforming your entire lifestyle.
            </p>
          </div>

          {/* Before/After Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* BEFORE */}
            <div className="bg-destructive/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-3xl font-bold text-destructive">BEFORE</h3>
              </div>
              
              <ul className="space-y-4">
                {before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="bg-success/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-success/30 relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-success/5 rounded-3xl blur-xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-3xl font-bold text-success">AFTER</h3>
                </div>
                
                <ul className="space-y-4">
                  {after.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-lg border-2 border-accent/30 rounded-3xl p-12 text-center shadow-gold">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Which Life Do You Want?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The choice is yours. You are just <span className="font-bold text-accent">one decision away</span> from completely changing your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="gold" size="lg" className="text-lg font-bold px-12 py-7 shadow-glow hover:shadow-gold hover:scale-110 transition-all">
                <a href="#pricing">
                  🚀 Start My Transformation Now
                </a>
              </Button>
              <p className="text-sm text-success font-semibold flex items-center gap-2">
                <Check className="w-5 h-5" />
                30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
