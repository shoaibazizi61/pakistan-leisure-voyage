
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-travel-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Planning Your Journey Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to explore Pakistan's incredible landscapes and rich culture? 
            Get in touch with us and let's create your perfect adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-travel-gold rounded-full flex items-center justify-center">
                  <span className="text-travel-primary font-bold">📱</span>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-white/80">+92 300 1234567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-travel-gold rounded-full flex items-center justify-center">
                  <span className="text-travel-primary font-bold">✉️</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/80">info@travelleisure.pk</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-travel-gold rounded-full flex items-center justify-center">
                  <span className="text-travel-primary font-bold">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-white/80">Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-travel-gold rounded-full flex items-center justify-center">
                  <span className="text-travel-primary font-bold">🕒</span>
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-white/80">Mon-Sat: 9AM-6PM PKT</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-travel-primary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-travel-primary">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-travel-primary">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-travel-primary">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-travel-primary">Phone (WhatsApp)</Label>
                  <Input id="phone" placeholder="+1234567890" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-travel-primary">Message</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us about your dream trip to Pakistan..."
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-primary"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-travel-gold hover:bg-travel-gold/90 text-travel-primary font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
