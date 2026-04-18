
import { useEffect, useRef } from "react";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router"
import Typed from "typed.js";


const Homepage = () => {

  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='flex justify-between h-full mt-30 items-center'>
        <div className='text-lightdarkblue tracking-wide flex flex-col gap-5'>
            <h1 className='text-4xl'>Hi! Arjin Joshi </h1>
            <div className='text-4xl'>
              I am a{" "}
              <span ref={el} className='text-orange-500'></span>
            </div>

        <p className='text-lg tracking-wide'>I'm a software developer and here is my portfolio website. <br /> Here you'll learn about my journey as a software developer.</p>

        <button onClick={() => navigate('/contactme')} className='cursor-pointer bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-left text-lg tracking-wide padding w-30 rounded-2xl p-3'> <p className='flex items-center gap-1'><MdMail/>Say hi!</p></button>

        <div className="text-lightGray text-9xl select-none">
        Home
        </div>




        </div>
        <div className='hidden md:flex p-10 grayscale transition-all duration-1000 animate-scale-image'>
            <img src="https://ik.imagekit.io/u64ptlw2x/assets/UserImage-DKPZp1-5.jpg?updatedAt=1774990326073" className='h-88 rounded-xl ' alt="" />
        </div>

    </div>

  )
}

export default Homepage
