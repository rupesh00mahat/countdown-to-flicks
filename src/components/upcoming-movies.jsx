import React, { useContext, useEffect, useState } from "react";
import MovieContainer from "./movie-container";
import useFetch from '../hooks/useFetch';
import { ACTIONTYPE, MovieContext } from "../context/movie-context";
import UpcomingMovieCard from "./upcoming-movie-card";

function UpcomingMovies() {

  const {state, dispatch} = useContext(MovieContext);
  const {movieList} = state;

  useEffect(()=>{
    dispatch({type: ACTIONTYPE.CHANGEURL, payload: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"});
  },[])

  console.log('state',movieList);

  return (
    <div className="movies-list flex wrap">
      {movieList && movieList.map(({id, title,release_date, poster_path, overview, vote_average}) => {
        console.log('movie', movie);
          return (
           <>
            {/* <MovieContainer
              key={id}
              title={title}
              releaseDate={release_date}
              poster={poster_path}
              description={overview}
            /> */}
            <UpcomingMovieCard
             key={id}
             title={title}
             releaseDate={release_date}
             poster={poster_path}
             description={overview}
             rating={parseInt(vote_average)*10}
            />
            </>

          );
        
      })}
    </div>
  );
}

export default UpcomingMovies;