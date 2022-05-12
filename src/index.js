import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
  </BrowserRouter>
);
