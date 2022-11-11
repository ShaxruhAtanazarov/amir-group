import React from "react";
import { Link } from "react-router-dom";

// img
import notFoundBanner404 from "assets/images/not-found-404/not-found-404.png";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col absolute top-0 left-0 z-[10000] bg-[#F3F5F8]">
      <div className="w-full mx-auto flex items-center justify-center rounded-[15px] overflow-hidden max-w-[30%]">
        <img className="" src={notFoundBanner404} alt="404" />
      </div>
      <Link className="text-[50px] font-thin" to={"/"}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
