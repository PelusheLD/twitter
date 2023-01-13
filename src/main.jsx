import React from "react";
import ReactDOM from "react-dom/client";
import { TwFollow } from "./twitterFollow";
import "./twitter.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <TwFollow />
    </React.Fragment>
  </React.StrictMode>
);
