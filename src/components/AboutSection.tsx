import { motion } from 'framer-motion';
import { MapPin, Award, Car, Briefcase } from 'lucide-react';

const highlights = [
  { icon: MapPin, text: "Granada, España" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-light relative overflow-hidden">
      <span className="section-number">01</span>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/projects/SobreMi/IMG_2636.jpg"
                alt="Miguel Ferrer - Filmmaker"
                className="w-full h-full object-cover object-[80%_85%] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-muted text-sm tracking-widest uppercase">MGLFERRER</span>
            <h2 className="section-title mt-4 mb-8">SOBRE MI</h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy Miguel Ferrer, filmmaker de 24 años, y el vídeo ha sido parte de mi vida desde que tengo memoria.
                Desde muy joven tuve claro que quería dedicarme al mundo audiovisual, y
                hoy transformo esa pasión en proyectos que buscan impactar y conectar con el espectador.
                Me considero una persona muy detallista, con especial interés por las cámaras, la dirección de fotografía, la iluminación, la edición y el etalonaje. Disfruto cuidando cada plano para que el resultado final tenga personalidad y funcione tanto a nivel visual como narrativo.
              </p>
              <p>
                Comencé mi carrera como freelance en 2025 y desde entonces he trabajado en una amplia variedad de proyectos para distintos clientes: vídeos para redes sociales de negocios de hostelería en Granada, cobertura de eventos, videoclips, entrevistas, documentales, conciertos y más. Me gusta explorar nuevos formatos y afrontar nuevos retos, por lo que no me cierro a otro tipo de proyectos audiovisuales.
              </p>
              <p>
                En cada trabajo mi objetivo es claro: crear vídeos que conecten con el público objetivo del cliente y cumplan su propósito, ya sea promocionar, emocionar o contar una historia.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
