import { motion } from "framer-motion";
import TicTacToe from "./../project/TicTacToe";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-28 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          <p className="text-center mt-8 max-w-2xl mx-auto text-secondary text-lg">
            Showcasing my recent work. Each project demonstrates my skills in building modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 px-5 py-3 rounded-xl transition-all hover:shadow-lg group/btn"
                  >
                    <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                    <span className="font-medium">Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-5 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 group/btn"
                  >
                    <FaExternalLinkAlt className="group-hover/btn:rotate-45 transition-transform" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/mridism"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 font-semibold group"
          >
            <FaGithub className="group-hover:rotate-12 transition-transform" />
            View More on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
