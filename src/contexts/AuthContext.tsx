
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const defaultUser: User = {
  email: "",
  name: "",
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is stored in localStorage on mount
    const storedUser = localStorage.getItem("vertexUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(parsedUser.isAuthenticated);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call to verify credentials
    console.log("Logging in with:", { email, password });
    
    // Create a user object
    const newUser = {
      email,
      name: email.split("@")[0],
      isAuthenticated: true,
    };
    
    // Store the user in localStorage
    localStorage.setItem("vertexUser", JSON.stringify(newUser));
    
    // Update state
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call to create a new user
    console.log("Registering with:", { name, email, password });
    
    // Create a user object
    const newUser = {
      email,
      name,
      isAuthenticated: true,
    };
    
    // Store the user in localStorage
    localStorage.setItem("vertexUser", JSON.stringify(newUser));
    
    // Update state
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem("vertexUser");
    
    // Update state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
