import React, { Suspense, useEffect, useState } from 'react'
const VideoCard = React.lazy(() => import('./Videocard'))
import { data } from '../data'

export default function VideoGrids() {
   const [vissblecount, setVissiblecount] = useState(6)
   const loadMore = ()=>{
    setVissiblecount(prev => prev + 6)
   }

   useEffect(()=>{
    const handleScroll = ()=>{
        if(window.innerHeight+ window.scrollY >= document.body.offsetHeight - 100){
            loadMore()
        }
    }
    window.addEventListener("scroll", handleScroll)

    return ()=> window.removeEventListener('scroll', handleScroll)
   }, [])
    return (<div className='w-full justify-items-center content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data.slice(0, vissblecount).map((data, idx) => {
            return <Suspense fallback={<p>Loading.....</p>} key={idx}>

                <VideoCard title={data.title}
                    thumbnail={data.thumbnail}
                    logo={data.logo}
                    aurthor={data.aurthor}
                    views={data.views}
                    timestamp={data.timestamp}
                />
            </Suspense>
        })}
    </div>)
} 