import React from "react";
import logo from "../assets/Spotify_Logo_Black.png";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { useCreateContext } from "../utils/provider";
import { Statecontext } from "../utils/provider";

const Login = () => {
  // const value = useCreateContext()
  // console.log(value);

  const handleClick = async () => {
    const client_id = "8762fdb3c1c64c8b99a24c0e74a2cec3";
    // const redirect_uri = "spotify-clone-chi-five.vercel.app";
    const redirect_uri = "http://localhost:3000/callback";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
      "playlist-read-private",
      "user-library-read"
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen flex-col bg-green-500 ">
      <img src={logo} className="h-40 mb-20 "></img>
      <button
        onClick={handleClick}
        className="w-80 h-16 bg-black  rounded-full text-green-500 text-2xl font-bolder"
      >
        Connect Spotify
      </button>
    </div>
  );
}

export default Login;
