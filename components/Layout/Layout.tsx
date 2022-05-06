import React from 'react'
import Header from '../Header/Header'
import Sidenav from '../Sidenav/Sidenav'

function Layout({ children }) {
  return (
    <div className="h-full">
      <div className="flex">
        <div className="">
          <Sidenav />
        </div>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
