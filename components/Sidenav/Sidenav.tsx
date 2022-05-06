import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import NavItem from './NavItem'
import { MdExplore } from 'react-icons/md'
import * as riIcons from 'react-icons/ri'
import * as aiIcons from 'react-icons/ai'
import * as biIcons from 'react-icons/bi'
import * as bsIcons from 'react-icons/bs'

function Sidenav() {
  return (
    <div className="h-screen bg-gray-100 border w-72">
      <div className="flex justify-between px-5 pt-5 pb-5 w-100 nav-head">
        <h2 className="text-2xl font-bold">LOGO</h2>
        <HiMenuAlt1 size="2em" />
      </div>
      <div>
        <NavItem>
          {' '}
          <div className="mr-5">
            <biIcons.BiHomeAlt size="1.4em" />
          </div>
          <p>Home</p>
        </NavItem>
        <NavItem>
          {' '}
          <div className="mr-5">
            <bsIcons.BsFlower2 size="1.4em" />
          </div>
          <p>Discover</p>
        </NavItem>
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
    </div>
  )
}

export default Sidenav
