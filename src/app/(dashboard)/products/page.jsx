"use client";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../../redux/slices/productSlice";
import { Typography } from "@material-tailwind/react";

const Products = () => {
  const [product, setProduct] = useState({ id: "", name: "", price: "" });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };
  const TABLE_HEAD = ["Name", "Variants", "Qty", "Min.Price", "Action", ""];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-8">
        <div className="font-bold text-3xl">Product History </div>
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
          {products.map((item, index) => {
            const isLast = index === products.length - 1;
            const classes = isLast ? "p-8" : "p-8 border-b-2 border-gray-200";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography variant="small">{item.product_name}</Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.variants.map((item) => (
                      <span key={item}>{item.variant_name}</span>
                    ))}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.variants.length}
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
                    {item.variants[0].price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    onClick={() => handleDeleteProduct(item.id)}
                  >
                    <RiDeleteBin5Line size={20} color="red" />{" "}
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

export default Products;
