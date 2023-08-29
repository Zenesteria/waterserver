import React from 'react'
import { FaClock } from 'react-icons/fa'

export default function EventMessageListItem() {
  return (
    <div className='flex'>
        <div className="flex-1">
          <div className="flex w-full items-center">
            <div className="w-[10px] bg-amber-500 aspect-square rounded-full"></div>
            <h1 className='mx-2' style={{fontSize:'calc(0.7rem + 0.25vw)'}}>Warning</h1>
          </div>
          <h1 className='mx-3 my-2'>
            Event Name
          </h1>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <FaClock/>
            <p className='mx-2'>
              8/28/2023
            </p>
          </div>
        </div>
    </div>
  )
}
