import React from "react";

// components
import { Logo } from "../Logo";
import { UserAccount } from "./components/UserAccount";
import { Notification } from "./components/Notification";

const Header = () => {
  const flexRow = "flex justify-between items-center";

  return (
    <header
      className={`h-[70px] bg-white ${flexRow} fixed w-full shadow-sm drop-shadow-sm z-[100]`}
    >
      <div className="px-[60px]">
        <div className={`${flexRow} h-full`}>
          <Logo color={"black"} />
          <div className={`${flexRow} gap-[43px] absolute right-0 top-0`}>
            <Notification />
            <UserAccount />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
