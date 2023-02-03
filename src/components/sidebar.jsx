import React from "react";
import logo from "../assets/Spotify_Logo_White.png";
import { useCreateContext } from '../utils/provider'
import { useNavigate ,} from "react-router-dom";
import { Homesvg, Searchsvg ,Librarysvg, Addplaylistsvg, Likedsongssvg}from "../assets/svg/svg";

const Sidebar = ({handleOpen, isopen, handlePlaylist}) => {
  const [{playlist}] = useCreateContext();

  

  return (
    <div className="w-1/5 bg-black h-full font-spotifybold ">
      <div className=" pl-4 pr-4 text-[#B3B3B3] ">
        <div className=" p-6 pl-0  ">
          <img src={logo} className="h-10 " />
        </div>

        <ul className=" cursor-pointer mb-10 ">
          <button 
          onClick={() => handleOpen(true,"home")}
          className={`flex flex-row items-center mb-2  rounded-md w-full hover:text-white ${isopen.home && 'text-white'}`}>
            <Homesvg />
            <span className=" text-center m-2 pl-2 text-sm ">Home</span>
          </button>

          <button 
           onClick={() => handleOpen(true,'search')}
            // onClick={handleClick}
          className={`flex flex-row items-center mb-2  rounded-md w-full hover:text-white ${isopen.search && 'text-white'}`}>
             <Searchsvg stroke={'white'}/>
            <span className=" text-center pl-2 m-2 text-sm">Search</span>
          </button>

          <li className="flex flex-row items-center rounded-md w-full mb-2 hover:text-white ">
            <Librarysvg/>
            <span className=" text-center pl-2 m-2 text-sm">Library</span>
          </li>
        </ul>

        <div className=" border-b-[1px] border-[#222222] h-20">
        <div className=" w-full   flex flex-row cursor-pointer mb-4 items-center hover:text-white ">
            <Addplaylistsvg/>
          <span className="pl-4 text-center text-sm">Add Playlist</span>
        </div>



        <div className=" w-full   flex flex-row cursor-pointer items-center hover:text-white">
        <Likedsongssvg/>
        <span className="pl-4 text-sm text-center ">Liked Songs</span> 
        </div>
        </div>

        <div className=" h-full">
          {
             playlist.items?.map((item) =>{
             
              
             return(
              <p 
              onClick={() => handlePlaylist(true,'playlist',item.id)}
              className={`text-sm m-3 ml-0 font-spotifylight text-[13px] text-[#B3B3B3]  hover:text-white cursor-pointer `}>{item.name}</p>
             )   
            })
          }
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
