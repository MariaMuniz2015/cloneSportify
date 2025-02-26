///import React from "react";
import Logo from "../assets/logo/icone.png";
//import { Link } from "react-router-dom";
import "../index.css";

export function Header() {
  return (

        <>
          <div className="header">
          
              <img width="32" src={Logo} alt="Logo Spotify" />
              
        <a className="header__link" href="/">
              <h1>Spotify</h1>
              </a>
           
          </div>
          </>
   
  );
}


