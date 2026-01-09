export function Education() {
  return (
    // <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
    //   <div className="max-w-4xl mx-auto">
    //     <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
    //     <div className="text-center">
    //       <h3 className="text-2xl font-semibold">B.Sc. Geography & Meteorology</h3>
    //       <p className="text-purple-600 dark:text-purple-400">Nnamdi Azikiwe University, Nigeria | 2019 – 2023</p>
    //     </div>
    //   </div>
    // </section>


      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-2">Nnamdi Azikiwe University</h3>
              <p className="text-purple-400 font-semibold mb-2">B.Sc. in Geography & Meteorology</p>
              <p className="text-slate-400">2019 – 2023 | Anambra State, Nigeria</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-2">Godfrey Okoye Secondary School</h3>
              <p className="text-purple-400 font-semibold mb-2">WAEC Certificate</p>
              <p className="text-slate-400">2011 – 2016 | Enugu State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
  );
}