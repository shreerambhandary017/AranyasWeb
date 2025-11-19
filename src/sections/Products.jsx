import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollReveal, slideInLeft, slideInRight, hoverLift, hoverGlow, hoverScale, imageHover } from '../animations/motionVariants';
import IconGlyph from '../components/IconGlyph';
import { textures } from '../assets';

const features = [
  { icon: 'compostable', label: '100% Compostable' },
  { icon: 'foodsafe', label: 'Certified Food Safe' },
  { icon: 'starch', label: 'Starch-Based Strength' },
  { icon: 'custom', label: 'Custom Branding' },
];

const gallery = [
  { src: textures.carry_light, alt: 'Lightweight biodegradable carry bags for daily retail use' },
  { src: textures.carry_heavy, alt: 'High-strength compostable carry bags for offices and events' },
  { src: textures.carry_bulk, alt: 'Bulk assorted carry bag sizes for schools, colleges, and corporates' },
  { src: textures.garbage_roll, alt: 'Compostable garbage liners supplied on rolls for facility programs' },
];

const printGallery = [
  { src: textures.carry_light_alt, title: 'Retail & Community Carry Bags', desc: 'Local shops, hostels, and campus kiosks branding their biodegradable totes.' },
  { src: textures.carry_heavy, title: 'Executive & Office Kits', desc: 'Premium-strength totes for boardrooms, welcome hampers, and corporate gifting.' },
  { src: textures.garbage_inuse, title: 'Garbage & Facility Programs', desc: 'Thick liners for dorms, hospitals, and panchayat drives needing reliable disposal.' },
  { src: textures.printing_process, title: 'In-House Printing & QA', desc: 'Dedicated biodegradable inks, logo approvals, and strength testing under one roof.' },
];

const PrintingSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % printGallery.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scrollReveal}
      className="glass-panel"
      style={{
        padding: 0,
        overflow: 'hidden',
        minHeight: 380,
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(8,27,20,0.85), rgba(12,32,24,0.9))',
        border: '1.5px solid rgba(214, 178, 99, 0.25)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(214,178,99,0.1)'
      }}
    >
      {/* Premium decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 200,
        height: 200,
        background: 'radial-gradient(circle, rgba(214,178,99,0.12), transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />
      {printGallery.map((item, idx) => (
  <motion.article
    key={item.title}
    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
    animate={{
      opacity: idx === index ? 1 : 0,
      x: idx === index ? 0 : (idx % 2 === 0 ? -30 : 30),
      scale: idx === index ? 1 : 0.95
    }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    style={{
      position: idx === index ? "relative" : "absolute",
      inset: 0,
      minHeight: 380,
      display: "flex",
      flexDirection: window.innerWidth < 768 ? "column" : "row", // <<< RESPONSIVE LAYOUT
      alignItems: "center",
      gap: window.innerWidth < 768 ? 20 : 40,
      padding: window.innerWidth < 768 ? "24px" : "40px 50px",
      zIndex: idx === index ? 1 : 0
    }}
  >
    {/* IMAGE BLOCK */}
    <motion.div
      variants={imageHover}
      initial="rest"
      whileHover="hover"
      style={{
        flex: "0 0 auto",
        width: window.innerWidth < 768 ? "100%" : "45%",
        background: "linear-gradient(145deg, #1a2d22, #0f1a15)",
        borderRadius: 28,
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 12px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(214,178,99,0.15)",
        border: "1px solid rgba(214,178,99,0.2)"
      }}
    >
      <motion.img
        src={item.src}
        alt={item.title}
        style={{
          width: "100%",
          maxWidth: window.innerWidth < 768 ? "100%" : 320,
          height: "auto",
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          objectFit: "cover"
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>

    {/* TEXT BLOCK */}
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate={idx === index ? "visible" : "hidden"}
      style={{
        flex: "1",
        padding: window.innerWidth < 768 ? "10px 0" : "20px 0",
        zIndex: 2,
        textAlign: window.innerWidth < 768 ? "center" : "left"
      }}
    >
      <motion.p
        style={{
          letterSpacing: "0.4em",
          color: "var(--gold)",
          fontWeight: 700,
          marginBottom: 12,
          fontSize: "0.85rem",
          textTransform: "uppercase"
        }}
      >
        Premium Custom Printing
      </motion.p>

      <motion.h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: window.innerWidth < 768 ? "1.6rem" : "2.2rem",
          margin: "0 0 16px 0",
          color: "var(--cream)",
          lineHeight: 1.3
        }}
      >
        {item.title}
      </motion.h3>

      <motion.p
        style={{
          color: "var(--stone)",
          marginTop: 10,
          fontSize: "1rem",
          lineHeight: 1.6,
          maxWidth: 480,
          marginInline: window.innerWidth < 768 ? "auto" : "0"
        }}
      >
        {item.desc}
      </motion.p>
    </motion.div>
  </motion.article>
))}

    </motion.div>
  );
};

