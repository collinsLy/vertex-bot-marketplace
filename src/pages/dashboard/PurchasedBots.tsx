
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Bot, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Sample data for purchased bots
const purchasedBots = [
  {
    id: "forex-fury",
    name: "Forex Fury",
    description: "Popular automated trading bot with 63% success rate.",
    purchaseDate: "2023-04-12",
    expiryDate: "Lifetime",
    downloadLink: "#",
    licenseKey: "FF-1234-5678-9ABC-DEF0",
    version: "v2.5.1",
    latestUpdate: "2023-09-18",
    setupGuide: "/guides/forex-fury-setup.pdf"
  },
  {
    id: "1000pip-climber",
    name: "1000pip Climber System",
    description: "Easy-to-use, fully automated forex trading bot.",
    purchaseDate: "2023-08-20",
    expiryDate: "Lifetime",
    downloadLink: "#",
    licenseKey: "1PC-7890-1234-ABCD-5678",
    version: "v3.2.0",
    latestUpdate: "2023-10-05",
    setupGuide: "/guides/1000pip-setup.pdf"
  }
];

const PurchasedBots = () => {
  const { toast } = useToast();

  const copyLicenseKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "License Key Copied",
      description: "The license key has been copied to your clipboard."
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">My Trading Bots</h1>
        <p className="text-white/70 mt-1">Access and manage your purchased bots</p>
      </div>

      {purchasedBots.length > 0 ? (
        <div className="space-y-6">
          {purchasedBots.map((bot) => (
            <Card key={bot.id} className="glass-effect border-white/10 text-white overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
                      <Bot className="h-12 w-12 text-[#F2FF44]" />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold">{bot.name}</h2>
                      <p className="text-white/70">{bot.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      <div>
                        <p className="text-sm text-white/50">Purchase Date</p>
                        <p>{bot.purchaseDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Expiry</p>
                        <p>{bot.expiryDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/50">Version</p>
                        <p>{bot.version} <span className="text-xs text-[#F2FF44]">(Updated: {bot.latestUpdate})</span></p>
                      </div>
                      <div>
                        <p className="text-sm text-white/50">License Key</p>
                        <div className="flex items-center">
                          <code className="bg-white/5 px-2 py-1 rounded text-sm mr-2 overflow-hidden text-ellipsis">{bot.licenseKey}</code>
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="h-6 w-6"
                            onClick={() => copyLicenseKey(bot.licenseKey)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                        <Download className="h-4 w-4 mr-2" />
                        Download Bot
                      </Button>
                      <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/5">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Setup Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-effect border-white/10 rounded-lg">
          <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <Bot className="h-10 w-10 text-white/50" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No purchased bots yet</h3>
          <p className="text-white/70 max-w-md mx-auto mb-6">
            Start exploring our marketplace to find the perfect trading bot for your needs.
          </p>
          <Button asChild className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            <Link to="/dashboard/bots">Browse Bot Marketplace</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default PurchasedBots;
