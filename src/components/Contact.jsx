import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">Let's Work Together</h2>

          <p className="  mt-6 max-w-2xl mx-auto">
            Have a project in mind or looking for a React Developer? Feel free
            to connect with me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8">
              <h3 className="text-3xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">
                <div className="flex items-center gap-5">
                  <FaEnvelope className="text-blue-500 text-2xl" />

                  <div>
                    <p className=" ">Email</p>

                    <h4>mridularya68@gmail.com</h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <FaPhoneAlt className="text-blue-500 text-2xl" />

                  <div>
                    <p className=" ">Phone</p>

                    <h4>+91 99586 95757</h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <FaMapMarkerAlt className="text-blue-500 text-2xl" />

                  <div>
                    <p className=" ">Location</p>

                    <h4>New Delhi, India</h4>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 mt-10">
                <a
                  href="https://github.com/mridism"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-blue-500"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://linkedin.com/in/mridul-arya-059634154"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-semibold transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
