import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import projects from "../../Data/projects.json";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col justify-between min-[1900px]:mb-40 w-full mb-6">
      <div className="flex justify-between mb-4">
        <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>Your Projects...</p>
        <p className="flex gap-1 items-center text-xl min-[1920px]:text-2xl font-semibold cursor-pointer hover:bg-antiFlashWhite rounded-full px-3 py-1 duration-300 ease-in-out">
          <FaCirclePlus />
          <span>Add new</span>
        </p>
      </div>

      <div>
        <div className="flex gap-3">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className={`relative
              ${((startIndex + index) % 2 === 0)
                  ? 'bg-lightCyan'
                  : 'bg-palePurple'
                } w-1/3 h-90 rounded-xl p-4 font-light`}
            >
              <p className="text-2xl 2xl:text-3xl font-semibold h-14 2xl:h-18 w-9/10">{project.title}</p>
              <p className="mt-2">{project.date}</p>
              <p className="mt-2 2xl:mt-6 text-lg h-24 2xl:h-20 leading-6">{project.desc}</p>
              <p className="mt-2 text-2xl font-semibold">Developed using</p>
              <div className="flex gap-2 flex-wrap mt-2">
                {
                  project.tech.map((tech, idx) => (
                    <p key={idx} className="bg-whiteSmoke rounded-full px-4 font-semibold">{tech}</p>
                  ))
                }
              </div>
              <p className={`font-semibold flex gap-1 items-center absolute bottom-2 right-4 hover:bg-antiFlashWhite/40 px-5 rounded-full py-1 cursor-pointer`}>
                <FaGithub />
                <span>Source Code</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full 
            ${(currentPage === 1)
                ? 'bg-antiFlashWhite cursor-not-allowed'
                : 'bg-night text-whiteSmoke hover:bg-night/80 cursor-pointer'}`}
          >
            <FaArrowLeftLong />
          </button>
          <span className="text-lg font-light">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full 
            ${(currentPage === totalPages)
                ? 'bg-antiFlashWhite cursor-not-allowed'
                : 'bg-night text-whiteSmoke hover:bg-night/80 cursor-pointer'}`}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
