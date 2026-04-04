import { Camera, Gamepad2, Music4, Cpu, Globe, Layout, Paintbrush, Code2 } from "lucide-react";

const hobbies = [
    {
        icon: Camera,
        title: "Photography",
        description: "Capturing moments and experimenting with composition, lighting, and angles to tell visual stories.",
        color: "from-rose-500 to-pink-500",
    },
    {
        icon: Gamepad2,
        title: "Gaming",
        description: "I enjoy playing story-driven and strategy games to unwind and spark creativity.",
        color: "from-indigo-500 to-violet-500",
    },
    {
        icon: Music4,
        title: "Music Production",
        description: "Creating beats, mixing tracks, and experimenting with sound design using a DAW in my free time.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Cpu,
        title: "Electronics",
        description: "Tinkering with circuits, microcontrollers, and DIY electronics projects like Arduino and Raspberry Pi.",
        color: "from-amber-500 to-yellow-500",
    },
];

const interests = [
    {
        icon: Globe,
        title: "Front-end Development",
        description: "Passionate about building with HTML, CSS, and JavaScript to create meaningful web experiences.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Layout,
        title: "Responsive Design",
        description: "Creating responsive and user-friendly websites that look great on any device or screen size.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Paintbrush,
        title: "UI/UX Design",
        description: "Interested in web design and user experience — making interfaces that are both beautiful and intuitive.",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Code2,
        title: "Modern Frameworks",
        description: "Learning and exploring modern frameworks like React and Next.js to build scalable web applications.",
        color: "from-teal-500 to-emerald-500",
    },
];

function CardGrid({ items }: { items: typeof hobbies }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, title, description, color }) => (
                <div
                    key={title}
                    className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                    
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                    </div>

                    
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
            ))}
        </div>
    );
}

export function Interest() {
    return (
        <section className="py-16 px-6 lg:px-0 space-y-16">
            <div className="max-w-7xl mx-auto space-y-16">

                
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            My Interests
                        </h2>
                        <p className="mt-3 text-muted-foreground md:text-lg max-w-xl mx-auto">
                            Areas of technology and design I'm deeply passionate about.
                        </p>
                    </div>
                    <CardGrid items={interests} />
                </div>

                
                <div className="border-t border-border" />

                
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            My Hobbies
                        </h2>
                        <p className="mt-3 text-muted-foreground md:text-lg max-w-xl mx-auto">
                            A glimpse into what keeps me inspired beyond the code editor.
                        </p>
                    </div>
                    <CardGrid items={hobbies} />
                </div>

            </div>
        </section>
    );
}