const Products = () => (
  <section id="products">
    <div className="section-shell" style={{ display: 'grid', gap: 40 }}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p style={{ letterSpacing: '0.5em', color: 'var(--gold)', fontWeight: 600 }}>Our Main Product</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', marginTop: 11, color: 'var(--cream)' }}>
          Biodegradable Plastic Bags (Cornstarch / Potato Starch)
        </h2>
        <p style={{ color: 'var(--stone)', fontSize: '1.12rem', marginTop: 14, maxWidth: 620 }}>
          Designed for schools, colleges, offices, government programs, and wholesale—our biodegradable bags combine compostability, strength, and full branding flexibility.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 24 }}
      >
        <motion.div
          variants={slideInLeft}
          whileHover={{ y: -4, scale: 1.01 }}
          className="glass-panel"
          style={{
            padding: 0,
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <motion.img
            src={textures.pellets_starch}
            alt="Cornstarch and potato starch pellets for biodegradable bags"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
            style={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
          <div style={{ padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
              <IconGlyph type="starch" />
            </motion.div>
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6, color: 'var(--cream)' }}>Cornstarch & Potato Starch</h3>
              <p style={{ color: 'var(--stone)' }}>Pellets extruded to films, zero petroleum.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideInRight}
          whileHover={{ y: -4, scale: 1.01 }}
          className="glass-panel"
          style={{
            padding: 0,
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <motion.img
            src={textures.manufacturing_line}
            alt="Biodegradable plastic bag manufacturing machine"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
            style={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
          <div style={{ padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.3 }}>
              <IconGlyph type="custom" />
            </motion.div>
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6, color: 'var(--cream)' }}>In-House Manufacturing</h3>
              <p style={{ color: 'var(--stone)' }}>Rolled, cut, and packed by size for every order.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 28 }}
      >
        {gallery.map((img, idx) => (
          <motion.div
            key={img.alt}
            variants={scrollReveal}
            whileHover={{ y: -4, scale: 1.01 }}
            className="glass-panel"
            style={{
              padding: 0,
              overflow: 'hidden',
              background: '#162219',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              variants={imageHover}
              initial="rest"
              whileHover="hover"
              style={{
                width: '100%',
                height: 210,
                objectFit: 'cover',
                borderRadius: 18
              }}
            />
            <div style={{ padding: 20 }}>
              <p style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '1rem' }}>{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="glass-panel"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 28,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '40px 32px'
        }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.label}
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
              minWidth: 140,
              cursor: 'pointer',
              padding: '16px',
              borderRadius: 16,
              background: 'rgba(214,178,99,0.05)',
              border: '1px solid rgba(214,178,99,0.15)',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
              transition={{ duration: 0.5 }}
            >
              <IconGlyph type={feature.icon} />
            </motion.div>
            <div style={{ color: 'var(--gold)', fontWeight: 700, textAlign: 'center', fontSize: '0.95rem' }}>{feature.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <PrintingSlider />
    </div>
  </section>
);

export default Products;

