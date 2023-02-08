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

const styles = {
  navbarwrapper:"w-full p-4 pt-0",
  playlistinfowrapper:"h-64 flex justify-start relative p-4",
  playlistinfoimage:"h-56 w-56 absolute bottom-0 bg-center bg-cover bg-white",
  playlistinfodescriptionwrapper:"flex flex-col text-white absolute bottom-0 left-64",
  playlistinfotype:"font-spotifylight",
  playlistinfoname:"text-8xl font-spotifybold",
  playlistinfodetailwrapper:"flex flex-row font-spotifylight text-[13px] mt-10 items-center",
  playlistinfoowner:"h-6 w-6 bg-black rounded-full mr-2",
  playlistinfolength:"text-[#B3B3B3] ml-1",
  tracknavbarwrapper:"backdrop-blur-xl bg-[#121212]/30  mt-8 w-full",
  iconwrapper:"flex items-center",
  playlistcontainer:"w-full p-4",
  playlistnavwrapper:"font-spotifylight text-[#B3B3B3] border-b-[1px] border-[#414040] w-full",
  playlistnav:"pl-4 pr-10 pb-2 flex flex-row items-center",
  playlistnavtitle:"ml-4 font-spotifylight text-xs w-3/5",
  playlistnavalbum: "ml-4 font-spotifylight text-xs w-2/5",
  playlistnavdate:"ml-4 font-spotifylight text-xs  w-2/5 whitespace-nowrap",
  cardcontainer:"flex flex-col",
  footerwrapper:"p-4",
  cardplaylistwrapper:"pl-4 pr-10 h-14 items-center mt-4 flex flex-row text-[#B3B3B3] rounded p-3 hover:bg-gray-400/20",
  number:"w-6 h-6 text-center",
  titlewrapper:"ml-4 w-3/5 h-full flex flex-row mb-3",
  image:"h-11 bg-black w-11 bg-center bg-cover",
  trackname:"font-spotifylight text-[14px] text-white truncate overflow-hidden mb-1",
  trackwrapper:"ml-4 w-[400px]",
  artistwrapper:"flex flex-row items-center text-left  font-spotifylight text-xs",
  explicit:"bg-[#A0A3A3] w-4 h-4 font-spotifythin text-black text-[10px] text-center rounded-sm mr-2",
  artistname:"font-spotifylight text-[13px] text-[#B3B3B3]",
  album:"ml-6 font-spotifylight text-[13px] w-2/5 truncate",
  date:"ml-6 font-spotifylight text-[13px] w-2/5 whitespace-nowrap",
  duration:"font-spotifylight text-[13px]"
}


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
      <div className={styles.cardplaylistwrapper}>
        <p className={styles.number}>{id === 0 ? "1" : id + 1}</p>

        <div className={styles.titlewrapper}>
          <div
            style={{
              backgroundImage: `url(${track?.track?.album.images[0].url})`,
            }}
            className={styles.image}
          ></div>
          <div className={styles.trackwrapper}>
            <p className={styles.trackname}>{track?.track.name}</p>
            <div className={styles.artistwrapper}>
              {track.track.explicit ? (
                <p className={styles.explicit}>E</p>
              ) : null}

              <p className={styles.artistname}>
                {track?.track.artists.map((item) => item.name).join(", ")}
              </p>
            </div>
          </div>
        </div>

        <p className={styles.album}>{track?.track.album.name}</p>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.duration}>
          {minutes + ":" + (seconds < 10 ? "0" : "") + seconds}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="h-auto">
        <div className={styles.navbarwrapper}>
          <Navbar />
        </div>

        <div className={styles.playlistinfowrapper}>
          <div
            style={{ backgroundImage: `url(${selectedPlaylist?.images?.url})` }}
            className={styles.playlistinfoimage}
          ></div>

          <div className={styles.playlistinfodescriptionwrapper}>
            <div>
              <h2 className={styles.playlistinfotype}>
                {selectedPlaylist?.type}
              </h2>
              <h1 className={styles.playlistinfoname}>
                {selectedPlaylist?.name}
              </h1>
              <div className={styles.playlistinfodetailwrapper}>
                <div className={styles.playlistinfoowner}> </div>
                <p>{selectedPlaylist?.owner}</p>
                <Dot />
                <p>{selectedPlaylist?.tracks.length} songs,</p>

                <p className={styles.playlistinfolength}>13 min 14 sec</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tracknavbarwrapper}>
          <div className={styles.iconwrapper}>
            <PlayButtonsvg />
            <GreenHeartsvg />
            <Threedotsvg />
          </div>
          <div className={styles.playlistcontainer}>
            <div className={styles.playlistnavwrapper}>
              <div className={styles.playlistnav}>
                <Hastag />
                <p className={styles.playlistnavtitle}> TITLE</p>
                <p className={styles.playlistnavalbum}>ABLUM</p>
                <p className={styles.playlistnavdate}>DATE ADDED</p>

                <Duration />
              </div>
            </div>

            <div className={styles.cardcontainer}>
              {selectedPlaylist?.tracks?.map((track, id) => {
                return <Track track={track} id={id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerwrapper}>
        <Footer />
      </div>
    </>
  );
};

export default Playlists;
