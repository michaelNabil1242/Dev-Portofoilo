import { Code2, Blocks, Zap, Sparkles } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Scalable Applications",
      description:
        "Crafting maintainable, well-architected web apps using modern patterns and best practices.",
    },
    {
      icon: Blocks,
      title: "Design Systems",
      description:
        "Building reusable component systems that speed development and keep interfaces consistent.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Optimizing load time and runtime to deliver fast, fluid experiences on real devices.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful UX",
      description:
        "Merging accessibility, clarity, and polish to create intuitive user journeys.",
    },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <span>About Me</span>

            <h2>
              Turning ideas into
              <span>scalable digital products.</span>
            </h2>

            <div className="text-muted-foreground space-y-4 animate-fade-in animation-delay-200">
              <p>
                As a frontend developer, I specialize in delivering modern web
                applications with React, Next.js, and TypeScript. My focus is on
                building fast, scalable, and maintainable products that provide
                exceptional user experiences.
              </p>

              <p>
                I translate complex requirements into intuitive interfaces by
                applying clean architecture, reusable components, and design
                systems that ensure consistency and efficiency.
              </p>

              <p>
                Continuous improvement is central to my approach. I explore
                emerging frontend patterns, optimize performance, and refine the
                developer experience so solutions remain reliable as projects
                grow.
              </p>
            </div>

            <div className="glass glow-border p-6 animate-fade-in animation0delay-300 ">
              <p className="text-xl font-medium text-secondary-foreground italic">
                "Great products are created at the intersection of performance,
                usability, and maintainability. I aim to deliver all three."
              </p>
            </div>
          </div>
          {/* right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                key={index}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className=" text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
