export function WorkTogether() {
  return (
    <section className="w-full bg-white dark:bg-[#0f0f0f] py-20 px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-center">

       
        <span className="inline-block text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/20 px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
          Available for work
        </span>

        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Let's Work{" "}
          <span className="text-purple-600 dark:text-purple-400">Together</span>
        </h2>

        
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          I'm open to freelance projects, full-time roles, or collaborations.
          If you have an idea or a project in mind, let's make it happen.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="/contacts"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send me an email
          </a>

          <a
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-[#2a2a45] text-sm font-semibold px-6 py-3 rounded-xl hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            View my work
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-[#1e1e35] pt-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            Open to opportunities
          </span>
          <span className="hidden sm:block">·</span>
          <span>Based in Cebu, Philippines</span>
          <span className="hidden sm:block">·</span>
          <span>Remote &amp; On-site</span>
        </div>

      </div>
    </section>
  );
}