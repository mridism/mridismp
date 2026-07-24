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
  { number: "4+", label: "Years Experience", icon: "🎯" },
  { number: "20+", label: "Projects Built", icon: "🚀" },
  { number: "100K+", label: "Users Impacted", icon: "👥" },
  { number: "3", label: "Companies Worked", icon: "🏢" },
];

const features = [
  {
    icon: <FaReact size={30} />,
    title: "Modern Frontend",
    text: "Building scalable React & Next.js applications with cutting-edge technologies.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <FaJs size={30} />,
    title: "JavaScript Expert",
    text: "Strong understanding of ES6+, async programming, and modern APIs.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaGitAlt size={30} />,
    title: "Version Control",
    text: "Experienced with Git, GitHub, and collaborative development workflows.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "API Integration",
    text: "REST APIs, Authentication, and seamless Backend communication.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: <FaCode size={30} />,
    title: "Clean Code",
    text: "Readable, reusable, and maintainable architecture following best practices.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Performance",
    text: "Optimized UI with responsive layouts and smooth user experiences.",
    gradient: "from-red-400 to-orange-500",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-28 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          <p className="text-center mt-8 max-w-3xl mx-auto leading-relaxed text-lg text-secondary">
            I'm a passionate Frontend Developer specializing in React, JavaScript, and modern web technologies.
            I enjoy building elegant, high-performance web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg p-8 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {item.number}
              </h3>
              <p className="mt-4 text-secondary font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></span>
              Who am I?
            </h3>

            <div className="space-y-6 text-lg leading-relaxed text-secondary">
              <p className="hover:text-white transition-colors duration-300">
                I have over <span className="text-blue-400 font-semibold">4 years</span> of professional experience 
                building responsive and scalable web applications using React, JavaScript, TypeScript, and modern frontend tools.
              </p>

              <p className="hover:text-white transition-colors duration-300">
                Currently working as a Frontend Developer at <span className="text-cyan-400 font-semibold">TechKN</span>, 
                previously contributed to projects at IRCTC, Ivy Benefits, and Rose IT Solutions.
              </p>

              <p className="hover:text-white transition-colors duration-300">
                I love transforming complex business requirements into intuitive user experiences while keeping 
                <span className="text-blue-400 font-semibold"> performance</span>, 
                <span className="text-cyan-400 font-semibold"> accessibility</span>, and 
                <span className="text-purple-400 font-semibold"> clean architecture</span> in mind.
              </p>
            </div>

            {/* Additional info cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 text-center hover:border-blue-500/50 transition-all"
              >
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold text-blue-400">B.Tech CSE</h4>
                <p className="text-sm text-secondary mt-1">Computer Science</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-2">📍</div>
                <h4 className="font-semibold text-cyan-400">New Delhi</h4>
                <p className="text-sm text-secondary mt-1">Based in India</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  y: -8,
                }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg p-7 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text`}>
                  <div className="inline-block">{card.icon}</div>
                </div>

                <h4 className="text-xl font-bold mt-3 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h4>

                <p className="text-secondary mt-3 text-sm leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
