import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { contactConfig } from "@/config/contactConfig";
import { socialLinksConfig } from "@/config/socialLinksConfig";
import { formspreeConfig } from "@/config/formspreeConfig";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, CheckCircle, Loader2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200, "Subject is too long"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Submit to Formspree
      const response = await fetch(formspreeConfig.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success(formspreeConfig.messages.success);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(formspreeConfig.messages.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have questions about admissions, programs, or campus life? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us for any inquiries about admissions, academics, or general information.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      {contactConfig.address.line1}, {contactConfig.address.line2}<br />
                      {contactConfig.address.city}, {contactConfig.address.state} - {contactConfig.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                    {contactConfig.phones.map((phone) => (
                      <a
                        key={phone.number}
                        href={`tel:${phone.number}`}
                        className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {phone.label}: {phone.number}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    {contactConfig.emails.map((email) => (
                      <a
                        key={email.email}
                        href={`mailto:${email.email}`}
                        className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {email.email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Mon-Fri: {contactConfig.officeHours.weekdays}<br />
                      Saturday: {contactConfig.officeHours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={socialLinksConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={socialLinksConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={socialLinksConfig.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow duration-500">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24-48 hours.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Admission Inquiry"
                          required
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                        className="transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group transition-all duration-300 hover:scale-[1.02]" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-muted relative overflow-hidden">
        <iframe
          src={contactConfig.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </Layout>
  );
};

export default Contact;