import React from "react";
import BikeSlider from "./BikeSlider";
import BikeType from "./BikeType";
import lottie from "lottie-web";
import RiderLottie from "../../animations/60019-adidas-rider.json";

export default function BikeInfo() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#rider-lottie"),
      animationData: RiderLottie,
    });
  }, []);
  return (
    <div className="max-w-7xl relative mt-14 lg:mt-40 mb-28 overflow-hidden xl:overflow-visible">
      <div className="z-0">
        <svg
          width="480"
          height="423"
          viewBox="0 0 480 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-147.368 96.9033C-105.522 48.8451 -22.884 111.018 96.8544 83.8082C200.562 60.2299 206.528 -2.39794 289.389 0.707685C349.925 2.96461 415.89 37.9189 452.144 98.8151C492.124 165.958 477.591 234.314 473.511 250.902C455.298 325.302 401.242 364.549 382.172 377.954C303.601 433.147 215.435 423.475 173.138 418.856C14.2542 401.455 -155.845 288.022 -163.419 164.697C-164.425 148.551 -166.257 118.605 -147.368 96.9033Z"
            fill="url(#paint0_linear_1_34)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_34"
              x1="251.332"
              y1="-98.3919"
              x2="91.6267"
              y2="382.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE8B9" />
              <stop offset="1" stop-color="#FFEDC7" stop-opacity="0.49" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <BikeSlider className="z-10" />
      <div
        className="ml-16 lg:mx-28 xl:ml-44 z-20 my-32 bike-types"
        style={{ width: "1280px" }}
      >
        <h4 className="text-2xl font-semibold pb-8">Other Type Of Bikes</h4>
        <BikeType />
      </div>
      <div className="relative my-24 z-20 overflow-x-hidden">
        <div className="max-w-5xl mx-10 md:ml-16 lg:ml-28 xl:ml-44 md:flex justify-between items-center hybrid-bikes">
          <div className="w-72 lg:w-96 h-96 rounded-3xl bg-white bike-card p-5">
            <div>
              <div
                id="rider-lottie"
                style={{
                  width: "242px",
                  height: "204px",
                  margin: "0 auto",
                }}
              />
              <hr className="my-6" />
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
          <div
            className="block space-y-5 z-20 hybrid-info mt-4 lg:mt-0"
            style={{ width: "450px" }}
          >
            <h3 classname="text-4xl font-bold">Hybrid Bikes</h3>
            <p className="font-light text-lg">
              Dummy Text progressive, and affordable healthcare, accessible on
              mobile and online for everyone. To us, it’s not just work. We take
              pride in the solutions we deliver
            </p>
            <button
              className="border py-2 px-8"
              style={{
                borderColor: "#FCB72B",
                color: "#FCB72B",
                borderRadius: "55px",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
        <div
          className="z-0 bottom-10 absolute group-bg"
          style={{ right: "-14.9rem" }}
        >
          <svg
            width="456"
            height="386"
            viewBox="0 0 456 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M571.915 88.3352C533.784 44.5443 458.484 101.196 349.377 76.4029C254.878 54.9181 249.442 -2.14875 173.939 0.681105C118.778 2.73763 58.6697 34.5882 25.6354 90.0772C-10.7953 151.258 2.44802 213.545 6.16544 228.66C22.7611 296.454 72.0177 332.216 89.3945 344.43C160.988 394.723 241.326 385.91 279.868 381.701C424.643 365.845 579.639 262.484 586.54 150.109C587.457 135.397 589.127 108.11 571.915 88.3352Z"
              fill="url(#paint0_linear_1_114)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_114"
                x1="208.617"
                y1="-89.6191"
                x2="354.141"
                y2="348.871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFF7E6" />
                <stop offset="1" stop-color="#FDF7EB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
