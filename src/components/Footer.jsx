import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            &lt;Mridul <span className="text-blue-500">/&gt;</span>
          </h2>

          <p className="  mt-2">Frontend Developer • ReactJS Developer</p>
        </div>

        <div className="flex gap-5 mt-6 md:mt-0">
          <a
            href="https://github.com/mridism"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/mridul-arya-059634154"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>

          <button
            onClick={scrollTop}
            className="hover:text-blue-500 cursor-pointer"
          >
            <FaArrowUp size={22} />
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Mridul Arya. Built with React & Tailwind
        CSS.
      </p>
    </footer>
  );
}
