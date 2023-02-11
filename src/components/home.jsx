import React from "react";
import uuid from "react-uuid";
import Footer from "./footer";
import Navbar from "./navbar";
import { useCreateContext } from "../utils/provider";

const Home = () => {
  const [{ playlist, featuredPlaylist }] = useCreateContext();

  const styles = {
    container: "h-full m-4 mt-0",
    navbarwrapper: "w-full pt-0",
    playlistwrapper:"bg-[#303030] backdrop-blur-xl bg-gray-300/10 h-20 flex items-center  rounded-sm hover:bg-gray-400/40 cursor-pointer",
    playlistimage: "h-full w-20 bg-yellow-300 rounded-sm bg-cover bg-center ",
    playlisttitle: "ml-4 mr-4 font-spotifybold text-white truncate w-80",
    hitswrapper:"w-48 bg-[#171717] hover:bg-gray-400/10 cursor-pointer flex-row p-4 rounded",
    hitsname:"font-spotifybold text-white truncate w-full block overflow-hidden",
    hitsdescription:"font-spotifylight text-[13px] overflow-hidden text-[#B3B3B3] h-10 mt-2",
    title: "h-14 pb-0 font-spotifybold text-3xl text-white",
    playlistcontainer: "pt-4 grid gap-5 grid-cols-3 ",
    hitstitle:"h-14 items-center mt-6 pr-2 pl-2 font-spotifybold text-2xl text-white flex justify-between",
    showall:"font-spotifylight text-sm cursor-pointer hover:underline mt-4 text-[#B3B3B3]",
    hitscard:"grid h-[270px] overflow-hidden place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7 gap-4",
  };

  const List = ({ name, images }) => {
    return (
      <div key={uuid} className={styles.playlistwrapper}>
        <div
          style={{ backgroundImage: `url(${images[0]?.url})` }}
          className={styles.playlistimage}
        ></div>
        <span className={styles.playlisttitle}>{name}</span>
      </div>
    );
  };

  const Hits = ({ item, id }) => {
    return (
      <div key={uuid} className={styles.hitswrapper}>
        <div
          style={{ backgroundImage: `url(${item.images[0].url})` }}
          className={`bg-black w-40 h-40 
           ${item.type === "artist" ? "rounded-full" : "rounded"} 
           mb-2 bg-cover bg-center`}
        ></div>

        <span className={styles.hitsname}>{item.name}</span>
        {item.type === "artist" ? (
          <p className={styles.hitsdescription}>Artist</p>
        ) : (
          <p className={styles.hitsdescription}>{item.description}</p>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarwrapper}>
          <Navbar />
        </div>

        <div className={styles.title}>Good evening</div>

        <div className={styles.playlistcontainer}>
          {playlist.items?.slice(0, 6).map((item) => {
            return <List key={item.id} name={item.name} images={item.images} />;
          })}
        </div>

        <div className={styles.hitstitle}>
          <span>Today's biggest hits</span>
          <span className={styles.showall}>SHOW ALL</span>
        </div>

        <div className={styles.hitscard}>
          {featuredPlaylist?.usa.map((item, id) => {
            return <Hits item={item} id={item.id} />;
          })}
        </div>

        <div className={styles.hitstitle}>
          <span> Waktu Indonesia bagian overthinking</span>
          <span className={styles.showall}>SHOW ALL</span>
        </div>

        <div className={styles.hitscard}>
          {featuredPlaylist?.indo?.map((item, id) => {
            return <Hits item={item} id={item.id} />;
          })}
        </div>

        <div className={styles.hitstitle}>
          <span> Your favorite artist</span>
          <span className={styles.showall}>SHOW ALL</span>
        </div>

        <div className={styles.hitscard}>
          {featuredPlaylist?.artist?.map((item, id) => {
            return <Hits item={item} id={item.id} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
