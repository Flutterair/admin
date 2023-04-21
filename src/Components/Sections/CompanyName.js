import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Country() {
  const [togglepassword, settogglepassword] = useState(true);
  return (
    <div className="md:w-[100%] w-[100%] py-4 md:px-6 px-0 relative flex text-start md:h-screen">

    <div className="md:w-[100%] w-[100%] md:pt-20 pt-0">
      <h1 className="font-satoshibold text-lg">Company information</h1>
      <p className="font-satoshiregular text-sm text-[#475569]">
       Let's check and see if your company name is available to be registered
      </p>

      <div className="flex items-center space-x-4 mt-8">
        <div className="flex flex-col w-[50%]">
          <input
            placeholder="Company Name"
            type="text"
            className="md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
          />
        </div>

        <div className=" flex flex-col">
        <select className="md:text-sm text-xs font-satoshiregular py-3 px-4 pr-8 h-12 rounded-md border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
          <option value="" selected="selected">
            Select Entity Ending
          </option>
          <option value="LLC">LLC</option>
          <option value="Limited Liability Company">Limited Liability Company</option>
        </select>
      </div>
      </div>

      <div className="mt-4 flex flex-col">
        <textarea
          placeholder="Company Description"
          className="md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <select className="md:text-sm text-xs h-12 font-satoshiregular py-3 px-4 pr-8 rounded-md mt-2 border border-[#eee] w-[100%] outline-none focus:border-[#51bf55]">
        <option value={""} className="text-xs font-satoshiregular">
           What industry is your company based in
          </option>
          <option value={"Financial Services"} className="text-xs font-satoshiregular">
           Financial Services
          </option>
          <option
            value={"E-Commerce"}
            className="text-xs font-satoshiregular"
          >
            E-Commerce
          </option>
          <option
            value={"Logistics"}
            className="text-xs font-satoshiregular"
          >
            Logistics
          </option>
        </select>
      </div>

    </div>
  </div>
  )
}
