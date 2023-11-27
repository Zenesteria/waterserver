import { RootState } from '@/redux/store';
import React from 'react'
import { FaClock } from 'react-icons/fa';
import {useSelector} from 'react-redux'

export default function Status() {
  const info = useSelector((state:RootState) => {
      return state.info
  });

  const statDict = [
    {
      name:'Offline',
      color:'red'
    },
    {
      name:'Online',
      color:'green'
    },
  ]
  return (
    <div className="flex items-center w-full">
      <div className="flex w-full">
        <div className="flex flex-1 flex-col">
          <h1
            className="uppercase mb-2"
            style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
          >
            status
          </h1>

          <div className="flex items-center">
            <div
              className="w-[10px] aspect-square mx-3 rounded-full"
              style={{ backgroundColor: 'green' }}
            ></div>
            <h3 className="">{'Online'}</h3>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h1
            className="uppercase mb-2"
            style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
          >
            Device IP
          </h1>
          <div className="flex items-center">
            <FaClock className="mx-3" />
            <h3 className=" text-slate-800 font-[poppins]">192.168.53.187</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
