import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';


const NavBar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(prevMenu => !prevMenu)
  }

  // const closeMenu = () => {
  //   setMenu(nextMenu => !nextMenu
  //   )
  // }
    return (
      <>
        <header className="header">
          <Link to="#" className="logo-link">
            <div className="logo mobile"></div>
          </Link>

          <div className="menuBtn" onClick={toggleMenu}>
            <span
              id="menuBtn_hamburger1"
              className={` ${menu ? "" : "open"}`}
            ></span>

            <span
              id="menuBtn_hamburger2"
              className={` ${menu ? "" : "open"}`}
            ></span>
            <span
              id="menuBtn_hamburger3"
              className={` ${menu ? "" : "open"}`}
            ></span>
          </div>

          <nav className={`nav ${menu ? "" : "open"}`}>
            <ul className={`menu-nav ${menu ? "" : "open"}`}>
              <Link to="#" className="logo-link large">
                <div className="logo large"></div>
              </Link>

              <li className={`menu-nav_item ${menu ? "" : "open"}`}>
                <Link to="#" className="menu-nav_link active">
                  Home
                </Link>
              </li>
              <li className={`menu-nav_item ${menu ? "" : "open"}`}>
                <Link to="#about" className="menu-nav_link">
                  About
                </Link>
              </li>
              <li className={`menu-nav_item ${menu ? "" : "open"}`}>
                <Link to="#services" className="menu-nav_link">
                  Services
                </Link>
              </li>
              <li className={`menu-nav_item ${menu ? "" : "open"}`}>
                <Link to="#blog" className="menu-nav_link">
                  Blog
                </Link>
              </li>
              <li className={`menu-nav_item ${menu ? "" : "open"}`}>
                <Link to="#contact" className="menu-nav_link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Nav Bar */}
        {/* <nav id="navbar">
          <Link to="#" className="logo-link">
            <div className="logo"></div>
          </Link> */}

        {/* Tablet and Large Screen Menus */}
        {/* <div className="lg-nav-menu">
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
            </ul> */}

        {/* Menu Toggler */}
        {/* <div id="toggle-on" onClick={openMenu}>&#9776;</div>
          </div>
        </nav> */}

        {/* Mobile Menu */}
        {/* <div id="sm-nav-menu" className={`${menu ? "" : "hide-menu"} `} > */}
        {/* Menu Toggler */}
        {/* <div id="toggle-off" onClick={closeMenu}>&times;</div>
          <ul id="sm-nav">
            <li className="sm-nav-menu-item">
              <Link to="#" className="sm-nav-menu-item-link">
                Home
           </Link>
            </li>
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
        </div> */}
      </>
    );
  }
// };

export default NavBar;