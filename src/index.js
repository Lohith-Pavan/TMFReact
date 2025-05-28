import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import {Routes,Route} from "react-router-dom"
import Menu from "./components/Menu";
import { BrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:resId/menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><AppLayout /></BrowserRouter>);
