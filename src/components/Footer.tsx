import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link for newsletter signup
    const subject = encodeURIComponent("Newsletter Subscription - Free Promotion Tips");
    const body = encodeURIComponent(`Please add this email to your newsletter: ${email}`);
    window.location.href = `mailto:brozeendigitalbiz@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive free promotion tips directly to your inbox.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Brozeen</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming digital marketing challenges into consistent revenue streams through proven strategies and personalized guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#results" className="text-primary-foreground/80 hover:text-accent transition-colors">Results</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#faq" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Free Promotion Tips</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get weekly strategies delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="gold" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:brozeendigitalbiz@gmail.com" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-primary-foreground/60 text-sm">
            © 2025 Brozeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
