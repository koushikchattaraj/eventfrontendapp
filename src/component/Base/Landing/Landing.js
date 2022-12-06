import React, { useState } from "react";
import "./Landing.css";
import Logo from "../../../asset/logo.png";
import { setLandingStatus } from "../../../redux/action/action";
import { useDispatch } from "react-redux";

export const Landing = () => {
  const dispatch = useDispatch();
  const exploreBtn = () => {
    dispatch(setLandingStatus());
  };
  return (
    <div className="landingCointainer">
      <section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div
                className="main_home text-center colorstext wow fadeInUp"
                data-wow-duration="700ms">
                  
                <h1><img className="mainLogo" src={Logo}></img></h1>
                <button
                  onClick={exploreBtn}
                  className="btn btn-default waves-effect waves-purple button-30">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="home_socail_bar">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
