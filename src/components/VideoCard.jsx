import React, {Suspense} from 'react'

export default function VideoCard(props){
    return <div className='w-[90%] mb-4'>
        <img src={props.thumbnail} alt="" loading='lazy' className='w-full rounded-2xl' />
        <div className="flex mt-3">
            <img src={props.logo} alt="" loading='lazy' className='rounded-full w-10 h-10'/>
            <div className='pl-3'>
                <h1 className='text-sm'>{props.title}</h1>
                <p className='text-gray-600 text-sm'>{props.aurthor}</p>
                <p className='text-gray-600 text-sm'>{props.views} views |  {props.timestamp} ago</p>
            </div>
        </div>
    </div>
}