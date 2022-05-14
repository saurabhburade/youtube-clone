import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import items from '../components/Sidenav/sample'
import VideoCard from '../components/VideoCard/VideoCard'
const Home: NextPage = () => {
  const [videosData, setvideosData] = useState([])
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&maxResults=50&chart=mostPopular&key=' +
          process.env.NEXT_PUBLIC_YT_API_KEY
      )
      setvideosData(res.data.items)
    }
    fetchVideos()
  }, [])

  return (
    <>
      <Layout>

        <div className="flex flex-wrap items-center mt-6 sm:w-full">
          {videosData?.length
            ? videosData.map((item: any) => {
                return <VideoCard item={item} key={item?.id} />
              })
            : new Array(10)?.fill(0)?.map((v, idx) => {
                return (
                  <div className="relative top-0 w-64 m-5 border shadow rounded-2xl">
                    <div className="animate-pulse">
                      <div className="flex-1 space-y-1">
                        <div className="rounded h-44 bg-slate-700"></div>
                        <div className="absolute bottom-0 w-full p-5 text-ellipsis bg-white/10 text-gray-50 backdrop-blur-sm">
                          <p className="overflow-hidden text-sm truncate">
                            <div className="h-8 rounded bg-slate-700"></div>
                          </p>
                        </div>
                        {/* <div className="h-8 rounded bg-slate-700"></div> */}
                      </div>
                    </div>
                  </div>
                )
              })}
        </div>
      </Layout>
    </>
  )
}

export default Home
