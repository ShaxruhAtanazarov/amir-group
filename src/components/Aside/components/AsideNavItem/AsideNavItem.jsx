import React from "react";
import { Link } from "react-router-dom";

const AsideNavItem = ({ itemData, setActivePage, pathname }) => {
  const { title, icon, path } = itemData;

  let currentPage = "/" + pathname.split("/")[1] === path;

  return (
    <Link
      className={`w-full h-[50px] flex items-center gap-[16px] pl-[30px] mb-[10px] rounded-l-[30px] relative nav-item ${
        currentPage ? " text-[#3D639D] active-page" : "text-white"
      }`}
      to={path}
    >
      <span style={{ fill: `${currentPage ? "#3D639D" : "#fff"}` }}>
        {icon}
      </span>
      <span className="font-[500]">{title}</span>
    </Link>
  );
};

export default AsideNavItem;
