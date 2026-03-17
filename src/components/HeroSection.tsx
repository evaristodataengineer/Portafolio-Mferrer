import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  const handleScrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 section-light overflow-hidden">
      {/* Camera background image — desaturated and low opacity */}
      <img
        src="/projects/FotoInicio.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'grayscale(100%)',
          opacity: 0.17,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block"
            custom={0}
            variants={titleVariants}
          >
            MIGUEL
          </motion.span>
          <motion.span
            className="block"
            custom={1}
            variants={titleVariants}
          >
            FERRER
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <p className="text-xl md:text-2xl font-light tracking-wide text-foreground">
            Filmmaker & Video Editor
          </p>
          <p className="text-sm md:text-base mt-3 tracking-widest uppercase text-foreground">
            Granada, España
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={handleScrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors cursor-pointer"
        style={{ position: 'absolute', zIndex: 1 }}
        aria-label="Scroll to work"
      >
        <span className="text-xs uppercase tracking-widest">Desliza</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
