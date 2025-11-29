import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Calendar, Users, Cake, Building2, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make your event memorable? Contact us today to discuss your catering needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 hover:shadow-xl transition-shadow border-border/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:9964237867" className="text-muted-foreground hover:text-primary transition-colors">
                      9964237867
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Manki, Gujjadi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Follow Us</p>
                    <a 
                      href="https://www.instagram.com/shri_matha_catering_/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      @shri_matha_catering_
                    </a>
                  </div>
                </div>
              </div>

              <Button 
                className="ripple-button w-full mt-8 text-lg py-6 hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Enquiry Now
              </Button>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 hover:shadow-xl transition-shadow border-border/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Our Services
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Weddings</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Corporate Events</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Cake className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Birthday Parties</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Special Celebrations</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-border/50">
              <h3 className="text-2xl font-bold mb-6">Cuisine Types</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Veg and Non-Veg Cuisine
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Coastal Karnataka Style
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  South Indian
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  North Indian
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Traditional Recipes
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Custom Menus Available
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
