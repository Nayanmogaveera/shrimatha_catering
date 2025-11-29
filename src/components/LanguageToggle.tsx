import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

// Translation map for English to Kannada
const translations: Record<string, string> = {
  // Navigation
  "Home": "ಮುಖಪುಟ",
  "Menu": "ಮೆನು",
  "About": "ನಮ್ಮ ಬಗ್ಗೆ",
  "Testimonials": "ಪ್ರತಿಕ್ರಿಯೆಗಳು",
  "Contact": "ಸಂಪರ್ಕ",
  "Location": "ಸ್ಥಳ",
  "Get Quote": "ಕೋಟ್ ಪಡೆಯಿರಿ",
  
  // Hero Section
  "Shri Matha Caterers": "ಶ್ರೀ ಮಾತಾ ಕ್ಯಾಟರರ್ಸ್",
  "Authentic Veg and Non-Veg Cuisine for Every Celebration": "ಪ್ರತಿಯೊಂದು ಆಚರಣೆಗೆ ಅಧಿಕೃತ ಸಸ್ಯಾಹಾರಿ ಮತ್ತು ಮಾಂಸಾಹಾರಿ ಪಾಕಪದ್ಧತಿ",
  "From intimate gatherings to grand celebrations, we bring the finest coastal Karnataka flavors to your special moments": "ಅನ್ಯೋನ್ಯ ಸಭೆಗಳಿಂದ ಭವ್ಯ ಆಚರಣೆಗಳವರೆಗೆ, ನಾವು ನಿಮ್ಮ ವಿಶೇಷ ಕ್ಷಣಗಳಿಗೆ ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಅತ್ಯುತ್ತಮ ಪರಿಮಳಗಳನ್ನು ತರುತ್ತೇವೆ",
  "View Menu": "ಮೆನು ನೋಡಿ",
  
  // Menu Section
  "Our Menu": "ನಮ್ಮ ಮೆನು",
  "Choose from our carefully crafted combo meals, each designed to delight your taste buds": "ನಿಮ್ಮ ರುಚಿ ಮೊಗ್ಗುಗಳನ್ನು ಸಂತೋಷಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಮ್ಮ ಎಚ್ಚರಿಕೆಯಿಂದ ರಚಿಸಿದ ಕಾಂಬೊ ಊಟಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ",
  "Classic Combo": "ಕ್ಲಾಸಿಕ್ ಕಾಂಬೋ",
  "Neer Dosa Special": "ನೀರ್ ದೋಸೆ ಸ್ಪೆಷಲ್",
  "Sukka Delight": "ಸುಕ್ಕಾ ಡಿಲೈಟ್",
  "Ghee Rice Combo": "ಘೀ ರೈಸ್ ಕಾಂಬೋ",
  "Premium Feast": "ಪ್ರೀಮಿಯಂ ಫೀಸ್ಟ್",
  "Mutton Special": "ಮಟನ್ ಸ್ಪೆಷಲ್",
  "Roti Combo": "ರೊಟ್ಟಿ ಕಾಂಬೋ",
  "Biriyani Special": "ಬಿರಿಯಾನಿ ಸ್ಪೆಷಲ್",
  "Pickle": "ಪಿಕಲ್",
  "Veg Palya": "ವೆಜ್ ಪಲ್ಯ",
  "2 Piece Kabab": "2 ಪೀಸ್ ಕಬಾಬ್",
  "3 Idli": "3 ಇಡ್ಲಿ",
  "2 Idli": "2 ಇಡ್ಲಿ",
  "Kundapura Chicken": "ಕುಂದಾಪುರ ಚಿಕನ್",
  "Boiled Rice": "ಬೋಯ್ಲ್ಡ್ ರೈಸ್",
  "Chatli Curry": "ಚಟ್ಲಿ ಕರ್ರಿ",
  "Payasa": "ಪಾಯಸ",
  "Ice Cream": "ಐಸ್ ಕ್ರೀಂ",
  "Water Bottle": "ವಾಟರ್ ಬಾಟಲ್",
  "2 Neer Dosa": "2 ನೀರ್ ದೋಸೆ",
  "Chicken Sukka": "ಚಿಕನ್ ಸುಕ್ಕ",
  "Ghee Rice": "ಘೀ ರೈಸ್",
  "Chicken Kurma Or Half Biriyani": "ಚಿಕನ್ ಕುರ್ಮಾ ಅಥವಾ ಹಾಫ್ ಬಿರಿಯಾನಿ",
  "2 Piece Kabab/Chicken Chilly/Chicken Pepper Dry": "2 ಪೀಸ್ ಕಬಾಬ್ / ಚಿಕನ್ ಚಿಲ್ಲಿ / ಚಿಕನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ",
  "Ice Cream/Fruit Salad": "ಐಸ್ ಕ್ರೀಂ / ಫ್ರೂಟ್ ಸಲಾಡ್",
  "2 Piece Kabab/Fish Fry/Chicken Chilly": "2 ಪೀಸ್ ಕಬಾಬ್ / ಫಿಶ್ ಫ್ರೈ / ಚಿಕನ್ ಚಿಲ್ಲಿ",
  "Chicken Sukka/Mutton Sukka": "ಚಿಕನ್ ಸುಕ್ಕ / ಮಟನ್ ಸುಕ್ಕ",
  "Rumali Roti": "ರೂಮಾಲಿ ರೊಟ್ಟಿ",
  "Kundapura Chicken/Butter Chicken/Mutton Curry": "ಕುಂದಾಪುರ ಚಿಕನ್ / ಬಟರ್ ಚಿಕನ್ / ಮಟನ್ ಕರ್ರಿ",
  "2 Neer Dosa/Aapam/Set Dosa": "2 ನೀರ್ ದೋಸೆ / ಆಪಂ / ಸೆಟ್ ದೋಸೆ",
  "Full Biriyani": "ಫುಲ್ ಬಿರಿಯಾನಿ",
  "Chicken Gravy with 2 piece": "2 ಪೀಸ್ ಜೊತೆಗೆ ಚಿಕನ್ ಗ್ರೇವಿ",
  "Dahi Salad": "ದಹಿ ಸಲಾಡ್",
  "* All combos can be customized according to your preferences and dietary requirements. Contact us for personalized menu options.": "* ಎಲ್ಲಾ ಕಾಂಬೋಗಳನ್ನು ನಿಮ್ಮ ಇಷ್ಟಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಕಸ್ಟಮೈಸ್ ಮಾಡಬಹುದಾಗಿದೆ. ವೈಯಕ್ತಿಕ ಮೆನುಗಳಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  
  // Drinks Section
  "Drinks & Refreshments": "ಪಾನೀಯಗಳು ಮತ್ತು ಉಪಾಹಾರಗಳು",
  "Premium mojitos and refreshing beverages to complement your celebration": "ನಿಮ್ಮ ಆಚರಣೆಯನ್ನು ಪೂರಕವಾಗಿಸಲು ಪ್ರೀಮಿಯಂ ಮೊಜಿಟೊಗಳು ಮತ್ತು ರಿಫ್ರೆಶ್ ಪಾನೀಯಗಳು",
  "Classic Mojito": "ಕ್ಲಾಸಿಕ್ ಮೊಜಿಟೋ",
  "Fresh mint leaves, lime juice, and sparkling water": "ತಾಜಾ ಪುದೀನ ಸೊಪ್ಪು, ಲಿಂಬೆ ರಸ ಹಾಗೂ ಸ್ಪಾರ್ಕ್ಲಿಂಗ್ ನೀರು",
  "Strawberry Mojito": "ಸ್ಟ್ರಾಬೆರಿ ಮೊಜಿಟೋ",
  "Sweet strawberries blended with mint and lime": "ತಾಜಾ ಸ್ಟ್ರಾಬೆರಿ, ಪುದೀನ ಹಾಗೂ ಲಿಂಬೆ ರಸದ ಸಮನ್ವಯ",
  "Blue Lagoon Mojito": "ಬ್ಲೂ ಲಾಗೂನ್ ಮೊಜಿಟೋ",
  "Tropical blue curaçao with refreshing mint": "ಬ್ಲೂ ಕುರಸಾವ್ ಸುವಾಸನೆಯೊಂದಿಗೆ ತಾಜಾ ಮಿಂಟ್",
  "Virgin Mojito": "ವರ್ಜಿನ್ ಮೊಜಿಟೋ",
  "Non-alcoholic refreshing lime and mint cooler": "ಮದ್ಯರಹಿತ ಲಿಂಬೆ–ಪುದೀನ ತಂಪು ಪಾನೀಯ",
  "Mango Mojito": "ಮ್ಯಾಂಗೋ ಮೊಜಿಟೋ",
  "Tropical mango pulp with fresh mint and lime": "ಹಣ್ಣುಮಯ ಮಾವಿನ ಪಲ್ಪ್, ಮಿಂಟ್ ಹಾಗೂ ಲಿಂಬೆ ರಸದ ಮಿಶ್ರಣ",
  "Watermelon Mojito": "ವಾಟರ್‌ಮೆಲನ್ ಮೊಜಿಟೋ",
  "Refreshing watermelon with mint and citrus": "ಕಲ್ಲಂಗಡಿ ರುಚಿಯ ತಂಪಾದ ಪುದೀನ–ಸಿಟ್ರಸ್ ಪಾನೀಯ",
  "Mojito": "ಮೊಜಿಟೋ",
  "All drinks can be customized to your preferences • Available in various serving sizes": "ಎಲ್ಲಾ ಪಾನೀಯಗಳನ್ನು ನಿಮ್ಮ ಇಷ್ಟಕ್ಕೆ ಅನುಸಾರ ಕಸ್ಟಮೈಸ್ ಮಾಡಬಹುದು • ವಿಭಿನ್ನ ಗಾತ್ರಗಳಲ್ಲಿ ಲಭ್ಯ",
  
  // About Section
  "About Shri Matha Caterers": "ಶ್ರೀ ಮಾತಾ ಕ್ಯಾಟರರ್ಸ್ ಬಗ್ಗೆ",
  "Serving authentic coastal Karnataka cuisine with passion and excellence": "ಉತ್ಸಾಹ ಮತ್ತು ಉತ್ಕೃಷ್ಟತೆಯೊಂದಿಗೆ ಅಧಿಕೃತ ಕರಾವಳಿ ಕರ್ನಾಟಕ ಪಾಕಪದ್ಧತಿಯನ್ನು ಪೂರೈಸುತ್ತಿದೆ",
  "Welcome to Shri Matha Caterers, Manki, Gujjadi. We are a premier catering service specializing in authentic coastal Karnataka cuisine. With years of experience in the industry, we take pride in delivering exceptional culinary experiences for weddings, corporate events, and special celebrations.": "ಶ್ರೀ ಮಾತಾ ಕ್ಯಾಟರರ್ಸ್, ಮಂಕಿ, ಗುಜ್ಜಾಡಿಗೆ ಸ್ವಾಗತ. ನಾವು ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಪಾರಂಪರಿಕ ಪಾಕಪದ್ಧತಿಯಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ ಪ್ರೀಮಿಯಂ ಕ್ಯಾಟರಿಂಗ್ ಸೇವೆ. ವಿವಾಹಗಳು, ಕಾರ್ಪೊರೇಟ್ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ಅದ್ಭುತ ಪಾಕಕಲೆಯ ಅನುಭವಗಳನ್ನು ನೀಡುತ್ತೇವೆ.",
  "Our team of skilled chefs brings traditional recipes to life with the finest ingredients, creating memorable dining experiences that reflect the rich culinary heritage of the Karnataka coast. From traditional thalis to biriyani feasts, every dish is prepared with care and authenticity.": "ನಮ್ಮ ಅನುಭವಿ ಶೆಫ್‌ಗಳ ತಂಡವು ಅತ್ಯುತ್ತಮ ಪದಾರ್ಥಗಳೊಂದಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕವಿಧಾನಗಳನ್ನು ಜೀವಂತಗೊಳಿಸುತ್ತದೆ. ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಪಾಕಕಲೆಯ ಪರಂಪರೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಸ್ಮರಣೀಯ ಭೋಜನ ಅನುಭವಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
  "Quality Service": "ಗುಣಮಟ್ಟದ ಸೇವೆ",
  "Premium ingredients & authentic recipes": "ಉತ್ತಮ ಪದಾರ್ಥಗಳು & ಆಸಲಿ ರೆಸಿಪಿಗಳು",
  "Expert Team": "ಪರಿಣತಿ ಹೊಂದಿದ ತಂಡ",
  "Experienced chefs & staff": "ಅನುಭವಿ ಶೆಫ್‌ಗಳು & ಸಿಬ್ಬಂದಿ",
  "Custom Menus": "ಕಸ್ಟಮ್ ಮೆನುಗಳು",
  "Tailored to your needs": "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ",
  "Our Gallery": "ನಮ್ಮ ಗ್ಯಾಲರಿ",
  
  // Testimonials
  "What Our Clients Say": "ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ",
  "Real experiences from our satisfied customers": "ನಮ್ಮ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರಿಂದ ನೈಜ ಅನುಭವಗಳು",
  
  // Contact
  "Get in Touch": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
  "Book Now": "ಈಗ ಬುಕ್ ಮಾಡಿ",
  "Our Services": "ನಮ್ಮ ಸೇವೆಗಳು",
  "Cuisine Types": "ಪಾಕಪದ್ಧತಿ ಪ್ರಕಾರಗಳು",
  "Contact Information": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
  "Phone": "ದೂರವಾಣಿ",
  "Manki, Gujjadi": "ಮಂಕಿ, ಗುಜ್ಜಾಡಿ",
  "Follow us on Instagram": "Instagram ನಲ್ಲಿ ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ",
  "Weddings": "ವಿವಾಹಗಳು",
  "Corporate Events": "ಕಾರ್ಪೊರೇಟ್ ಕಾರ್ಯಕ್ರಮಗಳು",
  "Birthday Parties": "ಹುಟ್ಟುಹಬ್ಬದ ಆಚರಣೆಗಳು",
  "Special Celebrations": "ವಿಶೇಷ ಆಚರಣೆಗಳು",
  "Veg and Non-Veg Cuisine": "ಸಸ್ಯಾಹಾರಿ ಮತ್ತು ಮಾಂಸಾಹಾರಿ ಪಾಕಪದ್ಧತಿ",
  "Coastal Karnataka Style": "ಕರಾವಳಿ ಕರ್ನಾಟಕ ಶೈಲಿ",
  "Traditional Recipes": "ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕವಿಧಾನಗಳು",
  "Custom Menus Available": "ಕಸ್ಟಮ್ ಮೆನುಗಳು ಲಭ್ಯವಿದೆ",
  
  // Footer
  "Quick Links": "ಕ್ವಿಕ್ ಲಿಂಕ್‌ಗಳು",
  "All rights reserved": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಸಂರಕ್ಷಿತ",
  "Veg and Non-Veg Cuisine for All Your Special Occasions": "ನಿಮ್ಮ ಎಲ್ಲಾ ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ವೆಜ್ ಮತ್ತು ನಾನ್-ವೆಜ್ ಕುಸನ್",
  "Follow Us on Instagram": "ಇನ್‌ಸ್ಟಾಗ್ರಾಂ ನಲ್ಲಿ ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ",
  
  // Hero and Main Content
  "Exquisite vegetarian and non-vegetarian catering for all your special occasions. From traditional ceremonies to grand celebrations, we bring exceptional flavors to your table.": "ನಿಮ್ಮ ಎಲ್ಲಾ ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ಉತ್ಕೃಷ್ಟ ವೆಜಿಟೇರಿಯನ್ ಮತ್ತು ನಾನ್-ವೆಜಿಟೇರಿಯನ್ ಕ್ಯಾಟರಿಂಗ್. ಸಾಂಪ್ರದಾಯಿಕ ಸಮಾರಂಭಗಳಿಂದ ದಿಟ್ಟ ಹಬ್ಬಗಳಿಗೆ, ನಾವು ನಿಮ್ಮ ಮೆಜೆಗೆ ಅಸಾಧಾರಣ ರುಚಿಗಳನ್ನು ತರುತ್ತೇವೆ.",
  "Enquiry Now": "ಈಗ ವಿಚಾರಿಸಿ",
  
  // How It Works
  "How It Works": "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
  "Simple steps to make your event memorable": "ನಿಮ್ಮ ಈವೆಂಟ್ ಅನ್ನು ಅಸಾಧಾರಣವಾಗಿಸಲು ಸರಳ ಹಂತಗಳು",
  "ENQUIRE": "ವಿಚಾರಿಸಿ",
  "Customer enquires via form or call": "ಗ್ರಾಹಕರು ಫಾರ್ಮ್ ಅಥವಾ ಕರೆ ಮೂಲಕ ವಿಚಾರಣೆ ಮಾಡುತ್ತಾರೆ",
  "DISCUSS & PLAN": "ಚರ್ಚಿಸಿ & ಯೋಜನೆ ಮಾಡಿ",
  "We discuss menu, date, and guest details": "ನಾವು ಮೆನು, ದಿನಾಂಕ ಮತ್ತು ಅತಿಥಿಗಳ ವಿವರಗಳನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ",
  "WE CATER": "ನಾವು ಸೇವಿಸೋಣ",
  "Our team prepares and serves delicious food": "ನಮ್ಮ ತಂಡ ರುಚಿಕರವಾದ ಆಹಾರವನ್ನು ತಯಾರಿಸಿ ಸೇವಿಸುತ್ತದೆ",
  "ENJOY EVENT": "ಈವೆಂಟ್ ಅನ್ನು ಆನಂದಿಸಿ",
  "Customers enjoy the event stress-free": "ಗ್ರಾಹಕರು ಯಾವುದೇ ದಮನವಿಲ್ಲದೆ ಈವೆಂಟ್ ಅನ್ನು ಆನಂದಿಸುತ್ತಾರೆ",

  //smc

  // Contact
  "Ready to make your event memorable? Contact us today to discuss your catering needs": "ನಿಮ್ಮ ಈವೆಂಟ್ ಅನ್ನು ಅಸಾಧಾರಣವಾಗಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಇಂದು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ನಿಮ್ಮ ಕ್ಯಾಟರಿಂಗ್ ಅಗತ್ಯಗಳನ್ನು ಚರ್ಚಿಸೋಣ",
  
  // Location
  "Find Us": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
  "Visit us at our location in Manki, Gujjadi": "ಮಾಂಕಿ, ಗುಜ್ಜಡಿ, ಕರ್ನಾಟಕ",
  
  // Additional
  "South Indian": "ದಕ್ಷಿಣ ಭಾರತೀಯ",
  "North Indian": "ಉತ್ತರ ಭಾರತೀಯ"
};

const LanguageToggle = () => {
  const [isKannada, setIsKannada] = useState(false);

  const toggleLanguage = () => {
    setIsKannada(!isKannada);
    
    // Function to translate text nodes
    const translatePage = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Node[] = [];
      let node;
      
      while (node = walker.nextNode()) {
        if (node.textContent && node.textContent.trim()) {
          textNodes.push(node);
        }
      }

      textNodes.forEach(node => {
        const text = node.textContent?.trim();
        if (text) {
          if (!isKannada) {
            // Translate to Kannada
            if (translations[text]) {
              node.textContent = translations[text];
            }
          } else {
            // Translate back to English
            const englishText = Object.keys(translations).find(
              key => translations[key] === text
            );
            if (englishText) {
              node.textContent = englishText;
            }
          }
        }
      });
    };

    // Delay translation to allow DOM to update
    setTimeout(translatePage, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleLanguage}
        size="lg"
        className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 gap-2"
      >
        <Languages className="w-5 h-5" />
        {isKannada ? "English" : "ಕನ್ನಡ"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
