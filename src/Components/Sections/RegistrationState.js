import React from "react";

export default function RegistrationState() {
  return (
    <div className="md:w-[100%] w-[100%] py-4 md:px-6 px-0 relative flex text-start md:h-screen">
      <div className="md:w-[100%] w-[100%] md:pt-20 pt-0">
        <h1 className="font-satoshibold text-lg">Registration State</h1>
        <p className="font-satoshiregular text-sm text-[#475569]">
          Whatever state you select allows you to operate freely in the country.
        </p>

        <div className="border hover:border-[#51bf55] rounded-md space-y-1 mt-14 py-3 px-4 pr-32 cursor-pointer relative">
          <div className="flex space-x-10 items-center">
            <h1 className="font-satoshibold md:text-sm text-xs text-black">
              Delaware
            </h1>
          </div>
          <div className="border-[#51bf55] border rounded-full py-1 px-3 absolute top-3 right-4">
            <h1 className="font-satoshiregular text-xs text-[#51bf55] scale-95">
              Recommended
            </h1>
          </div>
          <h1 className="font-satoshiregular text-xs text-[#808080]">
            Great for C-Corporations
          </h1>
        </div>

        <div className="mt-4 flex flex-col">
          <select className="md:text-sm text-xs h-12 font-satoshiregular py-3 px-4 pr-8 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
            <option value={""} className="text-xs font-satoshiregular">
              Select State
            </option>
            <option
              value={"Washington"}
              className="text-xs font-satoshiregular"
            >
              Washington
            </option>
            <option
              value={"Willmington"}
              className="text-xs font-satoshiregular"
            >
              Willmington
            </option>
            <option value={"New York"} className="text-xs font-satoshiregular">
              New York
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
