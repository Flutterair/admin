import React, { useState } from "react";
import CompanyName from "../Sections/CompanyName";
import CompanyType from "../Sections/CompanyType";
import { enqueueSnackbar } from "notistack";
import { CheckmarkOutline } from "react-ionicons";
import RegistrationState from "../Sections/RegistrationState";

export default function CreateCompany() {
  const [stepper, setstepper] = useState(0);

  const previous = async () => {
    if (stepper < 1) {
    } else {
      setstepper(Number(stepper) - 1);
    }
  };

  const countryinfo = async () => {
    const message = "Please fill in all required fields";
    enqueueSnackbar(message, { variant: "error" });
  };

  const next = async () => {
    if (stepper > 4) {
    } else {
      setstepper(Number(stepper) + 1);
    }
  };

  return (
    <div className=" flex flex-col bg-[#F6F6F6] relative h-screen">
      <div className="flex justify-between items-start">

        <div className="mx-10 bg-[#F6F6F6] rounded-lg py-10 px-6 w-[30%] md:block hidden">
          <h1 className="font-satoshibold md:text-sm text-xs text-black">
            Welcome to Flutterair 👋
          </h1>
          <h1 className="font-satoshiregular text-xs text-[#808080]">
            Lets get your business up and running in no time
          </h1>

          <div className="flex items-center space-x-3 mt-10 cursor-pointer">
            <div
              className={
                stepper == 0
                  ? "border-2 border-[#51bf55] rounded-full"
                  : "border-2 border-[#fbfbfb] rounded-full"
              }
            >
              <div
                className={
                  stepper < 1
                    ? "border border-[#f3f3f3] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5"
                    : "border-2 border-[#51bf55] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5"
                }
              >
                {stepper < 1 ? (
                  <h1
                    className={
                      stepper == 0
                        ? "font-satoshibold md:text-sm text-xs text-[#eee]"
                        : "font-satoshibold md:text-sm text-xs text-[#fff]"
                    }
                  >
                    1
                  </h1>
                ) : (
                  <CheckmarkOutline color={"#51bf55"} />
                )}
              </div>
            </div>
            <div>
              <h1 className="font-satoshibold md:text-sm text-xs text-black">
                Company Type
              </h1>
              <h1
                className={
                  stepper == 0
                    ? "font-satoshiregular text-xs text-[#808080]"
                    : "hidden"
                }
              >
                Choose your business entity.
              </h1>
            </div>
          </div>
          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>
          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>

          <div className="flex items-center space-x-3 mt-3 cursor-pointer">
            <div
              className={
                stepper == 1
                  ? "border-2 border-[#51bf55] rounded-full"
                  : "border-2 border-[#fbfbfb] rounded-full"
              }
            >
              <div
                className={
                  stepper < 2 > 0
                    ? "border border-[#f3f3f3] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5"
                    : "border-2 border-[#51bf55] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5"
                }
              >
                {stepper < 2 > 0 ? (
                  <h1
                    className={
                      stepper == 1
                        ? "font-satoshibold md:text-sm text-xs text-[#fff]"
                        : "font-satoshibold md:text-sm text-xs text-[#eee]"
                    }
                  >
                    2
                  </h1>
                ) : (
                  <CheckmarkOutline color={"#51bf55"} />
                )}
              </div>
            </div>
            <div>
              <h1 className="font-satoshibold md:text-sm text-xs text-black">
                Company Name and Description
              </h1>
              <h1
                className={
                  stepper == 1
                    ? "font-satoshiregular text-xs text-[#808080]"
                    : "hidden"
                }
              >
                Fill in all necessary company information
              </h1>
            </div>
          </div>

          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>
          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>

          <div className="flex items-center space-x-3 mt-3">
            <div className="border-2 border-[#fbfbfb] rounded-full">
              <div className="border border-[#f3f3f3] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5">
                <h1 className="font-satoshibold md:text-sm text-xs text-[#eee]">
                  3
                </h1>
              </div>
            </div>
            <div>
              <h1 className="font-satoshibold md:text-sm text-xs text-black">
                Registration State
              </h1>
              <h1 className="font-satoshiregular text-xs text-[#808080] hidden">
                Choose your desired country of registration for incorporation.
              </h1>
            </div>
          </div>

          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>
          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>

          <div className="flex items-center space-x-3 mt-3">
            <div className="border-2 border-[#fbfbfb] rounded-full">
              <div className="border border-[#f3f3f3] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5">
                <h1 className="font-satoshibold md:text-sm text-xs text-[#eee]">
                  4
                </h1>
              </div>
            </div>
            <div>
              <h1 className="font-satoshibold md:text-sm text-xs text-black">
                Shareholders information
              </h1>
              <h1 className="font-satoshiregular text-xs text-[#808080] hidden">
                Choose your desired country of registration for incorporation.
              </h1>
            </div>
          </div>

          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>
          <div className="w-0.5 h-4 bg-[#eee] mx-5 mt-2"></div>

          <div className="flex items-center space-x-3 mt-3">
            <div className="border-2 border-[#fbfbfb] rounded-full">
              <div className="border border-[#f3f3f3] bg-black rounded-full py-3 px-3 h-10 flex items-center justify-center text-center w-10 m-0.5">
                <h1 className="font-satoshibold md:text-sm text-xs text-[#eee]">
                  5
                </h1>
              </div>
            </div>
            <div>
              <h1 className="font-satoshibold md:text-sm text-xs text-black">
                Review and Pay
              </h1>
              <h1 className="font-satoshiregular text-xs text-[#808080] hidden">
                Choose your desired country of registration for incorporation.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white md:w-[70%] w-[100%] py-4 px-6 h-screen md:items-center md:pt-0 pt-20  md:pl-[18%] flex">
          <div className={stepper == 0 ? "block w-[100%]" : "hidden"}>
            <CompanyType />
          </div>
          <div className={stepper == 1 ? "block w-[100%]" : "hidden"}>
            <CompanyName />
          </div>
          <div className={stepper == 2 ? "block w-[100%]" : "hidden"}>
            <RegistrationState />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md shadow-[#eee] border md:py-4 py-2 md:px-10 px-4 absolute bottom-0 flex items-center justify-between w-[100%]">
        <div></div>
        <div className="flex items-center space-x-4 ">
          <div
            onClick={previous}
            className={
              stepper < 1
                ? "border border-[#51bf55] mt-6 rounded-lg items-center justify-center cursor-not-allowed py-3 px-10 inline-block"
                : "border border-[#51bf55] mt-6 rounded-lg items-center justify-center cursor-pointer py-3 px-10 inline-block"
            }
          >
            <h1 className="font-satoshimedium text-sm text-[#51bf55]">
              Previous
            </h1>
          </div>
          <div
            onClick={next}
            className="bg-[#51bf55] mt-6 rounded-lg items-center justify-center cursor-pointer py-3 px-10 inline-block"
          >
            <h1 className="font-satoshimedium text-sm text-white">Continue</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
