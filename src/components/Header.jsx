import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
      <div className="navbar">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#news"><PersonOutlineIcon /></a></li>
        </ul>
        
      </div>
      
  );
}

export default Header;
