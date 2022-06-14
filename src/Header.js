import React from "react";
import Troll from "./Troll-Face.png"



function Header(){
    return(
        <div className="Nav-bar">
            <nav className="logo">

<img src={Troll} alt="troll" height="26.22px" width="31.31px" />
            </nav>

<h2 className="Nav-Title">
    Meme Generator

</h2>

<h4 className="header--project">By Jindu</h4>
        </div>
    )
}

export default Header;
