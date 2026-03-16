import { Instagram, Linkedin } from 'lucide-react';

// Custom SVG icons for TikTok and Vimeo
const TikTokIcon = () => (
  <svg className="w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const VimeoIcon = () => (
  <svg className="w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-8 md:py-10 section-dark border-t border-border-inverted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Media Links */}
          <div className="flex items-center gap-8 ">
            <a
              href="https://instagram.com/mglferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground-inverted transition-colors transform hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@mglferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground-inverted transition-colors transform hover:scale-110 transition-transform"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-ferrer-%C3%A1lvarez-621973254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground-inverted transition-colors transform hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-6 md:h-6" />
            </a>
            <a
              href="https://vimeo.com/mglferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground-inverted transition-colors transform hover:scale-110 transition-transform"
              aria-label="Vimeo"
            >
              <VimeoIcon />
            </a>
          </div>

          {/* Copyright and Tagline */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
            <p className="text-sm text-muted">
              © 2026 Miguel Ferrer
            </p>
            <span className="hidden md:inline text-muted">•</span>
            <p className="text-sm text-muted">
              Designed for filmmakers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
