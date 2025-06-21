
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(43, 95, 68, 0.7) 0%, rgba(74, 124, 89, 0.6) 100%), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3634&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Gateway to Pakistan's 
          <span className="text-travel-gold block mt-2">Hidden Treasures</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Experience the breathtaking beauty, rich culture, and warm hospitality of Pakistan 
          with our expertly crafted travel packages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-travel-gold hover:bg-travel-gold/90 text-travel-primary font-semibold px-8 py-6 text-lg animate-scale-in"
          >
            Explore Tours
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-travel-primary px-8 py-6 text-lg animate-scale-in"
          >
            Watch Video
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
