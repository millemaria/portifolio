export default function Divider() {
  return (
    <div className="w-full relative py-8 md:py-16 flex justify-center items-center pointer-events-none bg-brand-bg transition-colors duration-300">
      {/* Gradient Line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      
      {/* Tech Glowing Node Focus */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-brand-bg px-4 transition-colors duration-300">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
        <div className="flex items-center justify-center w-8 h-1.5 rounded-full bg-brand-blue/80 shadow-[0_0_15px_var(--glow-opacity)]" style={{ boxShadow: '0 0 15px var(--brand-blue)' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson/40" />
      </div>
    </div>
  );
}
