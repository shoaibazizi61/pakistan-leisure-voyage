
const Footer = () => {
  return (
    <footer className="bg-travel-primary/95 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center">
                <span className="text-travel-primary font-bold text-sm">TL</span>
              </div>
              <span className="font-bold text-lg">Travel Leisure Pakistan</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner for authentic Pakistani adventures. 
              Experience the beauty, culture, and hospitality of Pakistan with local experts.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-travel-gold transition-colors">Home</a></li>
              <li><a href="#packages" className="text-white/80 hover:text-travel-gold transition-colors">Packages</a></li>
              <li><a href="#about" className="text-white/80 hover:text-travel-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-travel-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-travel-gold transition-colors">Hunza Valley</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-gold transition-colors">Skardu</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-gold transition-colors">K2 Base Camp</a></li>
              <li><a href="#" className="text-white/80 hover:text-travel-gold transition-colors">Lahore</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-sm text-white/80">📱 +92 300 1234567</p>
              <p className="text-sm text-white/80">✉️ info@travelleisure.pk</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center text-travel-primary hover:scale-110 transition-transform">
                  f
                </a>
                <a href="#" className="w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center text-travel-primary hover:scale-110 transition-transform">
                  ig
                </a>
                <a href="#" className="w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center text-travel-primary hover:scale-110 transition-transform">
                  tw
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Travel Leisure Pakistan. All rights reserved. | Licensed Tour Operator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
