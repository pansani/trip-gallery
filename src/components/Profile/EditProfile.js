import React, { useState } from "react";
import "./EditProfile.css";

const EditProfile = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSubtitle, setEnteredSubtitle] = useState("");

  const closeClick = () => {
    props.onClose();
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const subtitleChangeHandler = (event) => {
    setEnteredSubtitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const profileName = {
      title: enteredTitle,
    };

    const profileSubtitle = {
      subtitle: enteredSubtitle,
    };

    props.saveNameData(profileName);
    props.saveSubtitleData(profileSubtitle);

    setEnteredTitle("");
    setEnteredSubtitle("");

    closeClick();
  };

  return (
    <div className="edit-profile-container">
      <button type="button" className="close-button" onClick={closeClick}>
        X
      </button>
      <h1>Editar Perfil</h1>
      <form className="edit-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Nome"
          className="edit-input"
          value={enteredTitle}
          onChange={titleChangeHandler}
          maxLength={20}
        />
        <input
          type="text"
          placeholder="Subtitulo"
          className="edit-input"
          value={enteredSubtitle}
          onChange={subtitleChangeHandler}
          maxLength={20}
        />
        <button type="submit" className="edit-submit">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
