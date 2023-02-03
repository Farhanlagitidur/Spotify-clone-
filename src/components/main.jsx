import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Sidebar from './sidebar'
import Body from './body'
import Player from './player'
import Home from './home'
import Search from './search'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'


const Main = () => {
  const [{token}, dispatch] = useCreateContext()

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me',{
        headers:{
          'Authorization': 'Bearer ' + token,
          "Content-Type": "application/json",
        }
      })
      const userInfo = {
        userId: data.id,
        userHref: data.href,
        userName: data.display_name,
        userImage: data.images[0],
      }
      // console.log(data)
      dispatch({type: reducerCases.SET_USER, userInfo})
      // console.log(data)
    }
    getUserData()
  },[token, dispatch])

  useEffect(() => {
    const getAlbums = async ()  => { 

      const config = {
      headers:{
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      },
      params: {
        seed_tracks: '4NHQUGzhtTLFvgF5SZesLK',
        limit: 7
      }
    }
    const config1 = {
      headers:{
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      },}

    const [ res1, res2, res3 ] =  await axios.all([
     axios.get("https://api.spotify.com/v1/browse/featured-playlists?country=US&language=en",config),
     axios.get("https://api.spotify.com/v1/browse/featured-playlists",config),
     axios.get(`https://api.spotify.com/v1/artists?ids=2IDLDx25HU1nQMKde4n61a,7tYKF4w9nC0nq9CsPZTHyP,1AhjOkOLkbHUfcHDSErXQs,1Xyo4u8uXC1ZmMpatF05PJ,0Y5tJX1MQlPlqiwlOH1tJY,7pbDxGE6nQSZVfiFdq9lOL,6UbmqUEgjLA6jAcXwbM1Z9`, config1)
    ])

    // console.log(res1)
    const featuredPlaylists = {
      usa: res1.data.playlists.items,
      indo: res2.data.playlists.items,
      artist: res3.data.artists,
    } 

    dispatch({type: reducerCases.SET_FEATURED_PLAYLIST, featuredPlaylists})
  }
    getAlbums()
 },[token, dispatch])

  // console.log(featuredPlaylist)
  // useEffect(() => {
  //     const getPlaylist = async () => {

  //       const { data } = await axios.get("https://api.spotify.com/v1/me/playlists",{
  //         headers:{
  //           'Authorization': 'Bearer ' + token,
  //           "Content-Type": "application/json",
  //         }
  //       })

  //       const playlistInfo = {
  //         items: data.items
  //       }
        
  //       dispatch({type:reducerCases.SET_PLAYLISTS, playlistInfo})
  //     }
  //     getPlaylist()
  // },[ token,dispatch,])
  // console.log(playlist)

  return (
    <div className=' h-screen w-screen flex'>
       {/* <Sidebar/> */}
        {/* <div className=' overflow-scroll bg-[#121212] bg-gradient-to-t from-[#121212] via-[#121212] to-purple-900 w-4/5 p-4 pt-0  mb-20 overflow-x-hidden scrollbar-hide'> */}
       
     
        <Body/>
      
        {/* <Home/> */}
        {/* <Search/> */}
    {/* </div> */}
     {/* <Sidebar/> */}
      {/* <Body/> */}
      {/* <Player/>  */}
   </div>
  ) 
}

export default Main