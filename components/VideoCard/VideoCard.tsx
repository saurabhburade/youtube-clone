import React from 'react'

type Props = {
    item:any
}

function VideoCard({ item }: Props) {
  return (
    <div className="relative m-5 overflow-hidden cursor-pointer w-72 rounded-2xl">
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
  )
}

export default VideoCard