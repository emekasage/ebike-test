import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import lottie from "lottie-web";
import HeaderLottie from "../animations/57535-helmet-requirement.json";

export default function Hero() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#header-lottie"),
      animationData: HeaderLottie,
    });
  }, []);
  return (
    <div className="relative mb-10 -mt-56 md:mt-0">
      <div className="-ml-16 lg:-ml-3 -mt-20 lg:-mt-28 absolute">
        <svg
          width="90"
          height="131"
          viewBox="0 0 90 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.5" cy="5.5" r="5.5" fill="#FFE8B9" />
          <circle cx="20.5" cy="45.5" r="5.5" fill="#FFE8B9" />
          <circle cx="20.5" cy="85.5" r="5.5" fill="#FFE8B9" />
          <circle cx="20.5" cy="125.5" r="5.5" fill="#FFE8B9" />
          <circle cx="52.5" cy="5.5" r="5.5" fill="#FFE8B9" />
          <circle cx="52.5" cy="45.5" r="5.5" fill="#FFE8B9" />
          <circle cx="52.5" cy="85.5" r="5.5" fill="#FFE8B9" />
          <circle cx="52.5" cy="125.5" r="5.5" fill="#FFE8B9" />
          <circle cx="84.5" cy="5.5" r="5.5" fill="#FFE8B9" />
          <circle cx="84.5" cy="45.5" r="5.5" fill="#FFE8B9" />
          <circle cx="84.5" cy="85.5" r="5.5" fill="#FFE8B9" />
          <circle cx="84.5" cy="125.5" r="5.5" fill="#FFE8B9" />
        </svg>
      </div>
      <div className="max-w-7xl md:flex justify-between mx-auto lg:mx-28 xl:mx-40">
        <div className="ml-8 max-w-md overflow-x-hidden">
          <h1
            className="text-5xl font-bold w-84"
            style={{ color: "#233348", lineHeight: "56px" }}
          >
            Your Bike Electric Update
          </h1>
          <p
            className="text-xl font-light mt-6 w-80 lg:w-96"
            style={{ color: "#7D7987" }}
          >
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <div className="relative mt-8">
            <input
              className="border p-4 focus:ring-1 focus:ring-yellow-400 find-form"
              type="text"
              placeholder="Search Bike or anything"
              style={{
                color: "#C2CFE0",
                borderColor: "#C2CFE0",
                borderRadius: "100px",
                width: "430px",
                textIndent: "25px",
              }}
            />
            <SearchIcon
              className="h-4 w-4 absolute bottom-5 ml-4"
              aria-hidden="true"
              style={{ color: "#C2CFE0" }}
            />
            <button
              className="text-gray-900 font-bold py-2.5 px-10 find-btn float-right md:absolute md:right-8 md:top-2"
              style={{ borderRadius: "100px" }}
            >
              Find
            </button>
          </div>
        </div>
        <div
          id="header-lottie"
          style={{
            width: "411px",
            height: "411px",
            marginTop: "-6rem",
            zIndex: "1000",
          }}
        />
      </div>
    </div>
  );
}
