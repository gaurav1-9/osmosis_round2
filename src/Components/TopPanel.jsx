import { FaCompass } from "react-icons/fa";
import {name} from "../Data/userInfo.json"

const TopPanel = () => {
  return (
    <div className='flex bg-antiFlashWhite fixed top-0 w-full pl-89 px-5 py-3 justify-between items-center'>
        <div className="flex items-center text-4xl font-semibold gap-2">
            <FaCompass  className="text-6xl"/>
            <div className="flex flex-col uppercase">
                <p>Learner's</p>
                <p className="leading-6 mb-3 tracking-wider">Compass</p>
            </div>
        </div>
        <div className="flex flex-col items-end font-semibold text-2xl">
            <p>Welcom back,</p>
            <p className="text-3xl leading-4">{name.split(' ')[0]}</p>
        </div>
    </div>
  )
}

export default TopPanel