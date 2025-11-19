const icons = {
  compostable: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="18" stroke="#d6b263" strokeWidth="2" fill="rgba(214,178,99,0.08)" />
      <path
        d="M11 21c4.4-.8 7.5-3.3 9-8 2.6 3.2 4.9 4.6 7 5-1.5 6.2-5.5 9.2-12 10 .1-2 .1-4-.1-7Z"
        fill="#90c08a"
        stroke="#4a664d"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  foodsafe: (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="18" stroke="#d6b263" strokeWidth="2" fill="rgba(214,178,99,0.08)" />
      <path
        d="M13 12v12a2 2 0 1 0 4 0V12M17 17h4"
        stroke="#ede8d5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M23 12h2v11a2 2 0 0 0 4 0V12" stroke="#ede8d5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  starch: (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="18" stroke="#d6b263" strokeWidth="2" fill="rgba(214,178,99,0.08)" />
      <path
        d="M15 9c3 5 4 10 0 20M22 9c3 5 4 10 0 20"
        stroke="#ede8d5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="14" r="2" fill="#90c08a" />
      <circle cx="20" cy="23" r="2" fill="#90c08a" />
    </svg>
  ),
  custom: (
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="18" stroke="#d6b263" strokeWidth="2" fill="rgba(214,178,99,0.08)" />
      <rect x="9" y="13" width="20" height="15" rx="2.5" stroke="#ede8d5" strokeWidth="2" />
      <path d="M12 16h10M12 20h14M12 24h10" stroke="#ede8d5" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 9l3 4h-6l3-4Z" fill="#d6b263" />
    </svg>
  ),
  contact: (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="30" height="22" rx="4" stroke="#d6b263" strokeWidth="2" fill="rgba(214,178,99,0.08)" />
      <path d="m5 10 13 9 13-9" stroke="#ede8d5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  location: (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 32s10-8.667 10-16c0-5.523-4.477-10-10-10S8 10.477 8 16c0 7.333 10 16 10 16Z"
        stroke="#d6b263"
        strokeWidth="2"
        fill="rgba(214,178,99,0.08)"
      />
      <circle cx="18" cy="16" r="4" stroke="#ede8d5" strokeWidth="2" />
    </svg>
  ),
  phone: (
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 7h3l2 6-3 2c1.5 3.5 4 6 7 7l2-3 6 2v3c0 1.1-.9 2-2 2C15.745 24.5 11.5 20.255 9 11c0-1.1.9-2 2-2Z"
        stroke="#d6b263"
        strokeWidth="2"
        fill="rgba(214,178,99,0.08)"
      />
    </svg>
  ),
};

const IconGlyph = ({ type }) => icons[type] ?? null;

export default IconGlyph;

