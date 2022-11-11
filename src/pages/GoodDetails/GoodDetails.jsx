import React from "react";
import { get } from "lodash";
import { useParams } from "react-router-dom";

// mock data
import { products } from "mock";

// components
import Cart from "./components/Cart";
import { BreadCrumb } from "components/BreadCrumb";
import ProductSlider from "./components/ProductSlider";
import PriceBoard from "./components/PriceBoard";
import { useActions } from "hooks/actionHooks/useActions";

const GoodDetails = () => {
  const { addToCart } = useActions();
  const { id, product_name, pathname } = useParams();

  const product = products?.find((product) => product.id === id);

  // Product Props
  const thumbs = get(product, "thumbs", []);
  const has_gift = get(product, "has_gift", false);
  const description = get(product, "desc", "No Data");
  const productPrice = get(product, "product_price", 0);
  const markupMonths = get(product, "markup_months", []);
  const markupPercent = get(product, "markup_percent", 0);
  const has_exchange = get(product, "has_exchange", false);
  const has_discount = get(product, "has_discount", false);
  const productName = get(product, "product_name", "No Data");
  const has_imei_discount = get(product, "has_imei_discount", false);

  const fakePathnames = [
    { title: "", pathname: "/" },
    { title: "Оформить заказ", pathname: "/" + pathname },
    { title: product_name, pathname: product_name },
  ];

  const cardHandler = () => {
    addToCart({ ...product });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-[30px]">
        <BreadCrumb pathnames={fakePathnames} />
      </div>
      <div className="bg-white rounded-[16px] p-[30px] flex-1 relative flex flex-col">
        <div className="absolute right-[16px] -top-[20px]">
          <Cart />
        </div>
        <h1 className="text-themeColor font-semibold text-[22px] leading-[26px] mb-[30px]">
          {productName}
        </h1>
        <div className="flex gap-[20px]">
          <div className="max-w-[500px] w-full bg-[#F3F5F8] h-[380px] rounded-[16px]">
            <ProductSlider
              hasDiscount={has_discount}
              hasExchange={has_exchange}
              hasGift={has_gift}
              hasImeiDiscount={has_imei_discount}
              thumbs={thumbs}
            />
          </div>
          <PriceBoard
            productPrice={productPrice}
            markupMonths={markupMonths}
            markupPercent={markupPercent}
            description={description}
          />
        </div>
        <div className="w-full mt-auto">
          <button
            className="bg-[#00C48C] rounded-[26px] font-semibold leading-[19px] text-white h-[52px] w-full flex items-center justify-center"
            onClick={cardHandler}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodDetails;
