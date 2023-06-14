import React, { useState } from "react";

import EditTrip from "./EditTrip";
import "./TripCard.css";

const TripCard = () => {
  const [isEditTripVisible, setEditTripVisible] = useState(false);
  const [tripDate, setTripDate] = useState("Date of the trip");
  const [tripName, setTripName] = useState("Name of the place you traveled");
  const [tripDescription, setTripDescription] = useState(
    " A brief description of the trip. Ex: I went to Chile, did a backpack and traveled through several cities, such as Santiago, Valparaiso, La Serena. Chile is a beautiful city, I recommend it to everyone"
  );

  const visibleTripClick = () => {
    setEditTripVisible(true);
  };

  const saveNameTripHandler = (enteredNameTrip) => {
    setTripName(enteredNameTrip.name);
  };

  const saveDateTripHandler = (enteredDateTrip) => {
    setTripDate(enteredDateTrip.date);
  };

  const saveDesciprtionTripHandler = (enteredDescriptionTrip) => {
    setTripDescription(enteredDescriptionTrip.description);
  };

  const closeTripHandler = () => {
    setEditTripVisible(false);
  };

  return (
    <div className="trips-grid">
      <div className="trip-card">
        <h1 className="trip-name">{tripName}</h1>
        <h2 className="trip-date">{tripDate}</h2>
        <p className="trip-description">{tripDescription}</p>
      </div>
      <button
        type="button"
        className="add-trip__button"
        onClick={visibleTripClick}
      >
        +
      </button>
      {isEditTripVisible && (
        <EditTrip
          saveTripNameData={saveNameTripHandler}
          saveTripDateData={saveDateTripHandler}
          saveTripDescriptionData={saveDesciprtionTripHandler}
          onCloseTrip={closeTripHandler}
        />
      )}
    </div>
  );
};

export default TripCard;
