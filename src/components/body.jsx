import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Home from './home'
import Search from './search'
import Sidebar from './sidebar'
import Player from './player'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Playlists from './playlist'

const Body = () => {
  const [{ token }, dispatch ] = useCreateContext()
  const [isopen , setOpen] = useState({
    home:true,
    search:false,
    playlist:{
      value:false,
      id:null,
    }
  },)
  // console.log(featuredPlaylist)
  useEffect(() => {
      const getPlaylist = async () => {

        const { data } = await axios.get("https://api.spotify.com/v1/me/playlists",{
          headers:{
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
          }
        })

        const playlistInfo = {
          items: data.items
        }
        
        dispatch({type:reducerCases.SET_PLAYLISTS, playlistInfo})
      }
      getPlaylist()
  },[ token,dispatch,])
  // console.log(playlist)

  const handleOpen = (value,param) => {
    if(param === 'home'){
      setOpen(prevState => ({
          ...prevState,
          home:value,
          search:!value,
          playlist:!value
        }))
    }else if(param === 'search'){
      setOpen(prevState => ({
        ...prevState,
        home: !value,
        search: value,
        playlist:!value
      }))
    }
  }


  
  const handlePlaylist = async (value, param ,id) => {
   if(param === 'playlist'){
      setOpen(prevState => ({
        ...prevState,
        home: !value,
        search: !value,
        playlist: {
          value:true,
          id:id,
        }
      }))
    }
    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}`,{
      headers:{
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      }
    })

    console.log(data.tracks.items)

 
    const selectedPlaylistData = {
        name: data.name,
        images: data.images[0],
        owner: data.owner.display_name,
        tracks: data.tracks.items
    }
    dispatch({type:reducerCases.SET_SELECTED_PLAYLIST, selectedPlaylistData})
    
    console.log(id)
  
  }

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

  return (
  <>
    <Sidebar handleOpen={handleOpen} handlePlaylist={handlePlaylist} isopen={isopen}/>
    <div className={`overflow-scroll  bg-gradient-to-t from-[#121212] via-[#121212] ${getRandomColor()} w-4/5  pt-0  mb-20 overflow-x-hidden scrollbar-hide`}>
    
       { isopen.home && <Home/> }
       { isopen.search && <Search/> }
       { isopen.playlist && <Playlists/> }
       
    </div>
    <Player/> 
  </>
  )
}

export default Body