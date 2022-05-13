import React from 'react'
import useTheme from '../../hooks/useTheme'
import Header from '../Header/Header'
import Sidenav from '../Sidenav/Sidenav'
type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  const { setThemeMode, theme } = useTheme()
  console.log({ theme })
  return (
    <div className="h-full">
      <div className="flex">
        <div className="">
          <Sidenav />
        </div>
        <div className="w-full">
          <Header />
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Layout
