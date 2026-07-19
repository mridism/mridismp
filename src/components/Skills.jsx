import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills.jsx";
import SectionTitle from "./SectionTitle";
import SkillRadarChart from "./SkillRadarChart";

export default function Skills() {
  const [view, setView] = useState("graph");
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Skills
        </motion.h2>

        <p className="text-center   mt-6 mb-20">
          Technologies I use to build modern web applications.
        </p>
        <div className="flex justify-center mb-12">
          <div className="flex rounded-full p-1 bg-slate-800/50 border border-white/10">
            <button
              onClick={() => setView("graph")}
              className={`px-5 py-2 rounded-full transition ${
                view === "graph" ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            >
              Graph
            </button>
            <button
              onClick={() => setView("cards")}
              className={`px-5 py-2 rounded-full transition ${
                view === "cards" ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            >
              Cards
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {view === "cards" ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6"
                  >
                    <div className="text-5xl text-blue-500">{skill.icon}</div>

                    <h3 className="text-2xl mt-5 font-semibold">
                      {skill.name}
                    </h3>

                    <div className="mt-6 w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />
                    </div>

                    <p className="mt-3  ">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="graph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SkillRadarChart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
