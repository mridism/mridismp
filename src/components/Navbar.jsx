import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemePopup, setShowThemePopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    //   <header
    //     className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    // ${scrolled ? "dark:bg-black/70 bg-white/80" : "dark:bg-black/30 bg-white/60"}
    // backdrop-blur-xl
    // dark:border-blue-500/20
    // border-slate-200`}
    //   >
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-slate-950/75 border-b border-blue-500/20"
        : "bg-slate-950/40"
    }
    backdrop-blur-xl
  `}
    >
      <div className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            &lt;Mridul <span className="text-blue-500">/&gt;</span>
          </h1>
        </div>

        <div className="hidden md:flex justify-center">
          <ul className="hidden md:flex gap-8">
            {links.map((item) => (
              <li key={item}>
                <Link
                  activeClass="text-blue-400 font-semibold"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="
relative
cursor-pointer
text-slate-300
hover:text-white
transition
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-blue-500
after:transition-all
after:duration-300
hover:after:w-full
"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex justify-end">
          <button
            onClick={() => {
              if (darkMode) {
                // Show light mode first
                setDarkMode(false);

                // Show popup
                setShowThemePopup(true);

                // After 3 sec return to dark mode
                // Switch back to dark after 700ms
                setTimeout(() => {
                  setDarkMode(true);
                }, 700);

                // Keep popup for 3 seconds
                setTimeout(() => {
                  setShowThemePopup(false);
                }, 3000);
              } else {
                setDarkMode(true);
              }
            }}
          >
            {darkMode ? (
              <HiSun className="text-yellow-400" size={20} />
            ) : (
              <HiMoon className="text-white" size={20} />
            )}
          </button>
        </div>
        <button
          className="md:hidden z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>
      <AnimatePresence>
        {showThemePopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 md:top-28 left-1/2 -translate-x-1/2 z-[9999]"
          >
            <motion.div
              className="
 w-[92vw] max-w-[480px]
  rounded-2xl
  p-6
  shadow-[0_0_40px_rgba(59,130,246,0.25)]
  border
  border-blue-500/20
  bg-white/95
  dark:bg-slate-900/95
  backdrop-blur-xl
"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <HiMoon size={40} className="text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Best Experienced in Dark Mode
              </h2>
              <p className="leading-7 text-slate-600 dark:text-slate-300">
                This portfolio has been carefully crafted with premium lighting,
                glassmorphism and animations that are best experienced in Dark
                Mode.
              </p>
              <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-22 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col py-4">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-lg text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
