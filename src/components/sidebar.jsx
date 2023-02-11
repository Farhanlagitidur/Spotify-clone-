import React from "react";
import logo from "../assets/Spotify_Logo_White.png";
import { useCreateContext } from "../utils/provider";
import {
  Homesvg,
  Searchsvg,
  Librarysvg,
  Addplaylistsvg,
  Likedsongssvg,
} from "../assets/svg/svg";

const Sidebar = ({ handleOpen, isopen, handlePlaylist }) => {
  const [{ playlist }] = useCreateContext();

  const styles = {
    logo:"h-10",
    logowrapper:"p-6 pl-0",
   
    toplinkswrapper:"cursor-pointer mb-10",
    homebutton:`flex flex-row items-center mb-2 rounded-md w-full hover:text-white ${isopen.home && 'text-white'}`,
    searchbutton: `flex flex-row items-center mb-2 rounded-md w-full hover:text-white ${isopen.search && 'text-white'}`,
    librarybutton: "flex flex-row items-center rounded-md w-full mb-2 hover:text-white",
    link:"text-center m-2 pl-2 text-sm",
    bottomlinkswrapper:"border-b-[1px] border-[#222222] h-20",
    addplaylistbutton:"w-full flex flex-row cursor-pointer mb-4 items-center hover:text-white",
    likedsongbutton:"w-full flex flex-row cursor-pointer items-center hover:text-white",
    bottomlink:"pl-4 text-sm text-center",
    // sidebarlinkwrapper:"lg:h-[48%] min-[1440px]:h-[40%] bg-green-300",
    // playlistwrapper:"overflow-auto lg:h-[55%] min-[1440px]:h-[60%] scrollbar-hide bg-red-400",

  }

  return (
   <>
    <div className="pl-4 pr-4 text-[#B3B3B3] font-spotifybold h-full bg-black">
      <div className="h-auto ">
        <div className={styles.logowrapper}>
          <img src={logo} className={styles.logo} />
        </div>

        <ul className={styles.toplinkswrapper}>
          <button
            onClick={() => handleOpen(true, "home")}
            className={styles.homebutton}
          >
            <Homesvg />
            <span className={styles.link}>Home</span>
          </button>

          <button
            onClick={() => handleOpen(true, "search")}
            className={styles.searchbutton}
          >
            <Searchsvg stroke={"white"} />
            <span className={styles.link}>Search</span>
          </button>

          <button className={styles.librarybutton}>
            <Librarysvg />
            <span className={styles.link}>Your Library</span>
          </button>
        </ul>

        <div className={styles.bottomlinkswrapper}>
          <div className={styles.addplaylistbutton}>
            <Addplaylistsvg />
            <span className={styles.bottomlink}>Add Playlist</span>
          </div>

          <div className={styles.likedsongbutton}>
            <Likedsongssvg />
            <span className={styles.bottomlink}>Liked Songs</span>
          </div>
        </div>
      </div>

        
        <div className="overflow-auto lg:h-[50%] min-[1440px]:h-[60%] scrollbar-hide ">
        {playlist.items?.map((item) => {
          return (
            <p
              onClick={() => handlePlaylist(true, "playlist", item.id)}
              className={`text-sm m-3 ml-0 truncate font-spotifylight text-[13px] text-[#B3B3B3] ${
                isopen.playlist.id === item.id && "text-white"
              } hover:text-white cursor-pointer `}
            >
              {item.name}
            </p>
          );
        })}
      </div>
       
     
 
    </div>
     
   </>
  );
};

export default Sidebar;
