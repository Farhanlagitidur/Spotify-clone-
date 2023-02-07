import React from "react";
import { useCreateContext } from "../utils/provider";
import Footer from "./footer";
import Navbar from "./navbar";
import {
  Duration,
  Hastag,
  Threedotsvg,
  GreenHeartsvg,
  PlayButtonsvg,
  Dot,
} from "../assets/svg/svg";

const Playlists = () => {
  const [{ selectedPlaylist }] = useCreateContext();

  const Track = ({ track, id }) => {
    const ms = track?.track.duration_ms;
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    const dateString = track.added_at;
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);


    
    return (
      <div className="pl-4 pr-10 h-12 mt-4 flex  flex-row  items-center text-[#B3B3B3] rounded  ">
        <p className="w-6 h-6">{id === 0 ? "1" : id + 1}</p>

        <div className="  ml-4  w-3/5  h-full flex flex-row">
          <div
            style={{
              backgroundImage: `url(${track?.track?.album.images[0].url})`,
            }}
            className="h-full bg-black w-12 bg-center bg-cover"
          ></div>
          <div className=" ml-4 w-[400px]">
            <p className="font-spotifylight text-[14px] text-white truncate overflow-hidden  mb-1">
              {track?.track.name}
            </p>
            <div className="flex flex-row items-center">
              <p className="bg-[#A0A3A3] w-4 h-4 font-spotifythin text-black text-[10px] text-center rounded-sm">
                E
              </p>
              <p className="font-spotifylight text-[13px] text-[#B3B3B3]  ml-2">
                {track?.track.artists.map((item) => item.name).join(", ")}
              </p>
            </div>
          </div>
        </div>

        <p className=" ml-6 font-spotifylight text-[13px] w-2/5  truncate b">
          {track?.track.album.name}
        </p>
        <p className="  ml-6 font-spotifylight text-[13px]  w-2/5 whitespace-nowrap ">
          {formattedDate}
        </p>
        <p className="font-spotifylight text-[13px] ">
          {minutes + ":" + (seconds < 10 ? "0" : "") + seconds}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="h-auto ">
        <div className="w-full p-4 pt-0 ">
          <Navbar />
        </div>

        <div className=" h-64 flex justify-start relative p-4">
          <div
            style={{ backgroundImage: `url(${selectedPlaylist?.images?.url})` }}
            className=" h-56 w-56 absolute bottom-0 bg-center bg-cover bg-white"
          ></div>

          <div className="flex flex-col   text-white absolute bottom-0 left-64">
            <div>
              <h2 className="  font-spotifylight">{selectedPlaylist?.type}</h2>
              <h1 className=" text-8xl font-spotifybold ">
                {selectedPlaylist?.name}
              </h1>
              <div className="flex flex-row  font-spotifylight text-[13px] mt-10 items-center">
                <div className="h-6 w-6 bg-black rounded-full mr-2"> </div>
                <p>{selectedPlaylist?.owner}</p>
                <Dot />
                <p>{selectedPlaylist?.tracks.length} songs,</p>

                <p className="text-[#B3B3B3] ml-1">13 min 14 sec</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" backdrop-blur-xl  bg-[#121212]/30  mt-8 w-full ">
          <div className=" flex items-center ">
            <PlayButtonsvg />
            <GreenHeartsvg />
            <Threedotsvg />
          </div>
          <div className=" w-full  p-4 0 ">
            <div className=" font-spotifylight text-[#B3B3B3]  border-b-[1px] border-[#414040]  w-full ">
              <div className="pl-4 pr-10 pb-2 flex  flex-row  items-center ">
                <Hastag />
                <p className="  ml-4 font-spotifylight text-xs w-3/5"> TITLE</p>
                <p className="  ml-4 font-spotifylight text-xs w-2/5 ">
                  {" "}
                  ABLUM
                </p>
                <p className="  ml-4 font-spotifylight text-xs  w-2/5 whitespace-nowrap ">
                  {" "}
                  DATE ADDED
                </p>

                <Duration />
              </div>
            </div>

            <div className="flex flex-col">
              {selectedPlaylist?.tracks?.map((track, id) => {
                return <Track track={track} id={id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Footer />
      </div>
    </>
  );
};

export default Playlists;
