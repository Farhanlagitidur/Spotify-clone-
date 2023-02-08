import React from 'react'
import { useCreateContext } from "../utils/provider";
import { BackButtonsvg, NextButtonsvg, ArrowDown}from "../assets/svg/svg";

const Navbar = () => {
 const [{ userInfo }] = useCreateContext()
 
 const styles = {
    wrapper:"h-16 flex justify-between items-center",
    profilewrapper: "h-9 w-28 rounded-full p-1 flex flex-row items-center justify-between bg-black cursor-pointer",
    button:"h-10 flex flex-row justify-center items-center",
    image:"h-8 w-8 rounded-full bg-cover",
    username:"font-spotifylight text-white",
 }

  return (
    <div className={styles.wrapper}>
        <div className={styles.button}>
            <BackButtonsvg/>
            <NextButtonsvg/>
        </div>

        <div className={styles.profilewrapper}>
            <div 
            style={{backgroundImage: `url(${userInfo?.userImage.url})`}}
            className={styles.image}>
            </div>
            <span className={styles.username}>{userInfo?.userName}</span>
        <ArrowDown/>
    </div>
  </div>
  )
}

export default Navbar