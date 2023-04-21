import React from "react";
import TopBar from "./TopBar";
import getstarted from "../../Assets/flutterairgetstarted.png";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div>
        <div className="bg-black rounded-md px-8 flex items-center space-x-8 mx-20 mt-20">
          <img src={getstarted} className="w-[30%]" />
          <div className="py-10">
            <h1 className="text-xs font-satoshimedium text-white">
              Welcome back, Victor
            </h1>
            <h1 className="font-satoshibold text-xl text-white mt-3">
              Complete your incorporation to start using our full set of tools
            </h1>
            <h1 className="text-sm font-satoshiregular text-white mt-1">
              Start the incorporation process by providing your company information, personal details and proceding to checkout. 
            </h1>
            <div className="bg-white mt-6 rounded-lg items-center justify-center cursor-pointer py-3 px-10 inline-block">
              <h1 className="font-satoshimedium text-sm">Get Started</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
