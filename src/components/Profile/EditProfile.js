import React, { useState } from "react";

import "./EditProfile.css";

const EditProfile = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSubtile, setEnteredSubtitle] = useState("");
  const [isContainerVisible, setIsContainerVisible] = useState(true);

  const closeClick = () => {
    setIsContainerVisible(false);
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
      subtitle: enteredSubtile,
    };

    props.saveNameData(profileName);
    props.saveSubtitleData(profileSubtitle);

    setEnteredTitle("");
    setEnteredSubtitle("");
  };

  return (
    <>
      {isContainerVisible && (
        <div className="profile-container">
          <button type="button" onClick={closeClick}>
            <h1 className="close__edit-profile">+</h1>
          </button>
          <div className="edit-profile__container">
            <h1 className="edit-name">Editar Perfil</h1>
            <form className="edit-form" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Nome"
                className="edit-input"
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
              <input
                type="text"
                placeholder="Subtitulo"
                className="edit-input"
                value={enteredSubtile}
                onChange={subtitleChangeHandler}
              ></input>
              <button type="submit" className="edit-submit">
                {" "}
                Salvar
              </button>
            </form>
          </div>
          <div className="overlay"></div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
