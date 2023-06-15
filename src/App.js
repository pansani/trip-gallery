import Header from "./components/Header/Header";
import Card from "./components/UI/Card";
import Profile from "./components/Profile/Profile";
import TripCard from "./components/Trips/TripCard";
import React, { useState } from "react";
import EditTrip from "./components/Trips/EditTrip";

function App() {
  const [trips, setTrips] = useState([{
    date: "Date of trip",
    name: "Name of place you traveled",
    description:  "A brief description of the trip. Ex: I went to Chile, did a backpack and traveled through several cities, such as Santiago, Valparaiso, La Serena. Chile is a beautiful city, I recommend it to everyone"
  }]);

  const [addTripDialogVisible, setAddTripDialogVisible] = useState(false)

  const addTripHandler = (trip) => {
    const updatedTrips = [...trips, trip];

    setTrips(updatedTrips)
  }

  const newTripSubmitHandler = (
    trip
  ) => {
    addTripHandler(trip);
    setAddTripDialogVisible(false);
  }
  
  return (
    <Card>
      <Header></Header>
      <Profile></Profile>
      <button
        type="button"
        className="add-trip__button"
        onClick={() => setAddTripDialogVisible(!addTripDialogVisible)}
      >
        +
      </button>
      <div className="trips-grid">
      {trips.map((trip, index) => {
        return <TripCard trip={trip}/>
      })}
      </div>
      {addTripDialogVisible && (
        <EditTrip
          onSubmit={newTripSubmitHandler}
          onClose={() => setAddTripDialogVisible(false)}
        />
      )}
    </Card>
  );
}

export default App;
