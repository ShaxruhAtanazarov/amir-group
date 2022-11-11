import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, extraClasses }) => {
  return (
    <div
      className={`container flex flex-col bg-[#F3F5F8] h-full px-[28px] py-[20px] rounded-[6px] ${extraClasses}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  extraClasses: PropTypes.string,
};

Container.defaultProps = {
  extraClasses: "",
};

export default Container;
