import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Sidebar from './sidebar'
import Body from './body'
import Player from './player'

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
      }
      dispatch({type: reducerCases.SET_USER,userInfo})
      // console.log(data)
    }
    getUserData()
  },[token, dispatch])


  return (
    <div className=' h-screen w-screen flex'>
      <Sidebar/>
      <Body/>
      <Player/>
    </div>
  ) 
}

export default Main