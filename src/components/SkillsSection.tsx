import { motion } from 'framer-motion';

const skillCategories = [

  {
    title: "PRODUCCIÓN",
    skills: ["Grabación de vídeo", "Dirección de fotografía", "Iluminación", "Storytelling"]
  },
  {
    title: "POST-PRODUCCIÓN",
    skills: ["Edición de vídeo", "Color Grading", "Motion Graphics", "Diseño de sonido"]
  },
  {
    title: "EXTRA",
    skills: ["Subtitulado accesible (UNE 153010)", "Mejora de vídeo con IA (Topaz)", "Streaming en directo (OBS)", "Adaptación para redes sociales (vertical / reels / shorts)"]
  }
];

const software = [
  { name: "DaVinci Resolve", icon: "/software-icons/davinci-resolve.png" },
  { name: "Adobe Premiere Pro", icon: "/software-icons/premiere-pro.png" },
  { name: "Adobe After Effects", icon: "/software-icons/after-effects.png" },
  { name: "Adobe Photoshop", icon: "/software-icons/photoshop.png" },
  { name: "OBS Studio", icon: "/software-icons/obs-studio.png" },
  { name: "Topaz Video AI", icon: "/software-icons/topaz-video-ai.png" }
];

const languages = [
  { code: "ES", level: "Nativo" },
  { code: "EN", level: "Intermediate" },
  { code: "FR", level: "Basic" }
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 section-dark relative overflow-hidden">
      <span className="section-number section-number-dark">02</span>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-muted text-sm tracking-widest uppercase">Habilidades</span>
          <h2 className="section-title mt-4 text-foreground-inverted">¿QUÉ HAGO?</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 md:gap-16 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-lg font-display font-bold text-accent mb-6 tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-foreground-inverted/80 hover:text-foreground-inverted transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Software */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm text-muted uppercase tracking-widest mb-8">Software Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {software.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card-inverted p-4 rounded-sm text-center hover:bg-accent/10 transition-colors group"
              >
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-foreground-inverted/70 group-hover:text-foreground-inverted transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
