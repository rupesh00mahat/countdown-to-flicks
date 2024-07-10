import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTRjYTUxZmY3MjljN2Q5YzA0OTA4ZmM3OTIzODg2MyIsIm5iZiI6MTcxOTE1NDg3MC41MTE5MjUsInN1YiI6IjY2NzViMTM2YjFjN2I1OGZlMjIxYzBkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCoEIJ2F2XiYmE0lczivfWhlm33S15vhEcnNnUMLInM",
          },
        };
    
        fetch(
          url,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setMovies(response.results);
          })
          .catch((err) => console.error(err));
      }, []);
      return movies;
}

export default useFetch