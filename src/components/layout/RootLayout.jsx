import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import AuthProvider from "../../context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Header />
      <Body>
        <Outlet />
      </Body>
    </AuthProvider>
  );
};

export default RootLayout;
