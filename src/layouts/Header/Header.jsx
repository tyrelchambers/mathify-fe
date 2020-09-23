import React from "react";
import { H1 } from "../../components/Headings/Headings";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <div className="p-4 flex items-center">
      <Navbar />
      <H1 className="flex justify-center w-1/3 orange-gradient text">
        Mathify
      </H1>
    </div>
  );
};
