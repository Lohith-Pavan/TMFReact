import React from "react";
import ReactDOM from "react-dom/client";

const elementProps = {className : "greeting", children : "I am the owner of this company"};
const elementType = "h1";
const element = React.createElement(elementType,elementProps);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
// var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
// var htmlRoot = document.getElementById("root");
// var rootReact = ReactDOM.createRoot(htmlRoot);
// rootReact.render(hOneReact);