import React from 'react';
import Button from '@mui/material/Button';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <Button className='header__brad' href="homepage">Brad</Button>
          <Button className='header__herr' href="homepage">Herr.</Button> 
        </div>
        <div className="header__right">
            {/* nav */}
        </div>
    </div>
  )
}

export default Header
