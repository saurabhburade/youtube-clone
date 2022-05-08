import Link from 'next/link'
import React from 'react'

type Props = {
    item:any
}

function VideoCard({ item,...props }: Props) {
  return (
    <Link href={`/watch/${item?.id}`}>
      <div className="relative w-64 m-5 overflow-hidden cursor-pointer rounded-2xl" {...props}>
        <img
          src={`https://i.ytimg.com/vi/${item?.id}/hqdefault.jpg`}
          alt={item?.snippet?.title}
          className=""
        />
        <div className="absolute bottom-0 w-full p-5 text-ellipsis bg-white/10 text-gray-50 backdrop-blur-sm">
          <p className="overflow-hidden text-sm truncate">
            {item?.snippet?.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard