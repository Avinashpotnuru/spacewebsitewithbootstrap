import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import CrewItem from "./CrewItem";

import { crewData } from "../../data";
import Navbar from "../Navbar";
import Sidenavbar from "../SideNavbar";

function Crew() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="crewblock">
      <Navbar />
      <Sidenavbar />
      <h1 className="text-center py-3">
        <span style={{ color: "#4d5057", fontWeight: "900" }}>02 </span>Meet
        your crew
      </h1>
      <div className="text-center">
        <Slider {...settings}>
          {crewData.map((item) => (
            <CrewItem key={item?.id} crewData={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Crew;
