import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear ,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import { RiArrowDropDownLine } from "react-icons/ri";
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button className="navbar-button">B</button>
        <span>Billing Web App</span>
      </div>
      <div className="navbar-tabs">

        <div className="navbar-tab"><FontAwesomeIcon icon={faArrowLeft} className='icon'/>Sales</div>
      </div>
      <div className="navbar-right">
        <button className="navbar-icon"><FontAwesomeIcon icon={faBell} /></button>
        <button className="navbar-icon"><FontAwesomeIcon icon={faGear} /></button>
        <div className='user-bar'>
          
        <button className="navbar-button" id='user-icon'>S</button>
        <div className="navbar-profile">Silico design</div>
        <RiArrowDropDownLine className='dropdown'/>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
