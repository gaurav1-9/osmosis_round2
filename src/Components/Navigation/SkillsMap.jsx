import skills from '../../Data/skillMap.json'
import Map from '../Map';

const SkillsMap = () => {
  return (
    <div className='w-full'>
      <div>
        <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>Ongoing Skils</p>
        <div className="w-full bg-antiFlashWhite h-fit p-3 rounded-xl flex flex-col mt-5">
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-semibold'>{skills['ongoing-skill'].title}</p>
            <p className='bg-thisle/60 rounded-md py-1 px-4 font-semibold'>{`${skills['ongoing-skill'].progress} Done`}</p>
          </div>
          <div className='flex overflow-x-auto px-5 scrollbar-color'>
            {
              skills['ongoing-skill'].stages.map((stage, index) => (
                <Map
                  key={index}
                  stage={stage}
                  index={index}
                  totalLength={skills['ongoing-skill'].stages.length}
                />
              ))
            }
          </div>
        </div>
      </div>

      <div className='mt-6 mb-4'>
        <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>Skills Achieved</p>
        <div className="flex gap-3 mt-5 w-full overflow-x-auto pb-2">
          {
            skills['skills-achieved'].map((skill, index) => (
              <div
                key={index}
                className={`${(index % 2 == 0)
                  ? 'bg-lightCyan'
                  : 'bg-palePurple'
                  } rounded-xl w-2/10 h-28 min-[1900px]:h-35 flex flex-col justify-center items-center`}
              >
                <p className='text-2xl min-[1900px]:text-3xl px-4 min-[1900px]:px-6 leading-6 min-[1900px]:leading-7 text-center font-semibold h-13 min-[1900px]:h-15 mt-1'>{skill}</p>
                <p className='mt-3 cursor-pointer px-3 py-1 hover:bg-antiFlashWhite/50 rounded-full'>view certificate</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>Other Unexplored Skills</p>
      </div>
    </div>
  )
}

export default SkillsMap