"use client";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-tailwind/react";

const Order = () => {
  const { orders } = useSelector((state) => state.orders);
//   console.log({ orders });
  const TABLE_HEAD = [
    "customer",
    "product",
    "Price",
    "Delivery",
    "Date",
    "Status",
    "",
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-8">
        <div className="font-bold text-3xl">Orders </div>
      </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            const isLast = index === orders.length - 1;
            const classes = isLast ? "p-8" : "p-8 border-b-2 border-gray-200";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography variant="small">{item.name}</Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.product_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item?.price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item?.delivery}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item?.date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item?.date}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
