import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      } py-5 z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          MN<span className="text-primary">.</span>
        </a>

        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact me</Button>
        </div>
        {/* mobile buttom */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer rounded-md hover:bg-surface"
          onClick={() => setIsMobileMenuOpen((x) => !x)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>
      <div
        className={`
         md:hidden glass-stronger overflow-hidden origin-top
          transition-all duration-300 ease-out
    ${
      isMobileMenuOpen
        ? "opacity-100 translate-y-0 scale-100 max-h-96"
        : "opacity-0 -translate-y-2 scale-95 max-h-0 pointer-events-none"
    }
  `}
      >
        <div className="container mx-auto  px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setIsMobileMenuOpen(() => false)}
              className="py-2 text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface
                "
            >
              {link.label}
            </a>
          ))}
          <Button onClick={() => setIsMobileMenuOpen(() => false)}>
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
