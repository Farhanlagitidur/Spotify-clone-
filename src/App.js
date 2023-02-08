import { useEffect } from 'react';
import Main from './components/main'
import Login from './components/login';
import {useCreateContext} from './utils/provider'
import { reducerCases } from "./utils/constant";


function App() {
  const [{ token },dispatch] = useCreateContext()

  useEffect(() => {
    const hash = window.location.hash
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]
      if(token){
        dispatch({type: reducerCases.SET_TOKEN,token})
      }
    }
    document.title = "Spotify"
  },[dispatch,token])

  return (
    <>
      {token ? <Main/> : <Login/>}
    </>
  );
}

export default App;
