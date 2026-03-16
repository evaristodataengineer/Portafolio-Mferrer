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
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 section-light">
      <div className="text-center">
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
          <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground">
            Filmmaker & Video Editor
          </p>
          <p className="text-sm md:text-base mt-3 text-muted tracking-widest uppercase">
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
