import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "The Wild Oasis webApp",
    description:
      "The Wild Oasis is a modern Next.js booking website where guests can explore luxury cabins, sign in, and reserve their ideal getaway.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "Supabase",
      "date-fns",
      "SweetAlert2",
    ],
    link: "https://the-wild-oasis-app-pi.vercel.app/",
    github: "https://github.com/michaelNabil1242/The-Wild-Oasis-App",
    image: "/theWildOasisApp.png",
  },
  {
    title: "The Wild Oasis Dashboard",
    description:
      "A comprehensive React application for managing bookings, cabins, and guests at a wilderness retreat. Built with modern web technologies for a seamless user experience.",
    tags: [
      "React",
      "styled-components",
      "tanstack/react-query",
      "dark mode",
      "Supabase",
      "Recharts",
      "React Router",
      "CRUD Operations",
      "Authentication",
      "Authorization",
    ],
    link: "https://the-wild-oasis-hotel-zeta.vercel.app",
    github: "https://github.com/michaelNabil1242/The-Wild-Oasis-Hotel",
    image: "/theWildOasisDashboardLight.png",
  },
];

function Projects() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section id="projects" className="py-32 relative overflow-hidden ">
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm  font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground  animate-fade-in animation-delay-200">
            A selection of my recent projects, showcasing my skills in frontend
            development and design. Each project reflects my commitment to
            creating user-friendly, efficient, and visually appealing web
            applications.
          </p>
        </div>
        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 ${showLinks ? "opacity-100" : "opacity-0"} hover:opacity-100 transition-opacity duration-300`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                      hover:scale-130      
                      transition-all duration-300"
                      onClick={() => setShowLinks((x) => !x)}
                    ></ArrowUpRight>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 "
                    >
                      {tag}{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all cta */}

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
}

export default Projects;
