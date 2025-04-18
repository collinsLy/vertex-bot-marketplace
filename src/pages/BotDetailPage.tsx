
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";
import BotRelated from "@/components/BotRelated";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const BotDetailPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // In a real application, you would fetch the bot details based on the ID from the URL
  const bot = {
    id: "forex-fury",
    name: "Forex Fury",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Forex Fury is a popular automated trading bot with a claimed 63% success rate. It specializes in short-term trades and is compatible with MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms. It allows traders to customize risk settings, timeframes, and currency pairs.",
    features: [
      "Compatible with MT4 and MT5 platforms",
      "Customizable risk settings",
      "Multiple timeframe analysis",
      "Selective currency pair trading",
      "Night trading mode",
      "Automatic updates",
      "Email notifications"
    ],
    technicalRequirements: [
      "Windows 7 or higher / MacOS 10.12 or higher",
      "MetaTrader 4 or 5 platform installed",
      "Minimum 1GB RAM",
      "Stable internet connection"
    ],
    performanceStats: {
      winRate: "63%",
      avgMonthlyReturn: "8.2%",
      drawdown: "12%",
      verifiedBy: "MyFXBook"
    },
    price: "KES 2,000",
    numericPrice: 2000,
    subscription: "Lifetime access"
  };

  // Real-time system update simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    // Extract the numeric price without the "KES " prefix and commas
    const amount = bot.numericPrice;
    
    // Construct the payment URL with the amount
    const paymentUrl = `https://121bc70e-c053-463f-b2e4-d866e4703b4b-00-t1pwtshj20ol.riker.replit.dev/payment/new?amount=${amount}&product=${encodeURIComponent(bot.name)}`;
    
    // Show toast notification
    toast({
      title: "Redirecting to payment",
      description: `You're being redirected to complete your purchase of ${bot.name}.`,
    });
    
    // Redirect to the payment URL
    window.location.href = paymentUrl;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* System Update Banner */}
          <div className="mb-6 p-3 bg-[#F2FF44]/20 rounded-lg text-white text-sm flex justify-between items-center">
            <span>System last updated: {lastUpdated.toLocaleTimeString()}</span>
            <span className="text-[#F2FF44] font-medium">Live</span>
          </div>
          
          {/* Bot Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={bot.image} 
                alt={bot.name} 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                }}
              />
              <div className="absolute top-4 right-4 bg-[#F2FF44] text-black px-3 py-1 rounded-full text-sm font-medium">
                Verified
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">{bot.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">
                  Win Rate: {bot.performanceStats.winRate}
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">
                  Verified by {bot.performanceStats.verifiedBy}
                </div>
              </div>
              <p className="text-white/70 text-lg">{bot.description}</p>
              
              <div className="pt-4">
                <div className="text-2xl font-bold text-white mb-2">{bot.price}</div>
                <div className="text-white/60 mb-6">{bot.subscription}</div>
                <Button 
                  className="w-full py-6 text-lg bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center justify-center gap-2"
                  onClick={handlePurchase}
                >
                  Purchase Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bot.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F2FF44] flex-shrink-0 mt-0.5" />
                  <div className="text-white/80">{feature}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Technical Requirements</h2>
            <Card className="p-6 glass-effect">
              <div className="space-y-4">
                {bot.technicalRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F2FF44] flex-shrink-0 mt-0.5" />
                    <div className="text-white/80">{req}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Performance Data */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Performance Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center glass-effect">
                <div className="text-3xl font-bold text-white mb-2">{bot.performanceStats.winRate}</div>
                <div className="text-white/60">Win Rate</div>
              </Card>
              <Card className="p-6 text-center glass-effect">
                <div className="text-3xl font-bold text-white mb-2">{bot.performanceStats.avgMonthlyReturn}</div>
                <div className="text-white/60">Avg. Monthly Return</div>
              </Card>
              <Card className="p-6 text-center glass-effect">
                <div className="text-3xl font-bold text-white mb-2">{bot.performanceStats.drawdown}</div>
                <div className="text-white/60">Max Drawdown</div>
              </Card>
            </div>
          </div>
          
          {/* Related Bots */}
          <BotRelated />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BotDetailPage;
