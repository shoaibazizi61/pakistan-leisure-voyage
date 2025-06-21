
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I would like to inquire about your travel packages to Pakistan.";
    const whatsappUrl = `https://wa.me/923408832033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@travelleisure.pk";
  };

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
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Contact */}
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-travel-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp Us</h3>
                <p className="text-white/80 mb-6">
                  Get instant responses and quick booking assistance
                </p>
                <p className="text-xl font-semibold mb-6">+92 340 8832033</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 shadow-lg"
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-travel-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-2xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                <p className="text-white/80 mb-6">
                  Send us detailed inquiries and get comprehensive responses
                </p>
                <p className="text-xl font-semibold mb-6">info@travelleisure.pk</p>
                <Button 
                  onClick={handleEmailClick}
                  className="bg-travel-secondary hover:bg-travel-primary text-white font-semibold px-8 py-3 shadow-lg"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-travel-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">📍</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Office Location</p>
                <p className="text-white/80">Islamabad, Pakistan</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-travel-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🕒</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Business Hours</p>
                <p className="text-white/80">Mon-Sat: 9AM-6PM PKT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
