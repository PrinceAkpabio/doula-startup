import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';


const NavBar = () => {
  const [menu, setMenu] = useState();

  const openMenu = () => {
    setMenu(prevMenu => !prevMenu)
  }

  const closeMenu = () => {
    setMenu(nextMenu => !nextMenu
    )
  }
    return (
      <>

        {/* Nav Bar */}
        <nav id="navbar">
          <Link to="#" className="logo-link">
            <div className="logo"></div>
          </Link>

          {/* Tablet and Large Screen Menus */}
          <div className="lg-nav-menu">
            <ul id="lg-nav">
              <li className="lg-nav-menu-item">
                <Link to="#" className="lg-nav-menu-item-link">
                  Home
             </Link>
              </li>
              <li className="lg-nav-menu-item">
                <Link to="#" className="lg-nav-menu-item-link">
                  About
             </Link>
              </li>
              <li className="lg-nav-menu-item">
                <Link to="#" className="lg-nav-menu-item-link">
                  Services
             </Link>
              </li>
              <li className="lg-nav-menu-item">
                <Link to="#" className="lg-nav-menu-item-link">
                  Blog
             </Link>
              </li>
              <li className="lg-nav-menu-item">
                <Link to="#" className="lg-nav-menu-item-link">
                  Contact
             </Link>
              </li>
            </ul>

            {/* Menu Toggler */}
            <div id="toggle-on" onClick={openMenu}>&#9776;</div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="sm-nav-menu" className={`${menu ? "" : "hide-menu"} `} >
          {/* Menu Toggler */}
          <div id="toggle-off" onClick={closeMenu}>&times;</div>
          <ul id="sm-nav">
            <li className="sm-nav-menu-item">
              <Link to="#" className="sm-nav-menu-item-link">
                About
           </Link>
            </li>
            <li className="sm-nav-menu-item">
              <Link to="#" className="sm-nav-menu-item-link">
                Services
           </Link>
            </li>
            <li className="sm-nav-menu-item">
              <Link to="#" className="sm-nav-menu-item-link">
                Blog
           </Link>
            </li>
            <li className="sm-nav-menu-item">
              <Link to="#" className="sm-nav-menu-item-link">
                Contact
           </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
// };

export default NavBar;