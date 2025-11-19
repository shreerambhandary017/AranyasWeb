import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../theme/theme";
import { textures } from "../assets";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const MOBILE_BREAKPOINT = 920;

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Handle mobile/desktop switch
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll hide/show logic
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (!menuOpen) {
        if (current > lastScrollY.current && current > 80) {
          setHidden(true); // scrolling down
        } else {
          setHidden(false); // scrolling up
        }
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Disable background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1200,
          padding: "18px 6vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(4, 13, 9, 0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(214, 178, 99, 0.18)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
          onClick={closeMenu}
        >
          <img
            src={textures.logo}
            alt="Aranyas logo"
            style={{
              width: 46,
              height: 46,
              objectFit: "contain",
              filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.35))",
            }}
          />
          <div style={{ textAlign: "left", lineHeight: "1.1" }}>
            <p
              style={{
                fontFamily: theme.typography.serif,
                fontSize: "1rem",
                letterSpacing: "0.32em",
                margin: 4,
                color: theme.colors.cream,
                letterSpacing: "0.5em",
              }}
            >
              ARANYAS
            </p>
            <small
              style={{
                color: theme.colors.cream,
                opacity: 0.8,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
              }}
            >
              Nature&apos;s Way of Packaging
            </small>
          </div>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: theme.colors.cream,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.82rem",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              style={{
                border: `1px solid ${theme.colors.accent}`,
                borderRadius: 999,
                padding: "12px 22px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
                color: theme.colors.cream,
              }}
            >
              Connect
            </a>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: `1px solid ${theme.colors.accent}`,
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 20,
                  height: 2,
                  background: theme.colors.cream,
                  transition: "0.3s",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : menuOpen && i === 2
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </motion.header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.92)",
              zIndex: 1100,
              padding: "110px 8vw 40px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: 22,
                right: 24,
                width: 42,
                height: 42,
                borderRadius: 12,
                border: `1px solid ${theme.colors.accent}`,
                background: "transparent",
                color: theme.colors.cream,
                fontSize: "1.3rem",
              }}
            >
              ×
            </button>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  color: theme.colors.cream,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.95rem",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              style={{
                marginTop: 16,
                border: `1px solid ${theme.colors.accent}`,
                borderRadius: 999,
                padding: "14px 22px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.9rem",
                textAlign: "center",
                color: theme.colors.cream,
              }}
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
