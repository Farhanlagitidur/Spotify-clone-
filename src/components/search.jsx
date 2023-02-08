import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useCreateContext } from "../utils/provider";
import { Searchsvg } from "../assets/svg/svg";
import { reducerCases } from "../utils/constant";
import Footer from "./footer";
import { BackButtonsvg, NextButtonsvg, ArrowDown } from "../assets/svg/svg";

const Search = () => {
  const [{ token, userInfo, genres }, dispatch] =
    useCreateContext();

  useEffect(() => {
    const getPlaylist = async () => {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      };
      const [res1] = await axios.all([
        axios.get(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds",
          config
        ),
      ]);

      const genresInfo = {
        genres: res1.data.genres,
      };

      dispatch({ type: reducerCases.SET_GENRES, genresInfo });
    };
    getPlaylist();
  }, [token, dispatch]);

  const getRandomColor = () => {
    const colors = [
      "bg-[#E13300]",
      "bg-[#1E3264]",
      "bg-[#158A07]",
      "bg-[#E8115B]",
      "bg-[#7358FF]",
      "bg-[#8C67AB]",
      "bg-[#BC5900]",
      "bg-[#DC148C]",
      "bg-[#DC148C]",
      "bg-[#0C1D2D]",
      "bg-[#5179A1]",
      "bg-[#8C1932]",
      "bg-[#503750]",
      "bg-[#467D95]",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const styles = {
    container: "m-4 mt-0",
    navbar: "h-16 flex items-center flex-row justify-between",
    leftsectionwrapper: "flex flex-row items-center w-1/2",
    buttonwrapper: "h-10 flex flex-row justify-center items-center mr-4",
    searchwrapper: "bg-white flex h-9 rounded-full float-left w-80",
    searchiconwrapper: "rounded-tl-full rounded-bl-full  h-full w-14 flex items-center justify-center",
    searchinput: "bg-white w-full rounded-tr-full rounded-br-full font-spotifylight text-xs focus:outline-0",
    profilewrapper: "h-9 w-28 rounded-full p-1 flex float-right justify-self-end items-center justify-between bg-black",
    profileimage: "h-8 w-8 rounded-full bg-cover",
    profilename: "font-spotifylight text-white",
    title: "h-20 font-spotifybold text-white text-xl items-center flex",
    cardcontainer:"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7 grid gap-4 place-items-stretch",
    genrecard: `2xl:w-48 2xl:h-48 min-[1440px]:w-[210px] min-[1440px]:h-[200px] xl:w-56 xl:h-52 lg:w-56 lg:h-56 rounded-md p-2 relative overflow-hidden `,
    genretitle: "font-spotifybold text-xl text-white",
    genreimage: "bg-white h-24 w-24 -bottom-4 -right-5 rotate-[30deg] bg-cover bg-center absolute",
  };

  const Genre = ({ item }) => {
    return (
      <div className={styles.genrecard + getRandomColor()}>
        <h1 className={styles.genretitle}>{item}</h1>
        <div
          // style={{backgroundImage: `url(${image.url})`}} there is no image in the endpoint so
          className={styles.genreimage}
        ></div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.leftsectionwrapper}>
          <div className={styles.buttonwrapper}>
            <BackButtonsvg />
            <NextButtonsvg />
          </div>

          <div className={styles.searchwrapper}>
            <div className={styles.searchiconwrapper}>
              <Searchsvg stroke={"black"} />
            </div>
            <input
              className={styles.searchinput}
              placeholder={"What do you want to listen to?"}
            ></input>
          </div>
        </div>

        <div className="w-1/2">
          <div className={styles.profilewrapper}>
            <div
              style={{ backgroundImage: `url(${userInfo?.userImage.url})` }}
              className={styles.profileimage}
            ></div>
            <span className={styles.profilename}>{userInfo?.userName}</span>
            <ArrowDown />
          </div>
        </div>
      </div>

      <div className={styles.title}>
        <h1>Browse all</h1>
      </div>

      <div className={styles.cardcontainer}>
        {genres?.genres.map(() => {
          const randomIndex = Math.floor(Math.random() * genres?.genres.length);

          return <Genre item={genres.genres[randomIndex]} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
