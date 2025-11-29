import React from 'react'
import VideoCard from './Videocard'

export default function VideoGrids() {
    const data = [{
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "Si/Ma[Na] - Kaalpanik/ Maayajastai Official Video",
        aurthor: "Bartika Ema Rai",
        views: "13M",
        timestamp: "3 years"

    }, {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    },  {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    }, {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    }, {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    },  {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    },  {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    },  {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    },  {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "9841 - Sajjan Raj Vaidiya Offical",
        aurthor: "Tilak man gubhaju",
        views: "132M",
        timestamp: "2 years"

    }, {
        thumbnail: "thumbnail.png",
        logo: "logo.png",
        title: "Ciggrates after a sex",
        aurthor: "Tylar Shift",
        views: "130M",
        timestamp: "7 years"

    }]
    return (<div className='w-full justify-items-center content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((data, idx) => {
            return <VideoCard title={data.title}
                thumbnail={data.thumbnail}
                logo={data.logo}
                aurthor={data.aurthor}
                views={data.views}
                timestamp={data.timestamp}
            />
        })}
    </div>)
} 