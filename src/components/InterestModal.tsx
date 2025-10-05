import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface InterestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "fellow" | "startup";
}

export const InterestModal = ({ open, onOpenChange, type }: InterestModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { ...formData, type });
    
    toast.success("Thank you for your interest! We'll be in touch soon.");
    
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--coral))] via-primary to-[hsl(var(--peach))] bg-clip-text text-transparent">
            {type === "fellow" ? "Join as a Fellow" : "Apply as a Startup"}
          </DialogTitle>
          <DialogDescription>
            {type === "fellow" 
              ? "Share your details and we'll get in touch about joining the next cohort of Innofemme Fellows."
              : "Tell us about your startup and how Innofemme Labs can help you build your technology."
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {type === "fellow" ? "Tell us about your experience" : "Tell us about your startup"}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                type === "fellow"
                  ? "Share your technical background, areas of expertise, and why you want to join Innofemme Labs..."
                  : "Describe your startup, what you're building, and what kind of technology support you need..."
              }
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="coral"
              className="flex-1"
            >
              Submit Interest
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
