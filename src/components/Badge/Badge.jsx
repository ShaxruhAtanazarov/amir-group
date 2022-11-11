import React from "react";

const Badge = ({ children, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`px-[10px] py-[6px] rounded-[6px] w-[36px] h-[28px] flex items-center justify-center`}
    >
      <span className="block max-w-[16px] h-[16px]">{children}</span>
    </div>
  );
};

export default Badge;
