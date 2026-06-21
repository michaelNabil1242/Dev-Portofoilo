import Button from "@/components/Button";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import ScrollIndicator from "../components/ScrollIndicator";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Styled Components",
  "Responsive Design",
  "OOP",
  "Component Architecture",
  "Protected Routes",
  "CRUD",
  "Form Validation",
  "React",
  "Redux Toolkit",
  "Context API",
  "React Router",
  "Next.js",
  "Supabase",
  "SQL",
  "REST APIs",
  "React Query",
  "Git",
  "GitHub",
  "Vercel",
];
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div className=" absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className=" absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pb-20 pt-32 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="px-4 py-2 rounded-full glass inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Software Engineer • FrontEnd Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Michael Nabil - a sowftware engineer specializing in
                React, Nexr.js and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="/Michael_Nabil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton size="lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/michaelNabil1242" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/michael-nabil-b76983369/",
                },
              ].map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-2 rounded-full glass inline-block ml-1 text-primary-foreground hover:text-primary/80
                    hover:scale-110
                  hover:bg-primary/10
                     transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* right column - prrofile image */}
          <div className="relative animate-fade-in animation-delay-100">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/edited_portrait_hq.png"
                  alt="Michael Nabil"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float delay-500">
                  <div className="text-1xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div className="mt-20 animate-fade-in animation-delay-500">
          <div className="flex justify-center mb-4">
            <p className=" px-4 py-2 text-sm text-muted-foreground  tracking-wide inline-flex">
              Technologies I work with
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="px-4 py-2  gap-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground font-semibold opacity-50 hover:opacity-100 transition-opacity duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator to="about" />
    </section>
  );
}

export default Hero;
