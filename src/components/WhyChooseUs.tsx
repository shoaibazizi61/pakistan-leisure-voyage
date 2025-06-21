
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-primary mb-8">
            Why Travel with Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not just a travel company - we're your local friends who happen to know 
            the best spots, authentic experiences, and safest routes in Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-travel-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-10">
                <div className="text-7xl mb-8">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-travel-primary mb-6">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
