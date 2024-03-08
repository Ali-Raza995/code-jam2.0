import React from "react";

interface Props {
  handleFunc: () => void;
}

const PreviewVersion = ({ handleFunc }: Props) => {
  return (
    <div
      onClick={handleFunc}
      className="w-full flex justify-center absolute h-[500px]"
    >
      <div className="bg-gray-300 w-4/5 h-full flex flex-col justify-center items-center">
        <div className="bg-white w-[90%] h-[90%] p-4">
          <div className="flex flex-col">
            <div className="flex w-full">
              <div className="w-1/2">
                <h2 className="text-2xl font-bold">Muhammad Fareed</h2>
                <p className="text-sm">Full Stack developer</p>
                <div className="mt-16">
                  <h3 className="font-bold">Summary</h3>
                  <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores in nostrum reiciendis voluptatum laudantium
                    voluptates tenetur neque, accusantium commodi aut veniam
                    culpa consequatur velit facere sit rem maxime. Ullam,
                    aspernatur.
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex justify-end">
                <div className="text-right flex gap-1 flex-col">
                  <h3 className="font-bold pb-5 text-lg">
                    Personal Information
                  </h3>
                  <p>fareed@gmail.com</p>
                  <p>0304-3686779</p>
                </div>
              </div>
            </div>
            <div>
              <div className="eduction ">
                <h3>Education</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button>Download</button>
          <button> Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewVersion;
