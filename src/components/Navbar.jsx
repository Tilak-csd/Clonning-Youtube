import React from 'react'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Menu from './Menu'


export default function Navbar() {
    return (
        <div className="flex items-center h-15 justify-between px-5 md:px-10">
            <div className='flex gap-7 md:gap-10'>
            <Menu />
            <img src="./youtubelogo.png" alt="" className='w-auto h-6' />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='flex gap-3'>
                <Notification></Notification>
                <img src="./userlogo.png" className='w-9 h-9 rounded-full'/>
            </div>
        </div>
    )
}
