import React from "react";
import { get } from "lodash";
import { Link, useLocation } from "react-router-dom";

// utils
import { splitPrice } from "utils/splitPrice";

// components
import { Badge } from "components/Badge";
import { PriceBadge } from "components/Badge";

// icons
import { GiftIcon } from "components/Icons";
import { ExchangeIcon } from "components/Icons";
import { DiscountIcon } from "components/Icons";
import { DiscountForimeiIcon } from "components/Icons";

// Placeholder Banner
import placeholdere_product from "assets/images/place-holder-imgs/placeholdere_product.png";

// Utils
import { ellipseTextByLine } from "utils/textEllipseByLine";
import { findNumberPercent } from "utils/findNumberPercent";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const ellipseText = ellipseTextByLine(1);

  // Card Props
  const product_id = get(product, "id", 0);
  const productPrice = get(product, "product_price", 0);
  const markup_months = get(product, "markup_months", 0);
  const has_gift = get(product, "has_gift", false);
  const has_exchange = get(product, "has_exchange", false);
  const has_discount = get(product, "has_discount", false);
  const has_imei_discount = get(product, "has_imei_discount", false);
  const markup_percent = get(product, "markup_percent", 0);
  const productName = get(product, "product_name", "No Data");
  const markup_months_last = markup_months[markup_months.length - 1];
  const productBanner = get(product, "image");
  const markup_price_percent =
    markup_months_last.markup_percent_by * markup_percent;
  const markup_price = findNumberPercent(productPrice, markup_price_percent);

  return (
    <Link
      className="bg-white p-[12px] rounded-[10px] flex flex-col justify-center items-center w-full hover:drop-shadow-lg transition-all"
      style={{ boxShadow: "0px 10px 30px rgba(138, 149, 158, 0.1)" }}
      to={`${pathname}/goods-details/${product_id}/${productName}`}
    >
      <div className="h-[168px] w-[100%] bg-[#F7F7F7] flex justify-center items-center rounded-[6px] mb-[6px] relative z-40">
        <div className="absolute top-[12px] left-[6px] flex flex-col gap-[6px] z-50">
          {has_exchange ? (
            <Badge bgColor="#F39DBD">
              <ExchangeIcon />
            </Badge>
          ) : null}
          {has_gift ? (
            <Badge bgColor={"#A2AEDB"}>
              <GiftIcon />
            </Badge>
          ) : null}

          {has_imei_discount ? (
            <Badge bgColor={"#AAD9AC"}>
              <DiscountForimeiIcon />
            </Badge>
          ) : null}
          {has_discount ? (
            <Badge bgColor={"#FFBD95"}>
              <DiscountIcon />
            </Badge>
          ) : null}
        </div>

        <div
          className={`rounded-lg overflow-hidden ${
            productBanner ? "" : "h-full"
          }`}
        >
          <img
            className="object-cover h-full w-full"
            src={productBanner ? productBanner : placeholdere_product}
            alt="product img"
          />
        </div>
      </div>
      <div className="text-[#262728] text-[15px] leading-[17px] tracking-[-0.3px] mb-[6px]">
        <p style={ellipseText} className="block  mb-[6px]">
          {productName}
        </p>
        <span> {splitPrice(productPrice)} сум </span>
      </div>
      <div className="w-full">
        <PriceBadge
          markupPrice={splitPrice(markup_price)}
          markupMonthsLast={markup_months_last}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
