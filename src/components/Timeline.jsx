import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/motionVariants';

const Timeline = ({ items }) => (
  <div style={{ display: 'grid', gap: 32, position: 'relative' }} data-parallax>
    <span
      data-timeline
      style={{
        position: 'absolute',
        left: 12,
        top: 0,
        width: 2,
        height: '100%',
        background: 'linear-gradient(180deg, rgba(214,178,99,0), rgba(214,178,99,0.7))'
      }}
    />
    {items.map((item) => (
      <motion.article
        key={item.title}
        variants={fadeInUp}
        className="glass-panel"
        style={{
          padding: '28px 32px',
          position: 'relative',
          marginLeft: 32
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: -43,
            top: 32,
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: '2px solid var(--gold)',
            background: 'var(--forest-dark)'
          }}
        />
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: 8 }}>
          {item.title}
        </h3>
        <p style={{ color: 'var(--stone)' }}>{item.description}</p>
      </motion.article>
    ))}
  </div>
);

export default Timeline;

