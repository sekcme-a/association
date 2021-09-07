import React, { useState } from "react";
import { MenuItems } from "components/Navbar/MenuItems";
import { Link } from "react-router-dom"
import "css/Navbar/DropdownPc.css"

function DropdownPc(props) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
      <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} >
        {MenuItems.map((item, index) => {
          return (
            <>
            {(item.title === props.mainTitle) && ((item.type === "sub") && (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.subtitle}
                </Link>
              </li>
            ))}
            
            </>
          )
        })}
        {}
      </ul>

    </>
  )
}

export default DropdownPc;