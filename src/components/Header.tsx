
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-travel-gold rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TL</span>
          </div>
          <span className="text-white font-bold text-xl">Travel Leisure Pakistan</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-travel-gold transition-colors">Home</a>
          <a href="#packages" className="text-white hover:text-travel-gold transition-colors">Packages</a>
          <a href="#about" className="text-white hover:text-travel-gold transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-travel-gold transition-colors">Contact</a>
        </nav>
        
        <Button className="bg-travel-gold hover:bg-travel-gold/90 text-travel-primary font-semibold">
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
