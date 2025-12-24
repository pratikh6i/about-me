# About Me - Portfolio Web Application

A high-performance, visually immersive "About Me" portfolio web application built with React (Vite) frontend and Node.js/Express backend.

## ✨ Features

- **Bento Grid Layout**: Apple/Google-inspired masonry layout with glassmorphism effects
- **Bilingual Support**: English ⟷ Marathi with smooth text transitions
- **Dynamic Media API**: Backend endpoint that scans `/public/assets` folder
- **Lazy Loading**: All images load lazily with stylish SVG placeholders
- **Framer Motion Animations**: Cards hover, scale, and reveal with smooth animations
- **Cloud Hero Trophy**: Special card highlighting APAC Top 3 achievement
- **Google Skill Boost Integration**: Badge showcase with profile link

## 🛠️ Tech Stack

**Frontend:**
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Google Fonts (Inter + Mukta)

**Backend:**
- Node.js + Express
- Dynamic media scanning API

**Testing:**
- Vitest
- React Testing Library

**CI/CD:**
- GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/pratikh6i/about-me.git
cd about-me

# Install backend dependencies
npm install

# Install frontend dependencies
cd client && npm install
```

### Development

```bash
# Run both frontend and backend in development mode
npm run dev

# Or run separately:
# Backend only
npm run server:dev

# Frontend only (from /client)
cd client && npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:3001`

### Testing

```bash
# Run all tests
npm run test

# Run frontend tests
cd client && npm run test

# Run tests in watch mode
cd client && npm run test:watch
```

### Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
about-me/
├── server.js                    # Express server
├── package.json                 # Backend dependencies
├── .github/workflows/           # CI/CD pipelines
├── public/assets/               # Media files
├── tests/                       # API tests
└── client/                      # React frontend
    ├── src/
    │   ├── components/          # UI components
    │   ├── contexts/            # React contexts
    │   ├── data/                # Translations
    │   └── tests/               # Frontend tests
    └── public/                  # Static assets
```

## 🎨 Customization

### Update Profile Info
Edit `client/src/data/translations.js` to update:
- Name and role
- Bio and description
- All text content in both English and Marathi

### Add Social Links
Edit `client/src/components/SocialLinks.jsx`:
```javascript
const socialLinks = [
  { id: 'github', url: 'YOUR_GITHUB_URL', ... },
  { id: 'linkedin', url: 'YOUR_LINKEDIN_URL', ... },
];
```

### Update Skill Boost Profile
Edit `client/src/components/SkillBoostCard.jsx`:
```javascript
const skillBoostUrl = 'YOUR_SKILL_BOOST_PROFILE_URL';
```

### Add Media Assets
Place images in `/public/assets/` folder. They will be automatically detected by the `/api/media` endpoint.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Pratik Shetti**
- GitHub: [@pratikh6i](https://github.com/pratikh6i)
