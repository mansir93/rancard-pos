"use client";
import { RxActivityLog } from "react-icons/rx";
import { FaUsersCog, FaSms } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { GoGraph } from "react-icons/go";
import React, { useEffect, useState, useMemo } from "react";
import { FaChartPie, FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useSearchParams, useRouter,usePathname } from "next/navigation";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";


import Link from "next/link";
// import Cookies from "js-cookie";

const SidebarNav = () => {
  // const link = Cookies.get("v-id");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: "Home",
      icon: <GoGraph size={30} />,
      link: `/home`,
    },
    {
      label: "Products",
      icon: <GoGraph size={30} />,
      link: `/products`,
    },
    {
      label: "Order",
      icon: <GoGraph size={30} />,
      link: `/order`,
    },
    {
      label: "Report",
      icon: <GoGraph size={30} />,
      link: `/report`,
    },
  ];

  const isMenuActive = (menu) => {
    return pathname === menu.link;
  };

  const getNavItemClasses = (menu) =>
    classNames("cursor-pointer w-full hover:text-primary-content", {
      "text-primary": !isMenuActive(menu),
      "text-primary-dark border-b-2 border-primary-light  ": isMenuActive(menu),
    });

  return (
    <div className="h-full hidden md:block bg-foreground">
      <Sidebar collapsed={collapsed} style={{ height: "100dvh" }}>
        <Menu iconShape="square">
          <div className="space-y-8">
            <div className="px-8 py-4 text-3xl">
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
