import React, { useContext, useEffect, useState } from "react";
import MovieContainer from "./movie-container";
import useFetch from '../hooks/useFetch';
import { ACTIONTYPE, MovieContext } from "../context/movie-context";

function UpcomingMovies() {

  const {state, dispatch} = useContext(MovieContext);
  const {movieList} = state;

  useEffect(()=>{
    dispatch({type: ACTIONTYPE.CHANGEURL, payload: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"});
  },[])

  console.log(state);

  return (
    <div className="movies-list">
      {movieList.map(({id, title,release_date, poster_path, overview}) => {
        if(new Date(release_date.toString()) > new Date()){
          return (
            <MovieContainer
              key={id}
              title={title}
              releaseDate={release_date}
              poster={poster_path}
              description={overview}
            />
          );
        }
      })}
    </div>
  );
}

export default UpcomingMovies;