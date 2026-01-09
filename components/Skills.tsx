// const skills = [
//   "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "SASS",
//   "SQL", "Python", "Power BI", "Excel",
//   "Backend", "Node.js ", "Git", "GitHub",
//   "GIS Software", "Cartography", "UI/UX Design", "Adobe Photoshop"
// ];

// export function Skills() {
//   return (
//     <section id="skills" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="bg-gradient-to-br from-blue-500 to-purple-600 p-px rounded-lg"
//             >
//               <div className="bg-white dark:bg-gray-900 rounded-lg px-5 py-4 text-center font-medium hover:scale-105 transition-transform">
//                 {skill}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";

// const techSkills = [
//   "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "SASS",
//   "SQL", "Python", "Power BI", "Excel", "Backend (Learning)",
//   "Node.js (Learning)", "Git", "GitHub", "GIS Software",
//   "Cartography", "UI/UX Design", "Adobe Photoshop"
// ];
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

// const softSkills = [
//   "Analytical Thinking", "Problem Solving", "Attention to Detail",
//   "Critical Thinking",
//   "Clear Communication",
//   "Collaboration",
//   "Time Management",
//   "Adaptability",
//   "Requirements Analysis",
//   "Ownership and Accountability",
// ];

export function Skills() {
  const [activeTab, setActiveTab] = useState<"tech" | "soft">("tech");

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">Skills</h2>

        <div className="flex justify-center mb-10 gap-4 sm:gap-6">
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-8 py-3 rounded-lg font-medium transition ${
              activeTab === "tech"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-8 py-3 rounded-lg font-medium transition ${
              activeTab === "soft"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
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
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-px rounded-lg "
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg px-5 py-4 text-center font-medium hover:scale-105 transition-transform cursor-pointer hover:bg-red-500">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}