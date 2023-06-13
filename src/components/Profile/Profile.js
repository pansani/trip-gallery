import React, { useState } from "react";
import profileImage from "../../assets/image-profile.jpg";
import editImage from "../../assets/edit-image.png";
import "./Profile.css";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [isEditProfileVisible, setEditProfileVisible] = useState(false);
  const [profileName, setProfileName] = useState("Your Name");
  const [profileSubtitle, setProfileSubtitle] = useState("Sea Explorer");

  const visibleClick = () => {
    setEditProfileVisible(true);
  };

  const saveNameDataHandler = (enteredNameData) => {
    setProfileName(enteredNameData.title);
  };

  const saveSubtitleDataHandler = (enteredSubtitleData) => {
    setProfileSubtitle(enteredSubtitleData.subtitle);
  };

  const closeEditProfile = () => {
    setEditProfileVisible(false);
  };

  return (
    <div className="profile-container">
      <img src={profileImage} alt="" className="profile-image" />
      <div className="information-content">
        <h1 className="profile-name">{profileName}</h1>
        <h4 className="profile-explore">{profileSubtitle}</h4>
      </div>
      <button className="edit-square" onClick={visibleClick}>
        <img src={editImage} alt="Button Image" className="edit-image" />
      </button>
      {isEditProfileVisible && (
        <div className="overlay">
          <div className="edit-profile-wrapper">
            <EditProfile
              saveNameData={saveNameDataHandler}
              saveSubtitleData={saveSubtitleDataHandler}
              onClose={closeEditProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
