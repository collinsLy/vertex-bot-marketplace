
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BotRelated = () => {
  const relatedBots = [
    {
      id: "1000pip-climber",
      name: "1000pip Climber System",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      price: "KES 3,539"
    },
    {
      id: "forex-steam",
      name: "Forex Steam 10",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      price: "KES 5,246"
    },
    {
      id: "advanced-marvel",
      name: "ADVANCED Marvel Premium A.I",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      price: "KES 9,048"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Related Bots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedBots.map((bot) => (
          <Card key={bot.id} className="overflow-hidden hover-lift glass-effect">
            <div className="h-40 overflow-hidden">
              <img 
                src={bot.image} 
                alt={bot.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">{bot.name}</h3>
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">{bot.price}</span>
                <Button variant="outline" size="sm" asChild>
                  <a href={`/bots/${bot.id}`}>View Details</a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BotRelated;
