
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packageData = {
  1: {
    title: "Hunza Valley Adventure",
    location: "Gilgit-Baltistan",
    duration: "7 Days / 6 Nights",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Experience the breathtaking beauty of Hunza Valley, often called the 'Shangri-La' of Pakistan. This 7-day adventure takes you through ancient forts, crystal-clear lakes, and magnificent mountain views of the Karakoram range.",
    itinerary: [
      { day: 1, title: "Arrival in Islamabad", description: "Arrive in Islamabad, meet your guide, and prepare for the journey. Overnight in Islamabad." },
      { day: 2, title: "Islamabad to Gilgit", description: "Drive along the famous Karakoram Highway to Gilgit. Enjoy stunning mountain scenery." },
      { day: 3, title: "Gilgit to Hunza", description: "Continue to Hunza Valley, visit Baltit Fort and explore Karimabad." },
      { day: 4, title: "Hunza Valley Exploration", description: "Visit Altit Fort, Eagle's Nest viewpoint, and enjoy local culture." },
      { day: 5, title: "Attabad Lake & Passu", description: "Visit the beautiful Attabad Lake and Passu Cones." },
      { day: 6, title: "Return to Gilgit", description: "Return journey to Gilgit with stops at scenic viewpoints." },
      { day: 7, title: "Departure", description: "Fly back to Islamabad and onward journey home." }
    ],
    included: [
      "All transportation during the tour",
      "Accommodation in hotels/guesthouses",
      "Professional English-speaking guide",
      "All entrance fees to monuments",
      "Daily breakfast",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    faqs: [
      { question: "What's the best time to visit Hunza?", answer: "April to October offers the best weather, with spring (April-May) and autumn (September-October) being ideal." },
      { question: "Is it safe for solo travelers?", answer: "Yes, Hunza is very safe for solo travelers. The local community is welcoming and helpful." },
      { question: "What should I pack?", answer: "Comfortable walking shoes, warm clothing for evenings, sunscreen, and a good camera!" }
    ]
  },
  2: {
    title: "K2 Base Camp Trek",
    location: "Karakoram Range",
    duration: "14 Days / 13 Nights",
    price: "From $2,299",
    image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Challenge yourself with this epic 14-day trek to K2 Base Camp, the world's second-highest peak. This demanding adventure takes you through some of the most spectacular mountain scenery on Earth.",
    itinerary: [
      { day: 1, title: "Arrival in Islamabad", description: "Arrival and briefing, equipment check, overnight in hotel." },
      { day: 2, title: "Fly to Skardu", description: "Flight to Skardu, acclimatization day, visit local markets." },
      { day: 3, title: "Skardu to Askole", description: "Drive to Askole village, last settlement before the trek begins." },
      { day: 4, title: "Askole to Jhola", description: "Begin trekking along the Braldu River to Jhola camp." },
      { day: 5, title: "Jhola to Paiju", description: "Trek to Paiju camp, first views of the Baltoro peaks." }
    ],
    included: [
      "All trekking permits and fees",
      "Professional mountain guide",
      "Porter services",
      "All meals during trek",
      "Camping equipment",
      "Emergency evacuation insurance"
    ],
    excluded: [
      "International flights",
      "Personal trekking gear",
      "Alcoholic beverages",
      "Personal expenses",
      "Tips for crew"
    ],
    faqs: [
      { question: "What fitness level is required?", answer: "Excellent physical fitness is required. Prior high-altitude trekking experience recommended." },
      { question: "What's the success rate?", answer: "About 80% of trekkers successfully reach K2 Base Camp with proper preparation." }
    ]
  },
  3: {
    title: "Cultural Heritage Tour",
    location: "Lahore & Islamabad",
    duration: "5 Days / 4 Nights",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Immerse yourself in Pakistan's rich cultural heritage with visits to historic Lahore and modern Islamabad. Experience Mughal architecture, vibrant bazaars, and delicious cuisine.",
    itinerary: [
      { day: 1, title: "Arrival in Lahore", description: "Airport pickup, check-in, evening visit to Lahore Fort." },
      { day: 2, title: "Lahore City Tour", description: "Visit Badshahi Mosque, Shalimar Gardens, and old city bazaars." },
      { day: 3, title: "Lahore to Islamabad", description: "Travel to Islamabad, visit Pakistan Monument and Lok Virsa Museum." },
      { day: 4, title: "Islamabad Exploration", description: "Visit Faisal Mosque, Margalla Hills, and local markets." },
      { day: 5, title: "Departure", description: "Final shopping and departure from Islamabad airport." }
    ],
    included: [
      "Airport transfers",
      "Hotel accommodation",
      "Professional guide",
      "All monument entrance fees",
      "Daily breakfast",
      "Transportation"
    ],
    excluded: [
      "International flights",
      "Lunch and dinner",
      "Shopping expenses",
      "Travel insurance"
    ],
    faqs: [
      { question: "Is it family-friendly?", answer: "Yes, this tour is perfect for families with children of all ages." },
      { question: "What about food?", answer: "You'll experience authentic Pakistani cuisine with vegetarian options available." }
    ]
  },
  4: {
    title: "Skardu & Deosai Plains",
    location: "Baltistan",
    duration: "10 Days / 9 Nights",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Discover the enchanting lakes of Skardu and explore Deosai Plains, the world's second-highest plateau. This tour combines stunning landscapes with unique wildlife viewing opportunities.",
    itinerary: [
      { day: 1, title: "Arrival in Islamabad", description: "Meet and greet, transfer to hotel." },
      { day: 2, title: "Fly to Skardu", description: "Scenic flight to Skardu, city orientation." },
      { day: 3, title: "Skardu Lakes Tour", description: "Visit Satpara Lake and Kachura Lakes." },
      { day: 4, title: "Shigar Valley", description: "Explore Shigar Fort and valley." },
      { day: 5, title: "Deosai Plains", description: "Full day in Deosai National Park." }
    ],
    included: [
      "Domestic flights",
      "All accommodation",
      "Meals during tour",
      "4WD transportation",
      "Professional guide",
      "Park entry fees"
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Tips"
    ],
    faqs: [
      { question: "When can we see flowers in Deosai?", answer: "July to August is the best time to see the famous Deosai flowers in bloom." },
      { question: "Can we see wildlife?", answer: "Yes, you might spot Himalayan brown bears, ibex, and various bird species." }
    ]
  },
  5: {
    title: "Swat Valley Paradise",
    location: "Khyber Pakhtunkhwa",
    duration: "6 Days / 5 Nights",
    price: "From $749",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Experience the Switzerland of Pakistan with lush green valleys, pristine lakes, and snow-capped peaks. Swat Valley offers a perfect blend of natural beauty and rich cultural heritage.",
    itinerary: [
      { day: 1, title: "Islamabad to Swat", description: "Drive to Mingora, check-in and rest." },
      { day: 2, title: "Kalam Valley", description: "Full day excursion to beautiful Kalam." },
      { day: 3, title: "Ushu Forest & Mahodand Lake", description: "Visit pristine lake and dense forests." },
      { day: 4, title: "Malam Jabba", description: "Ski resort visit and mountain activities." },
      { day: 5, title: "Local Culture", description: "Visit archaeological sites and local crafts." },
      { day: 6, title: "Return to Islamabad", description: "Drive back with scenic stops." }
    ],
    included: [
      "Transportation",
      "Hotel accommodation",
      "All meals",
      "Guide services",
      "Entrance fees"
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ],
    faqs: [
      { question: "Best time to visit?", answer: "May to September for pleasant weather, December to February for snow activities." },
      { question: "Is it safe?", answer: "Yes, Swat is completely safe for tourists with strong security measures in place." }
    ]
  },
  6: {
    title: "Fairy Meadows Trek",
    location: "Nanga Parbat",
    duration: "8 Days / 7 Nights",
    price: "From $1,099",
    image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759844-d150baef493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Trek to the spectacular Fairy Meadows with stunning views of Nanga Parbat, the 'Killer Mountain'. This moderate trek offers breathtaking alpine scenery and comfortable camping.",
    itinerary: [
      { day: 1, title: "Arrival Islamabad", description: "Meet and transfer to hotel." },
      { day: 2, title: "Drive to Chilas", description: "Scenic drive along Karakoram Highway." },
      { day: 3, title: "Raikot to Fairy Meadows", description: "Jeep ride to Tato, then trek to Fairy Meadows." },
      { day: 4, title: "Fairy Meadows to Beyal Camp", description: "Trek to higher altitude for better views." },
      { day: 5, title: "Exploration Day", description: "Day hikes around Beyal with Nanga Parbat views." },
      { day: 6, title: "Return to Fairy Meadows", description: "Trek back down to Fairy Meadows." },
      { day: 7, title: "Return to Chilas", description: "Trek to Tato and drive to Chilas." },
      { day: 8, title: "Return to Islamabad", description: "Drive back to Islamabad for departure." }
    ],
    included: [
      "All transportation",
      "Camping equipment",
      "All meals during trek",
      "Professional guide",
      "Porter services",
      "Permits and fees"
    ],
    excluded: [
      "International flights",
      "Personal trekking gear",
      "Travel insurance",
      "Tips for crew"
    ],
    faqs: [
      { question: "Difficulty level?", answer: "Moderate trek suitable for people with basic fitness level." },
      { question: "What gear do I need?", answer: "We provide camping gear, you need personal clothing and trekking boots." }
    ]
  }
};

const PackageDetail = () => {
  const { id } = useParams();
  const packageInfo = packageData[id as keyof typeof packageData];

  const handleBookNow = () => {
    const message = `Hi! I'm interested in booking the ${packageInfo?.title} package. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/923408832033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!packageInfo) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-3xl font-bold text-travel-primary mb-4">Package Not Found</h1>
          <Link to="/packages">
            <Button className="bg-travel-primary hover:bg-travel-secondary text-white">
              Back to Packages
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-96">
          <img 
            src={packageInfo.image} 
            alt={packageInfo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-travel-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{packageInfo.title}</h1>
              <p className="text-xl md:text-2xl">{packageInfo.location} • {packageInfo.duration}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-travel-primary mb-6">Tour Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{packageInfo.overview}</p>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-travel-primary mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-6">
                  {packageInfo.itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-travel-secondary pl-6">
                      <h3 className="text-xl font-bold text-travel-primary mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-travel-primary mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {packageInfo.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-travel-primary mb-6">What's Excluded</h3>
                  <ul className="space-y-3">
                    {packageInfo.excluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-travel-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {packageInfo.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-travel-primary mb-2">{faq.question}</h4>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-travel-primary mb-2">{packageInfo.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{packageInfo.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{packageInfo.location}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleBookNow}
                  className="w-full bg-travel-primary hover:bg-travel-secondary text-white font-semibold py-4 text-lg mb-4"
                >
                  Book Now via WhatsApp
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Click to chat with us on WhatsApp for instant booking
                </p>
              </CardContent>
            </Card>

            {/* Gallery */}
            {packageInfo.gallery && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-travel-primary mb-4">Gallery</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {packageInfo.gallery.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${packageInfo.title} ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
