import React from "react";
import logo from "../assets/Spotify_Logo_Black.png";

const Login = () => {
  const handleClick = async () => {
    const client_id = "8762fdb3c1c64c8b99a24c0e74a2cec3";
    // const redirect_uri = "http://localhost:3000/callback";
    // const redirect_uri = "https://spotify-clone-chi-five.vercel.app/callback/spotify";
    const redirect_uri = "https://spotify-clone-chi-five.vercel.app/callback";
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
      "user-library-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  const styles = {
    container:"flex justify-center items-center mx-auto h-screen flex-col bg-green-500",
    logo: "h-40 mb-20",
    button:"w-80 h-16 bg-black  rounded-full text-green-500 text-2xl font-bolder",
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}></img>
      <button onClick={handleClick} className={styles.button}>
        Connect Spotify
      </button>
    </div>
  );
};

export default Login;
