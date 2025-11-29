# Shri Matha Caterers Website - Customization Guide

## Overview
This is a fully responsive catering business website for Shri Matha Caterers, Manki, Gujjadi.

## File Structure
```
src/
├── assets/              # Images and media files
│   ├── hero-food.jpg   # Hero section background image
│   ├── menu-image.png  # Original menu reference
│   └── visiting-card.png # Business card reference
├── components/          # React components
│   ├── Navbar.tsx      # Top navigation bar
│   ├── Hero.tsx        # Hero/landing section
│   ├── Menu.tsx        # Menu combos section
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx     # Contact details and booking
│   ├── Location.tsx    # Google Maps embed
│   └── Footer.tsx      # Footer section
├── pages/
│   └── Index.tsx       # Main page (combines all sections)
└── index.css           # Design system and color variables
```

## How to Customize

### 1. Update Images

**Hero Image:**
- Location: `src/assets/hero-food.jpg`
- To replace: Add your image to `src/assets/` folder
- Update in: `src/components/Hero.tsx` (line with `import heroImage`)
- Recommended size: 1920x1080px

**Menu Reference Images:**
- Original images stored in `src/assets/` for reference
- These are not displayed on the website (menu is text-based)

### 2. Edit Menu Content

**Location:** `src/components/Menu.tsx`

**Find the `menuCombos` array (starts around line 3)**

To add a new combo:
```javascript
{
  name: "Your Combo Name",
  items: [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

To edit existing combo:
- Change the `name` field for combo title
- Modify items in the `items` array
- Add or remove items as needed

### 3. Modify Testimonials

**Location:** `src/components/Testimonials.tsx`

**Find the `testimonials` array (starts around line 4)**

To edit or add testimonials:
```javascript
{
  name: "Customer Name",
  event: "Event Type",
  review: "The testimonial text goes here...",
  rating: 5  // Number from 1 to 5
}
```

### 4. Update Contact Details

**Location:** `src/components/Contact.tsx`

**Phone Number:**
- Find: `tel:9964237867` (line ~31)
- Find: `+91 9964237867` (line ~32)
- Replace with your phone number

**Address:**
- Find the location text (around lines 42-45)
- Update with your complete address

### 5. Change Google Form Link

**The booking form link appears in 3 places:**

1. **Navbar** (`src/components/Navbar.tsx` - line ~56)
2. **Hero section** (`src/components/Hero.tsx` - line ~30)
3. **Contact section** (`src/components/Contact.tsx` - line ~109)

Find and replace this URL:
```
https://docs.google.com/forms/d/e/1FAIpQLSe6_iuwBCmeELKTTZsMpBl51_VaEs_FyRH6Bd3Arv0Um0vXMg/viewform?usp=sharing&ouid=112100211612587863454
```

### 6. Update Google Maps Location

**Location:** `src/components/Location.tsx`

**Find the `<iframe>` tag (around line 22)**

To change the map:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in the code

**Important:** Keep the surrounding div structure and styling intact.

### 7. Customize Colors and Design

**Location:** `src/index.css`

**Main color variables (lines 11-28):**
```css
--primary: 28 85% 55%;      /* Main orange color */
--secondary: 340 75% 45%;   /* Deep red color */
--accent: 45 95% 60%;       /* Gold/yellow color */
--background: 35 25% 97%;   /* Page background */
--foreground: 25 15% 15%;   /* Text color */
```

**To change colors:**
- Colors are in HSL format: `hue saturation% lightness%`
- Hue: 0-360 (color wheel position)
- Saturation: 0-100% (color intensity)
- Lightness: 0-100% (brightness)

**Example:** To make primary color more red:
- Change `--primary: 28 85% 55%;` to `--primary: 10 85% 55%;`

### 8. Edit Business Name and Tagline

**Navbar:**
- File: `src/components/Navbar.tsx`
- Line ~40: Change "Shri Matha Caterers"

**Hero Section:**
- File: `src/components/Hero.tsx`
- Line ~19: Change main heading
- Line ~23: Change location
- Line ~24: Change tagline/description

**Footer:**
- File: `src/components/Footer.tsx`
- Line ~10: Change footer brand name

### 9. Update Page Title and Meta Tags

**Location:** `index.html` (in root folder)

**Find and update:**
- Line 6: `<title>Your Business Name</title>`
- Line 7: Meta description
- Line 10-11: Social media preview title and description

## Common Tasks

### Add a New Menu Combo
1. Open `src/components/Menu.tsx`
2. Find the `menuCombos` array
3. Add a new object before the closing `]`
4. Follow the existing format

### Change Phone Number Site-Wide
Search for `9964237867` in all files and replace with your number.
Also search for `tel:9964237867` for clickable phone links.

### Modify Navigation Links
**Location:** `src/components/Navbar.tsx`
Find `navLinks` array (around line 25) to add/remove/rename menu items.

### Adjust Section Spacing
Look for `py-20` in component files - this controls top/bottom padding.
- `py-16` = less space
- `py-24` = more space

## Technical Notes

- Website is built with React, TypeScript, and Tailwind CSS
- All colors use HSL format for consistency
- Smooth scroll behavior is implemented for navigation
- Fully responsive design works on mobile, tablet, and desktop
- Images are optimized for web performance

## Need Help?

If you're not comfortable editing code:
1. Take screenshots of the sections you want to change
2. Note the specific text/colors/images you want updated
3. Share with a web developer with this README

## Development Commands

To run locally:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

---

Website created for Shri Matha Caterers, Manki, Gujjadi
Contact: +91 9964237867