import React, {useEffect, useState} from 'react'

function MovieContainer({title, releaseDate, poster, description}) {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(()=>{
    setDaysLeft(Math.ceil((new Date(releaseDate.toString()) - new Date())/(1000 * 60 * 60 * 24)))
  },[releaseDate])
  return (
    <div className='movie-container'>
      <div className='days-until-wrapper'>
{daysLeft} Days to go
      </div>
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