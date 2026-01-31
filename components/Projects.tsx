"use client";

import { useState } from "react";

const projects = [
  {
    title: "Vidora",
    sub: "Full-Stack Movie App",
    desc: "A full-stack movie application with authentication and persistent data, allowing users to browse, search, and manage movies securely across sessions",
    tech: [ "Clerk", "Next.js", "TypeScript", "Rest API", "Tailwind CSS"],
    live: "https://vidora-delta.vercel.app/",
    github: "https://github.com/Nnaedozie-Dennis/Vidora",
    img: "vidora.jpg",
  },
  {
    title: "Notes App",
    sub: "Full-Stack Note Taking App",
    desc: "A full-stack note-taking app with authentication and persistent data, allowing users to create and manage notes securely across sessions",
    tech: [
      "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS",
    ],
    live: "https://note-app-six-beryl.vercel.app/",
    github: "https://github.com/Nnaedozie-Dennis/Note_App.git",
    img: "note_app.png",
  },
  {
    title: "Mirava",
    sub: "E-commerce for Pregnant Women",
    desc: "Mirava is a niche e-commerce website thoughtfully built to serve pregnant women by providing a calm, supportive, and trustworthy shopping experience.",
    tech: ["React.js", "CSS", "TypeScript", "Responsive Design"],
    live: "https://mirava.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Mirava.git",
    img: "mirava.png",
  },
  {
    title: "Blaze Academy",
    sub: "Educational Platform",
    desc: "Blaze Academy is an educational platform designed to make tech skills more accessible and structured for learners at all levels.",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    live: "https://blaze-academy.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Blaze_Academy.git",
    img: "blaze_academy.png",
  },
  {
    title: "Peak Path",
    sub: "Travel & Adventure Platform",
    desc: "A visually immersive travel platform that showcases destinations and experiences while guiding users through a smooth discovery journey. Built to inspire exploration and bookings.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://peak-path.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Peak-Path.git",
    img: "peak_path.png",
  },
  {
    title: "Whatsapii",
    sub: "WhatsApp Desktop Clone",
    desc: "Desktop-style WhatsApp clone with chat interface, message sending simulation, contact list, and responsive layout (optimized for desktop view).",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://whatsapii.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Whatsapp-Clone.git",
    img: "whatsapp.png",
  },

  {
    title: "Blaze Nation",
    sub: "Car Selling Website",
    desc: "A car marketplace website allowing users to browse, search, and contact sellers for new/used vehicles with detailed listings and filters.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://blaze-nation.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Blaze-Nation.git",
    img: "blaze_nation.png",
  },
  {
    title: "Todo App",
    sub: "Productivity Application",
    desc: "A clean and interactive to-do application built to strengthen modern frontend skills, focusing on state handling and smooth user interactions.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Reponsive Design"],
    live: "https://to-do-list-kappa-one-40.vercel.app/",
    github: "https://github.com/Nnaedozie-Dennis/To-Do-List.git",
    img: "todo_list.png",
  },
  {
    title: "Tikie",
    sub: "Social Video Platform",
    desc: "A TikTok clone with short video feed, upload functionality, likes, comments, and smooth scrolling experience, built to replicate core social video features.",
    tech: ["React.js", "CSS", "Reponsive Design"],
    live: "https://tikie.netlify.app",
    github: "https://github.com/Nnaedozie-Dennis/Tiktok-React.git",
    img: "tiktok.png",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover object-top"
              />
              <div className="p-4 sm:p-6 grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <h4 className="text-sm sm:text-md text-teal-600 dark:text-teal-400 font-semibold mb-2 sm:mb-3">
                  {project.sub}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-3 py-1 bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/50 dark:via-teal-900/50 dark:to-cyan-900/50 rounded-full text-xs sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border border-teal-600 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-600 hover:text-white transition "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && projects.length > 6 && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
