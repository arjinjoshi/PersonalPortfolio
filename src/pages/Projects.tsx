import GitHubImage from "../assets/stack/Github.svg";

const Projects = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="text-8xl text-orange-500 text-center">Projects</h1>

      <div>
        <div className="flex flex-row justify-between">
          <p className=" text-3xl font-semibold tracking-wide  text-orange-500 mb-5">
            GenAI Resume & Interview Assistant{" "}
            <small className="text-sm ">
              {" "}
              | MERN, Redux, Gemini API, Vercel AI SDK{" "}
            </small>
          </p>
          <div className="flex flex-row gap-2">
            <p
              onClick={() =>
                handleClick(
                  "https://gen-ai-interview-question-and-resume.vercel.app/"
                )
              }
              className="active: scale-95 text-xl font-semibold tracking-wide text-shadow-gray-950"
            >
              Live Demo |{" "}
            </p>
            <img
              onClick={() =>
                handleClick(
                  "https://github.com/arjinjoshi/GenAI-InterviewQuestionAndResumeBuilding"
                )
              }
              src={GitHubImage}
              className="w-8 h-8"
              alt=""
            />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/u64ptlw2x/GenAI-InterviewPreparation.png"
          className="shadow-slate-300 shadow-2xl -z-1"
          alt=""
        />
        <p className="mt-10 text-lg text-justify font-medium tracking-wide">
          The GenAI Resume & Interview Assistant is a sophisticated full-stack
          platform engineered to bridge the gap between a candidate's current
          profile and their target career goals. Built with a robust MERN
          architecture and integrated with the Google Gemini API via the Vercel
          AI SDK, the application features a secure JWT-based authentication
          system where users can upload resumes and input specific job
          descriptions for deep analytical processing. The platform utilizes
          advanced PDF parsing and Puppeteer-driven document generation to
          provide users with an automated resume optimizer and a comprehensive,
          day-wise interview preparation roadmap—including targeted technical
          and behavioral questions—while maintaining data integrity through
          strict Zod schema validation and MongoDB persistence.
        </p>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <p className=" text-3xl font-semibold tracking-wide  text-orange-500 mb-5">
            ShowTracker{" "}
            <small className="text-sm ">
              {" "}
              | React, Redux, Tailwind, TMDB API{" "}
            </small>
          </p>
          <div className="flex flex-row gap-2">
            <p
              onClick={() =>
                handleClick("https://show-tracker-tau.vercel.app/")
              }
              className="active: scale-95 text-xl font-semibold tracking-wide text-shadow-gray-950"
            >
              Live Demo |{" "}
            </p>
            <img
              onClick={() =>
                handleClick("https://github.com/arjinjoshi/ShowTracker")
              }
              src={GitHubImage}
              className="w-8 h-8"
              alt=""
            />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/u64ptlw2x/ShowTracker.png?updatedAt=1774987161575"
          className="shadow-slate-300 shadow-2xl -z-1"
          alt=""
        />
        <p className="mt-10 text-lg text-justify font-medium tracking-wide">
          This Personal Portfolio Website is a high-performance, responsive web
          application engineered with React and TypeScript to showcase
          professional projects and technical expertise through a modern,
          streamlined interface. Built using Tailwind CSS, the site features a
          custom-themed design system with optimized typography and a fully
          responsive 'Contact Me' section that utilizes the mailto protocol for
          direct professional communication. The platform integrates interactive
          elements—such as dynamic project cards with custom hover transitions
          and seamless navigation—while leveraging a modular component
          architecture to ensure scalability and maintainability. By focusing on
          clean UI/UX principles and native CSS animations, the portfolio
          effectively demonstrates full-stack capabilities, including robust
          state management and custom form handling, providing a seamless
          experience across all device types.
        </p>
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <p className=" text-3xl font-semibold tracking-wide  text-orange-500 mb-5">
            Personal Portfolio{" "}
            <small className="text-sm ">
              {" "}
              | React, TypeScript, Tailwind CSS
            </small>
          </p>
          <div className="flex flex-row gap-2">
            <p
              onClick={() =>
                handleClick("https://personal-portfolio-peach-theta-19.vercel.app/")
              }
              className="active: scale-95 text-xl font-semibold tracking-wide text-shadow-gray-950"
            >
              Live Demo |{" "}
            </p>
            <img onClick={() =>
                handleClick("https://github.com/arjinjoshi/PersonalPortfolio")
              } src={GitHubImage} className="w-8 h-8" alt="" />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/u64ptlw2x/PersonalPortfolio.png?updatedAt=1774987126571"
          className="shadow-slate-300 shadow-2xl -z-1"
          alt=""
        />
        <p className="mt-10 text-lg text-justify font-medium tracking-wide">
          This Personal Portfolio Website is a high-performance, responsive web
          application engineered with React and TypeScript to showcase
          professional projects and technical expertise through a modern,
          streamlined interface. Built using Tailwind CSS, the site features a
          custom-themed design system with optimized typography and a fully
          responsive 'Contact Me' section that utilizes the mailto protocol for
          direct professional communication. The platform integrates interactive
          elements—such as dynamic project cards with custom hover transitions
          and seamless navigation—while leveraging a modular component
          architecture to ensure scalability and maintainability. By focusing on
          clean UI/UX principles and native CSS animations, the portfolio
          effectively demonstrates full-stack capabilities, including robust
          state management and custom form handling, providing a seamless
          experience across all device types.
        </p>
      </div>

      <div className="text-lightGray text-9xl select-none">
        Projects
      </div>
    </div>
  );
};

export default Projects;
