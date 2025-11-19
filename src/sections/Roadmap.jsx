import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { fadeInScale, staggerContainer } from '../animations/motionVariants';
import { textures } from '../assets';

const roadmap = [
  {
    title: '100% Biodegradable Sanitary Pads',
    status: 'Flagship upcoming item',
    detail: 'Advanced plant-based absorbent tech with luxury-grade comfort.'
  },
  {
    title: 'Compostable Household Essentials',
    status: 'Pilot program',
    detail: 'Everyday disposables redesigned with forest-grade purity.'
  },
  {
    title: 'Innovative Packaging Systems',
    status: 'Lab stage',
    detail: 'Smart biodegradable structures with embedded natural fibers.'
  }
];

const Roadmap = () => {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const update = () => setCompact(window.innerWidth < 860);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      id="roadmap"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
        background: `url(${textures.forest_dark}) center/cover no-repeat`,
          filter: 'blur(30px) saturate(1.05) brightness(0.45)',
          transform: 'scale(1.06)'
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(3,9,7,0.94), rgba(9,18,14,0.78))'
        }}
      />
      <div className="section-shell" style={{ position: 'relative', display: 'grid', gap: 40 }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeading
            eyebrow="Upcoming Products"
            title="Premium Roadmap"
            description="Futuristic innovations rooted in nature with glowing milestones."
          />
        </motion.div>
        <div
          className="glass-panel"
          data-parallax
          style={{
            position: 'relative',
            display: 'grid',
            gap: 32,
            padding: compact ? '32px 20px' : '48px 32px'
          }}
        >
          {!compact && (
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: 32,
                bottom: 32,
                width: 2,
                background: 'linear-gradient(180deg, rgba(214,178,99,0.2), rgba(214,178,99,0.7))',
                filter: 'drop-shadow(0 0 8px rgba(214,178,99,0.4))'
              }}
            />
          )}
          {roadmap.map((item, idx) => (
            <motion.article
              key={item.title}
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit,minmax(240px,1fr))',
                gap: 20,
                padding: compact ? '20px 18px' : 24,
                border: '1px solid rgba(214,178,99,0.25)',
                borderRadius: 18,
                background: 'rgba(7,20,15,0.72)',
                position: 'relative'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: compact ? 12 : 18,
                  height: compact ? 12 : 18,
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  boxShadow: '0 0 18px rgba(214,178,99,0.7)',
                  left: compact ? 12 : 'calc(50% - 9px)',
                  top: compact ? 18 : '50%',
                  transform: compact ? 'none' : 'translateY(-50%)'
                }}
              />
              <div style={{ paddingLeft: compact ? 24 : 0 }}>
                <p style={{ letterSpacing: '0.3em', color: 'var(--stone)', fontSize: '0.85rem' }}>{`0${idx + 1}`}</p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    marginTop: 12
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div>
                <p
                  style={{
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontSize: '0.9rem'
                  }}
                >
                  {item.status}
                </p>
                <p style={{ marginTop: 12, color: 'var(--cream)', fontSize: '1rem', lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

