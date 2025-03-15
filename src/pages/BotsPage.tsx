
import Navbar from "@/components/Navbar";
import BotGrid from "@/components/BotGrid";
import Footer from "@/components/Footer";
import BotFilters from "@/components/BotFilters";

const BotsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Trading Bot Marketplace</h1>
          <BotFilters />
          <BotGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BotsPage;
