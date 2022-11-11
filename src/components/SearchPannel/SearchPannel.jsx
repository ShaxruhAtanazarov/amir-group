import React from "react";

// components
import { Button } from "components/Buttons";

// icons
import { SeachIcon } from "components/Icons";

const SearchPannel = () => {
  return (
    <div className="flex items-center rounded-[26px] bg-white overflow-hidden h-[50px] ">
      <input
        className="outline-none border-none w-full px-[20px]"
        type="text"
        name=""
        placeholder="Поиск по названию товара"
      />
      <Button
        whileTapBtnScale={0.4}
        btnType="burron"
        extraClass="w-[100px] h-full flex justify-center items-center"
      >
        <SeachIcon />
      </Button>
    </div>
  );
};

export default SearchPannel;
