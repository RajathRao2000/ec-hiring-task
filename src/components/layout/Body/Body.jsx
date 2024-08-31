import React from "react";
import AuthProvider from "../../../context/AuthProvider";

const Body = ({ children }) => {
  return <div className=" min-h-[calc(100vh-6rem)] ">{children}</div>;
};

export default Body;
