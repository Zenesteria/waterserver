import React, { useEffect, useState } from 'react'
import io from "socket.io-client";

export default function message() {
   
    const [temp,setTemp] = useState('')
    const [turbidity,setTurbidity] = useState('')
    const [tds,setTDS] = useState('')
    const [wqi,setWQI] = useState('')
    useEffect(() => {
         const socket = io("https://hexametry.onrender.com");
         let data = {
            temperature:temp,
            turbidity:turbidity,
            tds:tds,
            wqi:wqi
         }

         socket.emit('message',data)
    },[temp,turbidity,tds,wqi])
  return (
    <div>
        <h1>
            Temp
        </h1>
        <input type="text" value={temp} onChange={(e) => {setTemp(e.target.value)}}  />
        <h1>
            Turbidity
        </h1>
        <input type="text" value={turbidity} onChange={(e) => {setTurbidity(e.target.value)}}  />
        <h1>
            Tds
        </h1>
        <input type="text" value={tds} onChange={(e) => {setTDS(e.target.value)}}  />
        <h1>
            WQI
        </h1>
        <input type="text" value={wqi} onChange={(e) => {setWQI(e.target.value)}}  />
      
    </div>
  )
}
