
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const packages = [
  {
    id: 1,
    title: "Hunza Valley Adventure",
    location: "Gilgit-Baltistan",
    duration: "7 Days",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Explore the stunning Hunza Valley with its ancient forts, crystal-clear lakes, and magnificent mountain views.",
    category: "Adventure"
  },
  {
    id: 2,
    title: "K2 Base Camp Trek",
    location: "Karakoram Range",
    duration: "14 Days",
    price: "From $2,299",
    image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Challenge yourself with this epic trek to the base camp of the world's second-highest peak.",
    category: "Trekking"
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    location: "Lahore & Islamabad",
    duration: "5 Days",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Immerse yourself in Pakistan's rich history, architecture, and vibrant cultural traditions.",
    category: "Cultural"
  },
  {
    id: 4,
    title: "Skardu & Deosai Plains",
    location: "Baltistan",
    duration: "10 Days",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Discover the enchanting lakes of Skardu and the world's second-highest plateau.",
    category: "Nature"
  },
  {
    id: 5,
    title: "Swat Valley Paradise",
    location: "Khyber Pakhtunkhwa",
    duration: "6 Days",
    price: "From $749",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Experience the Switzerland of Pakistan with lush green valleys and pristine lakes.",
    category: "Nature"
  },
  {
    id: 6,
    title: "Fairy Meadows Trek",
    location: "Nanga Parbat",
    duration: "8 Days",
    price: "From $1,099",
    image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Trek to the base of Nanga Parbat through stunning meadows and mountain landscapes.",
    category: "Trekking"
  }
];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Adventure", "Trekking", "Cultural", "Nature"];

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-travel-primary/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-travel-primary mb-6">
              All Travel Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Pakistan's breathtaking destinations with our carefully crafted tour packages
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <Input
                  placeholder="Search packages by destination or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-travel-primary hover:bg-travel-secondary text-white" 
                      : "border-travel-primary text-travel-primary hover:bg-travel-primary hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-travel-primary/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-travel-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-travel-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {pkg.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
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

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No packages found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Packages;
