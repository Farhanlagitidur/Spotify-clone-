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
  const [{ token, z}, dispatch ] = useCreateContext()
  const [isopen , setOpen] = useState({
    home:true,
    search:false,
    playlist:false,
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
        playlist: value
      }))
    }
    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}`,{
      headers:{
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      }
    })

    console.log(data)

    // const playlistInfo = {
    //   items: data.items
    // }
    
    // dispatch({type:reducerCases.SET_PLAYLISTS, playlistInfo})
    
    console.log(id)
  
  }

  return (
  <>
    <Sidebar handleOpen={handleOpen} handlePlaylist={handlePlaylist} isopen={isopen}/>
    <div className=' overflow-scroll bg-[#121212] bg-gradient-to-t from-[#121212] via-[#121212] to-purple-900 w-4/5  pt-0  mb-20 overflow-x-hidden scrollbar-hide'>
    
       { isopen.home && <Home/> }
       { isopen.search && <Search/> }
       { isopen.playlist && <Playlists/> }
       
    </div>
    <Player/> 
  </>
  )
}

export default Body