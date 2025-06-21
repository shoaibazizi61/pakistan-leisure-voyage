
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🏔️",
    title: "Local Expertise",
    description: "Born and raised in Pakistan, our guides know every hidden gem and secret trail in the country."
  },
  {
    icon: "💎",
    title: "Affordable Luxury",
    description: "Experience premium comfort and authentic hospitality without breaking the bank."
  },
  {
    icon: "🛡️",
    title: "Trusted by 1000+",
    description: "Over 1,000 satisfied travelers have explored Pakistan safely with our expert guidance."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-primary mb-6">
            Why Travel with Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a travel company - we're your local friends who happen to know 
            the best spots, authentic experiences, and safest routes in Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-travel-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
