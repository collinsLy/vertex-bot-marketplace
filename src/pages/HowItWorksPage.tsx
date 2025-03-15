
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, CreditCard, Bot } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <Bot className="w-12 h-12 text-white" />,
      title: "Choose Your Trading Bot",
      description: "Browse our marketplace and select a bot that matches your trading goals, budget, and experience level. Each bot includes detailed information about its strategy, performance history, and features."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-white" />,
      title: "Secure Checkout Process",
      description: "Complete your purchase using our secure payment system. We accept M-Pesa, credit/debit cards, and cryptocurrencies for your convenience."
    },
    {
      icon: <Download className="w-12 h-12 text-white" />,
      title: "Instant Delivery",
      description: "Receive immediate access to your trading bot via email. The email includes download links, license keys, and comprehensive setup instructions."
    },
    {
      icon: <Check className="w-12 h-12 text-white" />,
      title: "Setup and Start Trading",
      description: "Follow our step-by-step guides to install and configure your bot. Most setups take less than 30 minutes, and our support team is available to help if needed."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From selecting your bot to automated trading in just a few simple steps
            </p>
          </div>
          
          {/* Step-by-step Process */}
          <div className="mb-20">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 mb-16 items-start">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  {step.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#F2FF44] text-black font-bold flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/70 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQs About Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 glass-effect">
                <h3 className="text-xl font-semibold text-white mb-3">How long until I see results?</h3>
                <p className="text-white/70">
                  Trading results vary based on market conditions, bot settings, and risk management. Many users see initial results within the first week of trading, but long-term performance is a better indicator of success.
                </p>
              </Card>
              <Card className="p-6 glass-effect">
                <h3 className="text-xl font-semibold text-white mb-3">Can I use the bot on multiple accounts?</h3>
                <p className="text-white/70">
                  Most of our bots come with a single account license. Some premium options include multiple licenses. Check the bot's description for specific licensing details.
                </p>
              </Card>
              <Card className="p-6 glass-effect">
                <h3 className="text-xl font-semibold text-white mb-3">What if I need help with setup?</h3>
                <p className="text-white/70">
                  Our support team is available to assist with setup issues. We also provide detailed documentation and video tutorials for each bot.
                </p>
              </Card>
              <Card className="p-6 glass-effect">
                <h3 className="text-xl font-semibold text-white mb-3">Do I need to keep my computer on?</h3>
                <p className="text-white/70">
                  For optimal performance, the trading platform should remain running. However, you can use a VPS (Virtual Private Server) to keep your bot running 24/7 without keeping your computer on.
                </p>
              </Card>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center glass-effect rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Automated Trading?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Browse our selection of high-performance trading bots and find the perfect match for your trading strategy.
            </p>
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2 mx-auto">
              Browse Trading Bots
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
