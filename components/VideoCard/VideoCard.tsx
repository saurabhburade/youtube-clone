import React from 'react'

type Props = {}

function VideoCard({}: Props) {
  return (
    <div className="relative m-5 overflow-hidden cursor-pointer w-72 rounded-2xl">
      <img
        src="https://i.ytimg.com/vi/3Yh_6_zItPU/hqdefault.jpg"
        alt=""
        className=""
      />
      <div className="absolute bottom-0 w-full p-5 text-ellipsis bg-white/10 text-gray-50 backdrop-blur-sm">
        <p className="overflow-hidden text-sm truncate">
          Obi-Wan Kenobi | Official Trailer | Disney+ jdhasdfhkahfkjahfkajhdf
          kjahdfkjadhfkjhfkhdfkhsdkfhsdkfjhsdkfhkj dfksdfkjsda fks
        </p>
      </div>
    </div>
  )
}

export default VideoCard