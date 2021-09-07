import React, { useState } from "react";
// import { Button } from "components/Navbar/Button"
import { Link } from "react-router-dom"
import { MenuItems } from "components/Navbar/MenuItems"
import "css/Navbar/Navbar.css"
import DropdownPc from "components/Navbar/DropdownPc"
import Logo from "img/logo.jpg"
import 'css/Navbar/Button.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [titleClick, setTitleClick] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState("")


  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onTitleClick = (title) => {
    if (titleClick && selectedTitle===title) {
      setTitleClick(false)
    } else if (titleClick && selectedTitle!==title) {
      setTitleClick(true)
      setSelectedTitle(title)
    } else if (titleClick === false && selectedTitle !== title) {
      setSelectedTitle(title)
      setTitleClick(true)
    } else if (titleClick === false) {
      setTitleClick(true)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" >
          <img src={Logo} className="navbar-logo-img"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <>
                {(item.type === "main") && ((item.child) ? (
                  <>
                    {titleClick ? (item.title === selectedTitle ? (
                      <li key={index} className="nav-item nav-title-clicked" onClick={()=>onTitleClick(item.title)}>
                        <div className="nav-links">{`${item.title} ▲`}</div>
                      </li>
                    ) : (
                      <li key={index} className="nav-item" onClick={()=>onTitleClick(item.title)}>
                        <div className="nav-links">{`${item.title} ▼`}</div>
                      </li>
                    )
                    ) :
                      <li key={index} className="nav-item" onClick={()=>onTitleClick(item.title)}>
                        <div className="nav-links">{`${item.title} ▼`}</div>
                      </li>
                    }
                  </>
                ) : (
                  <li key={index} className="nav-item">
                    <Link to={item.path} className="nav-links" onClick={closeMobileMenu}>{item.title}</Link>
                  </li>
                ))}
                {titleClick && (selectedTitle === item.title && (item.type==="sub" &&
                  <li key={index} className="nav-item nav-subItem">
                    <Link to={item.path} className="nav-links" onClick={closeMobileMenu}>{item.subtitle}</Link>
                  </li>
                ))}
              </>
            )
          })}
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Link to="sign-up">
          <button className="btn">Sign Up</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
