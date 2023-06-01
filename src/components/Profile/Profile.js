import React, { useState } from "react";

import profileImage from "../../assets/image-profile.jpg";
import editImage from "../../assets/edit-image.png";
import "./Profile.css";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [isEditProfileVisible, setEditProfileVisible] = useState(false);

  const visibleClick = () => {
    setEditProfileVisible(true);
  };

  const saveNameDataHandler = (enteredNameData) => {
    const nameData = {
      ...enteredNameData
    }
  }

  const saveSubtitleDataHandler = (enteredSubtitleData) =>{
    const subtitleData = {
      ...enteredSubtitleData
    }
  }


  return (
    <div className="profile-container">
      <img src={profileImage} alt="" className="profile-image"></img>
      <div className="information-content">
        <h1 className="profile-name" props={saveNameDataHandler}>Joao Claudio</h1>
        <h4 className="profile-explore" props={saveSubtitleDataHandler}>Explorar</h4>
      </div>
      <button className="edit-square" onClick={visibleClick}>
        <img src={editImage} alt="Button Image" className="edit-image"></img>
      </button>
      {isEditProfileVisible && <div className="overlay"></div> && <EditProfile />}
    </div>
  );
};

export default Profile;
