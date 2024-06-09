"use client";
import React, { useState } from "react";
import DrawerRight from "@/components/Drawer";
import { Button } from "@material-tailwind/react";
import AddProduct from "@/components/AddProduct";
import AddtoCart from "@/components/AddtoCart";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products.items);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [ComponentToRender, setComponentToRender] = useState(null);
  const [title, setTitle] = useState("");

  const handleOpenDrawer = (Component, drawerTitle) => {
    setComponentToRender(() => Component);
    setTitle(drawerTitle);
    setOpenDrawer(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl">Products</div>
        <div className="flex gap-4">
          <Button
            onClick={() => handleOpenDrawer(AddProduct, "Add Product")}
            variant="outlined"
            color="green"
            size="lg"
          >
            Add Product
          </Button>
          <Button
            onClick={() => handleOpenDrawer(AddtoCart, "Add to Cart")}
            color="green"
            size="lg"
          >
            Add to Cart
          </Button>
          <DrawerRight
            open={openDrawer}
            setOpen={setOpenDrawer}
            Component={ComponentToRender}
            title={title}
          />
        </div>
      </div>
      <div className="grid p-8 gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <AddProduct/> */}
        {products.map((item, i) => (
          <div key={i}>
            <img
              src={"/ImgBg.png"}
              alt=""
              className="object-cover rounded-lg aspect-square"
            />
            <div className="p-2">
              <div className="text-xl">{item?.product_name}</div>
              <div className="font-bold">GHS{item?.variants[0]?.price}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <AddtoCart/> */}
    </div>
  );
};

export default Home;
