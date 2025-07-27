import React, { useId } from 'react'
import userInfo from '../Data/userInfo.json'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const SidePanel = ({ navigation, changeNavigation }) => {
    return (
        <div className='bg-lightCyan flex flex-col h-screen fixed top-0 left-0 items-center'>
            <div className="px-8">
                <img src={`/${userInfo.profilePic}`} alt="profilePic" className='w-68' />
                <div className="flex flex-col">
                    <p className='font-semibold text-3xl uppercase'>{userInfo.name}</p>
                    <p className='font-light leading-3 text-xl mb-5'>{userInfo.degree}</p>
                    <div className="flex items-center gap-1 font-light text-2xl mb-1">
                        <FaRegCalendarAlt />
                        <p>{`${userInfo.age} years old`}</p>
                    </div>
                    <div className="flex items-center gap-1 font-light text-2xl mb-1">
                        <MdWork />
                        <p>{userInfo.ocupation}</p>
                    </div>
                    <div className="flex items-center gap-1 font-light text-2xl">
                        <FaLocationDot />
                        <p>{userInfo.location}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full pl-6 text-2xl mt-10 gap-2 justify-center">
                <p
                    className={`${(navigation === 0)
                        ? 'bg-antiFlashWhite font-semibold'
                        : 'hover:bg-antiFlashWhite/40'
                        } rounded-bl-full rounded-tl-full px-6 py-2 cursor-pointer duration-300 ease-in-out`}
                    onClick={() => changeNavigation(0)}
                >
                    Dashboard
                </p>
                <p
                    className={`${(navigation === 1)
                        ? 'bg-antiFlashWhite font-semibold'
                        : 'hover:bg-antiFlashWhite/40'
                        } rounded-bl-full rounded-tl-full px-6 py-2 cursor-pointer duration-300 ease-in-out`}
                    onClick={() => changeNavigation(1)}
                >
                    Skills Map
                </p>
                <p
                    className={`${(navigation === 2)
                        ? 'bg-antiFlashWhite font-semibold'
                        : 'hover:bg-antiFlashWhite/40'
                        } rounded-bl-full rounded-tl-full px-6 py-2 cursor-pointer duration-300 ease-in-out`}
                    onClick={() => changeNavigation(2)}
                >
                    Projects
                </p>
                <p
                    className={`${(navigation === 3)
                        ? 'bg-antiFlashWhite font-semibold'
                        : 'hover:bg-antiFlashWhite/40'
                        } rounded-bl-full rounded-tl-full px-6 py-2 cursor-pointer duration-300 ease-in-out`}
                    onClick={() => changeNavigation(3)}
                >
                    Career Explorer
                </p>
            </div>
        </div>
    )
}

export default SidePanel