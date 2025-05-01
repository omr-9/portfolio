import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    
    Phone,
    Send,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useState } from "react";
import { useToast } from "../Hooks/useToast";
import emailjs from "emailjs-com"; 
  
  export const Contact = () => {
  
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      emailjs
        .sendForm(
          "service_yqj4q4v",   // Replace with your EmailJS Service ID
          "template_rvmb8kq",  //  Replace with your EmailJS Template ID
          e.target,
          "aFDl9p6va8qGyBIHY"    // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            toast({
              title: "Message Sent!",
              description: "Thank you for reaching out. I'll get back to you soon.",
              variant: "success",
            });            setIsSubmitting(false);
            e.target.reset();
          },
          (error) => {
            console.error(error.text);
        toast({
          title: "Message Failed",
          description: "Please try again or contact me via email.",
          variant: "destructive",
        });
            setIsSubmitting(false);
          }
        );
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex items-start space-x-4 flex-col"  >
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:omaralsharkawi9gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
omaralsharkawi9gmail.com                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex items-start space-x-4 flex-col">
                    <h4 className="font-medium"> Phone</h4>
                    <a
                      href="tel:+201030442338"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
+201030442338                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex items-start space-x-4 flex-col">
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Mansoura, Egypt
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/omar-al-sharkawi-448249289/" target="_blank">
                    <Linkedin className="hover:text-[#0a66c2] duration-300 transition-colors"/>
                  </a>
                  <a href="https://x.com/omaralsharkawi1?s=21&t=UcUU__rMJXUKXMUwFp1R8A" target="_blank">
                    <Twitter className="hover:text-[#1da1f2] duration-300 transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/sharkk_4?igsh=emZtNW5hejB4bHRj&utm_source=qr" target="_blank">
                    <Instagram className="hover:text-[#e1306c] duration-300 transition-colors"/>
                  </a>
                  <a href="https://www.facebook.com/share/1MgkFyAiUs/?mibextid=wwXIfr" target="_blank">
                    <Facebook className="hover:text-[#1877f2] duration-300 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              <form className="space-y-6" onSubmit={sendEmail}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Omar Mohamed..."
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="john@gmail.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Hello, I'd like to talk about..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
            </div>
          </div>
        </div>
      </section>
    );
  
};