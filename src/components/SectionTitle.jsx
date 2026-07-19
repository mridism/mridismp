import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-black">{title}</h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>

      <p className="  mt-8 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}
