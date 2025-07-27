import React from 'react'

const MobileViewPage = () => {
    return (
        <div className='flex flex-col lg:hidden bg-whiteSmoke p-3 rounded-xl '>
            <img src="/Breaking barriers-pana.png" alt=""  className='w-full md:px-30'/>
            <p className="text-3xl font-semibold">🚧 This dashboard is currently optimized for larger screens only.</p>
            <p className='text-xl font-light my-2 mt-5'>Please view this on a laptop or desktop for the best experience.</p>
            <p className='text-lg font-light'>Due to time constraints, responsive design is not implemented.</p>
        </div>
    )
}

export default MobileViewPage