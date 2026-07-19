import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">Education</h2>

          <p className="  mt-5">
            My academic background and continuous learning journey.
          </p>
        </motion.div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass p-8"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-blue-500 text-3xl" />

                  <h3 className="text-3xl font-bold">
                    B.Tech in Computer Science & Engineering
                  </h3>
                </div>

                <div className="flex items-center gap-3 mt-6 dark:text-gray-300 text-slate-700">
                  <FaUniversity className="text-blue-400" />

                  <span>
                    Panipat Institute of Engineering & Technology, Delhi NCR
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-4 dark:text-gray-300 text-slate-700">
                  <FaCalendarAlt className="text-blue-400" />

                  <span>Graduated: July 2021</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-500/20 px-6 py-3 rounded-xl border border-blue-500/30">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-blue-400" />

                    <span className="font-semibold">Computer Science</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Learning */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            "React & Next.js",
            "JavaScript & TypeScript",
            "REST APIs & Frontend Architecture",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 text-center"
            >
              <h4 className="text-xl font-semibold">{item}</h4>

              <p className="  mt-3">
                Continuously learning and improving through hands-on projects
                and professional experience.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
