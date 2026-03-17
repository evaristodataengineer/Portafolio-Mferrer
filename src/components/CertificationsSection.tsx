import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const certifications = [
  {
    year: "2024",
    title: "MÁSTER Vídeo Profesional",
    institution: "RBG Escuela",
    location: "Online"
  },
  {
    year: "2023",
    title: "MÁSTER Postproducción Audiovisual",
    institution: "The Core, Madrid",
    location: "Online"
  },
  {
    year: "2022",
    title: "MÁSTER Audio-descripción & Subtitulación",
    institution: "Instituto Albaida",
    location: "Almería"
  },
  {
    year: "2021",
    title: "FP Superior Realización Audiovisual",
    institution: "Curva Polar",
    location: "Granada"
  },

];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 section-dark relative overflow-hidden">
      <span className="section-number section-number-dark">04</span>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-muted text-sm tracking-widest uppercase">EDUCACIÓN</span>
          <h2 className="section-title mt-4 text-foreground-inverted">FORMACIÓN</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-inverted transform md:-translate-x-1/2" />

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Year Marker */}
              <div className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center transform md:-translate-x-1/2 z-10`}>
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <span className="text-accent font-display font-bold text-2xl">{cert.year}</span>
                <h3 className="text-xl font-display font-bold text-foreground-inverted mt-2">{cert.title}</h3>
                <p className="text-muted-foreground mt-1">{cert.institution}</p>
                <p className="text-muted text-sm">{cert.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
