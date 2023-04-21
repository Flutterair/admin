import React from "react";
import logo from "../../Assets/logo.png";
import logonoback from "../../Assets/logonoback.png";
import heroimg from "../../Assets/heroimg.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="md:flex items-center h-screen">

      <div className="w-[30%] bg-[#F6F6F6] py-4 px-6 h-screen relative hidden md:block">
        <div className="flex space-x-2 items-center cursor-pointer">
          <h1 className="font-satoshibold text-base text-black">flutterair</h1>
        </div>
        <div className="bottom-0 absolute w-[40%]">
          <img src={heroimg} />
        </div>
      </div>
     
      <div className="md:w-[70%] w-[100%] py-4 md:px-6 px-4 items-center relative md:justify-center flex text-start h-screen">
        <Link to={'/create/account'}>
          <div className="absolute top-6 md:right-10 right-4 border border-[#51bf55] py-2 px-4 rounded-md">
            <h1 className="font-satoshimedium text-[#51bf55] text-xs">Create account</h1>
          </div>
        </Link>

        <div className="md:w-[50%] w-[100%]">
          <h1 className="font-satoshibold text-lg">Log in to your account</h1>

          <div className="mt-10 flex flex-col">
            <label className="md:text-sm text-xs font-satoshiregular">
              Email Address
            </label>

            <input
              placeholder="Email Address"
              type="email"
              className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] outline-none md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%]"
            />
          </div>
          <div className="mt-6 flex flex-col">
            <div className="flex justify-between items-center">
              <label className="md:text-sm text-xs font-satoshiregular">
                Password
              </label>
              <label className="md:text-xs text-xs font-satoshiregular text-[#d2a749] cursor-pointer">
                Forgot Password ?
              </label>
            </div>

            <input
              type="password"
              placeholder="********"
              className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] outline-none md:text-sm text-xs font-satoshiregular py-3 px-3 rounded-md mt-2 border border-[#eee] w-[100%]"
            />
          </div>

          <Link to={"/"}>
            <div className="mt-8 flex items-center justify-center bg-black py-4 rounded-md px-3 text-center cursor-pointer">
              <h1 className="font-satoshibold text-white md:text-sm text-xs">
                LOGIN
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
