import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`testimonial-arrow ${className}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <ArrowNarrowRightIcon
        className="h-8 w-16"
        style={{ color: "#fcb72b", marginTop: "7px", marginLeft: "-8px" }}
      />
    </div>
  );
}

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <div className="mx-12 lg:mx-44 mt-8 mb-12 lg:my-14 overflow-x-hidden">
        <div
          className="relative p-10 rounded-xl z-10"
          style={{ background: "#FCB72B" }}
        >
          <div className="absolute -right-6 -top-16 z-0">
            <img src="../../assets/Group-dot.svg" alt="dots" />
          </div>
          <h2 className="text-white text-4xl text-center">
            What our customer are saying
          </h2>
          <svg
            width="56"
            height="2"
            viewBox="0 0 56 2"
            className="mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="2" rx="1" fill="white" />
          </svg>
          <Slider {...settings}>
            <div className="max-w-3xl block lg:flex justify-between items-center mx-auto my-8 testimonials">
              <div className="w-28 lg:w-48 space-y-1">
                <img
                  src="../../assets/Mask-Group.png"
                  alt="testimonial"
                  className="mx-auto"
                />
                <h6 className="text-white text-xl text-center">
                  Edward Newgate
                </h6>
                <p className="font-light text-white text-lg text-center">
                  Pro Cycler
                </p>
              </div>
              <div
                className="quote mr-12 lg:mr-0 mt-4 lg:mt-0"
                style={{ width: "420px" }}
              >
                <p className="text-white font-normal text-lg">
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="max-w-3xl lg:flex justify-between items-center mx-auto my-8 testimonials">
              <div className="w-28 lg:w-48 space-y-1">
                <img
                  src="../../assets/Mask-Group.png"
                  alt="testimonial"
                  className="mx-auto"
                />
                <h6 className="text-white text-xl text-center">
                  Peter Oldgate
                </h6>
                <p className="font-light text-white text-lg text-center">
                  Pro Cycler
                </p>
              </div>
              <div
                className="quote mr-12 lg:mr-0 mt-4 lg:mt-0"
                style={{ width: "420px" }}
              >
                <p className="text-white font-normal text-lg">
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
            <div className="max-w-3xl lg:flex justify-between items-center mx-auto my-8 testimonials">
              <div className="w-28 lg:w-48 space-y-1">
                <img
                  src="../../assets/Mask-Group.png"
                  alt="testimonial"
                  className="mx-auto"
                />
                <h6 className="text-white text-xl text-center">
                  Edward Newdoor
                </h6>
                <p className="font-light text-white text-lg text-center">
                  Pro Biker
                </p>
              </div>
              <div
                className="quote mr-12 lg:mr-0 mt-4 lg:mt-0"
                style={{ width: "420px" }}
              >
                <p className="text-white font-normal text-lg">
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
