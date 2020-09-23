import React from "react";
import { Header } from "../Header/Header";

export const DisplayWrapper = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="container m-auto">{children}</div>
    </div>
  );
};
