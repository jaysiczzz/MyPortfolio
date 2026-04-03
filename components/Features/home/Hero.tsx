import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Picture } from "@/components/Common/Picture";

export function Hero() {
    return (
       <section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] px-6 lg:px-0">
            <div className="order-1 lg:order-none flex justify-center items-center">
                <Picture />
</div>

            <div className="flex flex-col items-center lg:items-start justify-center space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Jay Francis Ferrer <br className="hidden md:inline" />
                        Web Designer
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I'm a Full Stack Developer specializing in building (and occasionally designing) simple, beautiful, and intuitive interfaces.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                    <Link href="/projects">
                        <Button size="lg" className="group w-full lg:w-auto">
                            Check out my work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/contacts">
                        <Button variant="outline" size="lg" className="w-full lg:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground justify-center lg:justify-start">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
       </section>
    );
}