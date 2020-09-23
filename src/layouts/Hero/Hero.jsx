import React from "react";
import { H1 } from "../../components/Headings/Headings";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-wrapper flex mt-20">
      <H1 className="orange-gradient text font-extrabold text-6xl">
        Dynamically create your own mathematical worksheets
      </H1>
      <img
        src={require("../../assets/undraw_select_option_y75i.svg")}
        alt=""
        className="hero-img"
      />
    </div>
  );
};
