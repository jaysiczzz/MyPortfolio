"use client";

import { useState } from "react";

interface SocialLink {
  label: string;
  value: string;
  url: string;
  color: string;
  icon: React.ReactNode;
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "https://github.com/jaysiczzz",
    url: "https://github.com/jaysiczzz",
    color: "#8b5cf6",
    icon: <GitHubIcon />,
  },
  {
    label: "Instagram",
    value: "jaysiczzz",
    url: "https://www.instagram.com/jaysiczzz/",
    color: "#ec4899",
    icon: <InstagramIcon />,
  },
  {
    label: "Gmail",
    value: "jayfrancisferrer@gmail.com",
    url: "mailto:Jayfrancisferrer@gmail.com",
    color: "#ef4444",
    icon: <GmailIcon />,
  },
  {
    label: "Facebook",
    value: "facebook.com/jay.ferrer.5851",
    url: "https://www.facebook.com/jay.ferrer.5851",
    color: "#3b82f6",
    icon: <FacebookIcon />,
  },
  {
    label: "TikTok",
    value: "@ferrerjayfrancist",
    url: "https://tiktok.com/@ferrerjayfrancist",
    color: "#14b8a6",
    icon: <TikTokIcon />,
  },
  {
    label: "YouTube",
    value: "youtube.com/@JayFrancisFerrer-vw6mk",
    url: "https://www.youtube.com/@JayFrancisFerrer-vw6mk",
    color: "#f97316",
    icon: <YoutubeIcon />,
  },
];

export  function FindMeOnline() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fmo-fade { animation: fadeUp 0.5s ease forwards; opacity: 0; }
        .fmo-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
        }
        .fmo-card:hover { transform: translateY(-3px); }
        .fmo-icon-box {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
      `}</style>

      <section className="w-full flex flex-col items-center px-4 py-16 sm:py-20">

        
        <div
          className="fmo-fade text-center mb-10 sm:mb-14"
          style={{ animationDelay: "0.05s" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3
                         text-gray-900 dark:text-white">
            Find Me Online
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-400">
            Feel free to reach out through any of these
          </p>
        </div>

        
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {socialLinks.map((link, i) => {
            const isHovered = hovered === i;

            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fmo-fade fmo-card group flex flex-col gap-4 rounded-2xl p-5 sm:p-6
                           no-underline cursor-pointer
                           border
                           bg-white dark:bg-white/[0.03]
                           border-gray-200 dark:border-white/[0.07]"
                style={{
                  animationDelay: `${0.1 + i * 0.07}s`,
                  borderColor: isHovered ? link.color : undefined,
                  boxShadow: isHovered
                    ? `0 0 24px ${link.color}22, 0 4px 20px ${link.color}15`
                    : undefined,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                
                <div
                  className="fmo-icon-box w-11 h-11 sm:w-12 sm:h-12 rounded-xl
                              flex items-center justify-center flex-shrink-0
                              bg-gray-100 dark:bg-white/[0.06]
                              text-gray-400 dark:text-slate-500"
                  style={
                    isHovered
                      ? { backgroundColor: `${link.color}20`, color: link.color }
                      : {}
                  }
                >
                  {link.icon}
                </div>

                
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs sm:text-[13px] font-medium tracking-wide
                                   text-gray-400 dark:text-slate-500">
                    {link.label}
                  </span>
                  <span
                    className="font-semibold text-sm sm:text-base truncate
                               text-gray-800 dark:text-slate-100
                               transition-colors duration-300"
                    style={isHovered ? { color: link.color } : {}}
                  >
                    {link.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}