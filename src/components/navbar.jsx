import React from 'react'
import { useCreateContext } from "../utils/provider";
import { BackButtonsvg, NextButtonsvg, ArrowDown}from "../assets/svg/svg";

const Navbar = () => {
 const [{ userInfo }] = useCreateContext()


  return (
    <div className="h-16 flex justify-between  items-center  ">
        <div className=" h-10 flex flex-row justify-center items-center">
            <BackButtonsvg/>
            <NextButtonsvg/>
        </div>

        <div className=" h-9 w-28 rounded-full p-1 flex flex-row items-center justify-between bg-black cursor-pointer">
            <div 
            style={{backgroundImage: `url(${userInfo?.userImage.url})`}}
            className=" h-8 w-8 rounded-full bg-cover">
            </div>
            <span className=" font-spotifylight text-white">{userInfo?.userName}</span>
        <ArrowDown/>
    </div>
  </div>
  )
}

export default Navbar