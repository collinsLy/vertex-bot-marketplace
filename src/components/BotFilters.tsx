
import { Input } from "@/components/ui/input";
import { Search, Sliders } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const BotFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
          <Input 
            placeholder="Search trading bots..." 
            className="pl-10 bg-white/5 border-white/10 text-white"
          />
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Sliders className="w-4 h-4" />
          Filters
        </Button>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 glass-effect rounded-lg mb-6">
          <div>
            <label className="block text-white/80 mb-2">Price Range</label>
            <select className="w-full p-2 rounded bg-white/5 border border-white/10 text-white">
              <option>Any Price</option>
              <option>Under KES 5,000</option>
              <option>KES 5,000 - 10,000</option>
              <option>Over KES 10,000</option>
            </select>
          </div>
          
          <div>
            <label className="block text-white/80 mb-2">Bot Type</label>
            <select className="w-full p-2 rounded bg-white/5 border border-white/10 text-white">
              <option>All Types</option>
              <option>Scalping</option>
              <option>Trend Following</option>
              <option>Mean Reversion</option>
            </select>
          </div>
          
          <div>
            <label className="block text-white/80 mb-2">Success Rate</label>
            <select className="w-full p-2 rounded bg-white/5 border border-white/10 text-white">
              <option>Any Success Rate</option>
              <option>Over 50%</option>
              <option>Over 60%</option>
              <option>Over 70%</option>
            </select>
          </div>
          
          <div>
            <label className="block text-white/80 mb-2">Platform</label>
            <select className="w-full p-2 rounded bg-white/5 border border-white/10 text-white">
              <option>All Platforms</option>
              <option>MetaTrader 4</option>
              <option>MetaTrader 5</option>
              <option>cTrader</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotFilters;
