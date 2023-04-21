import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateCompany from "../Pages/CreateCompany";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import CreateAccount from "../Pages/CreateAccount";

export default function AuthRoutes() {
  return (
    <>
      {/* Routes Defined also with component to load up */}
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/create/incorporation" element={<CreateCompany/>}></Route>
        <Route path="/create/account" element={<CreateAccount/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  );
}
