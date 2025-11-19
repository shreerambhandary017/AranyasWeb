import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { fadeInUp, staggerContainer, imageHover } from '../animations/motionVariants';
import { textures } from '../assets';

const leaders = [
  {
    name: 'Shreeram Bhandary',
    title: 'Managing Director',
    email: 'bhandaryshreeram@gmail.com',
    phone: '+91 7760703887',
    image: textures.leader1,
    quote: 'I started Aranyas to create products that feel honest — made from what nature already gives us, without taking more than we need.',
    quoteTranslation: 'ಪ್ರಕೃತಿಯಿಂದ ತೆಗೆದುಕೊಳ್ಳುವುದು ಅಗತ್ಯವಷ್ಟೆ; ಉಳಿದುದನ್ನು ಪ್ರಕೃತಿಗೆ ಹಿಂತಿರುಗಿಸುವುದು ನಮ್ಮ ಕರ್ತವ್ಯ.',
    origin: '- ಶ್ರೀರಾಮ್'
  },
  {
    name: 'Sameeksha Shetty',
    title: 'Director, Marketing & Sales Head',
    email: 'sameekshashetty266@gmail.com',
    phone: '+91 7022560892 · +971 568549664',
    image: textures.leader2,
    quote: 'This is not just a business for me; it’s a promise — to keep nature in the center of everything I make, to build sustainably in India, and to show that design and responsibility can grow together.',
    quoteTranslation: 'ಪ್ರಕೃತಿ ನೀಡುವುದು ದಾನ; ಅದನ್ನು ಗೌರವಿಸುವುದು ನಮ್ಮ ಧರ್ಮ.',
    origin: '- ಸಮೀಕ್ಷ'
  }
];

const Leadership = () => (
  <section
    id="leadership"
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
        background: `url(${textures.forest_alt}) center/cover no-repeat`,
        filter: 'blur(32px) saturate(1.05) brightness(0.55)',
        transform: 'scale(1.06)'
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, rgba(5,12,9,0.92), rgba(5,10,8,0.82))'
      }}
    />
    <div className="section-shell" style={{ position: 'relative', display: 'grid', gap: 40 }}>
      <SectionHeading
        eyebrow="Leadership"
        title="Guided by visionaries"
        description="Premium stewardship grounded in nature and global commerce."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 36
        }}
      >
        {leaders.map((leader) => (
          <motion.article
            key={leader.name}
            variants={fadeInUp}
            style={{
              border: '1px solid rgba(214,178,99,0.32)',
              boxShadow: '0 24px 60px rgba(4,12,9,0.55)',
              transition: 'transform 0.45s ease, box-shadow 0.45s ease',
              cursor: 'pointer',
              background:
                'linear-gradient(135deg, rgba(9,28,21,0.9) 0%, rgba(3,10,7,0.9) 100%)',
              borderRadius: 32,
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
            whileHover={{ y: -10, boxShadow: '0 35px 70px rgba(3,10,7,0.75)' }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background:
                  'radial-gradient(600px circle at 20% 10%, rgba(214,178,99,0.18), transparent)'
              }}
            />
            <motion.div
              variants={imageHover}
              initial="rest"
              whileHover="hover"
              style={{
                width: 140,
                height: 140,
                borderRadius: '38px',
                overflow: 'hidden',
                marginBottom: 18,
                boxShadow: '0 18px 35px rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.1)',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <motion.img
                src={leader.image}
                alt={leader.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
            </motion.div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.8rem',
                  marginBottom: 4
                }}
              >
                {leader.name}
              </h3>
              <p
                style={{
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginTop: 0,
                  fontSize: '0.85rem'
                }}
              >
                {leader.title}
              </p>
              <div
                style={{
                  marginTop: 18,
                  padding: '18px 20px',
                  border: '1px solid rgba(245,240,230,0.12)',
                  borderRadius: 18,
                  background: 'rgba(6,18,14,0.6)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  color: 'var(--cream)'
                }}
              >
                <p style={{ margin: 0, fontSize: '1rem' }}>"{leader.quote}"</p>
                {leader.quoteTranslation && (
                  <p
                    style={{
                      margin: '8px 0 0',
                      color: 'var(--stone)',
                      fontStyle: 'normal',
                      fontSize: '0.9rem'
                    }}
                  >
                    {leader.quoteTranslation}
                  </p>
                )}
                <small style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}>
                  {leader.origin}
                </small>
              </div>
              <p style={{ marginTop: 18, color: 'var(--stone)', letterSpacing: '0.05em' }}>
                {leader.email}
              </p>
              <p style={{ color: 'var(--stone)', letterSpacing: '0.05em' }}>{leader.phone}</p>
              <a
                href={`mailto:${leader.email}`}
                className="cta-button"
                style={{
                  marginTop: 20,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  textAlign: 'center'
                }}
              >
                Contact
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Leadership;

