import { Mail, Phone, MapPin, User } from "lucide-react";

export function Information() {
  const items = [
    {
      icon: <User className="w-5 h-5 text-purple-400" />,
      label: "Name",
      value: "Jay Francis T. Ferrer",
      href: undefined,
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: "Phone Number",
      value: "+63 967 957 1951",
      href: "tel:+639679571951",
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: "Email Address",
      value: "Jayfrancisferrer@gmail.com",
      href: "mailto:Jayfrancisferrer@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      label: "Home Address",
      value: "Buagsong Cordova Cebu",
      href: undefined,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
      label: "Facebook Profile",
      value: "facebook.com/jay.ferrer.5851",
      href: "https://www.facebook.com/jay.ferrer.5851",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn Profile",
      value: "linkedin.com/in/yourusername",
      href: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0f0f0f] py-16 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Contact Information
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10">
          Feel free to reach out through any of these
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-[#16162a] border border-gray-200 dark:border-[#2a2a45] rounded-xl p-5 hover:border-purple-400 dark:hover:border-purple-600/60 transition-all duration-200 hover:-translate-y-1"
            >
              
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>

              
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>

              
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="text-sm font-bold text-gray-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors truncate block"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}