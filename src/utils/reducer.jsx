import React from "react";
import { reducerCases } from "./constant";

export const initialState = {
  token: null,
  userInfo: null,
  playlist: [],
  genres: null,
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  featuredPlaylist: null,
  selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
};

export const reducer = (state, action) => {
  // console.log(...state);
  // console.log(action,'fsaiuifdas')
  // console.log(state)
  switch ((action.type)) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlist: action.playlistInfo,
      };
    case reducerCases.SET_FEATURED_PLAYLIST:
       return {
         ...state,
         featuredPlaylist: action.featuredPlaylists,
     };  
     case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.playingInfo,
    }; 
    case reducerCases.SET_GENRES:
      return {
        ...state,
        genres: action.genresInfo,
    }; 
    case reducerCases.SET_PLAYLIST_ID:
      return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };
    default:
      return state;
  }
};