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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 bg-card/30 backdrop-blur-sm rounded-3xl py-12 border border-primary/10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Pick Your Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where are you right now? Choose your situation below and get personalized guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-gold hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {path.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {path.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {path.description}
              </p>

              <div className="space-y-3">
                <Button
                  onClick={() => handleWhatsApp(path.whatsappMessage)}
                  variant="gold"
                  className="w-full gap-2 shadow-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Me
                </Button>
                
                <Button
                  onClick={() => handleEmail(path.emailSubject, path.emailBody)}
                  variant="outline"
                  className="w-full gap-2 border-primary/30 hover:bg-primary/10"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Not sure which path? Start with any option and we'll guide you to the right solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PathSelector;
