import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import analyticsLaptop from "@/assets/hero-backgrounds/analytics-laptop.jpg";
import workspaceDesk from "@/assets/hero-backgrounds/workspace-desk.jpg";
import teamMeeting from "@/assets/hero-backgrounds/team-meeting.jpg";
import modernOffice from "@/assets/hero-backgrounds/modern-office.jpg";
import techBackground from "@/assets/hero-backgrounds/tech-background.jpg";

const Hero = () => {
  const backgroundImages = [analyticsLaptop, workspaceDesk, teamMeeting, modernOffice, techBackground];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(imageRotationInterval);
  }, [backgroundImages.length]);

  const stats = [
    { icon: Users, label: "Clients Promoted", value: "1,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: DollarSign, label: "Revenue Generated", value: "$5M+" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Multi-layered Background with Rotating Images */}
      <div className="absolute inset-0 z-0">
        {/* Rotating Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        
        {/* Deep green overlay for readability */}
        <div className="absolute inset-0 bg-primary/75"></div>
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-accent/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-primary-glow/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-sm border border-success/30 rounded-full px-5 py-2 mb-2">
              <span className="text-success text-2xl">✓</span>
              <span className="text-success font-semibold text-sm">Trusted by 1,000+ Entrepreneurs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight">
              Stop Struggling.<br />
              Start <span className="text-gradient-gold drop-shadow-glow">Earning $5K-$15K</span> Every Month
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-foreground/95 font-medium leading-relaxed">
              I am <span className="font-bold text-accent drop-shadow-sm">Brozeen</span>, and I have helped over 1,000 people like you turn their side hustle into a <span className="font-bold underline decoration-accent">6 figure business</span>. 
              No BS. No fluff. Just proven systems that work.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-gradient-accent flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-primary-foreground">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm font-semibold">4.9/5 from 500+ reviews</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-accent/20 shadow-2xl">
              <p className="text-sm font-semibold text-accent mb-4 tracking-wide">⚡ LIMITED SPOTS AVAILABLE - OFFER EXPIRES IN:</p>
              <div className="grid grid-cols-4 gap-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground rounded-xl p-3 md:p-4 text-2xl md:text-3xl font-bold shadow-gold transform hover:scale-105 transition-transform">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <p className="text-xs mt-2 text-primary-foreground/80 uppercase font-medium">{unit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Button asChild variant="gold" size="lg" className="text-xl font-bold px-12 py-8 w-full sm:w-auto shadow-gold hover:shadow-glow hover:scale-105 transition-all duration-300 animate-pulse">
                <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
                  💬 Yes! I Want Results Now →
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg font-semibold px-10 py-8 w-full sm:w-auto bg-card/10 backdrop-blur-md border-3 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground transition-all duration-300">
                <a href="#path-selector">
                  📊 Show Me How It Works
                </a>
              </Button>
            </div>

            {/* Urgency Message */}
            <div className="bg-destructive/10 backdrop-blur-sm border-2 border-destructive/40 rounded-xl px-6 py-4 inline-block">
              <p className="text-destructive font-bold text-sm flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                Only 3 spots left this month! Do not miss out on your transformation.
              </p>
            </div>
          </div>

          {/* Right Column - Premium Mockup */}
          <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Floating mockup with 3D effect */}
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-3xl opacity-30 transform scale-95"></div>
              
              {/* Main mockup image */}
              <img
                src={heroMockup}
                alt="Premium marketing dashboard showing analytics and growth metrics"
                className="relative z-10 rounded-2xl shadow-2xl border-4 border-accent/20"
              />
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-glow rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Stats Section - Full Width Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-6xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-card/10 backdrop-blur-md rounded-xl p-6 border border-accent/10 shadow-soft hover-lift group">
                <Icon className="w-12 h-12 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
