
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">Vertex Trading</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/bots" className="text-white/80 hover:text-white transition-colors">Bots</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
          <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
          <Link to="/support" className="text-white/80 hover:text-white transition-colors">Support</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-white/80 hover:text-white transition-colors flex items-center">
                <User className="w-4 h-4 mr-1" />
                {user?.name || "Dashboard"}
              </Link>
              <Button onClick={handleLogout} className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                Logout
                <LogOut className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/sign-in">
                <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  Login/Register
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/bots" className="text-white/80 hover:text-white transition-colors">Bots</Link>
              <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
              <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
              <Link to="/support" className="text-white/80 hover:text-white transition-colors">Support</Link>
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {user?.name || "Dashboard"}
                  </Link>
                  <Button onClick={handleLogout} className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full max-w-xs">
                    Logout
                    <LogOut className="w-4 h-4 ml-2" />
                  </Button>
                </>
              ) : (
                <Link to="/sign-in" className="w-full max-w-xs">
                  <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full">
                    Login/Register
                    <LogIn className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
