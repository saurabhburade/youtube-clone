import React from 'react'
import * as bsIcons from 'react-icons/bs'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full px-5 py-5 bg-gray-100 border ">
      <div className="flex md:w-1/3">
        <input
          className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:border-purple-500 focus:bg-white focus:outline-none"
          id="inline-full-name"
          type="text"
          defaultValue="Jane Doe"
        />
        <button className="p-3 -ml-3 text-white bg-blue-500 rounded active:ring-1">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>{' '}
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center px-5 py-2 text-white bg-blue-500 rounded btn active:ring-1">
          <bsIcons.BsFillCameraVideoFill />{' '}
          <span className="ml-2">Start Stream</span>
        </button>
        <button className="p-2 mx-5 font-bold bg-blue-100 rounded-full btn active:ring-1 ">
          <bsIcons.BsBell size="1.2em" />
        </button>
        {/* <button className="px-5 py-2 bg-blue-200 rounded btn">
             <bsIcons.BsBell size="1.4em/>
        </button>
        <button className="px-5 py-2 bg-blue-200 rounded btn">
          Start Stream
        </button> */}
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Header
