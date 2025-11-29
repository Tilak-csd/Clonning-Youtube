import React from 'react'

export default function VideoCard(props){
    return <div className='w-[90%]'>
        <img src={props.thumbnail} alt="" className='w-full rounded-2xl' />
        <div className="flex mt-3">
            <img src={props.logo} alt="" className='rounded-full w-15 h-15'/>
            <div className='pl-3'>
                <h1 className='text-xl'>{props.title}</h1>
                <p className='text-gray-600'>{props.aurthor}</p>
                <p className='text-gray-600'>{props.views} views |  {props.timestamp} ago</p>
            </div>
        </div>
    </div>
}