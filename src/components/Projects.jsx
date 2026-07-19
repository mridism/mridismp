import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center   mt-5 mb-16">
          Some of my recent work. Replace these placeholders with your own
          projects whenever you're ready.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="  mt-4 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a
            href="https://github.com/mridism"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 dark:hover:text-white hover:text-slate-900 transition"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
