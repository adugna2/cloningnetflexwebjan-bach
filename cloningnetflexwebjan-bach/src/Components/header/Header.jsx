// import React from 'react';
import './Header.css';
// import logo_icon from '../../src/assets/resource/logo_icon.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useState } from 'react';

function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  let netflixLogo =
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  return (
    // <div className='header-outer-container'>
      <div className={`header_container ${show && "header_black"}`}>
        <div className='header_left'>
          <ul>
            <li><img src={netflixLogo} alt="Netflix Logo" width='100' /></li> 
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li style={{whiteSpace: "nowrap"}}>Browse by Language</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li> 
          </ul> 
        </div>
      </div>
    // </div>
  );
}

export default Header;