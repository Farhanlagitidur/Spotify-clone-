import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Home from './home'

const Body = () => {
  const [{ token, selectedPlaylistId, playlist, featuredPlaylist}, dispatch ] = useCreateContext()

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

  return (
    <div className=' overflow-scroll bg-[#222222] bg-gradient-to-t from-[#222222]  via-[#222222] to-purple-900 w-4/5 p-4 pt-0  mb-20 overflow-x-hidden'>
        <Home/>
    </div>
  )
}

export default Body