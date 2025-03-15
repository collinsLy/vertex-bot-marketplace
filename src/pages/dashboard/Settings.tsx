
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  KeyRound,
  CreditCard,
  Shield,
  Save,
} from "lucide-react";

const Settings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Personal Information
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  
  // Password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Payment Methods
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  
  // Security
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  const handleSavePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your personal information has been updated.",
    });
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
    
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  
  const handleAddPaymentMethod = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Method Added",
      description: "Your card has been added successfully.",
    });
    
    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvv("");
  };
  
  const handleToggle2FA = () => {
    const newState = !twoFactorEnabled;
    setTwoFactorEnabled(newState);
    
    toast({
      title: newState ? "2FA Enabled" : "2FA Disabled",
      description: newState 
        ? "Two-factor authentication has been enabled for your account." 
        : "Two-factor authentication has been disabled for your account.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
        <p className="text-white/70 mt-1">Manage your account preferences and security</p>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="personal" className="data-[state=active]:bg-[#F2FF44] data-[state=active]:text-black">
            <User className="h-4 w-4 mr-2" />
            Personal Info
          </TabsTrigger>
          <TabsTrigger value="password" className="data-[state=active]:bg-[#F2FF44] data-[state=active]:text-black">
            <KeyRound className="h-4 w-4 mr-2" />
            Password
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-[#F2FF44] data-[state=active]:text-black">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#F2FF44] data-[state=active]:text-black">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <Card className="glass-effect border-white/10 text-white">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription className="text-white/70">
                Update your account details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSavePersonalInfo} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                
                <Button type="submit" className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="password">
          <Card className="glass-effect border-white/10 text-white">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription className="text-white/70">
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleChangePassword} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <Button type="submit" className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  <Save className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card className="glass-effect border-white/10 text-white">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription className="text-white/70">
                Manage your payment methods and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddPaymentMethod} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="MM/YY"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="password"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="XXX"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Card
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium mb-4">Saved Payment Methods</h3>
                <p className="text-white/70">No payment methods saved yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="glass-effect border-white/10 text-white">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription className="text-white/70">
                Manage your account security and authentication methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 mr-4 text-[#F2FF44]" />
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
                    <p className="text-sm text-white/70">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleToggle2FA}
                  variant={twoFactorEnabled ? "default" : "outline"}
                  className={
                    twoFactorEnabled 
                      ? "bg-[#F2FF44] text-black hover:bg-[#E2EF34]" 
                      : "bg-transparent border-white/20 text-white hover:bg-white/5"
                  }
                >
                  {twoFactorEnabled ? "Enabled" : "Enable"}
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Login Activity</h3>
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Last login</span>
                    <span>Today, 10:42 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">IP Address</span>
                    <span>102.68.123.45</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium mb-2">Account Actions</h3>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 bg-transparent text-red-500 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Log Out Of All Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
