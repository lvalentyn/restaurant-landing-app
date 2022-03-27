import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const navList = ['home', 'about', 'menu', 'awards', 'contacts'];

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        {navList.map((el, i) => (
          <li key={el + i} className="p__opensans"><a href={`#${el}`}>{el}</a></li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => { setToggleMenu(true) }} />

        {toggleMenu &&
          (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => { setToggleMenu(false) }} />
              <ul className="app__navbar-smallscreen-links">
                {navList.map((el, i) => (
                  <li key={el + i} className="p__opensans" onClick={() => { setToggleMenu(false) }}><a href={`#${el}`}>{el}</a></li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;
