import React from "react";

const Header = () => {
  const toggleSidebar = () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
      // If the screen width is less than or equal to 991px
      if (document.body.classList.contains("sidebar-show")) {
        document.body.classList.remove("sidebar-show");
      } else {
        document.body.classList.add("sidebar-show");
      }
    } else {
      // If the screen width is greater than 991px
      if (document.body.classList.contains("sidebar-hide")) {
        document.body.classList.remove("sidebar-hide");
      } else {
        document.body.classList.add("sidebar-hide");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="toggle-sidebar-btn" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
