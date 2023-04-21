import React from "react";

export default function CompanyType({ choosecountrynumber, countrynumber }) {
  return (
    <div className="w-[80%]">
      <div>
        <h1 className="font-satoshibold md:text-base text-base text-black">
          Company Structure
        </h1>
        <h1 className="font-satoshiregular text-xs text-[#808080]">
          Choose the legal entity that's right for your business
        </h1>

        <div className="border hover:border-[#51bf55] rounded-md space-y-1 mt-14 py-3 px-4 pr-32 cursor-pointer relative">
          <div className="flex space-x-10 items-center">
            <h1 className="font-satoshibold md:text-sm text-xs text-black">
              Help me choose
            </h1>
          </div>
          <div className="border-[#51bf55] border rounded-full py-1 px-3 absolute top-3 right-4">
            <h1 className="font-satoshiregular text-xs text-[#51bf55] scale-95">
              Recommended
            </h1>
          </div>
          <h1 className="font-satoshiregular text-xs text-[#808080]">
            Take our quiz, and we'll suggest which is best.
          </h1>
        </div>

        <div
          onClick={() => choosecountrynumber(1)}
          className={
            countrynumber == 1
              ? "border border-[#51bf55] hover:border-[#51bf55] rounded-md space-y-1 mt-4 py-3 px-4 pr-32 cursor-pointer"
              : "border hover:border-[#51bf55] rounded-md space-y-1 mt-4 py-3 px-4 pr-32 cursor-pointer"
          }
        >
          <h1 className="font-satoshibold md:text-sm text-xs text-black">
            LLC
          </h1>
          <h1 className="font-satoshiregular text-xs text-[#808080]">
            Great for small businesses and more flexibility.
          </h1>
        </div>

        <div
          onClick={() => choosecountrynumber(2)}
          className={
            countrynumber == 2
              ? "border border-[#51bf55] hover:border-[#51bf55] rounded-md space-y-1 mt-4 py-3 px-4 pr-32 cursor-pointer"
              : "border hover:border-[#51bf55] rounded-md space-y-1 mt-4 py-3 px-4 pr-32 cursor-pointer"
          }
        >
          <h1 className="font-satoshibold md:text-sm text-xs text-black">
            C-Corporation
          </h1>
          <h1 className="font-satoshiregular text-xs text-[#808080]">
            Great for startups fundraising from investors.
          </h1>
        </div>
      </div>
    </div>
  );
}
