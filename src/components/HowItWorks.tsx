
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Bot",
      description: "Browse our marketplace and select a trading bot that matches your trading goals"
    },
    {
      number: "02",
      title: "Complete Payment",
      description: "Secure checkout with multiple payment options including M-Pesa and credit cards"
    },
    {
      number: "03",
      title: "Receive Your Bot",
      description: "Instant delivery to your email with detailed setup instructions"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Getting started with our trading bots is simple and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift glass-effect text-center"
            >
              <div className="inline-block text-4xl font-bold text-accent mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
