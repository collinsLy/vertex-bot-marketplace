
import { Github, Twitter, Linkedin, CreditCard, DollarSign, Bitcoin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Vertex Trading</h3>
            <p className="text-white/60">
              Empowering traders with automated solutions for consistent forex trading results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="/bots" className="text-white/60 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="/how-it-works" className="text-white/60 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60">support@vertextrading.com</li>
              <li className="text-white/60">+254 700 123 456</li>
              <li className="text-white/60">Mon-Fri: 9am - 5pm EAT</li>
              <li><a href="/support" className="text-white/60 hover:text-white transition-colors">Contact Form</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Payment Methods</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-white/60">
                <CreditCard className="w-5 h-5" />
                <span>Credit Card</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <DollarSign className="w-5 h-5" />
                <span>M-Pesa</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Bitcoin className="w-5 h-5" />
                <span>Crypto</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2024 Vertex Trading Bots Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
