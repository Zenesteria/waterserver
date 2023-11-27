import { setData } from "@/redux/infoSlice";
import { RootState } from "@/redux/store";
import getData from "@/services/getData";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { FaBuffer } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface compProps {
  theme: number;
  title:
    | "Water Quality Index"
    | "Temperature"
    | "Total Dissolved Solids"
    | "Turbidity";
  val: number;
}

const themes = [
  "linear-gradient(90deg, rgba(106,167,255,1) 1%, rgba(17,91,200,1) 80%)",
  "linear-gradient(90deg, rgba(97,234,81,1) 0%, rgba(6,158,0,1) 97%)",
  "linear-gradient(90deg, rgba(241,175,97,1) 0%, rgba(248,141,15,1) 97%)",
  "linear-gradient(90deg, rgba(114,97,241,1) 0%, rgba(15,238,248,1) 97%)",
  "linear-gradient(90deg, rgba(232, 21, 21,1) 0%, rgba(153, 66, 66) 97%)",
];

export default function DataCard({ theme, title, val }: compProps) {
  const info = useSelector((state: RootState) => state.info);
  const dispatch = useDispatch();
  const timeIntervalFuncRef = useRef<any>(null);




  useEffect(() => {
    if (info.status == 1) {
      // const fetchData = async () => {
      //   try {
      //     const res = await axios(`http://${info.IP}/getData`);
      //     const res_data = await res.data;
      //     dispatch(setData({ ...res_data }));
      //     // console.log(res_data["Water Quality Index"]);
      //     console.log(1)
      //   } catch (error) {
      //     // console.log(error);
      //   }
      // };
      // timeIntervalFuncRef.current = setInterval(fetchData, 1000);
      // fetchData();
      // return () => {
      //   clearInterval(timeIntervalFuncRef.current);
      // };
    }
    // console.log(2)

  });
  return (
    <div
      className="w-[90%] p-7 text-white flex items-center hover:scale-105 duration-300 mx-auto min-h-[15vh] rounded-xl drop-shadow-xl shadow-green-400 bg-gradient-to-r from-green-500 to-green-700 my-5"
      style={{ background: themes[theme] }}
    >
      <div className="flex-1">
        <h1
          className="font-bold mb-3"
          style={{ fontSize: "calc(0.8rem + 0.5vw)" }}
        >
          {title}
        </h1>
        <p>{val}</p>
      </div>
      <div className="flex-[0.3]">
        <FaBuffer
          className=" opacity-25"
          style={{ fontSize: "calc(2.5rem + 2vw)" }}
        />
      </div>
    </div>
  );
}
