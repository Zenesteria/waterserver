import React from 'react'
import { FaBuffer } from "react-icons/fa";

interface compProps{
    theme:number
    title:string
    val:number
}

const themes = [
  "linear-gradient(90deg, rgba(106,167,255,1) 1%, rgba(17,91,200,1) 80%)",
  "linear-gradient(90deg, rgba(97,234,81,1) 0%, rgba(6,158,0,1) 97%)",
  "linear-gradient(90deg, rgba(241,175,97,1) 0%, rgba(248,141,15,1) 97%)",
];

export default function DataCard({theme, title, val}:compProps) {
  return (
    <div className='w-[90%] p-7 text-white flex items-center hover:scale-105 duration-300 mx-auto min-h-[15vh] rounded-xl drop-shadow-xl shadow-green-400 bg-gradient-to-r from-green-500 to-green-700 my-5'
    style={{background:themes[theme]}}>
        <div className="flex-1">
            <h1 className='font-bold mb-3' style={{fontSize:'calc(0.8rem + 0.5vw)'}}>
                {title}
            </h1>
            <p>
                {val}
            </p>
        </div>
        <div className="flex-[0.3]">
            <FaBuffer className=' opacity-25' style={{fontSize:'calc(2.5rem + 2vw)'}}/>
        </div>
    </div>
  )
}
