import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const CareerTree = ({ careerTree, setCareerTree }) => {
    return (
        <div
            className='w-screen h-screen absolute top-0 left-0 backdrop-blur-3xl bg-night/20 z-100 flex flex-col justify-center items-center text-night overflow-x-hidden'
        >
            <IoMdCloseCircle className="absolute top-13 right-13 text-5xl hover:text-night/80 cursor-pointer" onClick={() => setCareerTree(null)} />
            <p className='text-5xl font-semibold'>{careerTree.title} Career Path</p>
            <p className='text-2xl font-semibold mb-10'>{careerTree.goal_progress}% ready</p>
            <div className='flex gap-10 justify-center items-center'>
                <img src={careerTree.tree} draggable={false} />
                <div>
                    <div>
                        <p className='text-3xl font-semibold mb-2'>Gained Skills</p>
                        {
                            careerTree.skills_required.map((gained, index) => (
                                (gained.achieved)
                                    ? <div key={index} className="flex gap-1 items-center text-xl">
                                        <IoIosCheckmarkCircle />
                                        <p>{gained.name}</p>
                                    </div>
                                    : null
                            ))
                        }
                    </div>
                    <div className="mt-20">
                        <p className='text-3xl font-semibold mb-2'>Missing Skills</p>
                        {
                            careerTree.skills_required.map((gained, index) => (
                                (!gained.achieved)
                                    ? <div key={index} className="flex gap-1 items-center text-xl">
                                        <MdOutlineRadioButtonChecked />
                                        <p>{gained.name}</p>
                                    </div>
                                    : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerTree