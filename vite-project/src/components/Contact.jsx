import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import arrow from "../assets/Arrow.svg";
import akhil from "../assets/AKHIL.png";
import hand from "../assets/hand.svg";
import heading from "../assets/LetsConnect.svg";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {

    const contacts = [
        { name: "Email", link: "mailto:akhilsaurabh65@gmail.com" },
        { name: "GitHub", link: "https://github.com/AKHIL-SAURABH" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/akhil-saurabh-1b025b333/" },
        { name: "LeetCode", link: "https://leetcode.com/u/DATACODER_PY/" },
        { name: "HackerRank", link: "https://www.hackerrank.com/profile/akhilsaurabh65" },
        { name: "CodeChef", link: "https://www.codechef.com/users/akhilsaurabh" }
    ];

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const handleSend = () => {
        if (!message.trim()) return;          // don't send empty messages
        setStatus('sending');

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_email: email || 'anonymous',
                message: message,
            },
            EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('success');
                setMessage('');
                setEmail('');
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                setStatus('error');
            });
    };


    return (
        <div id="contact" className="min-h-screen bg-black text-white flex flex-row text-white">
            <div className='w-1/2 mt-40 mb-2'>

                <div className='pl-30'>

                    <div className="grid grid-cols-1 mb-16">
                        <div className="flex flex-row gap-5">
                            {/* <h1 className="text-8xl font-bold">Lets Connect</h1> */}
                            <img className='h-20' src={heading} alt="heading" />
                            <img className="mt-10" src={arrow} alt="arrow" />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-black text-[32px]'>I'm currently open to</h1>
                        <ul className="space-y-1 text-xl font-normal mt-4">
                            {[
                                "Data Science & ML roles",
                                "Applied AI projects",
                                "Research & internship opportunities",
                                "Collaboration on real-world AI systems",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-white/80">⚭</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-start gap-4 mt-20'>
                        {contacts.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group bg-white text-black text-lg font-normal h-12 w-45 overflow-hidden relative flex justify-center items-center font-g'
                            >
                                <div className="relative flex items-center justify-center overflow-hidden leading-none">

                                    {/* Original Text */}
                                    <span className="block transition-transform duration-350 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                                        {item.name}
                                    </span>

                                    {/* Duplicate Text */}
                                    <span className="block absolute top-full left-0 w-full transition-transform duration-350 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                                        {item.name}
                                    </span>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className='mt-20'>
                    <img src={akhil} alt="akhil" />
                </div>
            </div>


            <div className='w-1/2 flex flex-row justify-center items-center mt-40 mb-2'>
                <div className="bg-white text-black w-130 h-180 rounded-3xl flex flex-col justify-between">
                    <div className="flex flex-col gap-4 p-6">
                        <label className="text-2xl font-normal">Your Message:</label>
                        <textarea
                            className="bg-gray-200 rounded-[10px] h-40 p-3 resize-none outline-none"
                            placeholder="Write your message here…"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <label className="text-2xl font-normal">
                            Your email <span className='text-xs'>(optional, if you'd like a reply):</span>
                        </label>
                        <input
                            className="bg-gray-200 rounded-[10px] p-2 outline-none"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Status feedback */}
                        {status === 'success' && (
                            <p className="text-green-600 font-semibold text-sm">✓ Message sent! I'll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 font-semibold text-sm">✗ Something went wrong. Please try again.</p>
                        )}

                    </div>

                    <div className='relative'>
                        <img src={hand} alt="hand" />
                        {/* Send button – triggers emailjs.send() on click */}
                        <div
                            className="group absolute top-15 left-46 w-40 h-40 flex items-center justify-center cursor-pointer"
                            onClick={handleSend}
                            style={{ pointerEvents: status === 'sending' ? 'none' : 'auto' }}
                        >

                            {/* Black base circle */}
                            <div className="relative w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center">

                                {/* Blue animated fill */}
                                <div className="
                                absolute
                                bottom-0
                                left-1/2
                                w-full
                                h-full
                                bg-[#2B6EFF]
                                rounded-full
                                transform
                                -translate-x-1/2
                                origin-bottom
                                scale-0
                                group-hover:scale-100
                                transition-transform
                                duration-300
                                ease-out
                                z-10
                                "></div>

                                <span className="relative z-20 text-white text-2xl font-normal p-2 flex-wrap text-center">
                                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                                </span>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact