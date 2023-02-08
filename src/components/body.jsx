import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCreateContext } from "../utils/provider";
import { reducerCases } from "../utils/constant";
import Home from "./home";
import Search from "./search";
import Sidebar from "./sidebar";
import Player from "./player";
import Playlists from "./playlist";

const Body = () => {
  const [{ token }, dispatch] = useCreateContext();
  const [isopen, setOpen] = useState({
    home: true,
    search: false,
    playlist: {
      value: false,
      id: null,
    },
  });

  useEffect(() => {
    const getPlaylist = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/playlists?limit=50",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const playlistInfo = {
        items: data.items,
      };

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlistInfo });
    };
    getPlaylist();
  }, [token, dispatch]);

  const handleOpen = (value, param) => {
    if (param === "home") {
      setOpen((prevState) => ({
        ...prevState,
        home: value,
        search: !value,
        playlist: !value,
      }));
    } else if (param === "search") {
      setOpen((prevState) => ({
        ...prevState,
        home: !value,
        search: value,
        playlist: !value,
      }));
    }
  };

  const handlePlaylist = async (value, param, id) => {
    if (param === "playlist") {
      setOpen((prevState) => ({
        ...prevState,
        home: !value,
        search: !value,
        playlist: {
          value: true,
          id: id,
        },
      }));
    }
    const { data } = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    const selectedPlaylistData = {
      name: data.name,
      type: data.type,
      images: data.images[0],
      owner: data.owner.display_name,
      tracks: data.tracks.items,
    };
    dispatch({
      type: reducerCases.SET_SELECTED_PLAYLIST,
      selectedPlaylistData,
    });
  };

  const getRandomColor = () => {
    const colors = [
      "to-purple-900",
      "to-violet-900",
      "to-rose-900",
      "to-fuchsia-900",
      "to-pink-900",
      "to-orange-900",
      "to-teal-900",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const styles = {
    body: "h-screen w-full flex",
    sidebar: "w-1/5 bg-slate-200 flex flex-col lg:h-[90%] xl:h-[90%] min-[1440px]:h-[91%] fixed",
    content: `w-4/5 overflow-scroll bg-gradient-to-t from-[#121212] via-[#121212] ${getRandomColor()} pt-0 lg:h-[90%] xl:h-[90%] min-[1440px]:h-[91%] absolute top-0 right-0 overflow-x-hidden scrollbar-hide`,
  };

  return (
    <div className={styles.body}>
      <div className={styles.sidebar}>
        <Sidebar
          handleOpen={handleOpen}
          handlePlaylist={handlePlaylist}
          isopen={isopen}
        />
      </div>

      <div className={styles.content}>
        {isopen.home && <Home />}
        {isopen.search && <Search />}
        {isopen.playlist.value && <Playlists />}
      </div>
      <Player />
    </div>
  );
};

export default Body;
