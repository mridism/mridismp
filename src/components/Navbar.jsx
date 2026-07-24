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
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
    ${
      scrolled
        ? "bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10"
        : "bg-transparent"
    }
  `}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              &lt;Mridul <span className="text-blue-500">/&gt;</span>
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex gap-1">
            {links.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
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
                    px-4 py-2
                    transition-all
                    after:absolute
                    after:left-1/2
                    after:-translate-x-1/2
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-500
                    after:to-cyan-400
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (darkMode) {
                setDarkMode(false);
                setShowThemePopup(true);
                setTimeout(() => {
                  setDarkMode(true);
                }, 700);
                setTimeout(() => {
                  setShowThemePopup(false);
                }, 3000);
              } else {
                setDarkMode(true);
              }
            }}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <HiSun className="text-yellow-400" size={22} />
            ) : (
              <HiMoon className="text-white" size={22} />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden z-[1001] p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Theme Popup */}
      <AnimatePresence>
        {showThemePopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
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
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                <HiMoon size={40} className="text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white text-center">
                Best Experienced in Dark Mode
              </h2>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300 text-center">
                This portfolio has been carefully crafted with premium lighting,
                glassmorphism and animations that are best experienced in Dark
                Mode.
              </p>
              <div className="mt-8 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-lg text-slate-300 hover:text-white hover:bg-white/5 hover:pl-8 cursor-pointer transition-all duration-300 border-l-2 border-transparent hover:border-blue-500"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
