
import GitImage from "../assets/stack/Git.svg"
import GitHubImage from "../assets/stack/Github.svg"
import JavascriptImage from "../assets/stack/Javascript.svg"
import MongodbImage from "../assets/stack/MongoDB.svg"
import NodeJsImage from "../assets/stack/NodeJs.svg"
import ReduxImage from "../assets/stack/Redux.svg"
import TypescriptImage from "../assets/stack/Typescript.svg"



const Skills = () => {
  return (
    <div>
                    <h1 className="text-9xl text-orange-500 text-center tracking-wide"> Skills </h1>        
            <div className="flex w-full gap-20">

                <div className="w-1/2">

                    <div className="flex flex-col mt-5">
                        <div className="text-5xl text-orange-500">
                            <span className="text-8xl font-serif" >M</span>e and <br />
                            My Tech Stack
                        </div>
                        <p className="text-lg text-justify my-8">
                        Hello, I’m Arjin Joshi, a passionate Full-Stack Web Developer with one month of experience in designing and delivering impactful digital solutions. Since one and half years, I serve as a Part-Time Instructor at Kathmandu Engineering College, where I mentor students in programming fundamentals. <br /> <br /> Beyond the classroom, I am a dedicated Full-Stack Engineer with a complete command of the MERN stack. My work is defined by a passion for React.js and a sharp eye for detail in UI/UX design. By combining my deep technical knowledge with a commitment to clean, efficient code, I consistently deliver seamless user experiences. I thrive on the challenge of refining my craft and staying at the forefront of modern web development to ensure top-tier project outcomes.
                        </p>
                    </div>
                </div>
                <div className="flex mt-15 items-center justify-center gap-8 flex-wrap w-1/2 h-full">
                    <img src={MongodbImage} className="w-24 h-24" alt="" />
                    <img src="https://ik.imagekit.io/u64ptlw2x/assets/Express-hXhRzak0.png?updatedAt=1774990325891" className="w-24 h-24" alt="" />
                    <img src="https://ik.imagekit.io/u64ptlw2x/assets/React-b0s4x0q8.png?updatedAt=1774990325793" className="w-24 h-24" alt="" />
                    <img src={NodeJsImage} className="w-24 h-24" alt="" />
                    <img src={GitImage} className="w-24 h-24" alt="" />
                    <img src={GitHubImage} className="w-24 h-24" alt="" />
                    <img src="https://ik.imagekit.io/u64ptlw2x/assets/HTML-CKyDEyeN.png?updatedAt=1774990325915" className="w-24 h-24" alt="" />
                    <img src="https://ik.imagekit.io/u64ptlw2x/assets/CSS-BwVeJhGn.png?updatedAt=1774990325918" className="w-24 h-24" alt="" />
                    <img src={JavascriptImage} className="w-24 h-24" alt="" />
                    <img src={TypescriptImage} className="w-24 h-24" alt="" />
                    <img src="https://ik.imagekit.io/u64ptlw2x/assets/Tailwind-xnK0lD3j.png?updatedAt=1774990326016" className="w-24 h-24" alt="" />
                    <img src={ReduxImage} className="w-24 h-24" alt="" />
                </div>

        </div>
        <div className="text-lightGray text-9xl select-none">
        Skills
      </div>
    </div>
  )
}

export default Skills
