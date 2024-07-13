import React, { useEffect } from "react";
import useDaysUntil from "../hooks/useDaysUntil";

function UpcomingMovieCard({title, releaseDate, description, poster}) {
    const daysUntil = useDaysUntil(releaseDate);
   
  return (
    <div className="upcoming-movie-card-container">
      <div className="movie-card">
        <div className="front-movie-card">
        <img src={`http://image.tmdb.org/t/p/w500${poster}`} alt={`${title}-image`}/>
        <h3 className="semi-title">{title}</h3>
            <p className="paragraph">
                {description}
            </p>
        </div>
        <div className="back-movie-card">
            <h2 className="title">{daysUntil} days to go</h2>
        </div>
      </div>
    </div>
  );
}

export default UpcomingMovieCard;
