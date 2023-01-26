import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Sidebar from './sidebar'

const Main = () => {
  const [{token}, dispatch] = useCreateContext()

  // useEffect(() => {
  //   const getUserData = async () => {
  //     const { data } = await axios.get('https://api.spotify.com/v1/me',{
  //       headers:{
  //         'Authorization': 'Bearer ' + token,
  //         "Content-Type": "application/json",
  //       }
  //     })
  //     const userInfo = {
  //       userId: data.id,
  //       userHref: data.href,
  //       useName: data.display_name,
  //     }
  //     dispatch({type: reducerCases.SET_USER,userInfo})
  //     // console.log(data)
  //   }
  //   getUserData()
  // },[token, dispatch])


  return (
    <div className='bg-[#222222] h-screen w-screen'>
      <Sidebar/>
      <div className='h-20 fixed bottom-0 bg-zinc-900 w-screen'></div>
    </div>
  ) 
}

export default Main