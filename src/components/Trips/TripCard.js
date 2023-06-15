import React from "react";

import "./TripCard.css";

const TripCard = ({trip}) => {
  return (
    <div className="trips-grid">
      <div className="trip-card">
        <h1 className="trip-name">{trip.name}</h1>
        <h2 className="trip-date">{trip.date}</h2>
        <p className="trip-description">{trip.description}</p>
      </div>
    </div>
  );
};

export default TripCard;
