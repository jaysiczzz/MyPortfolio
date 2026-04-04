import { Picture } from "@/components/Common/Picture";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#0f0f0f] px-6 py-16 flex items-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">

       
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <Picture />
        </div>

        
        <div className="flex-1 text-center md:text-left">

          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2">
            Jay Francis Ferrer
          </h1>

        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-400 mb-6">
            Web Designer
          </h2>

          
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            I'm a Full Stack Developer specializing in building (and occasionally
            designing) simple, beautiful, and intuitive interfaces.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5"
            >
              Check out my work →
            </Link>

            <Link
              href="/contacts"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-[#1a1a1a] text-white font-semibold text-sm px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}