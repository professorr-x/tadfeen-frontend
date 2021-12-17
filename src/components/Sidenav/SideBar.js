import React from "react";
import './sidebar.css'
import {SideBarNav} from "./SideBarNav";


const SideBar = () => {
  

  return (
      <div className="sidebar">
        <ul className="sidebar-list">
            {SideBarNav.map((val,key) => {
              return (
                  <li key={key} className="row">
                      {" "}
                      <div id="icon">
                          {val.icon}
                      </div>
                      <div id="title">
                          {val.title}
                      </div>

                  </li>
              )
            })}
        </ul>
      </div>
  )
}

export default SideBar;