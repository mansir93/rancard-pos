"use client";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min- h-screen flex flex-col lg:flex-row">
      <div className="flex justify-center flex-1 bg-ImgBg">
        <img
          className="h-full w-full object-cover object-center"
          src="/profile.webp"
          alt=""
        />
      </div>
      <div className="h-full flex-1 flex flex-col items-center justify-center min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
