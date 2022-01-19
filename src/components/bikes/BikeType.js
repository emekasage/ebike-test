import React from "react";

export default function BikeType() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="w-56">
        <div className="bike-type p-3 bg-white rounded-xl cursor-pointer bikes">
          <img
            src="../../../assets/D041.png"
            alt="bike types"
            className="mx-auto"
          />
        </div>
        <p className="text-center py-2.5 text-base font-semibold">
          Hybrid Bikes
        </p>
      </div>
      <div className="w-56">
        <div className="bike-type p-3 bg-white rounded-xl cursor-pointer bikes">
          <img
            src="../../../assets/D041.png"
            alt="bike types"
            className="mx-auto"
          />
        </div>
        <p className="text-center py-2.5 text-base font-semibold">
          Fixie Bikes
        </p>
      </div>
      <div className="w-56">
        <div className="bike-type p-3 bg-white rounded-xl cursor-pointer bikes">
          <img
            src="../../../assets/D041.png"
            alt="bike types"
            className="mx-auto"
          />
        </div>
        <p className="text-center py-2.5 text-base font-semibold">
          Folding Bikes
        </p>
      </div>
      <div className="w-56">
        <div className="bike-type p-3 bg-white rounded-xl cursor-pointer bikes">
          <img
            src="../../../assets/D041.png"
            alt="bike types"
            className="mx-auto"
          />
        </div>
        <p className="text-center py-2.5 text-base font-semibold">
          Mount Bikes
        </p>
      </div>
      <div className="w-56">
        <div className="bike-type p-3 bg-white rounded-xl cursor-pointer bikes">
          <img
            src="../../../assets/D041.png"
            alt="bike types"
            className="mx-auto"
          />
        </div>
        <p className="text-center py-2.5 text-base font-semibold">City Bikes</p>
      </div>
    </div>
  );
}
