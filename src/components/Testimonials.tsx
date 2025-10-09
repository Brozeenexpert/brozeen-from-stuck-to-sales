import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import person1 from "@/assets/testimonials/person1.jpg";
import person2 from "@/assets/testimonials/person2.jpg";
import person3 from "@/assets/testimonials/person3.jpg";
import person4 from "@/assets/testimonials/person4.jpg";
import person5 from "@/assets/testimonials/person5.jpg";
import person6 from "@/assets/testimonials/person6.jpg";
import person7 from "@/assets/testimonials/person7.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "E-commerce Entrepreneur",
      rating: 5,
      quote: "Brozeen transformed my struggling store into a profitable business. Within 3 months, I went from $0 to $15K monthly. His strategies are pure gold!",
      image: person1
    },
    {
      name: "James Rodriguez",
      role: "Affiliate Marketer",
      rating: 5,
      quote: "I was stuck at $500/month for months. Brozeen's automation systems helped me scale to $5K+ consistently. Best investment I've ever made.",
      image: person2
    },
    {
      name: "Emily Chen",
      role: "Digital Course Creator",
      rating: 5,
      quote: "The personalized strategy and hands-free automation gave me my time back while tripling my revenue. Brozeen genuinely cares about your success.",
      image: person3
    },
    {
      name: "Marcus Thompson",
      role: "Service Provider",
      rating: 5,
      quote: "From inconsistent leads to 50+ qualified prospects weekly. The ROI speaks for itself. Highly recommend to anyone serious about growth.",
      image: person4
    },
    {
      name: "Lisa Anderson",
      role: "Side Hustler",
      rating: 5,
      quote: "Working full-time, I needed automation. Brozeen delivered exactly that. Now I'm making $3K/month passively and planning to quit my job!",
      image: person5
    },
    {
      name: "David Park",
      role: "Local Business Owner",
      rating: 5,
      quote: "Went from relying on word-of-mouth to having a consistent online presence. Revenue increased by 300%. Brozeen knows his stuff!",
      image: person6
    },
    {
      name: "Rachel Green",
      role: "Content Creator",
      rating: 5,
      quote: "The content strategy and social media management took my brand to the next level. Engagement up 500% and monetization finally working!",
      image: person7
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success Stories That <span className="text-gradient-gold">Speak Volumes</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it — hear from clients who transformed their businesses
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift border border-border"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Placeholder */}
          <div className="bg-secondary/30 rounded-2xl p-8 text-center border border-border">
            <Play className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Video Success Stories</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Watch real clients share their transformation journeys and results in their own words
            </p>
            <Button asChild variant="gold">
              <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                Request Video Testimonials
              </a>
            </Button>
          </div>

          {/* Trust Banner */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-accent font-bold text-lg mb-2">📈 New Results Posting Daily</p>
            <p className="text-foreground">
              Join our growing community of successful entrepreneurs achieving their goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
