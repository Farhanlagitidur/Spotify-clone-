import React from "react";
import axios from 'axios'
import uuid from 'react-uuid';
import Footer from './footer'
import { useCreateContext } from "../utils/provider";
import { useEffect, useState } from 'react'
import { reducerCases } from '../utils/constant'
import Sidebar from './sidebar'
import Player from './player'

const Home = () => {
  const [{ token, selectedPlaylistId, playlist,userInfo,featuredPlaylist}, dispatch ] = useCreateContext()

  // console.log(userInfo)
//  useEffect(() => {
//     const getAlbums = async ()  => { 

//       const config = {
//       headers:{
//         'Authorization': 'Bearer ' + token,
//         "Content-Type": "application/json",
//       },
//       params: {
//         seed_tracks: '4NHQUGzhtTLFvgF5SZesLK',
//         limit: 7
//       }
//     }
//     const config1 = {
//       headers:{
//         'Authorization': 'Bearer ' + token,
//         "Content-Type": "application/json",
//       },}

//     const [ res1, res2, res3 ] =  await axios.all([
//      axios.get("https://api.spotify.com/v1/browse/featured-playlists?country=US&language=en",config),
//      axios.get("https://api.spotify.com/v1/browse/featured-playlists",config),
//      axios.get(`https://api.spotify.com/v1/artists?ids=2IDLDx25HU1nQMKde4n61a,7tYKF4w9nC0nq9CsPZTHyP,1AhjOkOLkbHUfcHDSErXQs,1Xyo4u8uXC1ZmMpatF05PJ,0Y5tJX1MQlPlqiwlOH1tJY,7pbDxGE6nQSZVfiFdq9lOL,6UbmqUEgjLA6jAcXwbM1Z9`, config1)
//     ])

//     // console.log(res1)
//     const featuredPlaylists = {
//       usa: res1.data.playlists.items,
//       indo: res2.data.playlists.items,
//       artist: res3.data.artists,
//     } 

//     dispatch({type: reducerCases.SET_FEATURED_PLAYLIST, featuredPlaylists})
//   }
//     getAlbums()
//  },[token, dispatch])


// console.log(featuredPlaylist,"isgoaisjgs")
  const List = ({name,images}) => {
    return (
        <div key={uuid} className="bg-[#303030] backdrop-blur-xl bg-gray-300/10 h-20 flex items-center rounded hover:bg-gray-400/40 cursor-pointer ">
            <div  style={{backgroundImage: `url(${images[0]?.url})`}}
             className="h-full w-20 bg-yellow-300 rounded bg-cover bg-center "></div>
            <span className=" ml-6 font-spotifybold text-white">{name}</span>
        </div>
    )
  }

  const Hits = ({item,id}) => {
   
    return (
      <div key={uuid} className={`bg-[#171717] w-48 rounded p-4 hover:bg-gray-400/10  cursor-pointer ${id === 4 && "flex-col md:hidden lg:hidden  2xl:flex" }
       ${id === 5 && "md:hidden flex-col xl:hidden min-[1390px]:flex "} ${id === 6 && "md:hidden flex-col xl:hidden min-[1810px]:flex"}`}>
          <div  style={{backgroundImage: `url(${item.images[0].url})`}}
          className={` bg-black w-40 h-40  ${item.type === "artist" ? "rounded-full" : "rounded" } mb-2 bg-cover bg-center`}></div>
          <span  className="font-spotifybold text-white truncate w-full block overflow-hidden">{item.name}</span>
          {item.type === "artist" ? <p className="font-spotifylight text-sm overflow-hidden text-[#B3B3B3] h-10 mt-2">
          Artist</p> : 
          <p className="font-spotifylight text-[13px] overflow-hidden text-[#B3B3B3] h-10 mt-2">
          {item.description}</p>}
        </div>
    )
  }

  return (

  <>
  
  
    <div className="h-full m-4 mt-0 ">
      
      <div className="w-full  pt-0  ">
       <div className="h-16 flex justify-between  items-center  ">
         <div className=" h-10 flex flex-row justify-center items-center">
 
         <svg className="h-8 w-8 bg-[#131313]  m-2 ml-0 rounded-full cursor-pointer" 
         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M10.5999 12.71C10.5062 12.617 10.4318 12.5064 10.381 12.3846C10.3303 12.2627 10.3041 12.132 10.3041 12C10.3041 11.868 10.3303 11.7373 10.381 11.6154C10.4318 11.4936 10.5062 11.383 10.5999 11.29L15.1899 6.71C15.2836 6.61704 15.358 6.50644 15.4088 6.38458C15.4596 6.26272 15.4857 6.13201 15.4857 6C15.4857 5.86799 15.4596 5.73728 15.4088 5.61542C15.358 5.49356 15.2836 5.38296 15.1899 5.29C15.0026 5.10375 14.7491 4.99921 14.4849 4.99921C14.2207 4.99921 13.9673 5.10375 13.7799 5.29L9.18992 9.88C8.62812 10.4425 8.31256 11.205 8.31256 12C8.31256 12.795 8.62812 13.5575 9.18992 14.12L13.7799 18.71C13.9662 18.8947 14.2176 18.9989 14.4799 19C14.6115 19.0008 14.742 18.9755 14.8638 18.9258C14.9857 18.876 15.0965 18.8027 15.1899 18.71C15.2836 18.617 15.358 18.5064 15.4088 18.3846C15.4596 18.2627 15.4857 18.132 15.4857 18C15.4857 17.868 15.4596 17.7373 15.4088 17.6154C15.358 17.4936 15.2836 17.383 15.1899 17.29L10.5999 12.71Z" fill="white"/>
         </svg>
 
         <svg className="h-8 w-8 bg-[#131313] m-2 rounded-full cursor-pointer"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.3999 9.88L10.8099 5.29C10.6225 5.10375 10.369 4.99921 10.1049 4.99921C9.84068 4.99921 9.58723 5.10375 9.39986 5.29C9.30613 5.38296 9.23174 5.49356 9.18097 5.61542C9.1302 5.73728 9.10406 5.86799 9.10406 6C9.10406 6.13201 9.1302 6.26272 9.18097 6.38458C9.23174 6.50644 9.30613 6.61704 9.39986 6.71L13.9999 11.29C14.0936 11.383 14.168 11.4936 14.2188 11.6154C14.2695 11.7373 14.2957 11.868 14.2957 12C14.2957 12.132 14.2695 12.2627 14.2188 12.3846C14.168 12.5064 14.0936 12.617 13.9999 12.71L9.39986 17.29C9.21156 17.477 9.10524 17.7311 9.10431 17.9965C9.10337 18.2618 9.20789 18.5167 9.39486 18.705C9.58184 18.8933 9.83596 18.9996 10.1013 19.0006C10.3667 19.0015 10.6216 18.897 10.8099 18.71L15.3999 14.12C15.9617 13.5575 16.2772 12.795 16.2772 12C16.2772 11.205 15.9617 10.4425 15.3999 9.88Z" fill="#7B7B7B"/>
         </svg>
 
         </div>
 
         <div className=" h-9 w-28 rounded-full p-1 flex flex-row items-center justify-between bg-black">
             <div 
              style={{backgroundImage: `url(${userInfo?.userImage.url})`}}
             className=" h-8 w-8 rounded-full bg-cover">
 
             </div>
             <span className=" font-spotifylight text-white">{userInfo?.userName}</span>
             <svg  className="h-5 w-5 " viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4.37512 9H16.6251L11.1187 15.293C10.9547 15.4805 10.7321 15.5858 10.5001 15.5858C10.2681 15.5858 10.0456 15.4805 9.8815 15.293L4.37512 9Z" fill="white"/>
             </svg>
 
         </div>
       </div>
      </div>
 
       <div className=" h-14  pb-0  font-spotifybold text-3xl text-white">
         Good evening
       </div>
 
       <div className="h-60  pt-4 grid gap-x-8 gap-y-4 grid-cols-3 ">
         {
           playlist.items?.slice(0, 6).map((item) => {
             
             return (
               <List key={item.id} name={item.name} images={item.images}/>
             )
           })
           
         }
       </div>
      
       <div className=" h-14 items-center pr-2 pl-2 font-spotifybold text-2xl text-white flex justify-between ">
         <span>Today's biggest hits</span>
         <span className="  font-spotifylight text-sm cursor-pointer hover:underline mt-4 text-[#B3B3B3]">SHOW ALL</span>
       </div>
 
       <div className=" grid grid-flow-col gap-4 overflow-hidden place-items-center">
 
         {
           featuredPlaylist?.usa.map((item,id) => {
            
             return (
               <Hits item={item} id={item.id}/>
             )
           })
         }
       </div>
 
       <div className=" h-14 items-center mt-6 pr-2 pl-2 font-spotifybold text-2xl text-white flex justify-between ">
         <span> Waktu Indonesia bagian overthinking</span>
         <span className="  font-spotifylight text-sm cursor-pointer hover:underline mt-4 text-[#B3B3B3]">SHOW ALL</span>
       </div>
 
     <div className=" grid  grid-flow-col gap-4 overflow-hidden place-items-center">
 
       {
         featuredPlaylist?.indo?.map((item,id) => {
         
           return (
             <Hits item={item} id={item.id}/>
           )
         })
       }
 
       </div> 
 
       <div className=" h-14 items-center mt-6 pr-2 pl-2 font-spotifybold text-2xl text-white flex justify-between ">
         <span> Your favorite artist</span>
         <span className="  font-spotifylightm text-sm cursor-pointer hover:underline mt-4 text-[#B3B3B3]">SHOW ALL</span>
       </div>
 
     <div className="grid grid-flow-col gap-4 overflow-hidden place-items-center">
 
       {
         featuredPlaylist?.artist?.map((item,id) => {
           return (
             <Hits item={item} id={item.id}/>
           )
         })
       }
 
       </div> 
       <Footer/>
     </div>
     
    
  </>
  );
};

export default Home;

