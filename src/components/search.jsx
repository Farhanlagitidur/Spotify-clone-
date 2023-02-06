import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCreateContext } from "../utils/provider";
import { Searchsvg } from "../assets/svg/svg";
import { reducerCases } from '../utils/constant'
import Footer from './footer'

const Search = () => {
  const [{ token,userInfo , genres, featuredPlaylist}, dispatch ] = useCreateContext()

  useEffect(() => {
    const getPlaylist = async () => {
      const config = {
        headers:{
          'Authorization': 'Bearer ' + token,
          "Content-Type": "application/json",
        },
       
      }
      const [ res1 ] =  await axios.all([
          axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",config),
      ])
      
      const genresInfo = {
        genres: res1.data.genres
      }
      
      dispatch({type:reducerCases.SET_GENRES, genresInfo})
    }
    getPlaylist()
},[ token,dispatch,])

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

const Genre = ({item}) => {
  return (
  <div className={`2xl:w-48 2xl:h-48 min-[1440px]:w-[210px] min-[1440px]:h-[200px] xl:w-56 xl:h-52 lg:w-56 lg:h-56 rounded-md p-2 relative overflow-hidden ${getRandomColor()}`}>
    <h1 className=" font-spotifybold text-xl text-white ">{item}</h1>
    <div 
    // style={{backgroundImage: `url(${image.url})`}} there is no image in the endpoint so
    className="bg-white h-24 w-24  -bottom-4 -right-5 rotate-[30deg] bg-cover bg-center absolute"></div>
  </div>

  )
}


  
  return (
    <div className="m-4 mt-0 ">
      <div className="h-16 flex items-center flex-row justify-between  ">
        <div className="flex flex-row  items-center  w-1/2">
          <div className=" h-10 flex flex-row justify-center items-center mr-4 ">
            <svg
              className="h-8 w-8 bg-[#131313]  m-2 ml-0 rounded-full cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5999 12.71C10.5062 12.617 10.4318 12.5064 10.381 12.3846C10.3303 12.2627 10.3041 12.132 10.3041 12C10.3041 11.868 10.3303 11.7373 10.381 11.6154C10.4318 11.4936 10.5062 11.383 10.5999 11.29L15.1899 6.71C15.2836 6.61704 15.358 6.50644 15.4088 6.38458C15.4596 6.26272 15.4857 6.13201 15.4857 6C15.4857 5.86799 15.4596 5.73728 15.4088 5.61542C15.358 5.49356 15.2836 5.38296 15.1899 5.29C15.0026 5.10375 14.7491 4.99921 14.4849 4.99921C14.2207 4.99921 13.9673 5.10375 13.7799 5.29L9.18992 9.88C8.62812 10.4425 8.31256 11.205 8.31256 12C8.31256 12.795 8.62812 13.5575 9.18992 14.12L13.7799 18.71C13.9662 18.8947 14.2176 18.9989 14.4799 19C14.6115 19.0008 14.742 18.9755 14.8638 18.9258C14.9857 18.876 15.0965 18.8027 15.1899 18.71C15.2836 18.617 15.358 18.5064 15.4088 18.3846C15.4596 18.2627 15.4857 18.132 15.4857 18C15.4857 17.868 15.4596 17.7373 15.4088 17.6154C15.358 17.4936 15.2836 17.383 15.1899 17.29L10.5999 12.71Z"
                fill="#7B7B7B"
              />
            </svg>

            <svg
              className="h-8 w-8 bg-[#131313] m-2 rounded-full cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3999 9.88L10.8099 5.29C10.6225 5.10375 10.369 4.99921 10.1049 4.99921C9.84068 4.99921 9.58723 5.10375 9.39986 5.29C9.30613 5.38296 9.23174 5.49356 9.18097 5.61542C9.1302 5.73728 9.10406 5.86799 9.10406 6C9.10406 6.13201 9.1302 6.26272 9.18097 6.38458C9.23174 6.50644 9.30613 6.61704 9.39986 6.71L13.9999 11.29C14.0936 11.383 14.168 11.4936 14.2188 11.6154C14.2695 11.7373 14.2957 11.868 14.2957 12C14.2957 12.132 14.2695 12.2627 14.2188 12.3846C14.168 12.5064 14.0936 12.617 13.9999 12.71L9.39986 17.29C9.21156 17.477 9.10524 17.7311 9.10431 17.9965C9.10337 18.2618 9.20789 18.5167 9.39486 18.705C9.58184 18.8933 9.83596 18.9996 10.1013 19.0006C10.3667 19.0015 10.6216 18.897 10.8099 18.71L15.3999 14.12C15.9617 13.5575 16.2772 12.795 16.2772 12C16.2772 11.205 15.9617 10.4425 15.3999 9.88Z"
                fill="#7B7B7B"
              />
            </svg>
          </div>

          <div className="bg-white flex h-9 rounded-full float-left w-80">
            <div className=" rounded-tl-full rounded-bl-full  h-full w-14 flex items-center justify-center">
              <Searchsvg stroke={"black"} />
            </div>
            <input
              className="bg-white w-full rounded-tr-full rounded-br-full font-spotifylight text-xs focus:outline-0"
              placeholder={"What do you want to listen to?"}
            ></input>
          </div>
        </div>

        <div className="   w-1/2">
          <div className=" h-9 w-28 rounded-full p-1 flex float-right justify-self-end items-center justify-between bg-black">
            <div
              style={{ backgroundImage: `url(${userInfo?.userImage.url})` }}
              className=" h-8 w-8 rounded-full bg-cover"
            ></div>
            <span className=" font-spotifylight text-white">
              {userInfo?.userName}
            </span>
            <svg
              className="h-5 w-5 "
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37512 9H16.6251L11.1187 15.293C10.9547 15.4805 10.7321 15.5858 10.5001 15.5858C10.2681 15.5858 10.0456 15.4805 9.8815 15.293L4.37512 9Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-20 font-spotifybold text-white text-xl  items-center flex">
        <h1>Browse all</h1>
      </div>

      <div className="sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7  grid gap-4 place-items-stretch ">
        {
           genres?.genres.map(() => {
            const randomIndex = Math.floor(Math.random() * genres?.genres.length)

            return(
              <Genre item={genres.genres[randomIndex]}/>
            )
          })}
      </div>

      <Footer/>
    </div>
  );
};

export default Search;
