# CK WebDev Portfolio

A modern portfolio website with a nostalgic Game Boy Color aesthetic, featuring a unique dual-mode experience: traditional portfolio view and an interactive pixel-art game mode.

## Features

- **Retro Game Boy Design**: Pixel-perfect styling inspired by the Game Boy Color era
- **Dual Navigation Modes**:
  - Portfolio Mode: Classic web portfolio with smooth navigation
  - Game Mode: Interactive pixel-art adventure (coming soon with Three.js)
- **Bilingual Support**: Seamless switching between German (primary) and English
- **Responsive Design**: Optimized for all screen sizes
- **Modern Tech Stack**: Built with React 18 + Vite for lightning-fast performance

## Tech Stack

### Frontend
- React 18
- React Router v6
- SCSS with BEM methodology
- Vite (build tool)

### Design
- Custom Game Boy Color palette
- Press Start 2P pixel font
- Retro animations and transitions
- Pixel-perfect borders and shadows

### Features
- i18n system with context API
- Responsive navigation
- Fade animations between modes
- Custom language toggle

## Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── Game/          # Game mode components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Landing.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── i18n/              # Internationalization
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── styles/            # SCSS styles
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:ChrisKlemtz/CK-WebDev_Portfolio.git
cd CK-WebDev_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Landing Page
Choose between two modes:
- **Portfolio Mode**: Explore the traditional web portfolio
- **Game Mode**: Experience an interactive pixel-art adventure (in development)

### Portfolio Mode
- **Home**: Welcome section with quick links
- **About**: Personal introduction and approach
- **Projects**: Showcase of web development projects
- **Tech Stack**: Skills organized by category
- **Contact**: Get in touch information

### Language Support
Toggle between German (DE) and English (EN) with a single click. The language preference persists across all pages during the session.

## Upcoming Features

- [ ] Three.js game mode implementation
- [ ] Dark mode toggle functionality
- [ ] More projects in portfolio
- [ ] Blog section
- [ ] Enhanced animations
- [ ] Performance optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Christoph Klemtz
- Email: dev.christophklemtz@outlook.com
- GitHub: [@ChrisKlemtz](https://github.com/ChrisKlemtz)

---

Built with React + Vite | Designed with nostalgia
