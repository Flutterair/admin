import React, { useState } from "react";
import DashboardRoutes from "./DashboardRoutes";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  
  return (
    <div className="flex relative">
      <div className="w-[20%] fixed h-screen border bg-[#fbfbfb] overflow-y-scroll">
          <Sidebar />
      </div>
      <div className="w-[100%] block ml-[20%]">
        <DashboardRoutes />
      </div>
    </div>
  );
}
