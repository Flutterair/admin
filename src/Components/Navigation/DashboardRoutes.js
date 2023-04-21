import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import TopBar from "../Sections/TopBar";
import Dashboard from "../Sections/Dashboard";

export default function DashboardRoutes() {
  return (
    <>
      {/* Routes Defined also with component to load up */}
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  );
}
