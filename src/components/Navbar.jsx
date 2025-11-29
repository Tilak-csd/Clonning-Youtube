import React from 'react'
import SearchBar from './SearchBar'


export default function Navbar() {
    return (
        <div className="flex justify-around items-center h-15">
            <div>
               Youtube
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                Login
            </div>
        </div>
    )
}
