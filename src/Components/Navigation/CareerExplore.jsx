import { useState } from 'react';
import careerGoals from '../../Data/careerGoals.json'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RiGitBranchLine } from "react-icons/ri";
import CareerTree from '../CareerTree';
import { FaCaretDown } from 'react-icons/fa6';

const CareerExplore = () => {
  const [careerTree, setCareerTree] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };
  return (
    <div className='w-full'>
      <p className='flex text-3xl min-[1920px]:text-5xl font-semibold'>Career Goal</p>
      <div className='mt-5 flex overflow-x-auto scrollbar-color gap-5 pb-3'>
        {
          careerGoals['career-goal'].map((goal, index) => (
            <div
              key={index}
              className={`w-110 h-73 shrink-0 rounded-xl px-5 py-3 
                ${(index % 2 === 0)
                  ? 'bg-lightCyan'
                  : 'bg-palePurple'
                }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col w-6/10">
                  <p className='text-3xl font-semibold h-18'>{goal.title}</p>
                  <p className='text-lg font-light'>{goal.skills_summary}</p>
                </div>
                <div className="flex flex-col w-4/10 items-end">
                  <p className='font-light text-right leading-3'>
                    <span>You are</span>
                    <span className='text-3xl font-semibold pl-2'>{goal.goal_progress}%</span><br />
                    <span>close to your goal</span>
                  </p>
                  <div className='mt-2 w-8/10 h-4 rounded-full bg-antiFlashWhite'>
                    <div className={`rounded-full ${goal.style} 
                      ${(index % 2 === 0)
                        ? 'bg-darkCyan'
                        : 'bg-thisle'
                      } h-full`}></div>
                  </div>
                </div>
              </div>

              <div className='mt-3 h-28'>
                <p className='font-semibold text-xl'>Skills Required</p>
                <div className='flex flex-wrap text-lg font-light h-22 overflow-y-auto scrollbar-color'>
                  {
                    goal.skills_required.map((skills, index) => (
                      <div
                        key={index}
                        className='flex gap-1 pr-4 items-center'
                      >
                        {
                          (skills.achieved)
                            ? <IoIosCheckmarkCircle className='text-emerald' />
                            : <MdOutlineRadioButtonChecked className='text-night/40' />
                        }
                        <p>{skills.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div
                className={`flex justify-center items-center text-xl gap-1 text-night
                  ${(index % 2 === 0)
                    ? 'bg-darkCyan hover:bg-darkCyan/80'
                    : 'bg-thisle hover:bg-thisle/80'
                  } rounded-md px-3 cursor-pointer mt-3
                  `}
                onClick={() => setCareerTree(careerGoals['career-goal'][index])}
              >
                <RiGitBranchLine />
                <p>Career Tree</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='mt-6 flex flex-col w-full'>
        <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>Browse Other Careers</p>
        <div className='flex flex-col gap-2 mt-5'>
          {
            careerGoals['other-career'].map((other, index) => (
              <div key={index} className='w-full bg-antiFlashWhite p-3 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <p className='text-2xl font-semibold'>{other.title}</p>
                  <span
                    className={`text-3xl hover:bg-silver/30 rounded-full cursor-pointer transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                    onClick={() => toggleExpand(index)}
                  >
                    <FaCaretDown />
                  </span>
                </div>

                {expandedIndex === index && (
                  <div>
                    <p className='text-xl font-semibold mt-3 mb-2'>Skills Required</p>
                    <div className="flex justify-between items-end">
                      <div className="flex w-7/10 flex-wrap gap-1 leading-5 mb-3">
                        {
                          other.skills_required.map((skillReq, idx) => (
                            <p key={idx}>{`${skillReq}${(idx === other.skills_required.length - 1) ? '' : ','}`}</p>
                          ))
                        }
                      </div>
                      <p className='px-4 mr-3 bg-darkCyan/90 font-semibold rounded-md py-1'>Set as New Goal</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </div>

      {careerTree && <CareerTree careerTree={careerTree} setCareerTree={setCareerTree} />}
    </div>
  )
}

export default CareerExplore