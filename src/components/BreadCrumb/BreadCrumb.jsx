import React from "react";
import { Link } from "react-router-dom";

import cherwonLeft from "assets/images/icons/cherwon-left.png";

const BreadCrumb = ({ pathnames }) => {
  return (
    <ul className="flex gap-[4px]">
      {pathnames?.map((pathname, index) => {
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <li className=" text-greenColor" key={index}>
            <div className="flex items-center gap-[4px]">
              <span>{pathname.title}</span>
            </div>
          </li>
        ) : (
          <li className="text-[#BBC2D0]" key={index}>
            {index === 0 ? (
              <Link to={pathname.pathname}>{pathname.title}</Link>
            ) : (
              <div className="flex items-center gap-[6px]">
                <Link to={pathname.pathname}>{pathname.title}</Link>
                <span className="w-[8px] h-[4px] flex items-center">
                  <img className="w-full" src={cherwonLeft} alt="arrow" />
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumb;
