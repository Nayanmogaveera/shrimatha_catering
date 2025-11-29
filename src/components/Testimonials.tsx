import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    event: "Wedding Reception",
    review: "Exceptional service and delicious food! Shri Matha Caterers made our wedding reception truly memorable. The Kundapura Chicken was outstanding, and all our guests were impressed.",
    rating: 5
  },
  {
    name: "Priya Shenoy",
    event: "Corporate Event",
    review: "We hired them for our company's annual day, and they exceeded all expectations. The variety in the menu was perfect, and the presentation was top-notch. Highly recommended!",
    rating: 5
  },
  {
    name: "Vijay Mogaveera",
    event: "Family Function",
    review: "Amazing traditional flavors! The biriyani combo was a hit among all our relatives. Professional team, timely service, and authentic taste. Will definitely book again.",
    rating: 5
  },
  {
    name: "Lakshmi Rao",
    event: "Birthday Celebration",
    review: "The food quality and taste were exceptional. Everything was fresh and perfectly cooked. The staff was courteous and handled everything smoothly. Thank you for making our celebration special!",
    rating: 5
  },
  {
    name: "Anand Hegde",
    event: "Anniversary Party",
    review: "Outstanding catering service! The mutton sukka and ghee rice were absolutely delicious. Great value for money and professional service. Shri Matha Caterers is our go-to choice now.",
    rating: 5
  }
];

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card h-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-4 italic">"{testimonial.review}"</p>
                    <div className="border-t border-border/50 pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
