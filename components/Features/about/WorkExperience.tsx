const experiences = [
  {
    date: "2024 – Present",
    title: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    description: "Building custom web apps for clients — landing pages to full-stack systems with auth, databases, and REST APIs.",
    tags: ["Next.js", "Laravel", "Tailwind"],
  },
  {
    date: "2023 – 2024",
    title: "Frontend Developer",
    company: "Local Web Agency",
    description: "Delivered responsive, pixel-perfect UIs for client websites. Focused on React components and performance.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    date: "2022 – 2023",
    title: "UI/UX Designer",
    company: "Startup Project",
    description: "Designed interfaces and prototypes using Figma, working closely with developers to translate designs into code.",
    tags: ["Figma", "Photoshop", "Prototyping"],
  },
  {
    date: "2021 – 2022",
    title: "Web Design Intern",
    company: "IT Company — Cebu",
    description: "Maintained company websites and learned the fundamentals of HTML, CSS, and basic PHP backend development.",
    tags: ["HTML", "CSS", "PHP"],
  },
];

export function WorkExperience() {
  return (
    <section className="w-full bg-white dark:bg-[#0f0f0f] py-14 px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">

        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Work Experience
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 text-sm mb-10">
          My professional journey so far
        </p>

        
        <div className="relative">
          
          <div className="absolute left-3 top-2 bottom-2 w-px bg-purple-300 dark:bg-purple-700/50" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 pl-10">
                
                <div className="absolute left-2 top-3 w-2.5 h-2.5 rounded-full bg-purple-500 -translate-x-1/2 ring-2 ring-purple-500/20" />

                
                <div className="flex-1 bg-gray-50 dark:bg-[#16162a] border border-gray-200 dark:border-[#2a2a45] rounded-xl px-5 py-4 hover:border-purple-400 dark:hover:border-purple-600/60 transition-all duration-200">

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-purple-600 dark:text-purple-400/70 bg-purple-100 dark:bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-300 dark:border-purple-500/20 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-[#0f0f1a] border border-gray-200 dark:border-[#2a2a45] px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
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