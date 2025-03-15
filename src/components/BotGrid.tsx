
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const BotGrid = () => {
  const bots = [
    {
      id: "forex-fury",
      name: "Forex Fury",
      image: "https://images.unsplash.com/photo-1642543348575-3f968705b6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Popular automated trading bot with a 63% success rate. Specializes in short-term trades.",
      features: ["MT4 & MT5 Compatible", "Customizable Risk Settings", "Night Trading Mode"],
      price: "KES 2,000"
    },
    {
      id: "1000pip-climber",
      name: "1000pip Climber System",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Easy-to-use, fully automated forex trading bot with high-performance signals.",
      features: ["MyFXBook Verified", "Beginner Friendly", "Email Alerts"],
      price: "KES 3,539"
    },
    {
      id: "forex-steam",
      name: "Forex Steam 10",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Well-established trading bot with over a decade of use and a strong user base.",
      features: ["4 License Package", "Free Lifetime Updates", "24/7 Support"],
      price: "KES 5,246"
    },
    {
      id: "ai-trading-trends",
      name: "AI Trading Trends",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "AI-powered forex trading bot that identifies and capitalizes on market trends automatically.",
      features: ["AI Algorithm", "Pattern Recognition", "Automated Entries"],
      price: "KES 16,803"
    },
    {
      id: "advanced-marvel",
      name: "ADVANCED Marvel Premium A.I",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "A fully automated forex trading bot with an advanced digit analysis system.",
      features: ["Advanced AI", "Digit Analysis", "Market Prediction"],
      price: "KES 9,048"
    },
    {
      id: "vip-scalper",
      name: "VIP Scalper Pro",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Specialized scalping bot that targets small but frequent profit opportunities.",
      features: ["Fast Execution", "Low Spread Requirements", "Multiple Currency Pairs"],
      price: "KES 7,500"
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bots.map((bot) => (
          <Card key={bot.id} className="overflow-hidden hover-lift glass-effect">
            <div className="h-48 overflow-hidden">
              <img 
                src={bot.image} 
                alt={bot.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{bot.name}</h3>
              <p className="text-white/60 mb-4">{bot.description}</p>
              <ul className="mb-4 space-y-1">
                {bot.features.map((feature, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">{bot.price}</span>
                <Button variant="outline" size="sm" asChild>
                  <a href={`/bots/${bot.id}`}>View Details</a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Pagination className="mt-12">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BotGrid;
