
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    text: "Our trip to Hunza Valley was absolutely magical! The guides were knowledgeable, the accommodations were comfortable, and the views were breathtaking. Pakistan truly is a hidden gem.",
    avatar: "SJ"
  },
  {
    name: "Marco Rodriguez",
    location: "Spain",
    rating: 5,
    text: "The K2 base camp trek exceeded all my expectations. The local team's expertise and care made this challenging journey safe and unforgettable. Highly recommended!",
    avatar: "MR"
  },
  {
    name: "Chen Wei",
    location: "Singapore",
    rating: 5,
    text: "The cultural heritage tour was perfectly organized. We experienced authentic Pakistani hospitality and learned so much about the rich history. Thank you for an amazing journey!",
    avatar: "CW"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-travel-primary/5 to-travel-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-travel-primary mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from fellow adventurers who have 
            experienced the magic of Pakistan with Travel Leisure Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-travel-gold rounded-full flex items-center justify-center text-travel-primary font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-travel-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-travel-gold text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
