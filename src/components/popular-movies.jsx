import React, { useContext, useEffect, useState } from "react";
import MovieContainer from "./movie-container";
import useFetch from '../hooks/useFetch';
import { ACTIONTYPE, MovieContext } from "../context/movie-context";

function PopularMoviesWrapper() {

  const {state,dispatch} = useContext(MovieContext);

  useEffect(()=>{
    dispatch({type: ACTIONTYPE.CHANGEURL, payload: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"});
  },[])

  const {movieList, url} = state;
  console.log(movieList);
  console.log(url);

  return (
    <div className="movies-list">
      {movieList.map(({id, title,release_date, poster_path, overview}) => {
        // if(new Date(release_date.toString()) > new Date()){
          return (
            <MovieContainer
              key={id}
              title={title}
              releaseDate={release_date}
              poster={poster_path}
              description={overview}
            />
          );
        // }
      })}
    </div>
  );
}

export default PopularMoviesWrapper;
