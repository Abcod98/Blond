import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext";
//import { AuthContext } from "./context/authContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      {/* <AuthContext> */}
        <App />
      {/* </AuthContext> */}
    </DarkModeContextProvider>
  </React.StrictMode>
);
