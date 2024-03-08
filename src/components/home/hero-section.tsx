import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/Resume_Sample1.png";

const HeroSection = () => {
  return (
    <div className="flex p-10 ">
      {/* content Section  */}
      <div className="w-1/2">
        <div className="w-full py-5">
          <h1 className="font-bold text-5xl">
            Create a <span className="text-[#FF5C00]">resume</span> that secures
            your <span className="text-[#FF5C00]">dream job</span>
          </h1>
        </div>
        <p className="tracking-wide py-5">
          Build a resume thats piques the interest of recruiters and gets you
          hired. It’s fast and easy to use.
        </p>
        <div>
          <button className="bg-[#FF5C00] text-white w-60 rounded-full py-3">
            Build Your Resume
          </button>
        </div>
      </div>
      {/* iamge section */}
      <div className="w-1/2 flex justify-center">
        <Image src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
};

export default HeroSection;
