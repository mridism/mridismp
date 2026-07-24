import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import hero from "../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden transition-colors duration-500"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Background Blur Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[180px] opacity-25 top-20 -left-32 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/25 rounded-full blur-[160px] opacity-20 bottom-20 right-0 animate-pulse delay-1000"></div>
      <div className="absolute w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[140px] opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ paddingTop: "40px" }}
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-blue-400 text-lg mb-4 font-medium tracking-wide"
            style={{ marginBottom: "-5px" }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Mridul
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Arya
            </span>
          </motion.h1>

          <div className="mt-8 text-2xl dark:text-gray-300 text-slate-700 font-semibold h-14 flex items-center">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "ReactJS Developer",
                2000,
                "JavaScript Enthusiast",
                2000,
                "UI Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
            />
          </div>

          <p className="mt-8 text-secondary max-w-xl leading-relaxed text-lg">
            Passionate Frontend Developer with expertise in building modern,
            scalable and responsive web applications using React, Next.js,
            JavaScript and Tailwind CSS. Transforming ideas into elegant digital
            experiences.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="/resume.pdf"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              <FaDownload className="transition-transform group-hover:animate-bounce" />
              <span className="font-semibold">Download Resume</span>
            </a>

            <a
              href="#contact"
              className="group border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all transform hover:-translate-y-1"
            >
              <span className="font-semibold">Contact Me</span>
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-3xl">
            <a
              href="https://github.com/mridism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mridul-arya-059634154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mridularya68@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="Email Address"
            >
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        {/* Right - Hero Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Pulsating glow */}
            <div className="absolute -inset-0 rounded-[45%] bg-blue-500/20 blur-[90px] animate-pulse" />

            {/* Secondary glow */}
            <div className="absolute -inset-[-8px] rounded-[45%] bg-cyan-400/20 blur-[60px] animate-ping opacity-20" />

            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-[42%] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 p-[4px]">
              <div className="w-full h-full rounded-[42%] bg-slate-950" />
            </div>

            <img
              src={hero}
              alt="Mridul Arya"
              className="
    relative
    w-[300px] h-[360px]
    lg:w-[420px] lg:h-[500px]
    object-cover
    rounded-[42%]
    border
    border-white/80
    shadow-[0_0_60px_rgba(59,130,246,0.25)]
  "
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-blue-400 rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
