import React from "react";
import uuid from 'react-uuid';
import Footer from './footer'
import Navbar from "./navbar";
import { useCreateContext } from "../utils/provider";

const Home = () => {
  const [{playlist,userInfo,featuredPlaylist}] = useCreateContext()

  const styles = {
    
  }



  const List = ({name,images}) => {
    return (
        <div key={uuid} className="bg-[#303030] backdrop-blur-xl bg-gray-300/10 h-20 flex items-center rounded-sm hover:bg-gray-400/40 cursor-pointer ">
            <div  style={{backgroundImage: `url(${images[0]?.url})`}}
             className="h-full w-20 bg-yellow-300 rounded-sm bg-cover bg-center "></div>
            <span className=" ml-6 font-spotifybold text-white">{name}</span>
        </div>
    )
  }
  
  const Hits = ({item,id}) => {
   
    return (
      <div key={uuid} 
       className={` w-48 bg-[#171717] hover:bg-gray-400/10 cursor-pointer  flex-row  p-4 rounded`} >


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
          <Navbar/>
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

      
      <div
        className="grid h-[270px] overflow-hidden place-items-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7 gap-4"
        >
 
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
 
     <div  className="grid h-[270px] overflow-hidden place-items-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7 gap-4">
 
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
 
     <div  className="grid h-[270px] overflow-hidden place-items-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 min-[1740px]:grid-cols-7 gap-4">
 
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

