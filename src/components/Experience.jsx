import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-blue-500 ml-5">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              <span className="absolute -left-[52px] top-3 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900"></span>

              <div className="glass p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{item.role}</h3>

                    <h4 className="text-blue-400 mt-2">{item.company}</h4>
                  </div>

                  <div className="mt-4 md:mt-0  ">{item.duration}</div>
                </div>

                <p className="mt-2 text-gray-500">{item.location}</p>

                <ul className="mt-6 space-y-2 dark:text-gray-300 text-slate-700 list-disc ml-5">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
