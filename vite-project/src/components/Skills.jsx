import React from "react";
import arrow from "../assets/Arrow.svg";
import bg from "../assets/black-bg.jpg";
import skill from "../assets/Skills.png"

function Skills() {

  const Programming = ["Python", "Java", "C++"];
  const ML = ["TensorFlow", "Keras", "Scikit-Learn", "Computer Vision", "Neural Networks"];
  const Data = ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"];
   const AI = ["RAG", "LLM", "LangGrapgh", "LangChain", "Prompt Engg."];
  const Tools = ["Git", "GitHub", "Google Colab", "VS Code", "Jupyter", "Anaconda"];
  const Databases = ["SQL", "PostgreSQL"];
  const Backend = ["FastAPI", "Django"];

  return (
    <div
      id="skills"
      className="relative min-h-screen bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent via-65% to-black/100 pointer-events-none"></div>

      <div className="relative text-white px-30 py-24 flex flex-col justify-center">

        <div className="w-full grid grid-cols-2 mb-16">
          <div className="flex flex-row items-center gap-5 justify-start">
            {/* <h1 className="text-8xl font-bold">Skills</h1> */}
            <img src={skill} alt="skill" />
            <img className="mt-10" src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-start-1 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Programming</h3>
            <ul className="space-y-2 text-xl font-medium">
              {Programming.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-2 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Artificial Intelligence</h3>
            <ul className="space-y-2 text-xl font-medium">
              {AI.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">ML / Deep Learning</h3>
            <ul className="space-y-2 text-xl font-medium">
              {ML.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Data & Analytics</h3>
            <ul className="space-y-2 text-xl font-medium">
              {Data.map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white/80">✦</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-start-1 col-span-2 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Tools & Platform</h3>
            <ul className="text-xl font-medium grid grid-cols-3 gap-x-10 gap-y-4">
              {Tools.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-3 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Databases</h3>
            <ul className="space-y-2 text-xl font-medium">
              {Databases.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-4 col-span-1 p-6 border border-white/20 rounded-xl bg-transparent backdrop-blur-xs shadow-[inset_5px_2px_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-2xl font-bold mb-4 italic">Backend</h3>
            <ul className="space-y-2 text-xl font-medium">
              {Backend.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white/80">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
