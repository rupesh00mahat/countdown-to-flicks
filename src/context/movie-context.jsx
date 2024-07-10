import React, { createContext, useEffect, useReducer, useState } from 'react'
import useFetch from '../hooks/useFetch';

export const ACTIONTYPE = {ADDMOVIES: 'ADDMOVIES', CHANGEURL: 'CHANGEURL'};

export const MovieContext = createContext();

const movieContextReducer = (state, action) =>{
  if(action.type == ACTIONTYPE.ADDMOVIES){
   
    return {...state, movieList: action.payload};

  }
  if(action.type == ACTIONTYPE.CHANGEURL){
   
    return {...state, url: action.payload};

  }
}

function MovieContextProvider({children}) {
    const [state, dispatch] = useReducer(movieContextReducer, {url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", movieList: [], type: 'upcoming' });
    const movies = useFetch(state.url);

  console.log('Triggered........');
    useEffect(()=>{
     if(movies.length > 0){
      dispatch({type:ACTIONTYPE.ADDMOVIES, payload: movies
      })
     }
    },[state])

  return (
    <MovieContext.Provider value={{state, dispatch}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider