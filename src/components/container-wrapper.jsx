import React, { useEffect, useState } from "react";
import MovieContainer from "./movie-container";
import useFetch from '../hooks/useFetch';

function ContainerWrapper() {
  const movies = useFetch();
  return (
    <div className="movies-list">
      {movies.map(({id, title,release_date, poster_path, overview}) => {
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

export default ContainerWrapper;
