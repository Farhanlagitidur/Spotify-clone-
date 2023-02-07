import React from 'react'
import axios from 'axios'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import { useEffect , useState} from 'react'
import { Likesvg, Lyricssvg, Queuesvg, Mutesvg, Devicesvg }from "../assets/svg/svg";

const Player = () => {
const [{token, currentPlaying},dispatch] = useCreateContext()
const [playing, setPlaying] = useState()

 useEffect(() => {
      const getPlaying = async () => {

        const config = {
          headers:{
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
          }
        }

        const [res1, res2] =  await axios.all([
            // axios.get("https://api.spotify.com/v1/me/player/currently-playing",config),
            axios.get("https://api.spotify.com/v1/me/player",config),
        ])
        
        setPlaying(
          {
              name: res1.data.item.name,
              images: res1.data.item.album.images,
              artist: res1.data.item.artists.map(item => item.name),
              duration: res1.data.item.duration_ms,
              progress: res1.data.progress_ms,
          }
        )

      }
      getPlaying()
      const intervalId = setInterval(getPlaying, 1 * 60 * 1000);

      // Clean up the interval when the component unmounts
      return () => getPlaying(intervalId);
  },[ token,dispatch])

  const ms = playing?.duration
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000)/ 1000).toFixed(0)


  // const handlePlay = async () => {
  //   try {
  //     await axios({
  //       method: 'PUT',
  //       url: "https://api.spotify.com/v1/me/player/play",
  //       headers: {
  //         'Authorization': `Bearer ` + token,
  //         'Content-Type': 'application/json'
  //       },
  //       data: {
  //         uris: [
  //           "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
  //         ],
  //         position_ms: 0
  //       }
  //     });
  //     console.log("Started playing track");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className='h-24 fixed bottom-0 bg-[#181818] w-screen p-3'>
      <div className='  h-full flex justify-center'>

        <div className=' h-full w-1/3 flex flex-row  p-2 float-left'>
          <div 
          style={{backgroundImage: `url(${playing?.images[0].url})`}}
          className='bg-white w-[60px] h-full bg-cover bg-center bg-no-repeat '></div>
            <div className='flex-col flex font-spotifylight ml-4 justify-center text-white '>
               <span className='font-spotifylight text-[13px] cursor-pointer hover:underline'>{playing?.name}</span>
               <span className=' text-[12px] font-spotifylight text-[#B3B3B3] cursor-pointer hover:underline '>{playing?.artist.join(", ")}</span>
            </div>

              <div className=' flex items-center ml-4 '>
              <Likesvg/>
            </div>

        </div>

        <div className=' h-full   w-1/3  '>
          <div className='h-2/3  flex items-center justify-center'>

          <svg className='h-4 w-4 m-2 cursor-pointer' viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.2475 42.0835C47.3524 42.0835 47.4479 42.138 47.486 42.2378C47.5338 42.3286 47.5057 42.4375 47.4294 42.51C46.6373 43.2632 45.0527 44.7695 45.0527 44.7695C43.9648 45.8039 43.9648 47.4825 45.0527 48.517C46.1405 49.5514 47.8967 49.5514 48.9845 48.517C48.9845 48.517 56.208 41.6571 58.1261 39.8242C58.2501 39.7062 58.3169 39.5429 58.3169 39.3795C58.3169 39.2162 58.2501 39.0528 58.1261 38.9349C56.208 37.1019 48.9845 30.2419 48.9845 30.2419C47.8967 29.2075 46.1405 29.2075 45.0527 30.2419C43.9648 31.2763 43.9648 32.9551 45.0527 33.9895C45.0527 33.9895 46.7228 35.5774 47.5434 36.3578C47.6198 36.4304 47.6486 36.5393 47.6008 36.63C47.5627 36.7298 47.4673 36.7844 47.3623 36.7844C45.9118 36.7844 42.5149 36.7752 42.5149 36.7752C41.2362 36.7752 39.9569 36.1854 38.6114 35.3233C36.9032 34.2163 35.1762 32.6557 33.4203 30.8409C33.4203 30.8409 32.3899 29.7792 31.8555 29.2257C31.7696 29.1349 31.6551 29.0805 31.5215 29.0805C31.3974 29.0715 31.2734 29.1167 31.1875 29.1984C30.4145 29.8789 28.5631 31.4942 27.7902 32.1747C27.6947 32.2564 27.6373 32.3653 27.6373 32.4833C27.6278 32.6012 27.6759 32.7192 27.7618 32.8099C28.2962 33.3634 29.3267 34.4252 29.3267 34.4252C33.8022 39.0438 38.3637 42.0654 42.5052 42.0654C42.5052 42.0654 45.8256 42.0744 47.2475 42.0835ZM47.4294 7.57519C47.5057 7.64778 47.5338 7.74759 47.486 7.8474C47.4479 7.93814 47.3524 8.00159 47.2475 8.00159C45.8256 8.00159 42.5052 8.01063 42.5052 8.01063C39.5947 8.01063 36.4935 9.4172 33.4017 11.8853C29.5178 14.9886 25.4902 19.8251 21.4823 24.6797C17.7225 29.2167 13.9919 33.7808 10.3562 36.6844C8.43811 38.2179 6.63396 39.3251 4.83039 39.3251C4.83039 39.3251 1.85309 39.3251 0.679342 39.3251C0.412148 39.3251 0.202209 39.5246 0.202209 39.7696C0.202209 40.7768 0.202209 43.1633 0.202209 44.1614C0.202209 44.2885 0.250519 44.3973 0.336403 44.4881C0.431829 44.5697 0.545745 44.6151 0.679342 44.6151C1.47138 44.6151 2.98896 44.6151 2.98896 44.6151H4.83039C7.75045 44.6151 10.8429 43.2178 13.9347 40.7406C17.8185 37.6373 21.8455 32.8009 25.863 27.9463C29.6133 23.4093 33.3534 18.845 36.9891 15.9413C38.9072 14.4078 40.7017 13.3008 42.5052 13.3008H42.5149C42.5149 13.3008 45.9118 13.2918 47.3623 13.2918C47.4673 13.2918 47.5627 13.3552 47.6008 13.446C47.6486 13.5367 47.6198 13.6456 47.5434 13.7182C46.7228 14.5076 45.0527 16.0957 45.0527 16.0957C43.9648 17.1301 43.9648 18.7997 45.0527 19.8341C46.1405 20.8685 47.8967 20.8685 48.9845 19.8341C48.9845 19.8341 56.208 12.9741 58.1261 11.1412C58.2501 11.0232 58.3169 10.8691 58.3169 10.6967C58.3169 10.5333 58.2501 10.37 58.1261 10.252C56.208 8.42814 48.9845 1.55906 48.9845 1.55906C47.8967 0.533699 46.1405 0.533699 45.0527 1.55906C43.9648 2.59349 43.9648 4.27225 45.0527 5.30669C45.0527 5.30669 46.6373 6.81297 47.4294 7.57519ZM2.98896 10.7601H4.83039C6.43356 10.7601 8.03717 11.6493 9.72622 12.9106C11.8638 14.4985 14.0301 16.7127 16.2249 19.1809C16.2249 19.1809 17.1977 20.2788 17.713 20.8595C17.7893 20.9503 17.914 21.0047 18.038 21.0137C18.1621 21.0319 18.2855 20.9865 18.381 20.9139C19.1825 20.2697 21.1006 18.727 21.9117 18.0828C22.0072 18.0011 22.0647 17.8923 22.0743 17.7744C22.0838 17.6564 22.0455 17.5383 21.9691 17.4476C21.4538 16.8668 20.4714 15.7689 20.4714 15.7689C17.4845 12.4024 14.5069 9.48973 11.6251 7.684C9.32528 6.24124 7.03475 5.46088 4.83039 5.46088H0.202209V10.7601H2.98896Z" 
          fill="#5E5E5E"/>
          </svg>

          <svg className='h-4 w-4 m-2 mr-2 cursor-pointer' viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.145 28.8432L11.145 47.4046C11.145 48.3233 10.4307 49.0697 9.44864 49.0697L2.48474 49.0697C1.59193 49.0697 0.877686 48.3233 0.877686 47.4046L0.87769 2.59642C0.87769 1.67772 1.59193 0.932262 2.48474 0.932262L9.44864 0.932263C10.4307 0.932263 11.145 1.67772 11.145 2.59642L11.145 21.1579L45.0717 1.56168C45.8752 1.10009 46.8573 1.10009 47.6608 1.56168C48.4643 2.02326 49 2.87585 49 3.79901C49 13.5199 49 36.4811 49 46.2029C49 47.1251 48.4643 47.9778 47.6608 48.4393C46.8573 48.9009 45.8752 48.901 45.0717 48.4403L11.145 28.8432Z"
          fill="#C4C4C4"/>
          </svg>

          <svg
          //  onClick={handlePlay} a premium account needed
          className='h-12 w-12 m-2 cursor-pointer' viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5 4.25C21.2971 4.25 17.1887 5.49629 13.6941 7.83127C10.1996 10.1663 7.47592 13.485 5.86755 17.368C4.25919 21.2509 3.83837 25.5236 4.65831 29.6457C5.47824 33.7678 7.50211 37.5542 10.474 40.526C13.4458 43.4979 17.2322 45.5218 21.3543 46.3417C25.4764 47.1616 29.7491 46.7408 33.632 45.1324C37.5149 43.5241 40.8337 40.8004 43.1687 37.3059C45.5037 33.8113 46.75 29.7029 46.75 25.5C46.75 22.7094 46.2003 19.9461 45.1324 17.368C44.0645 14.7898 42.4993 12.4472 40.526 10.474C38.5528 8.50074 36.2102 6.93547 33.632 5.86756C31.0539 4.79965 28.2906 4.25 25.5 4.25ZM21.3543 32.5V17.381L33 25.5L21.3543 32.5Z" fill="white"/>
          </svg>



          <svg className='h-4 w-4 m-2 ml-2 cursor-pointer ' viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.855 21.1588V2.59737C37.855 1.67867 38.5693 0.932251 39.5514 0.932251H46.5153C47.4081 0.932251 48.1223 1.67867 48.1223 2.59737V47.4055C48.1223 48.3242 47.4081 49.0697 46.5153 49.0697H39.5514C38.5693 49.0697 37.855 48.3242 37.855 47.4055V28.844L3.92835 48.4403C3.12483 48.9019 2.14274 48.9019 1.33921 48.4403C0.535685 47.9787 0 47.1261 0 46.2029C0 36.4821 0 13.5209 0 3.79908C0 2.87681 0.535685 2.0242 1.33921 1.56262C2.14274 1.10104 3.12483 1.10097 3.92835 1.56166L37.855 21.1588Z" 
          fill="#C4C4C4"/>
          </svg>


          <svg className='h-4 w-4 m-2 cursor-pointer' viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5599 39.5149L35.6426 36.5749C36.7305 35.5405 36.7305 33.8709 35.6426 32.8365C34.5643 31.8021 32.7986 31.8021 31.7107 32.8365L22.101 41.974L31.7107 51.1116C32.7986 52.1369 34.5643 52.1369 35.6426 51.1116C36.7305 50.0771 36.7305 48.3984 35.6426 47.3639L32.5599 44.4331H43.8582C51.1774 44.4331 57.1225 38.7708 57.1225 31.8111V13.3455C57.1225 6.38576 51.1774 0.732666 43.8582 0.732666H14.1903C6.86151 0.732666 0.91629 6.38576 0.91629 13.3455V31.8111C0.91629 38.7708 6.86151 44.4331 14.1903 44.4331H16.8242V39.5149H14.1903C9.71476 39.5149 6.0887 36.0577 6.0887 31.8111V13.3455C6.0887 9.09889 9.71476 5.64184 14.1903 5.64184H43.8582C48.3242 5.64184 51.9605 9.09889 51.9605 13.3455V31.8111C51.9605 36.0577 48.3242 39.5149 43.8582 39.5149H32.5599Z"
          fill="#5E5E5E"/>
          </svg>


          </div>

          <div className='h-1/3 text-white bs flex'>
              <div className='flex items-center mx-auto font-spotify'>
              <span className='mr-2'>0:00</span>
              <svg width="511" height="5" viewBox="0 0 511 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="511" height="5" rx="2.5" fill="#535353"/>
              </svg>
              
              
              <span className='ml-2'>{minutes + ":" + (seconds < 10 ? '0' : '') + seconds}</span>
           </div>
 
          </div>
        
        </div>


        <div className=' h-full  flex  0 w-1/3 justify-end'>
       
          <div className=' flex flex-row items-center mr-2 '>
            <Lyricssvg/>
            <Queuesvg/>
            <Devicesvg/>
            <Mutesvg/>
            <div className=' items-center flex'>
              <input type="range" className='bg-white h-[6px] w-24 hover:accent-[#1DD760]
               accent-white rounded-full cursor-pointer'/>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Player