import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { ThemeProvider } from "./utils/context";



ReactDOM.createRoot(document.getElementById("root")).render( <ThemeProvider> <Home /> </ThemeProvider> );
