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
            title="Aranyas Estate"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7921.603523121146!2d75.012917!3d12.939056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3585fe21f7f07%3A0x7eea8a1ebe807c63!2s12%C2%B056'20.6%22N%2075%C2%B000'46.5%22E!5e0!3m2!1sen!2sin!4v1732011220000!5m2!1sen!2sin"
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

