import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().optional(),
  interest: z.string().min(1, { message: "Please select your interest" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      setIsSubmitting(true);

      // Call the edge function to send emails
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Error sending message:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or email us directly at info@innofemme.org",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[hsl(var(--peach))]/10 via-background to-[hsl(var(--coral))]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Back Button */}
            <div className="flex justify-start mb-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in transforming innovation for African women. We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I'm Interested In *</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                    <SelectTrigger className={errors.interest ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fellow">Becoming a Fellow</SelectItem>
                      <SelectItem value="innofemme-labs">Applying to InnoFemme Labs</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="gurlz-wellness">Gurlz Wellness Program</SelectItem>
                      <SelectItem value="hack4equity">Hack4Equity Hackathon</SelectItem>
                      <SelectItem value="equity-clinic">Equity Clinic</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interest && <p className="text-sm text-destructive">{errors.interest}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us more about your interest..."
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We're here to help. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--coral))]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[hsl(var(--coral))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@innofemme.org" className="text-muted-foreground hover:text-[hsl(var(--coral))] transition-colors">
                      info@innofemme.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--peach))]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[hsl(var(--peach))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+233XXXXXXXXX" className="text-muted-foreground hover:text-[hsl(var(--peach))] transition-colors">
                      +233 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--coral-light))]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[hsl(var(--coral-light))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[hsl(var(--coral))]/5 to-[hsl(var(--peach))]/5 rounded-xl border border-[hsl(var(--coral))]/20">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
