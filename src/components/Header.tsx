
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const handleBookNow = () => {
    const message = "Hi! I'm interested in booking a tour package. Can you help me?";
    const whatsappUrl = `https://wa.me/923408832033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-travel-primary/10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-travel-primary rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">TL</span>
          </div>
          <span className="text-travel-primary font-bold text-xl">Travel Leisure Pakistan</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-travel-primary hover:text-travel-secondary transition-colors font-medium">Home</a>
          <Link to="/packages" className="text-travel-primary hover:text-travel-secondary transition-colors font-medium">Packages</Link>
          <a href="#about" className="text-travel-primary hover:text-travel-secondary transition-colors font-medium">About</a>
          <a href="#contact" className="text-travel-primary hover:text-travel-secondary transition-colors font-medium">Contact</a>
        </nav>
        
        <Button 
          onClick={handleBookNow}
          className="bg-travel-primary hover:bg-travel-secondary text-white font-semibold shadow-md"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
