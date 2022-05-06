import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'

function NavItem({children}) {
  return (
    <div className="flex items-center p-5 my-1 cursor-pointer hover:bg-gray-50">
      {children}
    </div>
  )
}

export default NavItem
