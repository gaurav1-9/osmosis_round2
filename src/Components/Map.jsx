import { IoIosCheckmarkCircle } from "react-icons/io";

const Map = ({ stage, index, totalLength, mark }) => {
    return (
        <div
            className='mt-4'
        >
            {
                (index === 0)
                    ? <div>
                        <div className='flex justify-center items-center'>
                            <div className={`w-4 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='w-30 text-left mb-2'>{stage.skill}</p>
                            {(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mb-4' />}
                        </div>
                    </div>

                    : (index === totalLength - 1)

                        ? <div>
                            <div className='flex justify-center items-center'>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-4.5 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <p className='w-50 text-right mb-2'>{stage.skill}</p>
                                {(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mb-4' />}
                            </div>
                        </div>

                        : <div>
                            <div className='flex justify-center items-center'>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-9 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='w-60 text-center mb-2'>{stage.skill}</p>
                                {(mark && index===4)
                                ? <button className='bg-emerald font-semibold text-whiteSmoke px-3 cursor-pointer hover:bg-emerald/90 py-1 rounded-md mb-4' >Mark as Done</button>
                                :(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mb-4' />}
                            </div>
                        </div>
            }
        </div>
    )
}

export default Map