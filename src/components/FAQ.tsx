import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients start seeing measurable improvements within the first 30 days. However, significant transformations typically occur within 60-90 days as systems are optimized and scaled. The timeline varies based on your current situation, industry, and commitment to implementing strategies."
    },
    {
      question: "Do I need technical skills or marketing experience?",
      answer: "Absolutely not! That's the beauty of working with me. I handle all the technical setup, automation, and complex marketing tasks. You just need to be committed to your business growth and willing to follow proven strategies. I'll guide you every step of the way."
    },
    {
      question: "What if I'm still working a 9-5 job?",
      answer: "Perfect! Many of my most successful clients started while working full-time. My automation systems are specifically designed to work for you 24/7, requiring minimal daily involvement. You can build your business in your spare time until you're ready to go full-time."
    },
    {
      question: "How is this different from other marketing services?",
      answer: "Unlike generic marketing agencies, I provide personalized, hands on guidance tailored to YOUR specific situation. You are not just a number. You get direct access to me, proven strategies that actually work, and complete transparency. Plus, my track record speaks for itself with over 1,000 successful clients."
    },
    {
      question: "What's included in the Done-for-You service?",
      answer: "Everything you need to succeed: complete campaign setup, audience research, content strategy, automation systems, performance tracking, and ongoing optimization. I handle the heavy lifting while you focus on running your business. Think of me as your dedicated marketing department."
    },
    {
      question: "How much should I budget for advertising?",
      answer: "It depends on your goals and current revenue. During our strategy session, we will discuss the optimal budget for your situation. Many clients start with as little as $500 to $1,000/month and scale from there as they see results. The key is ROI, not just spending."
    },
    {
      question: "Can you help with my specific industry/niche?",
      answer: "Yes! I have successfully worked with e commerce stores, service providers, course creators, affiliate marketers, coaches, consultants, and more. The fundamental principles of digital marketing apply across industries. I just customize the approach for your specific market and audience."
    },
    {
      question: "What happens after we start working together?",
      answer: "First, we will have a comprehensive strategy session to understand your goals and challenges. Then I will create your customized action plan and begin implementation. You will receive regular updates, performance reports, and have direct access to me for questions and adjustments. We iterate and optimize continuously for maximum results."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <div className="mt-12 bg-gradient-hero rounded-2xl p-8 text-center shadow-gold">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Let us hop on a free 30 minute strategy call and discuss your specific situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349055898060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-gold transition-all"
              >
                Message on WhatsApp
              </a>
              <a
                href="mailto:brozeendigitalbiz@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-card text-primary font-semibold rounded-lg hover:shadow-medium transition-all border border-primary-foreground/20"
              >
                Email Brozeen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
