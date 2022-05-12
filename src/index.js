import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
);
