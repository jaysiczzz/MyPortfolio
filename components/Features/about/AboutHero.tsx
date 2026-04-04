import { Picture } from "@/components/Common/Picture";


export function AboutHero() {
    return (
        <section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] px-6 lg:px-0">
            <Picture />

            
            <div className="py-16 px-6 lg:px-0">
                <div className="flex flex-col items-center lg:items-start justify-center space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Jay Francis Ferrer
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I'm a Full Stack Developer specializing in building (and occasionally designing) simple, beautiful, and intuitive interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
