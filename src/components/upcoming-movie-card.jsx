import React, { useEffect } from "react";
import useDaysUntil from "../hooks/useDaysUntil";

function UpcomingMovieCard({ title, releaseDate, description, poster, rating }) {
  const daysUntil = useDaysUntil(releaseDate);

  return (
    <div className="upcoming-movie-card-container">
      <div className="movie-card">
        <img
          src={`http://image.tmdb.org/t/p/w500${poster}`}
          alt={`${title}-image`}
        />
        <div className="movie-info">
          <h3 className="movie-container">{title}</h3>
          <span className="movie-date">{releaseDate}</span>
        </div>
        <div className="absolute rating">
          {rating}
        </div>
      </div>
    </div>
  );
}

export default UpcomingMovieCard;
