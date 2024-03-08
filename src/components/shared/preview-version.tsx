import React from "react";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  handleFunc?: () => void;
}

const PreviewVersion = ({ handleFunc }: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.user);

  console.log("🚀 ~ PreviewVersion ~ userInfo:", userInfo);
  const doc = new jsPDF();
  const user = "user";
  const handleDownload = () => {
    doc.text("Hello world!", 10, 10);
    doc.save(`${user} Resume.pdf`);
  };

  return (
    <div
      onClick={handleFunc}
      className="w-full flex justify-center mt-10 absolute h-full"
    >
      <div className="bg-gray-300 w-4/5 h-full flex flex-col justify-center items-center">
        <div className="bg-white w-[90%] h-[90%] pt-5 p-4">
          <div className="flex flex-col gap-10">
            <div className="flex w-full">
              <div className="w-1/2">
                <h2 className="text-2xl font-bold">{userInfo.fullName}</h2>
                <p className="text-sm">{userInfo.role}</p>
                <div className="mt-16">
                  <h3 className="font-bold">Summary</h3>
                  <p className="">{userInfo.responsibilities}</p>
                </div>
              </div>
              <div className="w-[50%] flex justify-end">
                <div className="text-right flex gap-1 flex-col">
                  <h3 className="font-bold pb-5 text-lg">
                    Personal Information
                  </h3>
                  <p>{userInfo.email}</p>
                  <p>{userInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col gap-10 w-1/2">
                <div>
                  <div className="eduction">
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-lg font-semibold">{userInfo.degree}</p>
                    <p className="text-sm">{userInfo.institution}</p>
                    <p className="text-xs">{userInfo.year}</p>
                  </div>
                </div>
                <div>
                  <div className="work">
                    <h3 className="text-xl font-bold">WORK EXPERIENCE</h3>
                    <p className="text-lg font-semibold">{userInfo.role}</p>
                    <p className="text-sm">{userInfo.company}</p>
                    <p className="text-xs">{userInfo.duration}</p>
                  </div>
                </div>
              </div>
              <div className="skills w-1/2">
                <div>
                  <h3 className="text-xl font-bold">Skills</h3>
                  <div>
                    {userInfo?.skills?.map(({ label, value }) => (
                      <li className="">{label}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full px-20 py-3">
          <button
            onClick={handleDownload}
            className="px-6 w-[125px] py-4 bg-[#FF5C00] text-white rounded-full"
          >
            Download
          </button>
          <button className="px-6 w-[125px] py-4 bg-[#FF5C00] text-white rounded-full">
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewVersion;
