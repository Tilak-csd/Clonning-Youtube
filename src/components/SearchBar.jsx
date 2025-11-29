import React from 'react'

export default function SearchBar() {
    return (<div className='flex items-center justify-between border-1 border-gray-600 rounded-4xl w-99 h-9 overflow-hidden'>
        <div className='flex items-center px-3'>
            <input type="text" placeholder='Search' className='outline-0 px-2' />
        </div>
        <button className='border-gray-600 border-l-1 text-gray-600 h-full px-4 cursor-pointer hover:text-gray-400'>
            <svg className="w-6 h-6 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
        </button>

    </div>

    )
}
