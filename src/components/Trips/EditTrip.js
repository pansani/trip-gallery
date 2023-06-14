import React, { useState } from "react";

import "./EditTrip.css";

const EditTrip = (props) => {
  const [enteredTripName, setEnteredTripName] = useState("");
  const [enteredTripDate, setEnteredTripDate] = useState("");
  const [enteredTripDescription, setEnteredTripDescription] = useState(
    ""
  );

  const closeTripClick = () => {
    props.onCloseTrip();
  };

  const nameChangeHandler = (event) => {
    setEnteredTripName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredTripDate(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredTripDescription(event.target.value);
  };

  const submitTripHandler = (event) => {
    event.preventDefault();

    const tripName = {
      name: enteredTripName,
    };

    const tripDate = {
      date: enteredTripDate,
    };

    const tripDescription = {
      description: enteredTripDescription,
    };

    props.saveTripNameData(tripName);
    props.saveTripDateData(tripDate);
    props.saveTripDescriptionData(tripDescription);

    setEnteredTripName("");
    setEnteredTripDate("");
    setEnteredTripDescription("");

    closeTripClick();
  };
  return (
    <div className="edit-trip-container">
      <button
        type="button"
        className="close-button__trip"
        onClick={closeTripClick}
      >
        X
      </button>
      <h1 className="edit-name__trip">Editar Perfil</h1>
      <form className="edit-form__trip" onSubmit={submitTripHandler}>
        <input
          type="text"
          placeholder="Nome do local"
          className="edit-input__trip"
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          placeholder="Date xx/xx/xxxx"
          className="edit-input__trip"
          onChange={dateChangeHandler}
        ></input>
        <input
          type="text"
          placeholder="Trip Description"
          className="edit-input__trip"
          onChange={descriptionChangeHandler}
        />
        <button type="submit" className="edit-submit__trip">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditTrip;
