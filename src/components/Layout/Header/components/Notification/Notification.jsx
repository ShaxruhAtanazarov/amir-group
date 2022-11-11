import React from "react";

// Icons
import NotificationIcon from "components/Icons/NotificationIcon";

const Notification = () => {
  return (
    <div className="w-[24px] h-[24px] relative">
      <span className="absolute -top-[13px] -right-[10px] w-[24px] h-[24px] flex items-center justify-center bg-greenColor text-white rounded-full text-[12px]">
        1
      </span>
      <span className="w-full h-full block">
        <NotificationIcon />
      </span>
    </div>
  );
};

export default Notification;
