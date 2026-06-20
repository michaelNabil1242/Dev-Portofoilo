export const AnimatedBorderButton = ({
  children,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`animated-border-button relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-surface/90 px-8 py-3 text-base font-semibold text-foreground transition duration-300 ease-out hover:border-primary/50 hover:bg-surface/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
