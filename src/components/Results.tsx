import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

const Results = () => {
  const [showAll, setShowAll] = useState(false);

  const highlights = [
    {
      icon: DollarSign,
      metric: "$5M+",
      label: "Total Revenue Generated",
      color: "text-accent"
    },
    {
      icon: Users,
      metric: "1,000+",
      label: "Clients Successfully Promoted",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      metric: "98%",
      label: "Client Success Rate",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      metric: "350%",
      label: "Average ROI Increase",
      color: "text-accent"
    }
  ];

  const caseStudies = [
    {
      client: "Sarah M. - Former Teacher",
      challenge: "Burned out from teaching, making $3K/month",
      result: "Hit $12K in first 90 days selling MRR products",
      metrics: "$47K earned in 6 months"
    },
    {
      client: "Marcus T. - 9-5 Worker",
      challenge: "Tried 5 different side hustles, all failed",
      result: "First $5K month within 60 days of starting",
      metrics: "Quit job after 7 months, now at $18K/month"
    },
    {
      client: "Jessica R. - Stay-at-Home Mom",
      challenge: "Zero business experience, needed to contribute",
      result: "Made $8,500 in month 4 working part-time hours",
      metrics: "Now earning more than husband's salary"
    },
    {
      client: "David K. - Failed Course Creator",
      challenge: "Spent $15K creating courses, made $200 total",
      result: "Switched to MRR, hit $10K/month in 3 months",
      metrics: "Over $80K earned in first year"
    },
    {
      client: "Amanda L. - Corporate Dropout",
      challenge: "Hated corporate life, scared to leave steady paycheck",
      result: "Built to $6K/month before quitting job",
      metrics: "Now at $22K/month and traveling the world"
    },
    {
      client: "Chris P. - College Student",
      challenge: "Broke student working 3 part-time jobs",
      result: "First $3K month while still in school",
      metrics: "Graduated debt-free with $45K saved"
    }
  ];

  const displayedCases = showAll ? caseStudies : caseStudies.slice(0, 3);

  return (
    <section id="results" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven <span className="text-gradient-gold">Track Record</span> of Success
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients. These aren't just numbers — they're transformed businesses and lives.
            </p>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.label} className="bg-card rounded-xl p-6 shadow-soft text-center hover-lift">
                  <Icon className={`w-10 h-10 ${highlight.color} mx-auto mb-3`} />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{highlight.metric}</div>
                  <div className="text-sm text-muted-foreground">{highlight.label}</div>
                </div>
              );
            })}
          </div>

          {/* Case Studies */}
          <div className="space-y-6">
            {displayedCases.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover-lift border border-border"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{study.client}</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold mb-2">Result:</p>
                    <p className="text-foreground">{study.result}</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <p className="text-accent font-bold text-lg">{study.metrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              {showAll ? "Show Less" : "Show More Results"}
            </Button>
          </div>

          {/* Trust Banner */}
          <div className="mt-12 bg-gradient-hero rounded-2xl p-8 text-center shadow-gold">
            <p className="text-primary-foreground text-xl md:text-2xl font-bold mb-4">
              Ready to become our next success story?
            </p>
            <Button asChild variant="gold" size="lg">
              <a href="#contact">
                Start Your Transformation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
