import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import hero from "../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 top-20 -left-24"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10 bottom-10 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 text-lg mb-3">Hello, I'm</p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Mridul
            <br />
            Arya
          </h1>

          <div className="mt-6 text-2xl dark:text-gray-300 text-slate-700 font-semibold h-12">
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
            />
          </div>

          <p className="mt-8 text-secondary max-w-xl leading-8">
            Passionate Frontend Developer with experience building modern,
            scalable and responsive web applications using React, Next.js,
            JavaScript and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-500 transition"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-3xl">
            <a href="https://github.com/mridism" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mridul-arya-059634154"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:mridularya68@gmail.com">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-40 animate-pulse"></div>

            <img
              src={hero}
              alt="Mridul Arya"
              className="relative w-[330px] lg:w-[430px] rounded-full border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
