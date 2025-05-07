import React from  "react";
import {createRoot} from 'react-dom/client';
 
 var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
 var htmlRoot = document.getElementById("root");
 var rootReact = createRoot(htmlRoot);
 rootReact.render(hOneReact);