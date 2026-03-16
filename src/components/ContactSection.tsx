import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER_ID as string;
const TEMPLATE_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const projectTypes = [
  "Vídeo Corporativo",
  "Comercial/Publicidad",
  "Boda/Evento",
  "Documental",
  "Video Musical",
  "Otro"
];

const budgetRanges = [
  "< 500€",
  "500€ - 1.000€",
  "1.000€ - 3.000€",
  "> 3.000€",
  "A consultar"
];

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    // Parámetros comunes que usarán ambas plantillas
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'No indicado',
      project_type: formData.projectType || 'No especificado',
      budget: formData.budget || 'No especificado',
      message: formData.message,
    };

    try {
      // 1️⃣ Email de notificación al propietario
      await emailjs.send(SERVICE_ID, TEMPLATE_OWNER, templateParams, PUBLIC_KEY);

      // 2️⃣ Email de confirmación al usuario
      await emailjs.send(SERVICE_ID, TEMPLATE_USER, templateParams, PUBLIC_KEY);

      toast({
        title: "¡Mensaje enviado! ✅",
        description: "En breve recibirás un email de confirmación. ¡Gracias por contactar!",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error al enviar el mensaje ❌",
        description: "Hubo un problema al enviar el formulario. Por favor, contáctame directamente por email o WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-light relative overflow-hidden">
      <span className="section-number">05</span>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="section-title">CREAR</h2>
          <h2 className="section-title text-muted">ALGO</h2>
          <p className="text-muted-foreground mt-6 text-lg">📩 Si necesitas dar forma a tu proyecto audiovisual, estaré encantado de ayudarte. Ponte en contacto conmigo y demos forma a tu proyecto.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <a
              href="mailto:contratacionesmglferrer@gmail.com"
              className="flex items-start gap-4 group"
            >
              <Mail className="w-5 h-5 mt-1 text-muted group-hover:text-accent transition-colors" />
              <div>
                <span className="text-sm text-muted uppercase tracking-wider">Email</span>
                <p className="text-foreground font-medium link-underline mt-1">contratacionesmglferrer@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/34633097053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <Phone className="w-5 h-5 mt-1 text-muted group-hover:text-accent transition-colors" />
              <div>
                <span className="text-sm text-muted uppercase tracking-wider">WhatsApp</span>
                <p className="text-foreground font-medium link-underline mt-1">+34 633 097 053</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-muted" />
              <span className="text-sm text-muted uppercase tracking-wider">Location</span>
              <p className="text-foreground font-medium">Granada, España</p>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nombre *"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input border-b-border text-foreground"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input border-b-border text-foreground"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="form-input border-b-border text-foreground"
              />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="form-input border-b-border text-foreground bg-transparent"
              >
                <option value="" disabled>Tipo de proyecto</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input border-b-border text-foreground bg-transparent"
            >
              <option value="" disabled>Presupuesto estimado</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Mensaje *"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="form-input border-b-border text-foreground resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "ENVIANDO..."
              ) : (
                <>
                  ENVIAR MENSAJE
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
