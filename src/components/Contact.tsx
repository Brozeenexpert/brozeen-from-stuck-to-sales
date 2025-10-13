import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MessageSquare, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    challenge: "",
    situation: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    challenge: "",
    situation: ""
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      challenge: "",
      situation: ""
    };
    
    let isValid = true;
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.challenge.trim() || formData.challenge.length < 10) {
      newErrors.challenge = "Please describe your challenge (min 10 characters)";
      isValid = false;
    }
    
    if (!formData.situation) {
      newErrors.situation = "Please select your current situation";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Compose Gmail URL with form data
    const subject = encodeURIComponent(`Strategy Session Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Current Situation: ${formData.situation}\n` +
      `Challenge:\n${formData.challenge}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('brozeendigitalbiz@gmail.com')}&su=${subject}&body=${body}`;

    // Try opening Gmail compose in a new tab
    const newWin = window.open(gmailUrl, '_blank');
    if (!newWin) {
      // Fallback to mailto if popups are blocked
      window.location.href = `mailto:brozeendigitalbiz@gmail.com?subject=${subject}&body=${body}`;
    }
    
    toast({
      title: "Opening Gmail",
      description: "A new Gmail compose window has been opened with your details.",
    });
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        challenge: "",
        situation: ""
      });
      setErrors({
        name: "",
        email: "",
        challenge: "",
        situation: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="text-gradient-gold">Overcome Your Challenges?</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a Free 30-Minute Strategy Call and discover how to unlock your business potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get Started Today</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    className={`mt-1 ${errors.name ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1234567890"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="situation">Current Situation *</Label>
                  <Select
                    required
                    value={formData.situation}
                    onValueChange={(value) => handleInputChange("situation", value)}
                  >
                    <SelectTrigger className={`mt-1 ${errors.situation ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select your situation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9-5-job">Working 9-5, building side hustle</SelectItem>
                      <SelectItem value="struggling-business">Struggling business owner</SelectItem>
                      <SelectItem value="affiliate-marketer">Affiliate marketer</SelectItem>
                      <SelectItem value="course-creator">Digital course creator</SelectItem>
                      <SelectItem value="service-provider">Service provider</SelectItem>
                      <SelectItem value="ecommerce">E-commerce store owner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.situation && <p className="text-xs text-destructive mt-1">{errors.situation}</p>}
                </div>

                <div>
                  <Label htmlFor="challenge">Your Biggest Challenge *</Label>
                  <Textarea
                    id="challenge"
                    required
                    value={formData.challenge}
                    onChange={(e) => handleInputChange("challenge", e.target.value)}
                    placeholder="Tell me about your current challenges and what you're trying to achieve..."
                    className={`mt-1 min-h-[120px] ${errors.challenge ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.challenge}
                    aria-describedby={errors.challenge ? "challenge-error" : undefined}
                  />
                  {errors.challenge && <p id="challenge-error" className="text-xs text-destructive mt-1">{errors.challenge}</p>}
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit & Book Strategy Call"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting, you agree to receive emails from Brozeen
              </p>
            </div>

            {/* Right Side - Info & Calendly */}
            <div className="space-y-6">
              {/* Urgency Banner */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <Clock className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">⏰ Spots Fill Fast – Act Now!</h3>
                <p className="text-foreground mb-4">
                  I only take on a limited number of clients each month to ensure personalized attention and results. 
                  Don't miss your opportunity to transform your business.
                </p>
                <p className="text-accent font-semibold">
                  Only 3 spots remaining this month!
                </p>
              </div>

              {/* Calendly Placeholder */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border text-center">
                <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Schedule Your Call</h3>
                <p className="text-muted-foreground mb-6">
                  Pick a time that works best for your 30-minute strategy session
                </p>
                <Button asChild variant="gold" size="lg" className="w-full">
                  <a href="#contact">
                    View Available Times
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Calendly integration coming soon
                </p>
              </div>

              {/* Direct Contact Options */}
              <div className="space-y-3">
                <Button asChild variant="outline" size="lg" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Message on WhatsApp
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="mailto:brozeendigitalbiz@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Brozeen
                  </a>
                </Button>
              </div>

              {/* Cost of Waiting */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-destructive mb-2">⚠️ The Cost of Waiting</h3>
                <p className="text-foreground text-sm">
                  Every day you delay is another day of lost revenue, missed opportunities, and staying stuck. 
                  Your competitors are not waiting. Why should you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
