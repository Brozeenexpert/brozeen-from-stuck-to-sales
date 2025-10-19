import { CheckCircle2, FileText, Rocket, Users, Zap, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Rocket, title: "Proven Funnel Templates", desc: "Plug-and-play pages built to convert for digital products & MRR." },
  { icon: FileText, title: "Copy & Scripts", desc: "Sales copy, DMs, emails, and ad scripts ready to customize." },
  { icon: Repeat2, title: "Automation Workflows", desc: "Done-for-you lead capture, nurturing, and follow-up sequences." },
  { icon: Users, title: "1:1 Mentorship", desc: "Personal support so you never get stuck — direct guidance." },
  { icon: Zap, title: "Traffic Playbooks", desc: "Organic + paid strategies that actually work for 9–5 schedules." },
  { icon: CheckCircle2, title: "Weekly Accountability", desc: "Stay on track with simple, repeatable actions." },
];

const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Launch and Scale
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear, step-by-step assets so you can start fast and grow confidently.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-card rounded-xl p-6 border border-border shadow-soft hover-lift">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="gold" size="lg">
              <a href="#contact">Get My Plan & Assets →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
