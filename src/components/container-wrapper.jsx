import React, { useEffect, useState } from 'react'
import MovieContainer from './movie-container'

function ContainerWrapper() {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTRjYTUxZmY3MjljN2Q5YzA0OTA4ZmM3OTIzODg2MyIsIm5iZiI6MTcxOTE1NDg3MC41MTE5MjUsInN1YiI6IjY2NzViMTM2YjFjN2I1OGZlMjIxYzBkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCoEIJ2F2XiYmE0lczivfWhlm33S15vhEcnNnUMLInM'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
              console.log(response)
              setMovies(response.results)})
            .catch(err => console.error(err));
    },[])

  return (
    <div className='movies-list'>
           {movies.map((data)=>{
return <MovieContainer
key={data.id}
title={data.title}
releaseDate={data.release_date}
poster={data.poster_path}
description={data.overview}
/>
           })}
    </div>
  )
}

export default ContainerWrapper