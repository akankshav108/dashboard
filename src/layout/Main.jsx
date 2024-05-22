import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  const bc = document.body.classList;

  // auto close sidebar when switching pages in mobile
  bc.remove("sidebar-show");
  bc.remove('sidebar-hide')

  // scroll to top when switching pages
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default Main;
