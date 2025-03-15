
import { Card } from "@/components/ui/card";
import { MessageSquare, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've tried many trading bots before, but Forex Fury has consistently delivered the best results for me.",
      author: "David Kimani",
      role: "Professional Trader",
      stats: "63% win rate over 6 months"
    },
    {
      quote: "The 1000pip Climber System has completely transformed my trading approach. It's intuitive and profitable.",
      author: "Janet Mwangi",
      role: "Part-time Trader",
      stats: "Average 12% monthly return"
    },
    {
      quote: "Forex Steam 10 is extremely reliable. The customer support team is also very responsive when I need help.",
      author: "Robert Ochieng",
      role: "Financial Advisor",
      stats: "Over 500 successful trades"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Our Traders Say
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of successful traders who are using our bots every day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F2FF44] fill-[#F2FF44]" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm mb-3">{testimonial.role}</div>
              <div className="text-accent text-sm font-medium">{testimonial.stats}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
