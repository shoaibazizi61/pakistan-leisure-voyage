
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    title: "Hunza Valley Adventure",
    location: "Gilgit-Baltistan",
    duration: "7 Days",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80",
    description: "Explore the stunning Hunza Valley with its ancient forts, crystal-clear lakes, and magnificent mountain views."
  },
  {
    id: 2,
    title: "K2 Base Camp Trek",
    location: "Karakoram Range",
    duration: "14 Days",
    price: "From $2,299",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80",
    description: "Challenge yourself with this epic trek to the base camp of the world's second-highest peak."
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    location: "Lahore & Islamabad",
    duration: "5 Days",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3945&q=80",
    description: "Immerse yourself in Pakistan's rich history, architecture, and vibrant cultural traditions."
  },
  {
    id: 4,
    title: "Skardu & Deosai Plains",
    location: "Baltistan",
    duration: "10 Days",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
    description: "Discover the enchanting lakes of Skardu and the world's second-highest plateau."
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-primary mb-6">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the mighty peaks of the Karakoram to the rich cultural heritage of ancient cities, 
            discover Pakistan's diverse beauty through our carefully curated travel experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-travel-gold text-travel-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-travel-primary mb-1">{pkg.title}</h3>
                  <p className="text-travel-secondary text-sm">{pkg.location}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {pkg.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-travel-gold">{pkg.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-travel-primary hover:bg-travel-secondary transition-colors"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-travel-primary text-travel-primary hover:bg-travel-primary hover:text-white px-8 py-6"
          >
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
