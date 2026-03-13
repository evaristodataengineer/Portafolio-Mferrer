import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  size: 'full' | 'half' | 'large' | 'small' | 'vertical';
  video?: {
    type: 'vimeo' | 'local'
    url: string
  }
}


const projects: Project[] = [
  {
    id: 1,
    title: "De Vicente Dental",
    category: "Corporativo",
    year: "2025",
    description: "Video comercial para la clínica De Vicente Dental en Granada, destinado a sus redes sociales y su página web, con objetivo de mostrar sus instalaciones y transmitir profesionalidad, tecnología y confianza. Este vídeo es solo una parte del trabajo que desarrollamos juntos, donde buscamos transmitir la esencia del lugar: un espacio moderno, cálido y pensado para que cada paciente se sienta cómodo desde el primer momento.",
    image: "/projects/DeVicente/vicente.png",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1140130694"
    },
    size: 'full'
  },
  {
    id: 2,
    title: "DJparaeventos",
    category: "Redes Sociales",
    year: "2025",
    description: "Richard, de DJparaeventos quería transmitir a través de un vídeo la experiencia que vive una pareja durante uno de los días más importantes de su vida cuando contratan sus servicios como DJ de bodas. Mi reto fue convertir un servicio intangible —la música y la animación— en una experiencia visual capaz de transmitir emoción y energía, ayudando a futuras parejas a imaginar cómo se sentirán en su propia celebración. .",
    image: "/projects/Dj/Foto Previa00001373.png",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1138443163"
    },
    size: 'vertical'
  },
  {
    id: 3,
    title: "Cortijo Alameda",
    category: "Hostelería",
    year: "2025",
    description: "Tuve la oportunidad de grabar y editar este video para las redes sociales del Cortijo Alameda, con el objetivo de mostrar cómo se vive una celebración en este entorno único.A lo largo del rodaje quise reflejar la experiencia completa del servicio, desde la ambientación de los espacios, hasta el cuidado servicio de catering, la atención al detalle y el encanto de las instalaciones.",
    image: "/projects/CortijoAlameda/CortijoAlamedafoto 3.webp",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1128819089"
    },
    size: 'vertical'
  },
  {
    id: 4,
    title: "Red Emprende",
    category: "Eventos",
    year: "2024",
    description: "Cobertura audiovisual del evento Red Emprende Granada, donde alumnos de FP participaron en talleres y dinámicas de creación de ideas para impulsar la candidatura de Granada como Capital Europea de la Cultura. Desde mi enfoque como filmmaker, el objetivo fue capturar la energía creativa, la colaboración y el talento joven como motor de innovación cultural.",
    image: "/projects/Evento/APLAUSOS00049511.jpg",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1152834576"
    },
    size: 'vertical'
  },
  {
    id: 5,
    title: "La niña Chica",
    category: "Hostelería",
    year: "2025",
    description: "Vídeo para las redes sociales del restaurante La Niña Chica, cuyo objetivo era capturar el ambiente que tienen los domingos en el sitio, con música en vivo, gente divirtiéndose y un ambiente genial.",
    image: "/projects/Evento/niñachica.png",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1128827636"
    },
    size: 'vertical'
  },
  {
    id: 7,
    title: "De Vicente Dental",
    category: "Entevista",
    year: "2025",
    description: "Vídeo para las redes sociales de De Vicente Dental en Granada, formato entrevista con un set de iluminación de dos puntos.",
    image: "/projects/Entrevista/entre.png",
    video: {
      type: 'vimeo',
      url: "https://player.vimeo.com/video/1140137791"
    },
    size: 'full'
  },


];

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentIndex(projects.findIndex(p => p.id === project.id));
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const getSizeClasses = (size: Project['size']) => {
    switch (size) {
      case 'full':
        return 'col-span-1 md:col-span-2 aspect-video';
      case 'half':
        return 'col-span-1 aspect-[4/3]';
      case 'large':
        return 'col-span-1 md:col-span-1 aspect-[4/3]';
      case 'small':
        return 'col-span-1 aspect-square';
      case 'vertical':
        return 'col-span-1 aspect-[9/12]';
      default:
        return 'col-span-1 aspect-video';
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 section-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-muted text-sm tracking-widest uppercase">Trabajo Seleccionado</span>
          <h2 className="section-title mt-4 text-foreground-inverted">PROYECTOS</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`project-card ${getSizeClasses(project.size)}`}
              onClick={() => openProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
                loading="lazy"
              />
              <div className="project-card-overlay">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  <Play className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-xs uppercase tracking-widest text-muted mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                  <p className="text-sm mt-2 text-muted">{project.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background-inverted/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeProject}
        >
          <button
            onClick={closeProject}
            className="absolute top-6 right-6 text-foreground-inverted hover:text-accent transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground-inverted hover:text-accent transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground-inverted hover:text-accent transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
              {selectedProject.video ? (
                selectedProject.video.type === 'vimeo' ? (
                  <iframe
                    src={selectedProject.video.url}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={selectedProject.title}
                  />
                ) : (
                  <video
                    src={selectedProject.video.url}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                )
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="text-foreground-inverted">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-widest text-muted">{selectedProject.category}</span>
                <span className="text-xs text-muted">•</span>
                <span className="text-xs text-muted">{selectedProject.year}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground max-w-2xl">{selectedProject.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default WorkSection;
