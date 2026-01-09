"use client";

import { useState } from "react";

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  // "SASS",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "SQL",
  "Python",
  "Excel",
  "Power BI",
  "Data Cleaning",
  // "Data Visualization",
  // "Figma",
  "Git",
  "GitHub",
  // "UI/UX Design",
  // "Adobe Photoshop",
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Attention to Detail",
  "Analytical Thinking",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
  "Accountability",
];


export function Skills() {
  const [activeTab, setActiveTab] = useState<"tech" | "soft">("tech");

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Skills
        </h2>

        <div className="flex justify-center mb-10 gap-4 sm:gap-6">
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-8 py-3 rounded-lg font-medium transition ${
              activeTab === "tech"
                ? "bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-8 py-3 rounded-lg font-medium transition ${
              activeTab === "soft"
                ? "bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Soft Skills
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {(activeTab === "tech" ? techSkills : softSkills).map((skill) => (
            <div
              key={skill}
              className="bg-linear-to-br from-emerald-500 via-teal-600 to-cyan-500 p-px rounded-lg "
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg px-5 py-4 text-center font-medium hover:scale-105 transition-transform cursor-pointer hover:bg-teal-600 hover:text-white">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
