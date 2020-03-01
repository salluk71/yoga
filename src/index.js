import React from "react";
import reactDomRender from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

reactDomRender.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
