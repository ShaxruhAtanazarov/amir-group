import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItems } from "store/slices/cart_slice";

// components
import { ShoppingCartIcon } from "components/Icons";

const Cart = () => {
  const [active, setActive] = useState(false);
  const cart = useSelector(cartItems);

  const inCart = cart.cartItems.length
    ? "inCart-active  gap-[10px] px-[16px] py-[10px]"
    : "inCart";

  return (
    <Link
      onClick={() => setActive(!active)}
      to={"/"}
      className={` h-[60px] rounded-full bg-[#FF647C] flex items-center justify-center ${inCart}`}
    >
      <ShoppingCartIcon />
      <span
        className={`text-white font-medium leading-[20px] text-[17px] add-cart-text`}
      >
        Перейти в корзину
      </span>
      <span
        className={`w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center font-semibold text-[16px] leading-[21px] text-[#FF647C] add-cart-quantity `}
      >
        {cart.cartItems.length}
      </span>
    </Link>
  );
};

export default Cart;
