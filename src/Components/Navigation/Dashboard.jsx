import { name } from '../../Data/userInfo.json';
import dashboardData from '../../Data/dashboardData.json';
import { IoBulb } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col'>
      <p className='flex text-3xl min-[1920px]:text-5xl font-semibold gap-2'>
        <img src="/waving-hand_light-skin-tone.png" alt="" className='w-8 h-8 min-[1920px]:w-12 min-[1920px]:h-12' draggable="false" />
        <span>{`Hey there ${name.split(' ')[0]}...`}</span>
      </p>

      <div className="mt-3 min-[1920px]:mt-6">
        <p className='flex min-[1920px]:text-3xl text-xl font-light gap-1'>
          <span>You're just</span>
          <span className='font-semibold'>{`${dashboardData.statistics.head[0]} skills`}</span>
          <span>away from becoming a</span>
          <span className='font-semibold'>{dashboardData.statistics.head[1]}</span>
        </p>
        <p className='flex min-[1920px]:text-3xl text-xl font-light gap-1'>
          <img src="/fire.png" alt="" className='w-6 h-6 min-[1920px]:w-8 min-[1920px]:h-8' draggable="false" />
          <span className='font-semibold'>{`${dashboardData.statistics.streak} day`}</span>
          <span>progress streak</span>
        </p>
      </div>

      <div className='flex justify-center items-center gap-5 mt-8 min-[1920px]:mt-14 mb-3 min-[1920px]:mb-6 font-light'>
        <p className="flex flex-col items-center justify-center flex-1/4 bg-lightCyan rounded-xl py-2 2xl:py-7">
          <span className='font-semibold text-6xl'>{`0${dashboardData.statistics['skill-achieved']}`}</span>
          <span className='font-light text-xl leading-4 mb-2'>Skills Achieved</span>
        </p>

        <p className="flex flex-col items-center justify-center flex-1/4 bg-lightCyan rounded-xl py-2 2xl:py-7">
          <span className='font-semibold text-6xl'>{`0${dashboardData.statistics['projects-completed']}`}</span>
          <span className='font-light text-xl leading-4 mb-2'>Projects Completed</span>
        </p>

        <p className="flex-2/4 bg-palePurple rounded-xl text-3xl 2xl:text-4xl py-4 2xl:py-7.5 text-center">
          <span className='font-semibold'>{dashboardData.statistics['career-data'][0]}</span>
          <span> close to becoming a </span><br />
          <span className='font-semibold'>{dashboardData.statistics['career-data'][1]}</span>
        </p>
      </div>

      <div className='flex items-center text-xl gap-1 font-light min-[1920px]:text-2xl'>
        <IoBulb />
        <p className='flex gap-1'>
          <span className='font-semibold'>Next up:</span>
          <span>{dashboardData.statistics.tip}</span>
        </p>
      </div>

      <div className='flex min-[1920px]:mt-15 mt-9 font-light'>
        <div className="flex flex-col flex-1/3 2xl:flex-1/2">
          <p className='min-[1920px]:text-5xl text-3xl font-semibold mb-4'>Skills Overview</p>
          {
            dashboardData['skills-overview'].map((skill, index) => (
              <div
                key={index}
                className='w-9/10'
              >
                <p className='flex justify-between'>
                  <span>{skill.skill}</span>
                  <span>{skill.percentage}%</span>
                </p>
                <div className='w-full h-3 rounded-full bg-antiFlashWhite mb-5'>
                  <div className={`bg-thisle rounded-full w-[${skill.percentage}%] h-full`}></div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col gap-3 flex-1/2 ">
          <p className='min-[1920px]:text-5xl text-3xl font-semibold mb-3'>Your Timeline</p>
          <ul className='gap-2 min-[1920px]:gap-3  flex flex-col text-lg'>
            {
              dashboardData.timeline.map((activity, index) => (
                <li
                  key={index}
                  className='flex gap-1 min-[1920px]:text-xl '
                >
                  <span className='font-semibold'>{activity.date}:</span>
                  <span>{activity.objective}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard