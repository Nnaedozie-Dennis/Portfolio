



import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span
            className="
          bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
            Nnaedozie Chukwuneta Dennis
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          Full-Stack Developer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          {/* I develop full-stack web applications and apply data analysis to
          support better technical and product decisions. */}
          I build full-stack web applications and analyze data using Excel, SQL,
          Power BI and Python to support clear, maintainable systems and
          informed decisions.
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <a
            href="https://github.com/Nnaedozie-Dennis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/nnaedoziedennis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:nnaedozie.dennis@gmail.com"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="/Nnaedozie_Dennis_Resume.pdf"
            download="Nnaedozie_Chukwuneta_Dennis_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 
            bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition font-medium"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}