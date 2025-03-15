
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Support</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We're here to help! Reach out with any questions about our trading bots or services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="p-6 glass-effect flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-white/70 mb-2">For general inquiries and support</p>
                    <a href="mailto:support@vertextrading.com" className="text-[#F2FF44] hover:underline">
                      support@vertextrading.com
                    </a>
                  </div>
                </Card>
                
                <Card className="p-6 glass-effect flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-white/70 mb-2">Available during business hours</p>
                    <a href="tel:+254700123456" className="text-[#F2FF44] hover:underline">
                      +254 700 123 456
                    </a>
                  </div>
                </Card>
                
                <Card className="p-6 glass-effect flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-white/70">Monday - Friday: 9:00 AM - 5:00 PM EAT</p>
                    <p className="text-white/70">Saturday: 10:00 AM - 2:00 PM EAT</p>
                    <p className="text-white/70">Sunday: Closed</p>
                  </div>
                </Card>
                
                <Card className="p-6 glass-effect flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-white/70 mb-2">Chat with our support team in real-time</p>
                    <button className="text-[#F2FF44] hover:underline">
                      Start Live Chat
                    </button>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 mb-6">
              Can't find what you're looking for? Check our comprehensive FAQ section.
            </p>
            <a 
              href="/faq" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
