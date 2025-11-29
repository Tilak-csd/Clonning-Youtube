import React from 'react'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Menu from './Menu'


export default function Navbar() {
    return (
        <div className="flex justify-around items-center h-15">
            <div className='flex gap-3'>
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
