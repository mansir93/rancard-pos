"use client";
import React, { useState } from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import classNames from "classnames";
import { usePathname } from "next/navigation";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import Link from "next/link";

const SidebarNav = () => {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: "Home",
      icon: <AiOutlineHome size={30} />,
      link: `/home`,
    },
    {
      label: "Products",
      icon: <FiShoppingBag size={30} />,
      link: `/products`,
    },
    {
      label: "Order",
      icon: <AiOutlineShoppingCart size={30} />,
      link: `/order`,
    },
    {
      label: "Report",
      icon: <HiOutlineDocumentReport size={30} />,
      link: `/report`,
    },
  ];

  const isMenuActive = (menu) => {
    return pathname === menu.link;
  };

  const getNavItemClasses = (menu) =>
    classNames("cursor-pointer w-full rounded-xl", {
      "text-primary": !isMenuActive(menu),
      "text-white bg-green-500  ": isMenuActive(menu),
    });

  return (
    <div className="h-full hidden md:block bg-foreground">
      <Sidebar collapsed={collapsed} style={{ height: "100dvh" }}>
        <Menu iconShape="square">
          <div className="space-y-8 p-4">
            <div className="px-8 py-4 text-3xl font-bold text-green-500">
              Syst
            </div>
            {/* <MenuItem
              icon={<FaBars size={30} />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="cursor-pointer w-full text-primary -content"
            ></MenuItem> */}

            {menuItems.map((menu, i) => (
              <MenuItem
                key={i}
                icon={menu.icon}
                component={<Link href={menu.link} />}
                className={`${getNavItemClasses(menu)} capitalize`}
              >
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarNav;
