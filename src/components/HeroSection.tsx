
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(43, 95, 68, 0.8) 0%, rgba(74, 124, 89, 0.7) 100%), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3634&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center max-w-5xl mx-auto px-6 py-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Your Gateway to Pakistan's 
          <span className="text-travel-gold block mt-4">Hidden Treasures</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Experience the breathtaking beauty, rich culture, and warm hospitality of Pakistan 
          with our expertly crafted travel packages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-travel-gold hover:bg-travel-gold/90 text-travel-primary font-semibold px-10 py-6 text-lg animate-scale-in shadow-lg"
          >
            Explore Tours
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-travel-primary px-10 py-6 text-lg animate-scale-in shadow-lg"
          >
            Watch Video
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
