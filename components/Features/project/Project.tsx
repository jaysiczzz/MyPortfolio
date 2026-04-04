"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, title: "Portfolio Website",         category: "Web",    image: "/portfolio.Jpg",     description: "A personal portfolio website showcasing my skills, projects, and experience as a developer." },
    { id: 2, title: "Daily Brew Coffee Shop",    category: "Web",    image: "/brew.jpg",          description: "A modern website for a coffee shop featuring an online menu, store info, and a contact form." },
    { id: 3, title: "Chat App",                  category: "Mobile", image: "/ChatApp.jpg",       description: "A real-time mobile chat application with private messaging, group chats, and push notifications." },
    { id: 4, title: "Library Management System", category: "System", image: "/LMS.jpg",           description: "A full-featured system for managing books, members, borrowing records, and overdue tracking." },
    { id: 5, title: "Smart Wallet",              category: "Web",    image: "/SmartWallet.jpg",   description: "A web-based digital wallet for tracking expenses, managing budgets, and viewing spending insights." },
    { id: 6, title: "FitAI",                     category: "Mobile", image: "/FITAI.jpg",         description: "An AI-powered fitness app that generates personalized workout plans and tracks your progress." },
    { id: 7, title: "FinTrack",                  category: "System", image: "/FinTrack.jpg",      description: "A financial tracking system for monitoring income, expenses, and generating detailed reports." },
    { id: 8, title: "Inventory System",          category: "Web",    image: "/Inventory.jpg",     description: "A web app for managing product stock, suppliers, purchase orders, and inventory alerts." },
    { id: 9, title: "Task Manager",              category: "System", image: "/TaskManager.jpg",   description: "A productivity system for organizing tasks, setting deadlines, and tracking team progress." },
  ];

  const categories = ["All", "Web", "Mobile", "System"];

  const filteredProjects = projects.filter((proj) => {
    const matchesSearch = proj.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || proj.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">

      
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Menu />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-border bg-background rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition
                ${filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-muted"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-card text-card-foreground rounded-xl p-4 shadow border border-border hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-muted mb-4">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            <h4 className="font-semibold mb-1">{proj.title}</h4>

            <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {proj.category}
            </span>

            <button
              onClick={() => setSelected(proj)}
              className="mt-4 w-full border border-border py-2 rounded hover:bg-muted transition"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      
      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">No projects found.</p>
      )}

      
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card text-card-foreground rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56 w-full bg-muted">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="512px"
              />
            </div>

            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <X size={20} />
                </button>
              </div>

              <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground mb-4 inline-block">
                {selected.category}
              </span>

              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}