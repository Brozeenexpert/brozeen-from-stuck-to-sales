import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Transformation from "@/components/Transformation";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import PathSelector from "@/components/PathSelector";
import TrustBar from "@/components/TrustBar";
import WhatYouGet from "@/components/WhatYouGet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <TrustBar />
      <Hero />
      <WhyChoose />
      <WhatYouGet />
      <Transformation />
      <Services />
      <Results />
      <Pricing />
      <Testimonials />
      <PathSelector />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <Button
        asChild
        variant="gold"
        size="lg"
        className="fixed bottom-6 right-6 shadow-glow hover:shadow-gold z-50 gap-2 hover:scale-110 transition-all duration-300"
      >
        <a href="https://wa.me/2349055898060" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5" />
          Chat Now
        </a>
      </Button>

      <Quiz open={quizOpen} onOpenChange={setQuizOpen} />
    </div>
  );
};

export default Index;
