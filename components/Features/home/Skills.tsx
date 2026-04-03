const skills = [
    {
        title: "JavaScript",
        description: "Building interactive web applications using modern JavaScript and frameworks.",
        level: 90,
        color: "from-yellow-400 to-yellow-500",
        bgColor: "bg-yellow-400",
        emoji: "JS",
    },
    {
        title: "React",
        description: "Building dynamic and reusable UI components with React and hooks.",
        level: 85,
        color: "from-cyan-400 to-blue-500",
        bgColor: "bg-cyan-400",
        emoji: "⚛️",
    },
    {
        title: "Next.js",
        description: "Building scalable server-side rendered applications with Next.js.",
        level: 80,
        color: "from-gray-600 to-gray-800",
        bgColor: "bg-gray-700",
        emoji: "N",
    },
    {
        title: "Laravel",
        description: "Developing robust backend systems and REST APIs using Laravel.",
        level: 80,
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-500",
        emoji: "🔴",
    },
    {
        title: "PHP",
        description: "Server-side scripting and web development using PHP.",
        level: 82,
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-500",
        emoji: "PHP",
    },
    {
        title: "HTML",
        description: "Crafting semantic, accessible, and well-structured web pages.",
        level: 95,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-500",
        emoji: "🌐",
    },
    {
        title: "CSS",
        description: "Creating responsive and visually appealing designs with CSS3 and Tailwind.",
        level: 90,
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-400",
        emoji: "🎨",
    },
    {
        title: "Python",
        description: "Backend development, data analysis, and scripting with Python.",
        level: 70,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500",
        emoji: "🐍",
    },
];

export function Skills() {
    return (
        <section className="py-16 px-6 lg:px-0">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        My Skills
                    </h2>
                    <p className="mt-3 text-muted-foreground md:text-lg max-w-xl mx-auto">
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map(({ title, description, level, color, bgColor, emoji }) => (
                        <div
                            key={title}
                            className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Background glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                            {/* Badge icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-md`}>
                                <span className="text-white font-bold text-sm">{emoji}</span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

                            {/* Progress bar */}
                            <div className="w-full bg-muted rounded-full h-1.5">
                                <div
                                    className={`bg-gradient-to-r ${color} h-1.5 rounded-full transition-all duration-700`}
                                    style={{ width: `${level}%` }}
                                />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 text-right">{level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}