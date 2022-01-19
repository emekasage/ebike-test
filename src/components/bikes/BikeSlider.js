import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/solid";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)",
      }}
      onClick={onClick}
    >
      <ArrowNarrowRightIcon
        className="h-8 w-16"
        style={{ color: "#000", marginTop: "7px", marginLeft: "-8px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #FFBD37 100%)",
      }}
      onClick={onClick}
    >
      <ArrowNarrowLeftIcon
        className="h-8 w-16"
        style={{ color: "#000", marginTop: "7px", marginLeft: "-8px" }}
      />
    </div>
  );
}

export default class BikeSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div
        className="ml-16 lg:ml-44 lg:-mr-48 bottom-0 mb-0"
        style={{ marginTop: "-450px" }}
      >
        <Slider {...settings}>
          <div className="w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <h4 className="font-bold text-xl">Universal eBike Kit</h4>
            <div>
              <img
                src="../../../assets/PHO_BIKE_.png"
                alt=""
                className="mx-auto"
              />
              <hr />
              <div className="flex justify-between items-center mt-4 space-y-3">
                <div>
                  <p
                    className="font-normal text-base"
                    style={{ color: "#7D7987" }}
                  >
                    Price
                  </p>
                  <h5 className="font-bold text-xl">$750.00</h5>
                </div>
                <div>
                  <button
                    className="text-gray-900 font-bold py-2.5 px-10 find-btn"
                    style={{ borderRadius: "100px" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <h4 className="font-bold text-xl">Brampoton eBike Kit</h4>
            <div>
              <img
                src="../../../assets/PHO_BIKE_.png"
                alt=""
                className="mx-auto"
              />
              <hr />
              <div className="flex justify-between items-center mt-4 space-y-3">
                <div>
                  <p
                    className="font-normal text-base"
                    style={{ color: "#7D7987" }}
                  >
                    Price
                  </p>
                  <h5 className="font-bold text-xl">$750.00</h5>
                </div>
                <div>
                  <button
                    className="text-gray-900 font-bold py-2.5 px-10 find-btn"
                    style={{ borderRadius: "100px" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <h4 className="font-bold text-xl">Additional eBike Kit</h4>
            <div>
              <img
                src="../../../assets/PHO_BIKE_.png"
                alt=""
                className="mx-auto"
              />
              <hr />
              <div className="flex justify-between items-center mt-4 space-y-3">
                <div>
                  <p
                    className="font-normal text-base"
                    style={{ color: "#7D7987" }}
                  >
                    Price
                  </p>
                  <h5 className="font-bold text-xl">$750.00</h5>
                </div>
                <div>
                  <button
                    className="text-gray-900 font-bold py-2.5 px-10 find-btn"
                    style={{ borderRadius: "100px" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <h4 className="font-bold text-xl">Better eBike Kit</h4>
            <div>
              <img
                src="../../../assets/PHO_BIKE_.png"
                alt=""
                className="mx-auto"
              />
              <hr />
              <div className="flex justify-between items-center mt-4 space-y-3">
                <div>
                  <p
                    className="font-normal text-base"
                    style={{ color: "#7D7987" }}
                  >
                    Price
                  </p>
                  <h5 className="font-bold text-xl">$750.00</h5>
                </div>
                <div>
                  <button
                    className="text-gray-900 font-bold py-2.5 px-10 find-btn"
                    style={{ borderRadius: "100px" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <h4 className="font-bold text-xl">Universal eBike Kit</h4>
            <div>
              <img
                src="../../../assets/PHO_BIKE_.png"
                alt=""
                className="mx-auto"
              />
              <hr />
              <div className="flex justify-between items-center mt-4 space-y-3">
                <div>
                  <p
                    className="font-normal text-base"
                    style={{ color: "#7D7987" }}
                  >
                    Price
                  </p>
                  <h5 className="font-bold text-xl">$750.00</h5>
                </div>
                <div>
                  <button
                    className="text-gray-900 font-bold py-2.5 px-10 find-btn"
                    style={{ borderRadius: "100px" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
