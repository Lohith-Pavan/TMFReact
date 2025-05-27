import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppRoot = () => {
  return (
    <div className="app-root">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRoot />);
// var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
// var htmlRoot = document.getElementById("root");
// var rootReact = ReactDOM.createRoot(htmlRoot);
// rootReact.render(hOneReact);
