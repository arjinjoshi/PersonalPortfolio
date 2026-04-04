import { useState } from "react";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { MdMail, MdMenu, MdClose } from "react-icons/md"; 
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact Me", path: "/contactme" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="w-full mx-auto px-4 h-20 flex items-center justify-between">
        

        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <img 
              src="https://ik.imagekit.io/u64ptlw2x/assets/NavLogo-CVgFBYXB.jpg?updatedAt=1774990326232" 
              className="h-18 md:h-23" 
              alt="Logo Part 1" 
            />
            <span className="text-xl md:text-2xl -ml-6 md:-ml-7 tracking-wider font-medium">rjin</span>
          </div>
          <div className="flex items-center">
            <img 
              src="https://ik.imagekit.io/u64ptlw2x/assets/NavLogo2-BuB6WENT.jpg?updatedAt=1774990325983" 
              className="h-8 md:h-10" 
              alt="Logo Part 2" 
            />
            <span className="text-xl md:text-2xl tracking-wide font-medium">oshi</span>
          </div>
        </div>


        <div className="hidden lg:flex gap-8 font-semibold text-xl tracking-wider">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-orange-500" : "hover:text-orange-400"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex gap-5 items-center">
          <FaLinkedin onClick={() => handleClick("https://www.linkedin.com/in/thearjinjoshi")} size="1.5rem" className="cursor-pointer hover:text-orange-500 active:scale-95" />
          <FaGithub onClick={() => handleClick("https://www.github.com/arjinjoshi")} size="1.5rem" className="cursor-pointer hover:text-orange-500 active:scale-95" />
          <MdMail onClick={() => handleClick("mailto:thearjinjoshi1@gmail.com")} size="1.5rem" className="cursor-pointer hover:text-orange-500 active:scale-95" />
          <button 
            onClick={() => handleClick("https://ik.imagekit.io/u64ptlw2x/ArjinJoshi_Associate-Software-Engineer.pdf")} 
            className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-md tracking-wide px-4 py-2 rounded-2xl flex items-center gap-2"
          >
            Resume <FaRegFilePdf />
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-700">
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t shadow-lg z-50 flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-700"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <hr />
          <div className="flex gap-6 justify-center items-center">
            <FaLinkedin onClick={() => handleClick("https://www.linkedin.com/in/thearjinjoshi")} size="2rem" />
            <FaGithub onClick={() => handleClick("https://www.github.com/arjinjoshi")} size="2rem" />
            <MdMail onClick={() => handleClick("mailto:thearjinjoshi1@gmail.com")} size="2rem" />
          </div>
          <button 
            onClick={() => handleClick("https://ik.imagekit.io/u64ptlw2x/ArjinJoshi_Associate-Software-Engineer.pdf")} 
            className="bg-orange-500 text-white p-3 rounded-xl flex justify-center items-center gap-2 font-bold"
          >
            Download Resume <FaRegFilePdf />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;