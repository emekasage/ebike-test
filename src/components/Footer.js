import React from "react";

const company = [
  { name: "Product", href: "#" },
  { name: "Bike Type", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const help = [
  { name: "Help Center", href: "#" },
  { name: "Contact Support", href: "#" },
  { name: "Instructions", href: "#" },
  { name: "How It Works", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="w-auto py-12 px-4 md:px-6 lg:px-28 xl:px-48 bottom-0 h-auto relative overflow-hidden"
      style={{ background: "#FCB72B" }}
    >
      <div className="md:flex justify-between">
        <div className="mb-4 lg:columns-1 w-84 lg:w-96">
          <div className="inline-flex font-bold mb-1 mt-3 items-center">
            <span
              className="bg-white py-1 px-3 text-2xl"
              style={{ color: "#FCB72B", borderRadius: "50%" }}
            >
              B
            </span>
            <span className="text-2xl font-bold text-white pl-3">eBike</span>
          </div>
          <p className="text-white text-lg mt-2 md:w-80 xl:w-96">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="mt-4 font-light text-base text-white">
            ©eBike 2021. All rights reserved
          </p>
        </div>
        <div className="w-96 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2">
          <div className="mb-4 mt-6 lg:mt-3">
            <h3 className="text-white font-bold mb-2 lg:mb-4 text-xl">
              Company
            </h3>
            <div className="mt-4 space-y-4">
              {company.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-900 block font-light"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:mt-5 lg:mt-3 mb-4">
            <h3 className="text-white font-bold mb-2 lg:mb-2 text-xl">Help</h3>
            <div className="mt-4 space-y-4">
              {help.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-900 block font-light"
                >
                  {item.name}
                </a>
              ))}
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
