import Header from "./components/Header/Header";
import Card from "./components/UI/Card";
import Profile from "./components/Profile/Profile";
import TripCard from "./components/Trips/TripCard";
import React, { useState } from "react";

function App() {
  const [isTripCardVisible, setTripCardVisible] = useState(false)
  
  return (
    <Card>
      <Header></Header>
      <Profile></Profile>
      {isTripCardVisible && <TripCard/>}
    </Card>
  );
}

export default App;
