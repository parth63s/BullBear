import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Apps from "./components/Apps";
import WatchList from "./components/WatchList";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Funds from "./components/Funds";
import BuyStock from "./components/BuyStock";
import SellStock from "./components/SellStock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
