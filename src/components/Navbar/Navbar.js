import React, { useState } from "react";
import { Link } from "react-router-dom"
import { MenuItems } from "components/Navbar/MenuItems"
import "css/Navbar/Navbar.css"
import DropdownPc from "components/Navbar/DropdownPc"
import Logo from "img/logo.jpg"
import 'css/Navbar/Button.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdownmo, setDropdownmo] = useState(false)
  const [onMouseTitle, setOnMouseTitle] = useState("")

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = (title) => {
    setOnMouseTitle(title)
    setDropdownmo(true)
  }
  
  const onMouseLeave = () => {
    setDropdownmo(false)
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
                  <li className="nav-item"
                    onMouseEnter={()=>onMouseEnter(item.title)}
                    onMouseLeave={onMouseLeave}>
                    <div className="nav-links" onClick={closeMobileMenu}>
                      {item.title} <i className='fas fa-caret-down' />  {/*Dropdown*/}
                    </div>
                    {dropdownmo && (item.title===onMouseTitle &&<DropdownPc mainTitle={onMouseTitle} />)}
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to={item.path} className="nav-links" onClick={closeMobileMenu}>{item.title}</Link>
                  </li>
                ))}
              </>
            )
          })}
        </ul>
        <Link to="sign-up">
          <button className="btn">로그인</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
