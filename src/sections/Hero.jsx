import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations/motionVariants";
import IconGlyph from "../components/IconGlyph";
import { textures } from "../assets";

const heroBadges = [
  { icon: "compostable", label: "100% Compostable" },
  { icon: "foodsafe", label: "Food Safe" },
  { icon: "starch", label: "Starch Based" },
  { icon: "custom", label: "Custom Print" }
];

const heroSpotlight = {
  title: "Signature Compostable Carry",
  detail: "12 kg load-tested · Soft-touch matte film · Custom gusset print",
  bullets: [
    "Delivered within 12 working days",
    "Four size runs with reinforced seams",
    "Ideal for schools, offices, and premium retail"
  ],
  image: textures.carry_heavy
};

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end 40%"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.96]);

  const springConfig = { stiffness: 100, damping: 30 };
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-premium"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%"
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          background: `linear-gradient(135deg, rgba(5, 15, 10, 0.6), rgba(8, 25, 18, 0.5)), url(${textures.forest})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isDesktop ? "fixed" : "scroll",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          y: ySpring,
          scale,
          filter: 'blur(22px) saturate(1.08) brightness(0.95)',
        }}
      />

      {/* Particle layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background: `rgba(214, 178, 99, ${Math.random() * 0.5 + 0.2})`,
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100 - Math.random() * 100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* NEW FULL-WIDTH FLEX GRID  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: isDesktop ? "1.2fr 1fr" : "1fr",
          gap: "4vw",
          alignItems: "center",
          padding: "min(70px,9vh) clamp(1.25rem,5vw,6.5vw) clamp(70px,10vh,110px)",
          y: useTransform(scrollYProgress, [0, 1], [0, -60]),
          opacity: opacitySpring
        }}
      >
        {/* LEFT SIDE — TEXT CONTENT */}
        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "2rem" }}>
         
          

          {/* Branding */}
          <motion.div variants={fadeInUp} style={{ display: "flex", alignItems: "center", gap: 14 }}>
           
            <div style={{ display: "flex", flexDirection: "column", gap: 4 ,alignItems: "center"}}>
              <p style={{ margin: 0, letterSpacing: "0.18em", color: "var(--cream)" ,fontSize: "1.5rem"}}>ARANYAS PRIVATE LIMITED</p>
              <small style={{ color: "var(--stone)", letterSpacing: "0.2em" ,fontSize: "0.9rem"}}>Mangaluru · Dubai</small>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            style={{
              background: "linear-gradient(135deg,#f5f0e6,#d6b263,#f5e6a8,#d6b263)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "clamp(2.8rem,6vw,5rem)",
              lineHeight: 1.1,
              marginBottom: 10
            }}
          >
            Nature's Way  
            <br />
            of Packaging
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "var(--cream)",
              maxWidth: "640px"
            }}
          >
            Premium biodegradable bags crafted from{" "}
            <span style={{ color: "#d6b263", fontWeight: 600 }}>cornstarch</span> and{" "}
            <span style={{ color: "#d6b263", fontWeight: 600 }}>potato starch</span>.
            Built for schools, corporates, government supply, and premium retail.
          </motion.p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {heroBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                style={{
                  padding: "14px 20px",
                  background: "rgba(214,178,99,0.08)",
                  border: "1.5px solid rgba(214,178,99,0.3)",
                  borderRadius: 14
                }}
              >
                <IconGlyph type={badge.icon} />
                <span style={{ marginLeft: 10 }}>{badge.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div variants={fadeInUp} style={{ display: "flex", gap: 20 }}>
            <a
              href="#products"
              className="cta-button"
              style={{
                padding: "16px 38px",
                background: "linear-gradient(135deg,#d6b263,#b8944f,#d6b263)",
                borderRadius: 10,
                color: "#000",
                fontWeight: 700
              }}
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="cta-button ghost"
              style={{
                padding: "16px 38px",
                border: "2px solid var(--gold)",
                borderRadius: 10,
                fontWeight: 700
              }}
            >
              Bulk / Custom Enquiry
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — SPOTLIGHT IMAGE */}
        <motion.div
          variants={fadeInUp}
          style={{
            width: "100%",
            borderRadius: 32,
            overflow: "hidden",
            border: "1px solid rgba(214,178,99,0.35)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.45)"
          }}
        >
          <img
            src={heroSpotlight.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
