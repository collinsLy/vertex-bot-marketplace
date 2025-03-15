
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FeaturedBots = () => {
  const bots = [
    {
      name: "Forex Fury",
      image: "https://images.unsplash.com/photo-1642543348575-3f968705b6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Popular automated trading bot with a 63% success rate. Specializes in short-term trades and is compatible with MT4 and MT5.",
      price: "KES 2,000"
    },
    {
      name: "1000pip Climber System",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Easy-to-use, fully automated forex trading bot with high-performance signals. Independently verified by MyFXBook.",
      price: "KES 3,539"
    },
    {
      name: "Forex Steam 10",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Well-established trading bot with over a decade of use. Comes with customizable features to fit individual trading styles.",
      price: "KES 5,246"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Trading Bots
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              Our top-selling bots with proven track records and verified performance
            </p>
          </div>
          <Button className="hidden md:flex items-center gap-2" variant="outline">
            View All Bots
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bots.map((bot, index) => (
            <Card key={index} className="overflow-hidden hover-lift glass-effect">
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
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{bot.price}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Button className="flex items-center gap-2">
            View All Bots
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBots;
