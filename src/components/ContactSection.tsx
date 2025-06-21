
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-travel-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Start Planning Your Journey Today
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to explore Pakistan's incredible landscapes and rich culture? 
            Get in touch with us and let's create your perfect adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-10">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-travel-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-travel-primary font-bold text-xl">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-white/80 text-lg">+92 300 1234567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-travel-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-travel-primary font-bold text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-white/80 text-lg">info@travelleisure.pk</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-travel-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-travel-primary font-bold text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Office</p>
                  <p className="text-white/80 text-lg">Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-travel-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-travel-primary font-bold text-xl">🕒</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Business Hours</p>
                  <p className="text-white/80 text-lg">Mon-Sat: 9AM-6PM PKT</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in shadow-2xl" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-travel-primary mb-8">Send us a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-travel-primary font-medium">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-travel-primary font-medium">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2 h-12" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-travel-primary font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2 h-12" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-travel-primary font-medium">Phone (WhatsApp)</Label>
                  <Input id="phone" placeholder="+1234567890" className="mt-2 h-12" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-travel-primary font-medium">Message</Label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Tell us about your dream trip to Pakistan..."
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-primary text-gray-900"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-travel-gold hover:bg-travel-gold/90 text-travel-primary font-semibold py-4 text-lg shadow-lg"
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
