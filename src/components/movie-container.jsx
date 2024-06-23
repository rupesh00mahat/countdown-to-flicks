import React from 'react'

function MovieContainer({title, releaseDate, poster, description}) {
  return (
    <div className='movie-container'>

        <img src={`http://image.tmdb.org/t/p/w500${poster}`}/>
        <div className="container-content">
            <h3>
                {title}
            </h3>
            <p>{description}</p>
        </div>
        <div className="countdown-wrapper">
            {releaseDate}
        </div>
    </div>
  )
}

export default MovieContainer