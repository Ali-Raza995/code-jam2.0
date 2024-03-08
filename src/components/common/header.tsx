import React from "react";

import Image from "next/image";

import logoImage from "../../../public/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex justify-center">
        <Image src={logoImage} alt="logo-image" />
        <div className="flex justify-center items-center -mt-3">
          <h2 className="-ml-7 text-[#FF5C00] font-semibold leading-7 tracking-normal text-lg">
            FutureResume
          </h2>
        </div>
      </div>
      <div className="w-72 flex justify-between">
        <button className="px-6 py-4 w-[125.27px] border border-[#FF5C00] text-[#FF5C00] rounded-full">
          Sign Up
        </button>
        <button className="px-6 w-[125.27px] py-4 bg-[#FF5C00] text-white rounded-full">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
