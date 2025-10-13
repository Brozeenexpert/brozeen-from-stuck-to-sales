import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const PathSelector = () => {
  const paths = [
    {
      title: "I'm Just Starting Out",
      description: "Perfect! Let's get you set up properly from day one.",
      icon: "🚀",
      whatsappMessage: "Hi! I'm just starting with digital marketing and need guidance on getting started properly.",
      emailSubject: "Getting Started with Digital Marketing",
      emailBody: "Hi,\n\nI'm just starting my digital marketing journey and would love to discuss how you can help me get set up properly from day one.\n\nLooking forward to hearing from you!"
    },
    {
      title: "I Have a Business But No Sales",
      description: "Time to optimize and get those conversions flowing.",
      icon: "📈",
      whatsappMessage: "Hi! I have a business set up but I'm struggling to get sales. I need help optimizing my marketing strategy.",
      emailSubject: "Help Needed: Optimizing My Business for Sales",
      emailBody: "Hi,\n\nI have my business set up but I'm not getting the sales I expected. I'd like to discuss how you can help me optimize my marketing and get conversions flowing.\n\nLooking forward to your guidance!"
    },
    {
      title: "I Want to Scale & Automate",
      description: "Let's build systems that work while you sleep.",
      icon: "⚡",
      whatsappMessage: "Hi! I want to scale my business and automate my marketing systems. Can we discuss advanced strategies?",
      emailSubject: "Ready to Scale and Automate My Business",
      emailBody: "Hi,\n\nMy business is doing well and I'm ready to take it to the next level. I want to scale and automate my marketing systems. Let's discuss how you can help.\n\nLooking forward to working together!"
    }
  ];

  const handleWhatsApp = (message: string) => {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmail = (subject: string, body: string) => {
    const email = "your-email@example.com"; // Replace with actual email
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="path-selector" className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card/60 backdrop-blur-lg rounded-3xl py-16 px-6 md:px-12 border-2 border-primary/20 shadow-primary">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-6">
              <p className="text-accent font-bold text-sm">🎯 PERSONALIZED GUIDANCE</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Where Are You Right Now?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Choose your current situation and get a <span className="font-bold text-accent">custom roadmap</span> to your $5K-$15K/month goal.
            </p>
          </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm border-3 border-primary/30 rounded-3xl p-8 hover:border-accent hover:shadow-glow hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Popular badge for middle option */}
              {index === 1 && (
                <div className="absolute -top-4 -right-4 bg-gradient-cta text-white font-bold text-xs px-6 py-2 rounded-full shadow-gold rotate-12">
                  🔥 MOST POPULAR
                </div>
              )}
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {path.icon}
                </div>
                
                <h3 className="text-2xl font-extrabold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {path.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
                  {path.description}
                </p>

                <div className="space-y-4">
                  <Button
                    onClick={() => handleWhatsApp(path.whatsappMessage)}
                    variant="gold"
                    className="w-full gap-2 shadow-gold hover:shadow-glow text-base font-bold py-6 group-hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    💬 WhatsApp Now
                  </Button>
                  
                  <Button
                    onClick={() => handleEmail(path.emailSubject, path.emailBody)}
                    variant="outline"
                    className="w-full gap-2 border-2 border-primary/40 hover:bg-accent hover:text-accent-foreground text-base font-semibold py-6"
                  >
                    <Mail className="w-5 h-5" />
                    📧 Send Email
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-success/10 border-2 border-success/30 rounded-2xl px-8 py-6 inline-block">
            <p className="text-success font-bold text-lg flex items-center gap-3 justify-center">
              <span className="text-2xl">✅</span>
              Not sure which path? Choose any option — I'll guide you to the exact solution you need!
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PathSelector;
