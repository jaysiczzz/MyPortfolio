"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export  function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Portfolio Website", category: "Web" },
    { id: 2, title: "E-commerce App", category: "Web" },
    { id: 3, title: "Chat App", category: "Mobile" },
    { id: 4, title: "Inventory System", category: "System" },
    { id: 5, title: "Blog Platform", category: "Web" },
    { id: 6, title: "Fitness Tracker", category: "Mobile" },
    { id: 7, title: "POS System", category: "System" },
    { id: 8, title: "Landing Page", category: "Web" },
    { id: 9, title: "Task Manager", category: "System" },
  ];

  const categories = ["All", "Web", "Mobile", "System"];

  // 🔥 Combined filter + search
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch = proj.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || proj.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        My Projects
      </h2>

      {/* Search + Filter */}
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

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition
                ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-muted"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-card text-card-foreground rounded-xl p-4 shadow border border-border hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="bg-muted h-32 rounded mb-4" />

            <h4 className="font-semibold mb-1">{proj.title}</h4>

            {/* Category Badge */}
            <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {proj.category}
            </span>

            <button className="mt-4 w-full border border-border py-2 rounded hover:bg-muted transition">
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">
          No projects found.
        </p>
      )}
    </div>
  );
}