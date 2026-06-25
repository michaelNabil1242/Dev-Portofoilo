const experiences = [
  {
    period: "2025 — Present",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    description:
      "Currently working as a freelance frontend developer, building responsive and modern web applications. Focused on creating clean user interfaces, reusable components, and scalable solutions using React and Next.js while continuously improving performance and development practices.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
    ],
    current: true,
  },
  {
    period: "2025",
    role: "React & Next.js Developer Trainee",
    company: "Udemy • Jonas Schmedtmann",
    description:
      "Completed a comprehensive React course and built production-level projects with authentication, complex state management, data fetching, and clean architecture using React, Redux Toolkit, React Query, Tailwind CSS, Styled Components, Supabase, and Next.js.",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
    ],
    current: false,
  },
  {
    period: "2025",
    role: "Frontend Development Trainee",
    company: "Elzero Web School",
    description:
      "Learned the fundamentals of frontend development, including semantic HTML, CSS layouts with Flexbox and Grid, responsive design, accessibility best practices, JavaScript fundamentals, DOM manipulation, event handling, and object-oriented programming. Built interactive and responsive web applications following clean coding practices.",
    technologies: [
      "HTML",
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "JavaScript",
      "DOM",
      "OOP",
    ],
    current: false,
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16 relative overflow-hidden ">
      <div className="absolute top-1/2  left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl " />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header  */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volume.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional journey, showcasing the roles,
            responsibilities, and technologies I've worked with. Each entry
            reflects my growth as a frontend developer and my commitment to
            building impactful digital experiences.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative ">
          {/* //vertical line */}
          <div className="timeline-glow absolute w-0.5 left-0 md:left-1/2 top-0 bottom-0  md:-translate-x-1/2 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]" />
          {/* Experiences */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* timeLine dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4  ring-background z-10 ">
                  {exp.current && (
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  )}
                </div>

                {/*Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded border border-primary/30 hover:border-primary/50 transition-aLL duration-500 `}
                  >
                    <span className=" text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground ">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-surface text-xs px-3 py-1 rounded-full "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
