import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { fadeInUp, staggerContainer, hoverLift } from '../animations/motionVariants';
import IconGlyph from '../components/IconGlyph';

const contacts = [
  {
    label: 'Address',
    detail: 'Bhandary’s Estate, Kuriyala, Bantwal, 574211',
    icon: 'location'
  },
  {
    label: 'Company Email',
    detail: 'director@aranyasglobal.com',
    icon: 'contact'
  },
  {
    label: 'Phones',
    detail: '+91 7760703887 · +91 7022560892 · +971 568549664',
    icon: 'phone'
  }
];

const Contact = () => (
  <section id="contact">
    <div className="section-shell" style={{ display: 'grid', gap: 40 }}>
      <div>
        <p style={{ letterSpacing: '0.5em', color: 'var(--stone)' }}>Connect</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginTop: 12 }}>
          Address & Contact
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 32
        }}
      >
        {contacts.map((item) => (
          <motion.article
            key={item.label}
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            className="glass-panel"
            data-parallax
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IconGlyph type={item.icon} />
            </motion.div>
            <p style={{ letterSpacing: '0.3em', color: 'var(--stone)', marginTop: 12 }}>{item.label}</p>
            <p style={{ marginTop: 10 }}>{item.detail}</p>
          </motion.article>
        ))}
      </motion.div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 32,
          alignItems: 'start'
        }}
      >
        <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
          <iframe
            title="Aranyas Private Limited"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.40536514809!2d75.01322499999999!3d12.939112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a9a650879c65%3A0x81d61e3dc1ca9f66!2sAranyas%20Private%20Limited!5e1!3m2!1sen!2sin!4v1763616363246!5m2!1sen!2sin" 
            width="100%"
            height="400"
            style={{ border: 0, filter: 'grayscale(50%) contrast(1.2) brightness(0.8)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;

