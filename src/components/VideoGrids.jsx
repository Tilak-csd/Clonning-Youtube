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

        <Pagination setCurrentpage={setCurrentpage} currentpage={currentpage} indexofLastVideo={indexofFirstVideo} data={data}/>
    </div>)
}

// pagination
  function Pagination({ currentpage, setCurrentpage, indexofLastVideo, data }) {
        return <div className='w-full flex items-center justify-center gap-3'>
            <button disabled={currentpage === 1} onClick={() => setCurrentpage(prev => prev - 1)}>Prev</button>
            <button disabled={indexofLastVideo >= data.length} onClick={() => setCurrentpage(prev => prev + 1)}>Next</button>
        </div>
    }