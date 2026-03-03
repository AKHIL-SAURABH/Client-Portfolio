import React, { useState } from "react";
import { Link } from "react-router-dom"
import project from "../assets/Projects.svg";
import arrow from "../assets/Arrow.svg";
import arrow2 from "../assets/ArrowSM.svg";
import bg1 from "../assets/bg/CropAi/CropAi.jpg";
import bg2 from "../assets/bg/HealthAi/HealthBG.jpg";
import bg3 from "../assets/bg/HealthSphere/HealthSphere.jpg";
import bg4 from "../assets/bg/StockAi/StockAI.jpg";
import bg5 from "../assets/bg/Transport/Transport.jpg";
import bg6 from "../assets/bg/Rag/Rag.jpg";

const ProjectsList = [
    {
        id: "crop-ai",
        title: "Crop AI",
        description: "AI Crop Disease Detection & Advisory System.",
        insights: [
            "AI-based crop disease detection from leaf images",
            "CNN-powered image classification with treatment recommendatinos",
            "Designed for early disease detection & farmer decision support",
            "Deployed ML system with API-based inference"
        ],
        bg: bg1,
        technologies: ["Python", "FastAPI", "CNN", "OpenCV", "TensorFlow", "Render"],
        code: "#"
    },
    {
        id: "health-ai",
        title: "Health Ai",
        description: "AI-Assisted Medical Imaging System",
        insights: [
            "AI-driven X-ray image analysis for preliminary diagonis",
            "Doctor-in-the-loop validation for responsible AI usage",
            "Secure backend with authentication & role handling",
            "Built and deployed as a real healthcare AI workflow"
        ],
        bg: bg2,
        technologies: ["Python", "FastAPI", "OpenCV", "Deep Learning", "JWT"],
        code: "#"
    },
    {
        id: "health-sphere",
        title: "HealthSphere",
        description: "Full-Stack Digital Healthcare Platform",
        insights: [
            "Unified platform for patients, doctors & admins",
            "Role-based access control with secure medical records",
            "Integrated AI diagnostics into full-stack workflow",
            "Designed scalable healthcare system architecture"
        ],
        bg: bg3,
        technologies: ["Next.js", "FastAPI", "JWT", "RBAC", "Cloud Deployement"],
        code: "#"
    },
    {
        id: "stock-ai",
        title: "StockAI",
        description: "AI Stock Market Analytics & Risk Intelligence Platform",
        insights: [
            "AI-Powered market analytics & portfolio risk system",
            "Market regime detection, risk metrics & portfolio optimization",
            "ML-based forecasting with explainable AI outputs",
            "GenAI assistant for human-readable financial insights"
        ],
        bg: bg4,
        technologies: ["Python", "FastAPI", "ML", "Time-Series", "React", "GenAi", "SQL"],
        code: "#"
    },
    {
        id: "transport-optimization",
        title: "Transport Optimization System",
        description: "Logistics & Route Optimization Platform",
        insights: [
            "Data-Driven transport route & fuel optimization",
            "Applied graph & optimization algorithms",
            "Backend analytics for logistics decision support",
            "Focused on real-world logistics problems"
        ],
        bg: bg5,
        technologies: ["Python", "FastAPI", "Pandas", "Data Analytics", "Algorithms"],
        code: "#"
    },
    {
        id: "rag-assistant",
        title: "RAG-based AI assistant",
        description: "Course-Aware Retrieval Augmented Learning System",
        insights: [
            "Answers strictly from course material",
            "Retrieval-first pipeline to reduce hallucinations",
            "Context-grounded responses using embeddings + LLM",
            "Designed for reliable, syllabus-aligned learning"
        ],
        bg: bg6,
        technologies: ["Python", "OpenAI API", "FAISS", "LangChain", "Embeddings"],
        code: "#"
    }
]

function ProjectCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const CARD_WIDTH = 830;
    const GAP = 40;
    const VIEWPORT_WIDTH = window.innerWidth * 0.8;

    const STEP = CARD_WIDTH + GAP;
    const CENTER_OFFSET = (VIEWPORT_WIDTH - CARD_WIDTH) / 2;

    const next = () => {
        if (currentIndex < ProjectsList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <>
            <div id='projectCards' className='min-h-screen flex flex-col justify-center items-center bg-black text-white'>

                <div className="w-full grid grid-cols-2">
                    <div className="flex flex-row items-center gap-5 justify-center pl-50">
                        {/* <h1 className="text-8xl font-bold">Projects</h1> */}
                        <img src={project} alt="project" />
                        <img className="mt-10" src={arrow} alt="arrow" />
                    </div>
                </div>

                <p className='mt-3 mb-20 text-xl font-medium leading-none'>( Selected projects focused on applied ML, system design, and real-world deployment )</p>

                <div className="overflow-hidden"
                    style={{ width: `${VIEWPORT_WIDTH}px` }}
                >
                    {/* TRACK */}
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            gap: `${GAP}px`,
                            transform: `translateX(${CENTER_OFFSET - currentIndex * STEP}px)`,
                        }}
                    >

                        {ProjectsList.map(
                            ({ id, title, description, insights, bg, technologies, code }, index) => (

                                <div
                                    key={index}
                                    className={`w-[830px] h-[500px] rounded-2xl px-20 py-12 relative overflow-hidden flex-shrink-0 transition-all duration-500 font-product ${index === currentIndex
                                            ? "scale-100 opacity-100"
                                            : "scale-90 opacity-40"
                                        }`}
                                    style={{
                                        backgroundImage: `url(${bg})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >


                                    {/* CONTENT */}
                                    <div className="relative z-10">

                                        {/* TITLE */}
                                        <h2 className="text-4xl font-semibold mb-1">
                                            {title}
                                        </h2>

                                        {/* DESCRIPTION */}
                                        <p className="text-white text-2xl font-normal mb-4">
                                            {description}
                                        </p>

                                        {/* INSIGHTS */}
                                        <ul className="space-y-2 mb-6">
                                            {insights.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xl font-normal">
                                                    <span>⌭</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* TECH STACK */}
                                        <div className="mb-6">

                                            <div className='flex items-center gap-2'>
                                                <span className="text-base font-normal border-2 border-dashed py-1 px-2 mb-4 inline-block">
                                                    Tech Stack
                                                </span>
                                                <img src={arrow2} alt="arrow" />
                                            </div>

                                            <div className="flex flex-wrap justify-center gap-5">
                                                {technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-2 bg-white text-black text-base font-normal inline-block"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>

                                        {/* BUTTONS */}
                                        <div className="flex justify-center gap-10">

                                            <Link
                                                to={`/projects/${id}`}
                                                className="group px-18 py-3 bg-white text-black rounded-xl text-base font-normal inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                                            >
                                                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                                    ➔
                                                </span>
                                                View Case Study
                                            </Link>

                                            <a
                                                href={code}
                                                className="group px-22 py-3 bg-white text-black rounded-xl text-base font-normal inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                                            >
                                                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                                    ➔
                                                </span>
                                                View Code
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            )
                        )}
                    </div>
                </div>

                <div className='gap-20 flex flex-row justify-center items-center mt-15'>
                    <button
                        onClick={prev}
                        className="h-25 w-25 pb-5 pr-2 rounded-full bg-white text-black text-7xl flex items-center justify-center text-center disabled:opacity-30 transition-opacity duration-300 ease-in-out"
                        disabled={currentIndex === 0}
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className="h-25 w-25 pb-5 pl-2 rounded-full bg-white text-black text-7xl flex items-center justify-center text-center disabled:opacity-30 transition-opacity duration-300 ease-in-out"
                        disabled={currentIndex === ProjectsList.length - 1}
                    >
                        ›
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectCards