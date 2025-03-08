///import React from "react";
import Logo from "../assets/logo/icone.png";
import { Link } from "react-router-dom";
import "../index.css";

export function Header() {
  return (

        <>
          <div className="header">
          
              <img width="32" src={Logo} alt="Logo Spotify" />
              
        < Link to="/" className="header__link">
              <h1>Spotify</h1>
              </Link>
           
          </div>
          </>
   
  );
}


