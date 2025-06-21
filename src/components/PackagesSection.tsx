
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Hunza Valley Adventure",
    location: "Gilgit-Baltistan",
    duration: "7 Days",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Explore the stunning Hunza Valley with its ancient forts, crystal-clear lakes, and magnificent mountain views."
  },
  {
    id: 2,
    title: "K2 Base Camp Trek",
    location: "Karakoram Range",
    duration: "14 Days",
    price: "From $2,299",
    image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Challenge yourself with this epic trek to the base camp of the world's second-highest peak."
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    location: "Lahore & Islamabad",
    duration: "5 Days",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Immerse yourself in Pakistan's rich history, architecture, and vibrant cultural traditions."
  },
  {
    id: 4,
    title: "Skardu & Deosai Plains",
    location: "Baltistan",
    duration: "10 Days",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Discover the enchanting lakes of Skardu and the world's second-highest plateau."
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-white to-travel-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-primary mb-8">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From the mighty peaks of the Karakoram to the rich cultural heritage of ancient cities, 
            discover Pakistan's diverse beauty through our carefully curated travel experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-travel-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-travel-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {pkg.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-travel-primary mb-2">{pkg.title}</h3>
                  <p className="text-travel-secondary text-sm font-medium">{pkg.location}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-travel-primary">{pkg.price}</span>
                  <Link to={`/package/${pkg.id}`}>
                    <Button 
                      size="sm" 
                      className="bg-travel-primary hover:bg-travel-secondary transition-colors shadow-md text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/packages">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-travel-primary text-travel-primary hover:bg-travel-primary hover:text-white px-10 py-6 shadow-md"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
