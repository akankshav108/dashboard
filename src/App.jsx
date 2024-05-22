import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//layout
import Main from "./layout/Main";

//Pages
import Overview from "./Pages/Overview";
import Reports from "./Pages/Reports";
import Analytics from "./Pages/Analytics";

//import icons
import "bootstrap-icons/font/bootstrap-icons.css";

//import scss
import "./scss/style.scss";

//chart.js
import "chart.js/auto";

//Animate pages
import { AnimatePresence } from "framer-motion";



function App() {

  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="reports" element={<Reports />} />
            <Route path="Analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
