import React from "react";

import "./EditProfile.css"

const EditProfile = () =>{
    return(
        <div className="edit-profile__container">
            <h1 className="edit-name">Editar Perfil</h1>
            <form className="edit-form">
                <input type="text" placeholder="Nome" className="edit-input"></input>
                <input type="text" placeholder="Subtitulo" className="edit-input"></input>
                <button type="submit" className="edit-submit"> Salvar</button>
            </form>
        </div>
    )
}

export default EditProfile;