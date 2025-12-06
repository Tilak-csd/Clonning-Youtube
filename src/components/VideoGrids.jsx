import React, { Suspense, useEffect, useState } from 'react'
const VideoCard = React.lazy(() => import('./Videocard'))
import { data } from '../data'

export default function VideoGrids() {
    // loading more video when scrolled down to infinity
    //    const [vissblecount, setVissiblecount] = useState(6)
    //    const loadMore = ()=>{
    //     setVissiblecount(prev => prev + 6)
    //    }

    //    useEffect(()=>{
    //     const handleScroll = ()=>{
    //         if(window.innerHeight+ window.scrollY >= document.body.offsetHeight - 100){
    //             loadMore()
    //         }
    //     }
    //     window.addEventListener("scroll", handleScroll)

    //     return ()=> window.removeEventListener('scroll', handleScroll)
    //    }, [])

    const [currentpage, setCurrentpage] = useState(1)
    const videoperpage = 6

    const indexofLastVideo = currentpage * videoperpage
    const indexofFirstVideo = indexofLastVideo - videoperpage
    const currentVideos = data.slice(indexofFirstVideo, indexofLastVideo)



    return (<div className='w-full justify-items-center content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* {data.slice(0, vissblecount).map((data, idx) => { */}
        {currentVideos.map((data, idx) => {
            return <Suspense fallback={<Skeleton />} key={idx}>

                <VideoCard title={data.title}
                    thumbnail={data.thumbnail}
                    logo={data.logo}
                    aurthor={data.aurthor}
                    views={data.views}
                    timestamp={data.timestamp}
                />
            </Suspense>
        })}

        <Pagination setCurrentpage={setCurrentpage} currentpage={currentpage} indexofLastVideo={indexofFirstVideo} data={data} />
    </div>)
}

// pagination
function Pagination({ currentpage, setCurrentpage, indexofLastVideo, data }) {
    return <div className='w-full flex items-center justify-center gap-3'>
        <button disabled={currentpage === 1} onClick={() => setCurrentpage(prev => prev - 1)}>Prev</button>
        <button disabled={indexofLastVideo >= data.length} onClick={() => setCurrentpage(prev => prev + 1)}>Next</button>
    </div>
}

function Skeleton() {
    return <div role="status" class="max-w-sm p-4  rounded-base shadow-xs animate-pulse md:p-6">
        <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full"></div>
        <div class="flex items-center mt-4">
            <svg class="w-8 h-8 text-fg-disabled me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
            <div>
                <div class="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    </div>


}


