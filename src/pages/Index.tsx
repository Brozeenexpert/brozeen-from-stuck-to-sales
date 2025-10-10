import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import PathSelector from "@/components/PathSelector";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <PathSelector />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating Quiz Button */}
      <Button
        onClick={() => setQuizOpen(true)}
        variant="gold"
        size="lg"
        className="fixed bottom-6 right-6 shadow-gold z-40 gap-2 animate-pulse"
      >
        <HelpCircle className="w-5 h-5" />
        Take Free Quiz
      </Button>

      <Quiz open={quizOpen} onOpenChange={setQuizOpen} />
    </div>
  );
};

export default Index;
