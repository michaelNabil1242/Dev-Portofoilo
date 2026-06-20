function Button({ className = "", size = "default", children, ...props }) {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 ";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
