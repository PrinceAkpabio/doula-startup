import React, {useState, useEffect} from 'react'
import { MenuItems } from './MenuItems';
import { Link, withRouter } from 'react-router-dom';
import './Nav.scss';

console.clear()

const Nav = (props) => {
  const [Menu, setMenu] = useState(false);
  const [className, setClassName] = useState("NavbarItems");
  console.log(props.match.path);

  useEffect(() => {
    setClassName(props.match.path === '/about' ? "NavbarItems abt" : props.match.path === '/contact' ?"NavbarItems contactt" : "NavbarItems")
    // return () => {
    //   effect
    // };
  }, [props.match.path])

  const toggleMenu = () => setMenu((prevMenu) => !prevMenu);

 return (
   <nav className={className}>
    <Link to="/" ><span className="mobile-logo"></span></Link> 
     <div className="menu-icon" onClick={toggleMenu}>
       <i className={`${!Menu ? "fa fa-bars" : "fa fa-times"}`}></i>
     </div>

     <ul className={`${Menu ? "nav-menu active" : "nav-menu"}`}>
       {MenuItems.map((item, idx) => {
         return (
           <li key={idx} className={`${item.cNames} ${Menu ? "active" : ""}`}>
             <Link to={item.url} onClick={toggleMenu}>{item.title}</Link>
           </li>
         );
       })}
     </ul>
   </nav>
 );
}

export const NavBar = withRouter(Nav)
