
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Download, Package, CreditCard, Bot, ShoppingBag, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for dashboard display
const mockData = {
  totalBots: 2,
  downloads: 2,
  activeSubscriptions: 1,
  featuredBots: [
    {
      id: "forex-fury",
      name: "Forex Fury",
      description: "Popular automated trading bot with 63% success rate",
      price: 2000,
      image: "/bots/forex-fury.jpg"
    },
    {
      id: "1000pip-climber",
      name: "1000pip Climber System",
      description: "Easy-to-use, fully automated forex trading bot",
      price: 3539,
      image: "/bots/1000pip.jpg"
    }
  ]
};

const DashboardOverview = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}</h1>
        <p className="text-white/70 mt-1">Here's an overview of your account</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-effect border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Package className="mr-2 h-5 w-5 text-[#F2FF44]" />
              Total Bots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockData.totalBots}</p>
            <p className="text-xs text-white/70 mt-1">
              Purchased bots in your account
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Download className="mr-2 h-5 w-5 text-[#F2FF44]" />
              Available Downloads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockData.downloads}</p>
            <p className="text-xs text-white/70 mt-1">
              Downloads ready for installation
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-[#F2FF44]" />
              Active Subscriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockData.activeSubscriptions}</p>
            <p className="text-xs text-white/70 mt-1">
              Current active bot subscriptions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button asChild className="bg-white/10 hover:bg-white/20 text-white h-auto py-3">
          <Link to="/dashboard/bots">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Browse Bots
          </Link>
        </Button>
        <Button asChild className="bg-white/10 hover:bg-white/20 text-white h-auto py-3">
          <Link to="/dashboard/purchased">
            <Download className="h-5 w-5 mr-2" />
            My Downloads
          </Link>
        </Button>
        <Button asChild className="bg-white/10 hover:bg-white/20 text-white h-auto py-3">
          <Link to="/dashboard/history">
            <Clock className="h-5 w-5 mr-2" />
            Order History
          </Link>
        </Button>
        <Button asChild className="bg-white/10 hover:bg-white/20 text-white h-auto py-3">
          <Link to="/dashboard/support">
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </Button>
      </div>

      {/* Featured Bots */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Recommended Bots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockData.featuredBots.map((bot) => (
            <Card key={bot.id} className="glass-effect border-white/10 text-white overflow-hidden hover-lift">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-white/5 flex items-center justify-center p-4">
                  <Bot className="h-16 w-16 text-[#F2FF44]" />
                </div>
                <div className="p-4 md:w-2/3">
                  <h3 className="font-bold text-lg">{bot.name}</h3>
                  <p className="text-sm text-white/70 mb-4">{bot.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-[#F2FF44] font-bold">KES {bot.price.toLocaleString()}</div>
                    <Button asChild size="sm" className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                      <Link to={`/bots/${bot.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
