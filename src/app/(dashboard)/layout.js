"use client";
import React, { useState, useEffect } from "react";

import NavbarTop from "@/components/Navbar";
import Sidebarleft from "@/components/Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter()
  
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    !isAuthenticated && router.push("/login");
  }, [isAuthenticated]);

  return (
    <div className="flex">
      <Sidebarleft />
      <div className="w-full">
        <NavbarTop />
        <div className="p-2 md:p-4 lg:p-8 bg-gray-300">{children}</div>
      </div>
    </div>
  );
}
