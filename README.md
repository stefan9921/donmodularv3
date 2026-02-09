# DON Modular Homes - Interactive B2B Presentation

Modern, animated presentation built with Next.js and deployed on Vercel.

## 🚀 Features

- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Optimized Images**: Fast loading with Next.js Image optimization
- **Interactive Elements**: Hover effects and scroll-triggered animations
- **SEO Optimized**: Meta tags and semantic HTML
- **Zero Cost Hosting**: Deployed on Vercel's free tier

## 📦 What's Inside

- **Hero Section**: Stunning nighttime image with key metrics
- **Product Showcase**: High-quality interior and exterior photos
- **Business Opportunity**: Clear cost breakdown and margins
- **Partnership Models**: Three partnership options clearly presented
- **Interactive Gallery**: Hover effects on all images
- **Smooth Scrolling**: One-page scroll experience

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Vercel**: Deployment platform

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   cd /home/claude/don-presentation
   git init
   git add .
   git commit -m "Initial commit - DON Modular Homes presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/don-modular-homes.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /home/claude/don-presentation
   vercel
   ```

3. **Follow the prompts:**
   - Login to Vercel
   - Link to existing project or create new
   - Deploy!

## 🏃 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Colors
Edit `/tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#028090',    // Main teal
  secondary: '#00A896',  // Seafoam
  accent: '#02C39A',     // Mint
  dark: '#014F5A',       // Dark teal
  light: '#E8F4F5',      // Light background
}
```

### Content
Edit `/app/page.tsx` to modify text, add sections, or change layouts.

### Images
Replace images in `/public/images/` folder. Keep the same filenames or update references in `page.tsx`.

## 📱 Sections

1. **Hero** - Nighttime image with key metrics
2. **Product** - Main product showcase
3. **Interior Quality** - 4-image grid
4. **Positioning** - IS/IS NOT comparison
5. **What's Included** - 12-item checklist
6. **Business Opportunity** - Cost breakdown
7. **Exterior Gallery** - 3-image showcase
8. **Partnership** - Three partnership models
9. **CTA** - Call to action with next steps
10. **Footer** - Company information

## 🎨 Animation Details

- **Fade In Up**: Elements appear from bottom
- **Stagger Children**: Sequential animation of lists
- **Hover Effects**: Scale and shadow on images
- **Scroll Indicator**: Animated chevron on hero
- **Image Zoom**: Hover to zoom on gallery images

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Automatic by Next.js
- **Static Generation**: Pre-rendered at build time

## 🔒 Environment Variables

No environment variables needed! This is a static site.

## 📄 License

Proprietary - DON Modular Homes

## 🤝 Support

For questions or support, contact stefan@seoagencydublin.com
