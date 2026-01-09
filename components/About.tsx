// export function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center">
//           Innovative Front-End Developer and Data Analyst with expertise in web development, data visualization, and geospatial analysis.
//           Passionate about leveraging technology and data-driven insights to enhance decision-making and optimize efficiency.
//           Proficient in React.js, JavaScript, SQL, Python, Power BI, and Excel, with a strong analytical mindset and problem-solving skills.
//           Adept at working in fast-paced environments and collaborating with cross-functional teams to achieve impactful results.
//         </p>
//       </div>
//     </section>
//   );
// }

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Photo with asymmetric double frame */}
          <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[28rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl -rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl rotate-3 scale-95"></div>
            <img
              src="profile.jpg"
              alt="Nnaedozie Chukwuneta Dennis"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              I’m a full-stack developer who builds web applications across
              frontend, backend and data layers. I focus on creating systems
              that are clear in structure, reliable in behavior and
              straightforward to maintain over time. <br />
              My work covers frontend development with React, Next.js, Tailwind CSS, HTML, CSS and
              TypeScript, alongside backend development using Node.js, Express,
              MongoDB, and RESTful APIs. I pay close attention to data flow,
              application performance and how individual features integrate
              into the overall system. <br /><br />
              Alongside development, I have experience
              in data analysis, working with structured datasets to extract
              insights, validate assumptions and support product decisions.
              This allows me to build applications with a stronger understanding
              of data integrity, reporting needs, and practical analytics use
              cases. I approach every project with an emphasis on simplicity,
              correctness and long-term usability, writing code that is
              readable, testable and designed to scale with changing
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
