import React, { useState } from "react";
import AuthLayout from "./Components/Navigation/AuthLayout";
import DashboardLayout from "./Components/Navigation/DashboardLayout";

export default function App() {
  const [isloggedin, setisloggedin] = useState(true)
  return (
    <div className="">
     {isloggedin == true ? <AuthLayout/> : <DashboardLayout/>}
    </div>
  );
}
