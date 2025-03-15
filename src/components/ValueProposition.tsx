
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, Code, Zap } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "24/7 Automated Trading",
      description: "Let our bots work around the clock, even when you're sleeping or busy"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Verified Performance",
      description: "All our bots have verified historical performance data for transparency"
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "No Coding Required",
      description: "Simple setup process with no technical knowledge needed"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Immediate Access",
      description: "Get your bot instantly after purchase and start trading right away"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Our Trading Bots
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-white/60">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
