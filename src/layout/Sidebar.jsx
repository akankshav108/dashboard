import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar sidebar-hide">
        <div className="sidebar-header">LOGO</div>

        <div className="sidebar-body">
          <div className="nav-group">
            <ul>
              <li>
                <NavLink className="item" to='/overview' >
                <i className="bi bi-graph-up-arrow"></i> <span>Overview</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="item" to='/reports'>
                <i className="bi bi-file-earmark-text"></i> <span>Reports</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="item" to='/analytics'>
                  <i className="bi bi-pie-chart"></i>
                  <span>Analytics</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
