
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Bot, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for marketplace bots
const availableBots = [
  {
    id: "forex-fury",
    name: "Forex Fury",
    description: "Popular automated trading bot with 63% success rate. Specializes in short-term trades and is compatible with MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms.",
    price: 2000,
    type: "Scalping",
    successRate: 63,
    compatibility: ["MT4", "MT5"],
    image: "/bots/forex-fury.jpg"
  },
  {
    id: "1000pip-climber",
    name: "1000pip Climber System",
    description: "Easy-to-use, fully automated forex trading bot designed to provide high-performance signals. The bot's results have been independently verified by MyFXBook.",
    price: 3539,
    type: "Trend Following",
    successRate: 71,
    compatibility: ["MT4"],
    image: "/bots/1000pip.jpg"
  },
  {
    id: "forex-steam",
    name: "Forex Steam 10",
    description: "A well-established trading bot with over a decade of use and a strong user base. It comes with customizable features that allow traders to adjust settings to fit their individual trading styles.",
    price: 5246,
    type: "Scalping",
    successRate: 68,
    compatibility: ["MT4", "MT5"],
    image: "/bots/forex-steam.jpg"
  },
  {
    id: "ai-trading-trends",
    name: "AI Trading Trends",
    description: "AI-powered forex trading bot that identifies and capitalizes on market trends automatically. It is designed to make smart trading decisions based on real-time market analysis.",
    price: 16803,
    type: "AI",
    successRate: 75,
    compatibility: ["MT4", "MT5", "cTrader"],
    image: "/bots/ai-trading.jpg"
  },
  {
    id: "advanced-marvel",
    name: "ADVANCED Marvel Premium A.I",
    description: "A fully automated forex trading bot with an advanced digit analysis system. It uses AI-based algorithms to predict market movements, allowing traders to execute profitable trades without manual analysis.",
    price: 9048,
    type: "AI",
    successRate: 72,
    compatibility: ["MT5"],
    image: "/bots/advanced-marvel.jpg"
  }
];

const BotMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const botTypes = ["AI", "Scalping", "Trend Following"];
  const platforms = ["MT4", "MT5", "cTrader"];

  // Filter bots based on search and filters
  const filteredBots = availableBots.filter((bot) => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        bot.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = bot.price >= priceRange[0] && bot.price <= priceRange[1];
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(bot.type);
    const matchesPlatform = selectedPlatforms.length === 0 || 
                          bot.compatibility.some(platform => selectedPlatforms.includes(platform));
    
    return matchesSearch && matchesPrice && matchesType && matchesPlatform;
  });

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Bot Marketplace</h1>
        <p className="text-white/70 mt-1">Browse our selection of high-performance trading bots</p>
      </div>

      {/* Search and Filters */}
      <div className="glass-effect border border-white/10 rounded-lg p-6 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search bots by name or description..."
            className="pl-10 bg-white/5 border-white/10 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Price Range (KES)</h3>
          <Slider
            defaultValue={[0, 20000]}
            max={20000}
            step={500}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-6"
          />
          <div className="flex justify-between text-sm text-white/70">
            <span>KES {priceRange[0].toLocaleString()}</span>
            <span>KES {priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-medium mb-2">Bot Type</h3>
            <div className="space-y-2">
              {botTypes.map(type => (
                <div key={type} className="flex items-center">
                  <Button
                    type="button"
                    variant={selectedTypes.includes(type) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleType(type)}
                    className={`mr-2 ${
                      selectedTypes.includes(type) 
                        ? "bg-[#F2FF44] text-black hover:bg-[#E2EF34]" 
                        : "bg-white/5 text-white hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {type}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">Compatible Platforms</h3>
            <div className="space-y-2">
              {platforms.map(platform => (
                <div key={platform} className="flex items-center">
                  <Button
                    type="button"
                    variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform(platform)}
                    className={`mr-2 ${
                      selectedPlatforms.includes(platform) 
                        ? "bg-[#F2FF44] text-black hover:bg-[#E2EF34]" 
                        : "bg-white/5 text-white hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {platform}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bot Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredBots.length > 0 ? (
          filteredBots.map((bot) => (
            <Card key={bot.id} className="glass-effect border-white/10 text-white overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 bg-white/5 flex items-center justify-center p-6">
                    <Bot className="h-20 w-20 text-[#F2FF44]" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold text-lg">{bot.name}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">
                        {bot.type}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mb-3 line-clamp-2">{bot.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {bot.compatibility.map(platform => (
                        <span key={platform} className="text-xs px-2 py-1 rounded-full bg-white/10">
                          {platform}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 rounded-full bg-[#F2FF44]/20 text-[#F2FF44]">
                        {bot.successRate}% Success
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-[#F2FF44] font-bold">KES {bot.price.toLocaleString()}</div>
                      <Button asChild size="sm" className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                        <Link to={`/bots/${bot.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-white/50" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No bots found</h3>
            <p className="text-white/70">
              Try adjusting your filters or search term to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotMarketplace;
