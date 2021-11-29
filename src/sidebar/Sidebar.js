import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SIDEBAR_DATA } from "./SidebarData";
import { IconContext } from "react-icons";
import MyImage from "../images/benek2.webp";

export function Sidebar() {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  const showSidebar = () => setHiddenSidebar(!hiddenSidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <nav className={hiddenSidebar ? "nav-menu hidden" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li>
              <img
                src={MyImage}
                width="140"
                height="165"
                alt="Benford"
                className="responsive-image"
              />
            </li>
            {SIDEBAR_DATA.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    className="sidebar-link"
                    to={{
                      pathname: item.path,
                    }}
                    target="_blank"
                    rel="noopener"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
