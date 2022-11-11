import React from "react";

const Button = ({ children, btnType, extraClass }) => {
  return (
    <button type={btnType} className={`bg-greenColor ${extraClass}`}>
      {children}
    </button>
  );
};

export default Button;
