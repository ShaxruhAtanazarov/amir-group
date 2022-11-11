import { PriceBadge } from "components/Badge";
import React from "react";
import { useState } from "react";
import { findNumberPercent } from "utils/findNumberPercent";
import { splitPrice } from "utils/splitPrice";

const PriceBoard = ({
  productPrice,
  markupMonths,
  markupPercent,
  description,
}) => {
  const [activeMonth, setActiveMonth] = useState(0);

  const [markUpPriceMount, setMarkUpPriceMount] = useState({
    markup_percent_by: markupMonths[0]["markup_percent_by"],
    month: markupMonths[0]["month"],
    markup_price() {
      const result = findNumberPercent(
        productPrice,
        markupPercent * this.markup_percent_by
      );

      return result;
    },
    totalPriceWithMarkup() {
      return this.markup_price() + productPrice;
    },
  });

  const markupMonthButtonHandler = (markupMonth, index) => {
    setActiveMonth(index);
    setMarkUpPriceMount({
      markup_percent_by: markupMonth["markup_percent_by"],
      month: markupMonth["month"],
      markup_price() {
        const result = findNumberPercent(
          productPrice,
          markupPercent * this.markup_percent_by
        );

        return result;
      },
      totalPriceWithMarkup() {
        return this.markup_price() + productPrice;
      },
    });
  };

  return (
    <div className="w-full">
      <div className="border-b text-[16px] leading-[19px] border-[#F7F7F7] w-full tracking-[0.01em] pb-[20px] mb-[20px]">
        <p className="text-[#BBC2D0] mb-[8px]">Цена телефона</p>
        <p className="font-semibold">{splitPrice(productPrice)} сум </p>
      </div>
      <div className="border-b text-[16px] leading-[19px] border-[#F7F7F7] tracking-[0.01em] w-full py-[20px]">
        <div className="flex justify-between items-end mb-[16px]">
          <div>
            <p className="text-[#BBC2D0] mb-[8px]">Общая цена (с наценкой)</p>
            <p className="font-semibold">
              {splitPrice(markUpPriceMount.totalPriceWithMarkup())} сум{" "}
            </p>
          </div>
          <PriceBadge
            markupPrice={splitPrice(markUpPriceMount.markup_price())}
            markupMonthsLast={markUpPriceMount}
          />
        </div>
        <ul
          className="flex rounded-md border-[1px] border-[#00C48C] mb-[8px]"
          role="group"
        >
          {markupMonths.map((markupMonth, index) => (
            <li
              className={`w-[25%] py-[11px] flex justify-center items-center border-r text-[15px] leading-[17px] tracking-[-0.3px] last:border-r-0 border-[#00C48C] cursor-pointer hover:bg-[#00C48C] hover:text-[#fff] ${
                activeMonth === index
                  ? "bg-[#00C48C] text-[#fff]"
                  : "text-[#00C48C]"
              }`}
              key={index}
              onClick={() => markupMonthButtonHandler(markupMonth, index)}
            >
              {markupMonth.title}
            </li>
          ))}
        </ul>
        <div className="flex gap-[10px] justify-center">
          <span>Наценка:</span>
          <b>{markupPercent}%</b>
        </div>
        <p className="text-[#BBC2D0] mb-[8px]">Общие характеристики</p>
        <p className="text-[#262728] ">Тип: {description}</p>
      </div>
    </div>
  );
};

export default PriceBoard;
