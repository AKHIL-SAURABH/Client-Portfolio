import { React, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const roles = [
  "Data Scientist",
  "ML Researcher",
]

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Element doesn't exist on this page — navigate to landing page with hash
      navigate('/#' + id);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])


  const [visible, setVisible] = useState(true)
  const timer = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const atTop = currentY === 0
      const scrollingUp = currentY < lastScrollY.current

      if (atTop || scrollingUp) {
        // At top or scrolling up → show and cancel hide timer
        setVisible(true)
        clearTimeout(timer.current)
        if (!atTop) {
          // Away from top while scrolling up → still arm the inactivity timer
          timer.current = setTimeout(() => setVisible(false), 2000)
        }
      } else {
        // Scrolling down → hide immediately
        clearTimeout(timer.current)
        setVisible(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <nav
      className="min-h-32 bg-black text-lg text-white flex flex-row justify-between fixed top-0 left-0 right-0 px-15 py-10 z-100 font-product font-light text-base leading-none tracking-tightest transition-opacity duration-500 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={() => {
        clearTimeout(timer.current)
      }}
      onMouseLeave={() => {
        if (window.scrollY !== 0) {
          timer.current = setTimeout(() => setVisible(false), 2000)
        }
      }}
    >
      <div className='logo cursor-pointer' onClick={handleLogoClick}>
        <img src={logo} alt="logo" />
      </div>

      <div className="h-8 overflow-hidden relative">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${index * 2}rem)`
          }}
        >
          {roles.map((role, i) => (
            <div key={i} className="h-8 text-2xl flex items-center">
              {role}
            </div>
          ))}
        </div>
      </div>



      <div>
        <ul className='flex flex-col gap-4'>
          {["About", "Skills", "Work"].map((item, index) => {
            const sectionId = item === "Work" ? "projectCards" : item.toLowerCase();
            return (
              <li key={index} className="group w-fit cursor-pointer" onClick={() => scrollToSection(sectionId)}>
                <span className="relative inline-block">
                  {item}
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>



      <div className="group w-fit cursor-pointer self-start" onClick={() => scrollToSection("achivements")}>
        <span className="relative inline-block">
          Achievements
          <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>



      <div>
        <ul className='flex flex-col gap-4'>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/akhil-saurabh-1b025b333/" },
            { label: "GitHub", href: "https://github.com/AKHIL-SAURABH" },
            { label: "LeetCode", href: "https://leetcode.com/u/DATACODER_PY/" },
          ].map((item, index) => (
            <li key={index} className="group w-fit">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block"
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>



      <button onClick={() => scrollToSection("contact")} className="group bg-white text-black self-baseline h-12 w-45 overflow-hidden relative flex items-center justify-center font-satoshi">

        <div className="relative overflow-hidden">

          {/* First Text */}
          <span className="block transition-transform duration-350 group-hover:-translate-y-full">
            Let's Talk
          </span>

          {/* Second Text (same text) */}
          <span className="block absolute top-full left-0 transition-transform duration-350 group-hover:-translate-y-full">
            Let's Talk
          </span>

        </div>

      </button>
    </nav>
  )
}

export default Navbar;