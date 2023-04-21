import React, { useState } from "react";
import {
  CardOutline,
  CheckmarkOutline,
  GlobeOutline,
  LogOutOutline,
  NotificationsCircleOutline,
  PersonCircleOutline,
  SettingsOutline,
} from "react-ionicons";

export default function TopBar() {
  const [isopen, setisopen] = useState(false);
  return (
    <div className="bg-white h-20 py-3 pt-6 px-6 border">
      <div className="flex justify-between items-center">
        <h1 className="font-satoshiregular text-base text-[#848484]">
          Dashboard
        </h1>
        <div className="flex space-x-4 items-center">
          <div className="border border-black rounded-full py-2 px-6 items-center space-x-2 justify-center text-center flex">
            <h1 className="font-satoshimedium text-xs text-black">
              Startup Pitch
            </h1>
           
          </div>
          <NotificationsCircleOutline
            height={"28px"}
            width={"28px"}
            color={"#848484"}
          />
          <div onClick={() => setisopen(!isopen)} className="cursor-pointer">
            <PersonCircleOutline
              height={"28px"}
              width={"28px"}
              color={"#848484"}
            />
          </div>
        </div>
      </div>
      <div
        className={
          isopen == true
            ? "bg-white absolute right-7 w-[16%] mt-4 shadow-md shadow-[#eee] rounded-lg py-6 px-6 z-10 ml-4 space-y-6"
            : "hidden"
        }
      >
        <div className="flex items-center space-x-2 cursor-pointer">
          <PersonCircleOutline
            height={"16px"}
            width={"16px"}
            color={"#848484"}
          />
          <h1 className="font-satoshimedium text-xs text-[#787878]">Profile</h1>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <CardOutline height={"16px"} width={"16px"} color={"#848484"} />
          <h1 className="font-satoshimedium text-xs text-[#787878]">Billing</h1>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <SettingsOutline height={"16px"} width={"16px"} color={"#848484"} />
          <h1 className="font-satoshimedium text-xs text-[#787878]">
            Settings
          </h1>
        </div>
        <div>
          <div className="bg-[#f5f5f5] h-0.5"></div>
          <div className="flex items-center space-x-2 cursor-pointer mt-4">
            <LogOutOutline height={"16px"} width={"16px"} />
            <h1 className="font-satoshimedium text-xs text-[#3f413f]">
              Logout
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
