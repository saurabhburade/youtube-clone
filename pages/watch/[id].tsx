import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ReactPlayer from 'react-player'
import axios from 'axios'
import VideoCard from '../../components/VideoCard/VideoCard'
import * as bsIcons from 'react-icons/bs'
type Props = {}


function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

export default function index(props: Props) {
  
  const router = useRouter()
  const id = router?.query?.id
  console.log({ props, id })
  const [video, setvideo] = useState<any>({})
  const [recomendData, setrecomendData] = useState<any>([])
  const [channelDetails, setchannelDetails] = useState<any>({})
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`
      )
      console.log('res', res)

      setvideo(res?.data?.items[0])
      if (res?.data?.items[0]) {
        const resp2 = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&maxResults=50&chart=mostPopular&videoCategoryId=${res?.data?.items[0]?.snippet?.categoryId}&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`
        )
        setrecomendData(resp2.data.items)

        const resp3 = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${res?.data?.items[0]?.snippet?.channelId}&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`
        )
        console.log('resp3', resp3?.data?.items[0]?.snippet?.thumbnails)

        setchannelDetails(resp3?.data?.items[0])
      }
    }
    fetchVideos()
  }, [id])
  return (
    <Layout>
      {' '}
      {/* <video src={`https://youtu.be/${id}`} crossOrigin="true"></video> */}
      <div className="flex justify-between w-full p-5 ">
        <div className="w-9/12 m-5">
          <ReactPlayer
            url={`https://youtu.be/${id}`}
            className="w-full overflow-hidden rounded-3xl"
            controls
            width="100"
            height={500}
          />
          <div className="flex items-center justify-between">
            <p className="my-3 text-sm ">
              {new Date('2022-05-06T04:00:11Z').toDateString()}
            </p>
            <div className="flex items-center">
              <div className="flex items-center mx-2">
                <bsIcons.BsEyeFill />
                <p className="ml-1 text-sm">
                  {' '}
                  {nFormatter(video?.statistics?.viewCount, 2)}
                </p>
              </div>
              <div className="flex items-center mx-2">
                <bsIcons.BsHeartFill color="red" />
                <p className="ml-1 text-sm">
                  {' '}
                  {nFormatter(video?.statistics?.likeCount, 2)}
                </p>
              </div>
            </div>
          </div>
          <h1 className="my-5 text-3xl font-extrabold text-transparent bg-gradient-to-tr from-blue-700 to-yellow-200 bg-clip-text">
            {video?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex">
              <img
                className="inline-block w-12 h-12 rounded-2xl ring-2 ring-white"
                src={channelDetails?.snippet?.thumbnails?.medium?.url}
                alt=""
              />
              <div className="mx-3">
                <p className="ml-1 text-sm font-semibold">
                  {' '}
                  {channelDetails?.snippet?.title}
                </p>
                <p className="ml-1 text-sm">
                  {' '}
                  {nFormatter(
                    channelDetails?.statistics?.subscriberCount,
                    2
                  )}{' '}
                  Subscribers
                </p>
              </div>
            </div>
            <button className="px-5 py-3 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-400 active:ring-1">
              Subscribe
            </button>
          </div>

          {/* <p className="my-5 text-sm">{video?.snippet?.description}</p> */}
        </div>
        <div className="w-3/12 h-screen overflow-x-hidden overflow-y-scroll">
          <p className="mx-5 font-semibold">Recomended</p>
          {recomendData.map((item: any) => {
            return <VideoCard item={item} key={item?.id} />
          })}
        </div>
      </div>
    </Layout>
  )
}
