import { ChevronDown } from "lucide-react";

function ScrollIndicator({ to }) {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
      <a
        href={`#${to}`}
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="text-sm uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  );
}

export default ScrollIndicator;
