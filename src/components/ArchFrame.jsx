export default function ArchFrame({ children, className = '' }) {
  return (
    <div className={`arch-outer ${className}`}>
      <div className="arch-inner">{children}</div>
    </div>
  );
}
