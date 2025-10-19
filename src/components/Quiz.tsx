import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface QuizProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Quiz = ({ open, onOpenChange }: QuizProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    situation: "",
    revenue: "",
    challenge: "",
    timeline: "",
    email: ""
  });

  const questions = [
    {
      id: "situation",
      question: "What best describes your current situation?",
      options: [
        { value: "9-5", label: "Working 9-5, building side hustle" },
        { value: "struggling", label: "Struggling business owner" },
        { value: "affiliate", label: "Affiliate marketer" },
        { value: "creator", label: "Course creator/coach" }
      ]
    },
    {
      id: "revenue",
      question: "What's your current monthly revenue?",
      options: [
        { value: "0-500", label: "$0 - $500" },
        { value: "500-2k", label: "$500 - $2,000" },
        { value: "2k-5k", label: "$2,000 - $5,000" },
        { value: "5k+", label: "$5,000+" }
      ]
    },
    {
      id: "challenge",
      question: "What's your biggest challenge right now?",
      options: [
        { value: "traffic", label: "Getting consistent traffic" },
        { value: "conversion", label: "Converting leads to sales" },
        { value: "time", label: "Not enough time for marketing" },
        { value: "scaling", label: "Scaling what's already working" }
      ]
    },
    {
      id: "timeline",
      question: "When do you want to achieve your revenue goals?",
      options: [
        { value: "30", label: "Within 30 days" },
        { value: "90", label: "Within 90 days" },
        { value: "6months", label: "Within 6 months" },
        { value: "year", label: "Within a year" }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Move to email step
    }
  };

  const handleSubmit = () => {
    const recommendation = getPersonalizedAdvice();
    
    // Create mailto with quiz results
    const subject = encodeURIComponent("Quiz Results & Personalized Advice");
    const body = encodeURIComponent(
      `Quiz Results:\n\n` +
      `Situation: ${answers.situation}\n` +
      `Current Revenue: ${answers.revenue}\n` +
      `Biggest Challenge: ${answers.challenge}\n` +
      `Timeline: ${answers.timeline}\n` +
      `Email: ${answers.email}\n\n` +
      `Personalized Recommendation:\n${recommendation}`
    );
    
    window.location.href = `mailto:brozeendigitalbiz@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Quiz Complete! 🎉",
      description: "Check your email for personalized advice from Brozeen.",
    });
    
    // Reset and close
    setAnswers({
      situation: "",
      revenue: "",
      challenge: "",
      timeline: "",
      email: ""
    });
    setStep(0);
    onOpenChange(false);
  };

  const getPersonalizedAdvice = () => {
    // Generate personalized advice based on answers
    let advice = "Based on your responses:\n\n";
    
    if (answers.revenue === "0-500") {
      advice += "Focus on: Foundation building with proven lead generation systems.\n";
    } else if (answers.revenue === "500-2k") {
      advice += "Focus on: Scaling your existing efforts with automation.\n";
    } else {
      advice += "Focus on: Optimization and advanced scaling strategies.\n";
    }
    
    if (answers.challenge === "traffic") {
      advice += "Priority: Implementing targeted promotion campaigns.\n";
    } else if (answers.challenge === "conversion") {
      advice += "Priority: Optimizing your sales funnel and messaging.\n";
    } else if (answers.challenge === "time") {
      advice += "Priority: Setting up automation systems.\n";
    } else {
      advice += "Priority: Advanced scaling and optimization.\n";
    }
    
    advice += "\nRecommended Service: " + getRecommendedService();
    
    return advice;
  };

  const getRecommendedService = () => {
    if (answers.challenge === "time") return "Done-for-You Promotion Setup";
    if (answers.challenge === "traffic") return "Content & Social Strategy";
    if (answers.challenge === "conversion") return "Lead Generation Automation";
    return "Scaling & Optimization";
  };

  const currentQuestion = questions[step];
  const isLastQuestion = step === questions.length - 1;
  const isEmailStep = step === questions.length;
  const canProceed = isEmailStep ? answers.email : answers[currentQuestion?.id as keyof typeof answers];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {isEmailStep ? "Almost Done! 🎯" : "Discover Your Perfect Strategy"}
          </DialogTitle>
          <DialogDescription>
            {isEmailStep 
              ? "Get your personalized action plan delivered instantly"
              : `Question ${step + 1} of ${questions.length}`
            }
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {!isEmailStep ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                {currentQuestion.question}
              </h3>
              
              <RadioGroup
                value={answers[currentQuestion.id as keyof typeof answers]}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
              >
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer font-medium"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="flex justify-between items-center pt-4">
                <div className="flex gap-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-8 rounded-full ${
                        index <= step ? "bg-accent" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  variant="gold"
                  className="gap-2"
                >
                  {isLastQuestion ? "Get My Advice" : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <CheckCircle2 className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Your Personalized Strategy is Ready!
                </h3>
                <p className="text-muted-foreground">
                  Based on your answers, I've prepared specific recommendations tailored to your situation.
                </p>
              </div>

              <div>
                <Label htmlFor="quiz-email">Email Address</Label>
                <Input
                  id="quiz-email"
                  type="email"
                  placeholder="your@email.com"
                  value={answers.email}
                  onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-2"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!answers.email}
                variant="gold"
                size="lg"
                className="w-full"
              >
                Get My Personalized Action Plan
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll also send you exclusive tips to accelerate your growth
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;
