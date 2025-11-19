import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeInScale } from '../animations/motionVariants';

const initialState = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });
    try {
      await axios.post('https://formspree.io/f/xldzboqq', form);
      setStatus({ loading: false, success: true });
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <motion.form
      variants={fadeInScale}
      onSubmit={handleSubmit}
      className="glass-panel"
      style={{ display: 'grid', gap: 20 }}
    >
      <label style={{ display: 'grid', gap: 8 }}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </label>
      <label style={{ display: 'grid', gap: 8 }}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@company.com"
        />
      </label>
      <label style={{ display: 'grid', gap: 8 }}>
        <span>Message</span>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your packaging needs…"
        />
      </label>
      <button type="submit" disabled={status.loading} className="cta-button">
        {status.loading ? 'Sending…' : 'Send Message'}
      </button>
      {status.success === true && <p style={{ color: '#7d8c74' }}>Thank you, we will be in touch.</p>}
      {status.success === false && <p style={{ color: '#ff8a8a' }}>Something went wrong. Try again.</p>}
    </motion.form>
  );
};

export default ContactForm;

