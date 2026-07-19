import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "20+", label: "Projects Built" },
  { number: "100K+", label: "Users Impacted" },
  { number: "3", label: "Companies Worked" },
];

const features = [
  {
    icon: <FaReact size={30} />,
    title: "Modern Frontend",
    text: "Building scalable React & Next.js applications.",
  },
  {
    icon: <FaJs size={30} />,
    title: "JavaScript Expert",
    text: "Strong understanding of ES6+, async programming and APIs.",
  },
  {
    icon: <FaGitAlt size={30} />,
    title: "Version Control",
    text: "Experienced with Git, GitHub and collaborative workflows.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "API Integration",
    text: "REST APIs, Authentication and Backend communication.",
  },
  {
    icon: <FaCode size={30} />,
    title: "Clean Code",
    text: "Readable, reusable and maintainable architecture.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Performance",
    text: "Optimized UI with responsive layouts and smooth UX.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">About Me</h2>

          <p className="  text-center mt-6 max-w-3xl mx-auto leading-8">
            I'm a passionate Frontend Developer specializing in React,
            JavaScript and modern web technologies. I enjoy building elegant,
            high-performance web applications that deliver exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="mt-3 dark:text-gray-300 text-slate-700">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Text */}

        <div className="mt-24 grid lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold">Who am I?</h3>

            <p className="  mt-6 leading-8">
              I have over 4 years of professional experience building responsive
              and scalable web applications using React, JavaScript, TypeScript
              and modern frontend tools.
            </p>

            <p className="  mt-5 leading-8">
              Currently working as a Frontend Developer at TechKN, previously
              contributed to projects at IRCTC, Ivy Benefits and Rose IT
              Solutions.
            </p>

            <p className="  mt-5 leading-8">
              I love transforming complex business requirements into intuitive
              user experiences while keeping performance, accessibility and
              clean architecture in mind.
            </p>
          </motion.div>

          {/* Feature Cards */}

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotate: 0.5,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-7"
              >
                <div className="text-blue-500">{card.icon}</div>

                <h4 className="text-xl font-semibold mt-5">{card.title}</h4>

                <p className="  mt-3">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
