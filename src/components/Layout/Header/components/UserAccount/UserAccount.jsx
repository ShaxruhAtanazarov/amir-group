import React from "react";
import { Link } from "react-router-dom";

// Icons
import UserIcon from "components/Icons/UserIcon";

const UserAccount = () => {
  const flexRow = "flex justify-center items-center";

  return (
    <Link
      to={"/user-account"}
      className={`w-[292px] h-[70px] bg-themeColor rounded-bl-[30px] ${flexRow} gap-[12px]`}
    >
      <span className="text-[16px] text-textColor">Личный кабинет</span>
      <span className={`w-[32px] h-[32px] ${flexRow} bg-white rounded-full`}>
        <UserIcon />
      </span>
    </Link>
  );
};

export default UserAccount;
