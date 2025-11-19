const IconBadge = ({ icon, label }) => (
  <div
    style={{
      border: '1px solid rgba(214,178,99,0.3)',
      borderRadius: 18,
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: 'rgba(6,18,14,0.65)'
    }}
  >
    <span
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid rgba(214,178,99,0.4)',
        display: 'grid',
        placeItems: 'center',
        fontSize: '1.3rem'
      }}
      aria-hidden
    >
      {icon}
    </span>
    <p style={{ fontSize: '1rem', letterSpacing: '0.08em', color: 'var(--cream)' }}>{label}</p>
  </div>
);

export default IconBadge;

