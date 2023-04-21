import React, { useState, useEffect } from "react";
import AuthLayout from "./Components/Navigation/AuthLayout";
import DashboardLayout from "./Components/Navigation/DashboardLayout";

export default function App() {

  const [loggedin, setloggedin] = useState()
  
  useEffect(() => {
    async function fetchData() {
      const loggedin = JSON.parse(localStorage.getItem("userData"));
      setloggedin(loggedin)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const ge = async () => {
    console.log(loggedin)
  }
  return (
    <div className="" onClick={ge}>
     {loggedin == null ? <AuthLayout/> : <DashboardLayout/>}
    </div>
  );
}
