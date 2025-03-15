
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Vertex Trading</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="/bots" className="text-white/80 hover:text-white transition-colors">Bots</a>
          <a href="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
          <a href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          <a href="/support" className="text-white/80 hover:text-white transition-colors">Support</a>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Login/Register
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 py-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="/bots" className="text-white/80 hover:text-white transition-colors">Bots</a>
              <a href="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
              <a href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
              <a href="/support" className="text-white/80 hover:text-white transition-colors">Support</a>
              <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full max-w-xs">
                Login/Register
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
