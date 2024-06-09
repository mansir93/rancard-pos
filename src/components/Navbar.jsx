"use client";
import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Navbar,
  Typography,
  Button,
  Input,
  MenuList,
  MenuItem,
  Menu,
  MenuHandler,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import DrawerRight from "./Drawer";
import Payments from "./Payments";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const NavbarTop = () => {
  const dispatch = useDispatch();

  const { totalQuantity } = useSelector((state) => state.cart);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [ComponentToRender, setComponentToRender] = useState(null);
  const [title, setTitle] = useState("");

  const handleOpenDrawer = (Component, drawerTitle) => {
    setComponentToRender(() => Component);
    setTitle(drawerTitle);
    setOpenDrawer(true);
  };

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <div className="flex justify-center gap-4 items-center">
        <div
          onClick={() => handleOpenDrawer(Payments, "Payment")}
          className="px-2 py-1 rounded-full flex justify-center gap-4 items-center bg-green-500 text-white"
        >
          <AiOutlineShoppingCart size={20} />
          {totalQuantity}
        </div>
        <AiOutlineBell size={40} />
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                className="border border-gray-900 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <MenuItem>
              <Typography onClick={() => dispatch(logout())} color="red">
                Logout
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  }

  return (
    <div>
      <Navbar fullWidth className="px-4 py-2 ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Input
            // type="search"
            placeholder="Search"
            containerProps={{
              className: "min-w-[288px]",
            }}
            className="max-w-md !border-t-blue-gray-300 pl-9 placeholder:text-blue -gray-300 focus:!border-blue-gray-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <ProfileMenu />
        </div>
      </Navbar>
      <DrawerRight
        open={openDrawer}
        setOpen={setOpenDrawer}
        Component={ComponentToRender}
        title={title}
      />
    </div>
  );
};

export default NavbarTop;
