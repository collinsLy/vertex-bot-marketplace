
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState);
    alert("Thank you for your message. We'll respond shortly!");
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-effect p-8 rounded-xl">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-white">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">Message</Label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Please describe your issue or question in detail..."
            required
            className="w-full min-h-[150px] rounded-md bg-white/5 border border-white/10 text-white p-3"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
