import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/motionVariants';

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div variants={fadeInUp} className="section-heading" style={{ marginBottom: 48 }}>
    <p
      style={{
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        color: 'var(--stone)'
      }}
    >
      {eyebrow}
    </p>
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2.3rem, 4vw, 3.6rem)',
        marginTop: 12,
        color: 'var(--cream)'
      }}
    >
      {title}
    </h2>
    {description && (
      <p style={{ marginTop: 18, maxWidth: 640, color: 'var(--stone)' }}>{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;

