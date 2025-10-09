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
      color: "text-primary"
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
      color: "text-primary"
    }
  ];

  const caseStudies = [
    {
      client: "E-commerce Store Owner",
      challenge: "Struggling with low traffic and zero sales",
      result: "Achieved $15K in monthly revenue within 90 days",
      metrics: "500% increase in qualified traffic"
    },
    {
      client: "Affiliate Marketer",
      challenge: "Stuck at $500/month for 6 months",
      result: "Scaled to $5,000+ monthly commissions",
      metrics: "1000% revenue growth in 4 months"
    },
    {
      client: "Service Provider",
      challenge: "No consistent lead generation system",
      result: "Built automated funnel generating 50+ leads/week",
      metrics: "95% reduction in time spent on marketing"
    },
    {
      client: "Digital Course Creator",
      challenge: "Great product, no visibility",
      result: "Launched to $23K in first month",
      metrics: "Built email list of 5,000+ subscribers"
    },
    {
      client: "Local Business Owner",
      challenge: "Relying solely on word-of-mouth",
      result: "Established strong online presence with consistent bookings",
      metrics: "300% increase in monthly revenue"
    },
    {
      client: "Side Hustler (9-5 Job)",
      challenge: "No time for marketing activities",
      result: "Automated system generating $3K/month passively",
      metrics: "Quit day job within 8 months"
    }
  ];

  const displayedCases = showAll ? caseStudies : caseStudies.slice(0, 3);

  return (
    <section id="results" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{highlight.metric}</div>
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
                    <h3 className="text-xl font-bold text-primary mb-2">{study.client}</h3>
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
