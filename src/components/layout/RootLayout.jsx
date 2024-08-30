import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import AuthProvider from "../../context/AuthProvider";
import { ToastContainer } from "react-toastify";
const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Header />
      <Body>{children}</Body>
    </AuthProvider>
  );
};

export default RootLayout;
