import React from "react";
import { LockClosedOutline } from "react-ionicons";

export default function PaymentSection() {
  return (
    <div className="md:w-[100%] w-[100%] py-4 md:px-6 px-0  md:h-screen">
      <div className="md:w-[100%] w-[100%] md:pt-20 pt-0">
        <h1 className="font-satoshibold text-lg">Review and Pay</h1>
        <p className="font-satoshiregular text-sm text-[#475569]">
          Review your information and pay the incorporation fee's
        </p>
      </div>

      <div>
        <div className="border border-[#51bf55] rounded-full py-2 px-6 mt-40 inline-block">
          <div className="flex space-x-3">
            <LockClosedOutline
              height={"16px"}
              width={"16px"}
              color={"#51bf55"}
            />
            <h1 className="text-[#51bf55] text-xs font-satoshiregular">
              {" "}
              Secured by paystack
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
