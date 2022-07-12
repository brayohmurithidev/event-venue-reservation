import { ArrowDropUp } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const Menu = ({ username, logout }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="menu">
      <div className="menuContainer">
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>

        {open && (
          <div className="menuItemsWrapper">
            <ArrowDropUp className="mArrow" />
            <div className="menuItems">
              <ul>
                <li className="menuListItem">
                  <Link className="links" to="/">
                    {username}
                  </Link>
                </li>

                <li className="menuListItem">
                  <Link aria-disabled className="links" to={`/tickets`}>
                    View Tickets
                  </Link>
                </li>
                <hr />
                <button onClick={logout} className="logoutBtn">
                  Logout
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
