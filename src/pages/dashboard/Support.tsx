
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Mail,
  Phone,
  HelpCircle,
  Send,
  Headphones,
  BookOpen,
  Play
} from "lucide-react";

const Support = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate sending the support request
    setTimeout(() => {
      toast({
        title: "Support Request Sent",
        description: "We've received your message and will get back to you soon.",
      });
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const supportResources = [
    {
      title: "Installation Guides",
      icon: <BookOpen className="h-10 w-10 text-[#F2FF44]" />,
      description: "Step-by-step guides for installing your trading bots",
      link: "#"
    },
    {
      title: "Video Tutorials",
      icon: <Play className="h-10 w-10 text-[#F2FF44]" />,
      description: "Watch tutorials on setting up and optimizing your bots",
      link: "#"
    },
    {
      title: "FAQ",
      icon: <HelpCircle className="h-10 w-10 text-[#F2FF44]" />,
      description: "Answers to common questions about our trading bots",
      link: "/faq"
    },
    {
      title: "Live Support",
      icon: <Headphones className="h-10 w-10 text-[#F2FF44]" />,
      description: "Connect with our team for real-time assistance",
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Support & Help</h1>
        <p className="text-white/70 mt-1">Get assistance with your trading bots</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-effect border-white/10 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-[#F2FF44]" />
                Contact Support
              </CardTitle>
              <CardDescription className="text-white/70">
                Send us a message and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What do you need help with?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue in detail..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="glass-effect border-white/10 text-white mb-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#F2FF44]" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p>support@vertextrading.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#F2FF44]" />
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <p>+254 700 123 456</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-white/70 text-sm mb-2">Support Hours</p>
                <p>Monday - Friday: 8am - 6pm EAT</p>
                <p>Saturday: 9am - 1pm EAT</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-6">Support Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportResources.map((resource, index) => (
            <Card key={index} className="glass-effect border-white/10 text-white hover-lift">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-bold mb-2">{resource.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-white/20 bg-transparent hover:bg-white/5"
                  >
                    <Link to={resource.link}>Access Resource</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
