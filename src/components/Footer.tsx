
const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your travel packages. Can you help me?";
    const whatsappUrl = `https://wa.me/923408832033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-travel-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-travel-secondary rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">TL</span>
              </div>
              <span className="font-bold text-xl">Travel Leisure Pakistan</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for authentic Pakistani adventures. 
              Experience the beauty, culture, and hospitality of Pakistan with local experts.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-travel-accent transition-colors">Home</a></li>
              <li><a href="/packages" className="text-white/80 hover:text-travel-accent transition-colors">Packages</a></li>
              <li><a href="#about" className="text-white/80 hover:text-travel-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-travel-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-travel-accent transition-colors">Hunza Valley</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-accent transition-colors">Skardu</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-accent transition-colors">K2 Base Camp</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-accent transition-colors">Lahore</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group w-full text-left"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm">+92 340 8832033</p>
                </div>
              </button>
              <div className="flex items-center space-x-3 text-white/80">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@travelleisure.pk</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-travel-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-travel-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                  ig
                </a>
                <a href="#" className="w-10 h-10 bg-travel-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                  tw
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Travel Leisure Pakistan. All rights reserved. | Licensed Tour Operator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
