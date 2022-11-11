import React from "react";
import { Badge } from "components/Badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import {
  DiscountForimeiIcon,
  DiscountIcon,
  ExchangeIcon,
  GiftIcon,
} from "components/Icons";

const ProductSlider = ({
  thumbs,
  hasGift,
  hasExchange,
  hasDiscount,
  hasImeiDiscount,
}) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-full"
      mousewheel={true}
    >
      <div className="absolute top-[12px] left-[6px] flex flex-col gap-[6px] z-50">
        {hasExchange ? (
          <Badge bgColor="#F39DBD">
            <ExchangeIcon />
          </Badge>
        ) : null}
        {hasGift ? (
          <Badge bgColor={"#A2AEDB"}>
            <GiftIcon />
          </Badge>
        ) : null}

        {hasImeiDiscount ? (
          <Badge bgColor={"#AAD9AC"}>
            <DiscountForimeiIcon />
          </Badge>
        ) : null}
        {hasDiscount ? (
          <Badge bgColor={"#FFBD95"}>
            <DiscountIcon />
          </Badge>
        ) : null}
      </div>
      {thumbs.map((thumb, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex justify-center items-center relative">
            <img
              className="w-[270px] h-[270px] object-contain bg-slate-50 p-4"
              src={thumb.img}
              alt="product banner"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
