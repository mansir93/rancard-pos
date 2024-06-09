"use client";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-tailwind/react";

const Report = () => {
  const { orders } = useSelector((state) => state.orders);
  const products = useSelector((state) => state.products.items);

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center py-8">
        <div className="font-bold text-3xl">Report </div>
        <div className=" text-2xl border p-2">filters </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 space-y-8 bg-white">
          <p>Total orders</p>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="p-8 space-y-8 bg-white">
          <p>Total products</p>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>
        <div className="p-8 space-y-8 bg-white">
          <p>sucessful orders</p>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="p-8 space-y-8 bg-white">
          <p>Total sales</p>
          <p className="text-3xl font-bold">GHS 14,000</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
