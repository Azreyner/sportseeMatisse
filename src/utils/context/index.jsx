import React, { useState, createContext } from "react";
import SportsDataMock from "../../SportsDataMock.js";
import SportsDataAPI from "../../SportsDataAPI.js";

export const ThemeContext = (createContext = createContext());

export const ThemeProvider = ({ children }) => {
  const sourceDonnées = {
    api: new SportsDataAPI(),
    mock: new SportsDataMock(),
  };

  return (
    <ThemeContext.Provider value={{ source: sourceDonnées.api }}>
      {children}
    </ThemeContext.Provider>
  );
};
