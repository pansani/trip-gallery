import React from "react";

import headerImage from "../../assets/logo-us-header.png"
import "./Header.css";

const Header = () => {
    return(
        <div>
            <img src={headerImage} alt="" className="logo"></img>
        </div>
    )
}

export default Header;
