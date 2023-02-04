import React from 'react'
import { useCreateContext } from "../utils/provider";
import Footer from './footer'

const Playlists = () => {
  const [{ selectedPlaylist,userInfo,featuredPlaylist}, dispatch ] = useCreateContext()


console.log(selectedPlaylist)




 const Track = ({track,id}) => {

  const ms = track?.track.duration_ms
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000)/ 1000).toFixed(0)
  
  const dateString = track.added_at;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

    return (

      <div className='pl-4 pr-10 h-12 mt-4 flex  flex-row  items-center text-[#B3B3B3] rounded '>
          <p className="w-6 h-6">{id === 0 ? "1" : id + 1}</p>

        <div className='  ml-4  w-3/5  h-full flex flex-row'>
          <div 
          style={{backgroundImage: `url(${track?.track.album.images[0].url})`}}
          className='h-full bg-black w-12 bg-center bg-cover'></div>
          <div className=' ml-4 w-[400px]'>
          <p className='font-spotifylight text-[14px] text-white truncate overflow-hidden  mb-1'>{track?.track.name}</p>
            <div className='flex flex-row items-center'>
              <p className='bg-[#A0A3A3] w-4 h-4 font-spotifythin text-black text-[10px] text-center rounded-sm'>E</p>
              <p className='font-spotifylight text-[13px] text-[#B3B3B3]  ml-2'>{track?.track.artists.map(item => item.name).join(", ")}</p>
            </div>
          </div>
        </div>


        <p className=' ml-6 font-spotifylight text-[13px] w-2/5  truncate b'>{track?.track.album.name}</p>
        <p className='  ml-6 font-spotifylight text-[13px]  w-2/5 whitespace-nowrap '>{formattedDate}</p>
        <p className='font-spotifylight text-[13px] '>{minutes + ":" + (seconds < 10 ? '0' : '') + seconds}</p>
           
      </div>
     
    )
 }


  return (
   <>
    <div className='h-auto'>
      <div className="h-16 flex justify-between  items-center p-4 ">
          <div className=" h-10 flex flex-row justify-center items-center">
  
            <svg className="h-8 w-8 bg-[#131313]  m-2 ml-0 rounded-full cursor-pointer" 
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5999 12.71C10.5062 12.617 10.4318 12.5064 10.381 12.3846C10.3303 12.2627 10.3041 12.132 10.3041 12C10.3041 11.868 10.3303 11.7373 10.381 11.6154C10.4318 11.4936 10.5062 11.383 10.5999 11.29L15.1899 6.71C15.2836 6.61704 15.358 6.50644 15.4088 6.38458C15.4596 6.26272 15.4857 6.13201 15.4857 6C15.4857 5.86799 15.4596 5.73728 15.4088 5.61542C15.358 5.49356 15.2836 5.38296 15.1899 5.29C15.0026 5.10375 14.7491 4.99921 14.4849 4.99921C14.2207 4.99921 13.9673 5.10375 13.7799 5.29L9.18992 9.88C8.62812 10.4425 8.31256 11.205 8.31256 12C8.31256 12.795 8.62812 13.5575 9.18992 14.12L13.7799 18.71C13.9662 18.8947 14.2176 18.9989 14.4799 19C14.6115 19.0008 14.742 18.9755 14.8638 18.9258C14.9857 18.876 15.0965 18.8027 15.1899 18.71C15.2836 18.617 15.358 18.5064 15.4088 18.3846C15.4596 18.2627 15.4857 18.132 15.4857 18C15.4857 17.868 15.4596 17.7373 15.4088 17.6154C15.358 17.4936 15.2836 17.383 15.1899 17.29L10.5999 12.71Z" fill="white"/>
            </svg>
    
            <svg className="h-8 w-8 bg-[#131313] m-2 rounded-full cursor-pointer"
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3999 9.88L10.8099 5.29C10.6225 5.10375 10.369 4.99921 10.1049 4.99921C9.84068 4.99921 9.58723 5.10375 9.39986 5.29C9.30613 5.38296 9.23174 5.49356 9.18097 5.61542C9.1302 5.73728 9.10406 5.86799 9.10406 6C9.10406 6.13201 9.1302 6.26272 9.18097 6.38458C9.23174 6.50644 9.30613 6.61704 9.39986 6.71L13.9999 11.29C14.0936 11.383 14.168 11.4936 14.2188 11.6154C14.2695 11.7373 14.2957 11.868 14.2957 12C14.2957 12.132 14.2695 12.2627 14.2188 12.3846C14.168 12.5064 14.0936 12.617 13.9999 12.71L9.39986 17.29C9.21156 17.477 9.10524 17.7311 9.10431 17.9965C9.10337 18.2618 9.20789 18.5167 9.39486 18.705C9.58184 18.8933 9.83596 18.9996 10.1013 19.0006C10.3667 19.0015 10.6216 18.897 10.8099 18.71L15.3999 14.12C15.9617 13.5575 16.2772 12.795 16.2772 12C16.2772 11.205 15.9617 10.4425 15.3999 9.88Z" fill="#7B7B7B"/>
            </svg>
    
            </div>
    
            <div className=" h-9 w-28 rounded-full p-1 flex flex-row items-center justify-between bg-black ">
                <div 
                  style={{backgroundImage: `url(${userInfo?.userImage.url})`}}
                className=" h-8 w-8 rounded-full bg-cover">
    
                </div>
                <span className=" font-spotifylight text-white">{userInfo?.userName}</span>
                <svg  className="h-5 w-5 " viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.37512 9H16.6251L11.1187 15.293C10.9547 15.4805 10.7321 15.5858 10.5001 15.5858C10.2681 15.5858 10.0456 15.4805 9.8815 15.293L4.37512 9Z" fill="white"/>
                </svg>
  
            </div>
       </div>

       <div className=' h-64 flex justify-start relative p-4'>
          <div 
          style={{backgroundImage: `url(${selectedPlaylist?.images.url})`}}
          className=' h-56 w-56 absolute bottom-0 bg-center bg-cover'></div>

          
          <div className='flex flex-col   text-white absolute bottom-0 left-64'>
          <div>
            <h2 className='  font-spotifylight'>Playlist</h2>
              <h1 className=' text-8xl font-spotifybold '>{selectedPlaylist?.name}</h1>
              <div className='flex flex-row  font-spotifylight mt-10 '>
                <p>{selectedPlaylist?.owner},</p>
                <p>2.238 likes,</p>
                <p>{selectedPlaylist?.tracks.length} songs,</p>
              </div>
          </div>
          </div>
       </div>

       <div className=' backdrop-blur-xl  bg-[#121212]/30  mt-8 w-full '>
        <div className=' flex items-center '>
          <svg className='h-16 w-16 m-2 ' viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 4.25C21.2971 4.25 17.1887 5.49629 13.6941 7.83127C10.1996 10.1663 7.47592 13.485 5.86755 17.368C4.25919 21.2509 3.83837 25.5236 4.65831 29.6457C5.47824 33.7678 7.50211 37.5542 10.474 40.526C13.4458 43.4979 17.2322 45.5218 21.3543 46.3417C25.4764 47.1616 29.7491 46.7408 33.632 45.1324C37.5149 43.5241 40.8337 40.8004 43.1687 37.3059C45.5037 33.8113 46.75 29.7029 46.75 25.5C46.75 22.7094 46.2003 19.9461 45.1324 17.368C44.0645 14.7898 42.4993 12.4472 40.526 10.474C38.5528 8.50074 36.2102 6.93547 33.632 5.86756C31.0539 4.79965 28.2906 4.25 25.5 4.25ZM21.3543 32.5V17.381L33 25.5L21.3543 32.5Z" 
            fill="#1DD760"/>
            </svg>
            <svg className='h-8 w-8 m-2 ' viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.205 1.79099C17.6536 1.2357 16.9979 0.794884 16.2756 0.49387C15.5533 0.192857 14.7786 0.0375869 13.996 0.0369873C12.5158 0.0372293 11.0897 0.59326 10 1.59499C8.91041 0.593091 7.48422 0.0370339 6.00401 0.0369873C5.22055 0.037803 4.44499 0.193547 3.72195 0.495256C2.99891 0.796965 2.34268 1.23868 1.79101 1.79499C-0.561989 4.15799 -0.560989 7.85399 1.79301 10.207L10 18.414L18.207 10.207C20.561 7.85399 20.562 4.15799 18.205 1.79099Z"
            fill="#1DD760"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="#B2B2B4" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B2B2B4" class="w-8 h-8 m-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>


        </div>
        <div className=' w-full  p-4 0 '>
          <div className=' font-spotifylight text-[#B3B3B3]  border-b-[1px] border-[#414040]  w-full '>

            <div className='pl-4 pr-10 pb-2 flex  flex-row  items-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>


              <p className='  ml-4 font-spotifylight text-xs w-3/5'> TITLE</p>
              <p className='  ml-4 font-spotifylight text-xs w-2/5 '> ABLUM</p>
              <p className='  ml-4 font-spotifylight text-xs  w-2/5 whitespace-nowrap '> DATE ADDED</p>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  float-right">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"  />
            </svg>

            </div>
          </div>

          <div className='flex flex-col'> 
           {selectedPlaylist?.tracks?.map((track ,id)=> {
            return(
             <Track  track={track} id={id}/>
            )
           })}

          </div>



        </div>
       </div>
      

    </div>
    <div className='p-4'>
      <Footer/>
    </div>
   </>
  )
}

export default Playlists