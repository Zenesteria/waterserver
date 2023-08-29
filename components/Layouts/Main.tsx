import React from 'react'
import { Footer, Navbar } from '..'

interface compProps{
    children:React.ReactNode
}

export default function Main({children}:compProps) {
  return (
    <>
        {/* <Navbar/> */}
      {children}
      <Footer/>
    </>
  )
}
