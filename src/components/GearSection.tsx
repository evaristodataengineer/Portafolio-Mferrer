import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface GearItem {
  name: string;
  category: string;
  specs: string[];
  image?: string;
  icon?: typeof Lightbulb;
}

const gearItems: GearItem[] = [
  {
    name: "Sony Fx3",
    category: "CÁMARA",
    specs: ["Full-Frame Cinema camera", "4K 60fps 4:2:2 10bit", "S-Log3"],
    image: "/projects/Camaras/FX3.webp"
  },
  {
    name: "Sigma 24-70mm F/2.8",
    category: "OBJETIVO",
    specs: ["DG DN II Art", "Sony E-Mount", "F/2.8"],
    image: "/projects/Camaras/Sigma.webp"
  },
  {
    name: "Atomos Ninja V",
    category: "MONITOR",
    specs: ["4K Monitor / Recorder", "Apple ProRes", "RAW"],
    image: "/projects/Camaras/Atomos.webp"
  }
];

const GearSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gear" className="py-24 md:py-32 section-light relative overflow-hidden">
      <span className="section-number">03</span>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-muted text-sm tracking-widest uppercase">Material</span>
          <h2 className="section-title mt-4">MI EQUIPO</h2>
          <p className="text-muted-foreground mt-4 text-lg">Herramientas que dan vida a las historias</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {gearItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-secondary/50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-full bg-gradient-to-br from-secondary to-muted/30 flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-all duration-500"
                  />
                ) : item.icon ? (
                  <div className="py-16">
                    <item.icon className="w-20 h-20 text-muted-foreground/30 group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-medium tracking-widest">{item.category}</span>
                <h3 className="text-xl font-display font-bold mt-2 mb-4">{item.name}</h3>
                <ul className="space-y-1">
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">¿Listo para darle vida a tu proyecto?</p>
          <button onClick={handleScrollToContact} className="btn-primary">
            ¡VAMOS A HABLAR!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GearSection;
