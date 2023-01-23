import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
const [data, setData] = useState([])

const client_id = ' 8762fdb3c1c64c8b99a24c0e74a2cec3';
const redirect_uri = 'http://localhost:3000/'
const api_uri = "https://accounts.spotify.com/authorize";
const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];

useEffect(()=> {
//     axios.get(`${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
//         " "
//       )}&response_type=token&show_dialog=true`)
//     .then((response) => {
//         console.log(response)
//     })


//     axios.get('https://api.spotify.com/v1/{endpoint}/{id}', {
//   headers: {
//     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
//   }
// })
// .then(response => {
//     // do something with the response data
// })
// .catch(error => {
//     // handle the error
// });
},[])

  return (
    <div>Main</div>
  )
}

export default Main