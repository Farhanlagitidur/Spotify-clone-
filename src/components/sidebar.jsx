import React from "react";
import logo from "../assets/Spotify_Logo_White.png";
import { Homesvg, Searchsvg ,Librarysvg, Addplaylistsvg, Likedsongssvg}from "../assets/svg/svg";

const Sidebar = () => {


  const styles = {

  }

  return (
    <div className="w-1/5 bg-black h-full font-spotify ">
      <div className=" pl-4 pr-4 text-white ">
        <div className=" p-6 pl-0  ">
          <img src={logo} className="h-10 " />
        </div>

        <ul className=" cursor-pointer mb-10 ">
          <li className="flex flex-row items-center mb-2  rounded-md">
            <Homesvg />
            <span className=" text-center m-2 pl-2 text-sm ">Home</span>
          </li>
          <li className="flex flex-row items-center mb-2  rounded-md  ">
           <Searchsvg/>
            <span className=" text-center pl-2 m-2 text-sm">Search</span>
          </li>

          <li className="flex flex-row items-center rounded-md   mb-2">
            <Librarysvg/>
            <span className=" text-center pl-2 m-2 text-sm">Library</span>
          </li>
        </ul>

        <div className=" border-b-[1px] border-[#222222] h-20">
        <div className=" w-full   flex flex-row cursor-pointer mb-4 items-center  ">
            <Addplaylistsvg/>
          <span className="pl-4 text-center text-sm">Add Playlist</span>
        </div>



        <div className=" w-full   flex flex-row cursor-pointer items-center">
        <Likedsongssvg/>
        <span className="pl-4 text-sm text-center ">Liked Songs</span> 
        </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
