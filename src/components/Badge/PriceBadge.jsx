import React from "react";

const PriceBadge = ({ markupPrice, markupMonthsLast, extraClass }) => {
  return (
    <div className="flex items-center gap-[6px] ${extraClass}">
      <span className="bg-[#FF647C] rounded-[2px] px-[6px] py-[2px] text-white font-semibold">
        от {markupPrice} сум
      </span>
      <span className="text-[#BBC2D0] text-[11px] leading-[13px]">
        x{markupMonthsLast.month}
      </span>
    </div>
  );
};

export default PriceBadge;
