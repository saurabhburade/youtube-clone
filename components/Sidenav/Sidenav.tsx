import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import NavItem from './NavItem'
import { MdExplore, MdStream } from 'react-icons/md'
import { RiVipCrown2Line } from 'react-icons/ri'
// import * as riIcons from 'react-icons/ri'
import * as aiIcons from 'react-icons/ai'
import * as biIcons from 'react-icons/bi'
import * as bsIcons from 'react-icons/bs'
import Link from 'next/link'

function Sidenav() {
  return (
    <div className="sticky top-0 z-50 w-64 h-screen bg-gray-100 border ">
      <div className="flex justify-between px-5 pt-5 pb-5 w-100 nav-head">
        <Link href="/">
          <p className="text-2xl font-bold cursor-pointer"> Youtube</p>
        </Link>
        <HiMenuAlt1 size="2em" />
      </div>
      <div>
        <Link href="/">
          <div>
            <NavItem>
              {' '}
              <div className="mr-5">
                <biIcons.BiHomeAlt size="1.4em" />
              </div>
              <p>Home</p>
            </NavItem>
          </div>
        </Link>
        <Link href="/discover">
          <div>
            <NavItem>
              {' '}
              <div className="mr-5">
                <bsIcons.BsFlower2 size="1.4em" />
              </div>
              <p>Discover</p>
            </NavItem>
          </div>
        </Link>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsPlayBtn size="1.4em" />
          </div>
          <p>Subscriptions</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsHeart size="1.4em" />
          </div>
          <p>Favorites</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsJournalText size="1.4em" />
          </div>
          <p>Library</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsClockHistory size="1.4em" />
          </div>
          <p>History</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsCameraVideo size="1.4em" />
          </div>
          <p>Your Videos</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsStopwatch size="1.4em" />
          </div>
          <p>Watch Later</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsScissors size="1.4em" />
          </div>
          <p>Your Clips</p>
        </NavItem>
      </div>
      <hr />
      <div className="">
        <p className="p-5 pb-2">More from YT</p>
        <NavItem>
          {' '}
          <div className="mr-5">
            <RiVipCrown2Line size="1.4em" />
          </div>
          <p>Youtube Premium</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <MdStream size="1.4em" />
          </div>
          <p>Go Live</p>
        </NavItem>
      </div>
    </div>
  )
}

export default Sidenav
