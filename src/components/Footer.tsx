import { Phone, MapPin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shri Matha Caterers
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Veg and Non-Veg Cuisine for All Your Special Occasions
            </p>
            <a href="https://www.instagram.com/shri_matha_catering_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <a href="tel:9964237867" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span> +91 9964237867</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Manki, Gujjadi, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground"> Manki, Gujjadi, Karnataka</h4>
            <div className="space-y-2">
              <button onClick={() => document.getElementById("menu")?.scrollIntoView({
              behavior: "smooth"
            })} className="block text-muted-foreground hover:text-primary transition-colors">
                Menu
              </button>
              <button onClick={() => document.getElementById("testimonials")?.scrollIntoView({
              behavior: "smooth"
            })} className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform?usp=sharing&ouid=112100211612587863454", "_blank")} className="block text-muted-foreground hover:text-primary transition-colors">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground bg-muted/50 -mx-4 px-4 pb-4">
          <p>© {new Date().getFullYear()} Shri Matha Caterers. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;