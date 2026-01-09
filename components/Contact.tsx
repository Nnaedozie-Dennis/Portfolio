import { Mail, MessageCircle, Linkedin, Download } from "lucide-react";

export function Contact() {
  const whatsappLink = `https://wa.me/2347068939092`;
  const linkedinDM = "https://www.linkedin.com/in/nnaedoziedennis";

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
          <a
            href={`mailto:nnaedozie.dennis@gmail.com`}
            className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition"
          >
            <Mail className="w-8 sm:w-10 h-8 sm:h-10 text-teal-600" />
            <span className="text-sm sm:text-lg">Email Me</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition"
          >
            <MessageCircle className="w-8 sm:w-10 h-8 sm:h-10 text-teal-600" />
            <span className="text-sm sm:text-lg">WhatsApp</span>
          </a>
          <a
            href={linkedinDM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition"
          >
            <Linkedin className="w-8 sm:w-10 h-8 sm:h-10 text-teal-600" />
            <span className="text-sm sm:text-lg">LinkedIn</span>
          </a>
        </div>


        <a
          href="/Nnaedozie_Dennis_Resume.pdf"
          download="Nnaedozie_Chukwuneta_Dennis_Resume.pdf"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-linear-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition shadow-lg"
        >
          <Download className="w-6 h-6" />
          Download My Resume (PDF)
        </a>

        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaborations, opportunities, or just a
          chat!
        </p>
      </div>
    </section>
  );
}
