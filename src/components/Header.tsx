
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { NavLink } from "react-router"

const handleClick = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Header = () => {
  return (
    <div className=" w-full bg-white flex items-center justify-between">
      <div className="flex -ml-8">
        <div className="flex items-center mr-3" >
                <img src="https://ik.imagekit.io/u64ptlw2x/assets/NavLogo-CVgFBYXB.jpg?updatedAt=1774990326232" className="h-25" alt="Hello" /> 
                <span className="text-2xl -ml-8 tracking-wide font-medium">rjin</span>
        </div>
        <div  className="flex items-center" >
                <img src="https://ik.imagekit.io/u64ptlw2x/assets/NavLogo2-BuB6WENT.jpg?updatedAt=1774990325983" className="h-10" alt="Hello" /> 
                <span className="text-2xl tracking-wide font-medium">oshi</span>
        </div>  
      </div>
      <div className="flex gap-8 font-semibold text-2xl tracking-wider">
        <NavLink to="/" className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Home</NavLink>
        <NavLink to="/projects"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Project</NavLink>
        <NavLink to="/skills"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Skills</NavLink>
        <NavLink to="/contactme"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ' '}`}>Contact Me</NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <FaLinkedin onClick={() => handleClick("https://www.linkedin.com/in/thearjinjoshi")} size="2rem" className="cursor-pointer hover:text-orange-500 active:scale-95"  />
        <FaGithub onClick={() => handleClick("https://www.github.com/arjinjoshi")} size="2rem" className="cursor-pointer hover:text-orange-500 active:scale-95"/>
        <MdMail onClick={() => handleClick("mailto:thearjinjoshi1@gmail.com")} size="2rem" className="cursor-pointer hover:text-orange-500 active:scale-95"/>
      <button onClick={() => handleClick("https://ik.imagekit.io/u64ptlw2x/ArjinJoshi_Associate-Software-Engineer.pdf")} className='cursor-pointer bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-lg tracking-wide padding w-30 rounded-2xl p-2 flex justify-center'> <p className='text-center flex items-center gap-1'>Resume<FaRegFilePdf/></p></button>
      </div>
    </div>
  )
}

export default Header
