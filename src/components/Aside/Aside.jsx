import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import { AsideNavItem } from "./components/AsideNavItem";

// menu list
import { headerNavMenu } from "settings/header_nav_menu";

const Aside = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-themeColor w-[265px] fixed top-[70px] rounded-tr-[30px] h-[100%] pt-[55px] pl-[30px]">
      {headerNavMenu.map((item, index) => (
        <AsideNavItem itemData={item} key={index} pathname={pathname} />
      ))}
    </div>
  );
};

export default Aside;
