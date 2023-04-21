import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import {
  ApertureOutline,
  BookOutline,
  CardOutline,
  ChevronDown,
  EarthOutline,
  FileTrayFullOutline,
  FolderOutline,
  HomeOutline,
  InformationCircleOutline,
  LockClosedOutline,
} from "react-ionicons";
export default function Sidebar() {
  const [selected, setselected] = useState(0);
  const [isopen, setisopen] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => setisopen(!isopen)}
        className="flex items-center space-x-2 mt-8 mx-6 cursor-pointer"
      >
        <div className="bg-black h-6 w-6 rounded-full border items-center justify-start flex"></div>
        <h1 className="font-satoshimedium text-sm text-[#414141]">
          Flutterair Inc
        </h1>
        <ChevronDown height={"16px"} width={"16px"} className="mt-0" />
      </div>

      <div
        className={
          isopen == true
            ? "bg-white absolute w-[90%] mt-4 shadow-md shadow-[#eee] rounded-lg py-6 px-6 z-10 ml-4 space-y-6"
            : "hidden"
        }
      >
        <div className="flex items-center space-x-2">
          <h1 className="font-satoshimedium text-xs text-[#787878] cursor-pointer">
            Your Other Company
          </h1>
        </div>
        <div>

        <div className="bg-[#f5f5f5] h-0.5"></div>
        <h1 className="font-satoshimedium text-xs text-[#414141] mt-2 cursor-pointer">
          Register a new company
        </h1>
        </div>
      </div>

      <div
        onClick={() => setselected(0)}
        className={
          selected == 0
            ? "mx-4 px-6 py-4 rounded-lg mt-8 flex items-center space-x-2 bg-black cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg mt-8 flex items-center space-x-2 cursor-pointer"
        }
      >
        <HomeOutline
          height={"16px"}
          width={"16px"}
          color={selected == 0 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 0
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Dashboard
        </h1>
      </div>

      <h1 className="font-satoshimedium text-xs text-[#bebebe] mx-3 mt-6 scale-95">
        Flutterair Launchpad
      </h1>

      <div
        onClick={() => setselected(1)}
        className={
          selected == 1
            ? "mx-4 px-6 py-4 rounded-lg mt-4 bg-black flex items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg mt-4 flex items-center space-x-2 cursor-pointer"
        }
      >
        <InformationCircleOutline
          height={"16px"}
          width={"16px"}
          color={selected == 1 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 1
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Details
        </h1>
      </div>
      <div
        onClick={() => setselected(2)}
        className={
          selected == 2
            ? "mx-4 px-6 py-4 rounded-lg flex bg-black items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg flex items-center space-x-2 cursor-pointer"
        }
      >
        <FolderOutline
          height={"16px"}
          width={"16px"}
          color={selected == 2 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 2
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Documents
        </h1>
      </div>

      {/*COMPLIANCE*/}
      <h1 className="font-satoshimedium text-xs text-[#bebebe] mx-3 mt-6 scale-95">
        Flutterair Compliance
      </h1>

      <div
        onClick={() => setselected(3)}
        className={
          selected == 3
            ? "mx-4 px-6 py-4 rounded-lg mt-4 bg-black flex items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg mt-4 flex items-center space-x-2 cursor-pointer"
        }
      >
        <InformationCircleOutline
          height={"16px"}
          width={"16px"}
          color={selected == 3 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 3
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Overview
        </h1>
      </div>
      <div
        onClick={() => setselected(4)}
        className={
          selected == 4
            ? "mx-4 px-6 py-4 rounded-lg flex bg-black items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg flex items-center space-x-2 cursor-pointer"
        }
      >
        <FileTrayFullOutline
          height={"16px"}
          width={"16px"}
          color={selected == 4 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 4
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Tax History
        </h1>
      </div>
      <div
        onClick={() => setselected(5)}
        className={
          selected == 5
            ? "mx-4 px-6 py-4 rounded-lg flex bg-black items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg flex items-center space-x-2 cursor-pointer"
        }
      >
        <LockClosedOutline
          height={"16px"}
          width={"16px"}
          color={selected == 5 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 5
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Licenses
        </h1>
      </div>

      {/*SYNC*/}
      <h1 className="font-satoshimedium text-xs text-[#bebebe] mx-3 mt-6 scale-95">
        Flutterair Sync
      </h1>

      <div
        onClick={() => setselected(6)}
        className={
          selected == 6
            ? "mx-4 px-6 py-4 rounded-lg mt-4 bg-black flex items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg mt-4 flex items-center space-x-2 cursor-pointer"
        }
      >
        <CardOutline
          height={"16px"}
          width={"16px"}
          color={selected == 6 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 6
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Banking Solutions
        </h1>
      </div>
      <div
        onClick={() => setselected(7)}
        className={
          selected == 7
            ? "mx-4 px-6 py-4 rounded-lg flex bg-black items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg flex items-center space-x-2 cursor-pointer"
        }
      >
        <ApertureOutline
          height={"16px"}
          width={"16px"}
          color={selected == 7 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 7
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Payments Processing
        </h1>
      </div>
      <div
        onClick={() => setselected(8)}
        className={
          selected == 8
            ? "mx-4 px-6 py-4 rounded-lg flex bg-black items-center space-x-2 cursor-pointer"
            : "mx-4 px-6 py-4 rounded-lg flex items-center space-x-2 cursor-pointer"
        }
      >
        <BookOutline
          height={"16px"}
          width={"16px"}
          color={selected == 8 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 8
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Bookkeeping
        </h1>
      </div>

      {/*SYNC*/}
      <h1 className="font-satoshimedium text-xs text-[#bebebe] mx-3 mt-6 scale-95">
        Flutterair Insurance
      </h1>

      <div
        onClick={() => setselected(9)}
        className={
          selected == 9
            ? "mx-4 px-6 py-4 rounded-lg mt-4 bg-black flex items-center space-x-2 cursor-pointer mb-20"
            : "mx-4 px-6 py-4 rounded-lg mt-4 flex items-center space-x-2 cursor-pointer mb-20"
        }
      >
        <EarthOutline
          height={"16px"}
          width={"16px"}
          color={selected == 9 ? "#fff" : "#475569"}
        />
        <h1
          className={
            selected == 9
              ? "font-satoshimedium text-xs text-[#ffffff]"
              : "font-satoshimedium text-xs text-[#475569]"
          }
        >
          Insurance
        </h1>
      </div>
    </div>
  );
}
