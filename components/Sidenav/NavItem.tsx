import React from 'react'

type Props = { children: React.ReactNode }

const NavItem = (props: Props) => {
  return (
    <div className="flex items-center p-5 my-1 cursor-pointer hover:bg-gray-50">
      {props.children}
    </div>
  )
}

export default NavItem