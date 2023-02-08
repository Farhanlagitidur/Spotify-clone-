import React from "react";
import axios from "axios";
import { useCreateContext } from "../utils/provider";
import { useEffect, useState } from "react";
import {
  Likesvg,
  Lyricssvg,
  Queuesvg,
  Mutesvg,
  Devicesvg,
  Shuffletrack,
  Prevtrack,
  Playtrack,
  Nexttrack,
  Repeattrack,
  Progresstrack,
} from "../assets/svg/svg";

const Player = () => {
  const [{ token }, dispatch] = useCreateContext();
  const [playing, setPlaying] = useState();
  const [initialPlaying, setInitialPlaying] = useState();

  useEffect(() => {
    const getPlaying = async () => {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      };

      const [res1, res2] = await axios.all([
        axios.get("https://api.spotify.com/v1/me/player", config),
        axios.get(
          "https://api.spotify.com/v1/tracks/1XVQu6SXMMEJ3nc9BOGhgk",
          config
        ),
      ]);

      setInitialPlaying({
        name: res2.data.name,
        images: res2.data.album.images,
        artist: res2.data.artists.map((item) => item.name),
        duration: res2.data.duration_ms,
        progress: res2.data.progress_ms,
      });

      setPlaying({
        name: res1.data.item.name,
        images: res1.data.item.album.images,
        artist: res1.data.item.artists.map((item) => item.name),
        duration: res1.data.item.duration_ms,
        progress: res1.data.progress_ms,
      });
    };
    getPlaying();
    const intervalId = setInterval(getPlaying, 1 * 60 * 1000);

    // Clean up the interval when the component unmounts
    return () => getPlaying(intervalId);
  }, [token, dispatch]);

  const ms = playing?.duration;
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  const styles = {
    container: "h-24 fixed bottom-0 bg-[#181818] w-screen p-3",
    wrapper: "h-full flex justify-center",
    playingsongwrapper: "h-full w-1/3 flex flex-row p-2 float-left",
    songimage: "bg-white w-[60px] h-full bg-cover bg-center bg-no-repeat",
    songdescriptionwrapper:"flex-col flex font-spotifylight ml-4 justify-center text-white",
    songname: "font-spotifylight text-[13px] cursor-pointer hover:underline",
    songartists:"text-[12px] font-spotifylight text-[#B3B3B3] cursor-pointer hover:underline",
    likebutton: "flex items-center ml-4",
    playerwrapper: "h-full w-1/3",
    player: "h-2/3 flex items-center justify-center",
    progresswrapper: "h-1/3 text-white bs flex",
    progress:"flex items-center mx-auto font-spotifylight text-xs text-[#B3B3B3]",
    toolswrapper: "h-full flex w-1/3 justify-end",
    tools: "flex flex-row items-center mr-2",
    volumewrapper: "items-center flex",
    volume:"bg-white h-[6px] w-24 hover:accent-[#1DD760] accent-white rounded-full cursor-pointer",
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.playingsongwrapper}>
          <div
            style={{
              backgroundImage: `url(${
                playing ? playing?.images[0].url : initialPlaying?.images[0].url
              })`,
            }}
            className={styles.songimage}
          ></div>
          <div className={styles.songdescriptionwrapper}>
            <span className={styles.songname}>
              {playing ? playing?.name : initialPlaying?.name}
            </span>
            <span className={styles.songartists}>
              {playing
                ? playing?.artist.join(", ")
                : initialPlaying?.artist.join(", ")}
            </span>
          </div>

          <div className={styles.likebutton}>
            <Likesvg />
          </div>
        </div>

        <div className={styles.playerwrapper}>
          <div className={styles.player}>
            <Shuffletrack />
            <Prevtrack />
            <Playtrack />
            <Nexttrack />
            <Repeattrack />
          </div>

          <div className={styles.progresswrapper}>
            <div className={styles.progress}>
              <span className="mr-2">0:00</span>
              <Progresstrack />
              <span className="ml-2">
                {playing
                  ? minutes + ":" + (seconds < 10 ? "0" : "") + seconds
                  : "3:00"}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.toolswrapper}>
          <div className={styles.tools}>
            <Lyricssvg />
            <Queuesvg />
            <Devicesvg />
            <Mutesvg />
            <div className={styles.volumewrapper}>
              <input type="range" className={styles.volume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
