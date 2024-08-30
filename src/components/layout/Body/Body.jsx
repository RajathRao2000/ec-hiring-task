import React from "react";
import AuthProvider from "../../../context/AuthProvider";

const Body = ({ children }) => {
  return (
    <AuthProvider>
      <div className=" min-h-[calc(100vh-6rem)] ">{children}</div>
    </AuthProvider>
  );
};

export default Body;
