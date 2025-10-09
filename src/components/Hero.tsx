import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, label: "Clients Promoted", value: "1,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: DollarSign, label: "Revenue Generated", value: "$5M+" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital marketing success"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Turn Your Digital Skills into{" "}
            <span className="text-gradient-gold">$5K+ Monthly Revenue</span>{" "}
            with Proven Promotion Strategies
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            I'm <span className="font-semibold text-accent">Brozeen</span>, your expert guide to digital success. 
            Whether you're juggling a 9-5, building a side hustle, or scaling as an affiliate marketer — 
            I help you break through the noise and achieve consistent, reliable growth.
          </p>

          {/* Countdown Timer */}
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-gold max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-4">LIMITED SPOTS AVAILABLE - OFFER EXPIRES IN:</p>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 md:p-4 text-2xl md:text-3xl font-bold">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground uppercase">{unit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="gold" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
              <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                Secure My Spot
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto bg-card/50 backdrop-blur-sm border-accent text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              <a href="#contact">
                Get Free Strategy Session
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-soft hover-lift">
                  <Icon className="w-10 h-10 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
