import React from 'react'

export default function VideoCard(){
    return <div className='w-[90%]'>
        <img src="./thumbnail.png" alt="" className='w-full rounded-2xl' />
        <div className="flex mt-3">
            <img src="./logo.png" alt="" className='rounded-full w-15 h-15'/>
            <div className='pl-3'>
                <h1 className='text-xl'>Man-[Na] - Kaalpanik/ Maayajastai Offical Video</h1>
                <p className='text-gray-600'>Bartika Eam Rai</p>
                <p className='text-gray-600'>13M views | 3 years agao</p>
            </div>
        </div>
    </div>
}