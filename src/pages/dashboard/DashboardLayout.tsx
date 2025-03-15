
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  LayoutDashboard,
  ShoppingBag,
  Download,
  Clock,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Buy Bots", path: "/dashboard/bots", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "My Bots", path: "/dashboard/purchased", icon: <Download className="w-5 h-5" /> },
    { name: "Order History", path: "/dashboard/history", icon: <Clock className="w-5 h-5" /> },
    { name: "Support", path: "/dashboard/support", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Mobile sidebar toggle */}
        <div className="lg:hidden fixed top-20 right-4 z-40">
          <Button
            onClick={toggleSidebar}
            variant="outline"
            size="icon"
            className="bg-background/50 backdrop-blur-lg border-white/10"
          >
            {sidebarOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>

        {/* Dashboard sidebar - desktop */}
        <div className="hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-background/50 backdrop-blur-lg border-r border-white/10">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#F2FF44] flex items-center justify-center text-black font-bold">
                {user?.name.charAt(0) || "U"}
              </div>
              <div>
                <p className="font-medium text-white">{user?.name || "User"}</p>
                <p className="text-xs text-white/60">{user?.email || "user@example.com"}</p>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              ))}
            </nav>

            <div className="absolute bottom-8 left-0 right-0 px-6">
              <Button
                onClick={handleLogout}
                className="w-full bg-white/10 text-white hover:bg-white/20"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard sidebar - mobile */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={toggleSidebar}>
            <div 
              className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-background border-l border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#F2FF44] flex items-center justify-center text-black font-bold">
                    {user?.name.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="font-medium text-white">{user?.name || "User"}</p>
                    <p className="text-xs text-white/60">{user?.email || "user@example.com"}</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/dashboard"}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`
                      }
                      onClick={toggleSidebar}
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </NavLink>
                  ))}
                </nav>

                <div className="absolute bottom-8 left-0 right-0 px-6">
                  <Button
                    onClick={handleLogout}
                    className="w-full bg-white/10 text-white hover:bg-white/20"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="lg:ml-64 p-6">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      
      <div className="lg:ml-64">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
