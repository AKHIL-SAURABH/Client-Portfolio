import React from 'react'
import Photo from '../assets/photo.jpg'

function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white pt-32 flex flex-col justify-center items-center">
        <div className='flex flex-row gap-20'>
            <img src={Photo} alt={Photo} className='w-68 h-87 rounded-3xl object-cover bg-white' />
            <div className='flex flex-col gap-5 max-w-lg'>
                <div className='text-lg min-w-160 font-googlesans font-light tracking-tightest leading-relaxed space-y-6'>

                    <p>
                    I’m an aspiring <span className="font-semibold italic">Data Scientist</span> and 
                    <span className="font-semibold italic"> ML Engineer</span> focused on building 
                    <span className="font-semibold italic"> real-world, deployable AI systems</span> 
                    that turn complex data into meaningful decisions.
                    </p>

                    <p>
                    I have hands-on experience working across the ML lifecycle – from 
                    <span className="font-semibold italic"> computer vision models (CNNs)</span> 
                    for disease detection to 
                    <span className="font-semibold italic"> risk analysis and predictive modeling</span>, 
                    with a strong emphasis on 
                    <span className="font-semibold italic"> problem-solving and applied research</span>.
                    </p>

                    <p>
                    I’m currently seeking opportunities with 
                    <span className="font-semibold italic"> global AI teams</span> where I can contribute 
                    to <span className="font-semibold italic"> production-grade ML products</span> and 
                    continue growing as an engineer.
                    </p>

                </div>

                <a
                  href="https://drive.google.com/file/d/170DnrqjQcCHb4UQB-MUou4D3MzNidXVt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button className="group bg-white text-black self-baseline h-12 w-45 overflow-hidden relative flex items-center justify-center">

                    <div className="relative overflow-hidden leading-none">

                        {/* Original Text */}
                        <span className="block transition-transform duration-350 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                              Resume
                        </span>

                        {/* Duplicate Text */}
                        <span className="block absolute top-full left-0 w-full transition-transform duration-350 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                        Resume
                        </span>

                    </div>

                  </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About;
