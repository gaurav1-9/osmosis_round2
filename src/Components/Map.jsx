import { IoIosCheckmarkCircle } from "react-icons/io";

const Map = ({ stage, index, totalLength }) => {
    return (
        <div
            className='mt-4'
        >
            {
                (index === 0)
                    ? <div>
                        <div className='flex justify-center items-center'>
                            <div className={`w-7 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-left'>{stage.skill}</p>
                            {(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mt-2 mb-4' />}
                        </div>
                    </div>

                    : (index === totalLength - 1)

                        ? <div>
                            <div className='flex justify-center items-center'>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-4.5 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-right'>{stage.skill}</p>
                                {(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mt-2 mb-4' />}
                            </div>
                        </div>

                        : <div>
                            <div className='flex justify-center items-center'>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-9 h-4 rounded-full ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                                <div className={`w-full h-1 ${(stage.completed) ? 'bg-emerald' : 'bg-thisle/60'}`}></div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='w-60 text-center'>{stage.skill}</p>
                                {(stage.completed) && <IoIosCheckmarkCircle className='text-emerald text-3xl mt-2 mb-4' />}
                            </div>
                        </div>
            }
        </div>
    )
}

export default Map