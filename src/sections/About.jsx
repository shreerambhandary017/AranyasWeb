import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { staggerContainer, fadeInUp, scrollReveal, hoverLift } from '../animations/motionVariants';
import { textures } from '../assets';

const timelineItems = [
  {
    title: 'Founded in Dakshina Kannada’s Lush Heartland',
    description: 'Born among the rolling estates and sacred groves — rooted in centuries of sustainable cultivation.'
  },
  {
    title: 'Nature-Powered Engineering',
    description: 'State-of-the-art innovation harnessing Indian sugarcane and plant fibers, moving beyond petro-plastics for a clean planet.'
  },
  {
    title: 'Global Luxury, Indian Integrity',
    description: 'Trusted by eco-conscious luxury brands across continents. Every pack speaks for the forest.'
  }
];

const highlights = [
  'Zero-waste closed loop facility',
  'Certified food-contact & export quality',
  'Premium custom print and emboss',
  'Bio-renewable, compostable, future-proofed'
];

const About = () => (
  <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: `url(${textures.forest_dark}) center/cover no-repeat`,
        filter: 'blur(28px) saturate(1.1) brightness(0.6)',
        transform: 'scale(1.08)'
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(140deg, rgba(10,35,18,0.85), rgba(16,38,28,0.66))'
      }}
    />
    <div className="section-shell" style={{ position: 'relative', display: 'grid', gap: 52, gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -4, scale: 1.01 }}
        className="glass-panel"
        data-parallax
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: '-40% 20% auto auto',
            width: 270,
            height: 270,
            background: 'radial-gradient(circle, rgba(214,178,99,0.18), transparent 62%)',
            filter: 'blur(10px)'
          }}
        />
        <motion.p variants={fadeInUp} style={{ letterSpacing: '0.6em', color: 'var(--gold)', fontWeight: 600 }}>
          Trusted Origins
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.6rem',
            marginTop: 11
          }}
        >
          Our Story: Circular by Nature
        </motion.h2>
        <motion.p variants={fadeInUp} style={{ marginTop: 20, color: 'var(--cream)', fontSize: '1.12rem' }}>
          Every Aranyas product carries the legacy of Indian agriculture and a global vision for earth’s future. We combine ancestral wisdom, luxury design, and certified engineering for packaging that does real good.
        </motion.p>
        <motion.ul variants={fadeInUp} style={{ marginTop: 25, listStyle: 'none', display: 'grid', gap: 12 }}>
          {highlights.map(line => (
            <li key={line} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%' }} />
              <p>{line}</p>
            </li>
          ))}
        </motion.ul>
      </motion.div>
      <Timeline items={timelineItems} />
    </div>
  </section>
);

export default About;

