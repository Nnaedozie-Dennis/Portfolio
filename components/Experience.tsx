const experience = [
  {
    title: "Meteorological Observer",
    company:
      "Murtala Mohammed International Airport – Observatory Department, NIMET",
    period: "2024 – Present",
    responsibilities: [
      "Conduct real-time weather observations to support aviation safety and climate research",
      "Utilize GIS tools and meteorological software to analyse atmospheric conditions",
      "Provide accurate weather reports to aid in air traffic management",
      "Assist in data collection and trend analysis, improving forecasting efficiency",
    ],
  },
  {
    title: "Administrative Assistant",
    company: "Pems Computer Office, Alaba, Lagos State",
    period: "2023 – 2024",
    responsibilities: [
      "Delivered high-level customer service, maintaining a satisfaction rate above 90%",
      "Assisted in staff coordination and workflow optimization, ensuring smooth daily operations",
      "Achieved a 98% task completion rate by effectively managing deadlines and priorities",
      "Organized office operations, leading to increased overall efficiency",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 px-4 sm:px-6 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="relative pl-6 sm:pl-8 md:pl-12 space-y-8 sm:space-y-12">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-7 sm:-left-9 md:-left-14 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 border-3 sm:border-4 border-slate-900"></div>
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-6 ml-2 sm:ml-4 md:ml-8">
                <h3 className="text-lg sm:text-2xl font-bold mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm sm:text-base text-teal-400 font-semibold mb-2">
                  {exp.period}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-base text-slate-400">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
