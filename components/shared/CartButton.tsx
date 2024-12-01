"use client";

import {useDispatch, useSelector} from "react-redux";
import {Button} from "../ui/button";
import {ShoppingCart, X} from "lucide-react";
import {RootState} from "@/redux/store";
import Image from "next/image";
import {Product} from "@/constants";
import {useState} from "react";
import {clearCart, removeFromCart} from "@/redux/cartSlice";

const CartItem = ({item}: {item: Product}) => {
  const dispatch = useDispatch();
  const {id, name, price, image} = item;
  return (
    <div className="w-full flex gap-5 items-center my-2 mx-1">
      <Button
        onClick={() => dispatch(removeFromCart(id))}
        className="rounded-full border border-primary"
        size="icon"
        variant="ghost"
      >
        <X className="text-2xl" />
      </Button>

      <Image
        src={image}
        width={100}
        height={100}
        className="rounded-sm"
        alt={id}
      />
      <div className="text-start">
        <h2 className="text-[#444444] font-semibold text-xl">{name}</h2>
        <p className="text-[#444444] text-sm">Price: ${price}</p>
      </div>
    </div>
  );
};

const CartButton = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <>
      <Button
        id="cart"
        onClick={() => setOpen(!open)}
        className={`relative group ${
          items.length > 0 && "text-primary hover:text-primary"
        }`}
        size="icon"
        variant="ghost"
      >
        <ShoppingCart />
        <div className="absolute w-1 rounded-full text-xs top-1 right-1">
          {items.length}
        </div>
        {open ? (
          <div className="bg-white border-primary border rounded-md absolute z-50 w-[320px] md:w-[340px] max-sm:transform max-sm:-left-1/2 max-sm:-translate-x-1/2 -right-24 md:-right-0 top-10 p-2 text-wrap">
            {items.length > 0
              ? items.map((item) => <CartItem key={item.id} item={item} />)
              : "Cart Empty"}
            {items.length > 0 ? (
              <div className="flex justify-between items-center my-2 mx-1">
                <p>
                  Total Price: $
                  {items.reduce((total, item) => total + item.price, 0)}
                </p>
                <p
                  onClick={() => dispatch(clearCart())}
                  className="text-[#444444] hover:text-primary hover:cursor-pointer"
                >
                  Clear Cart
                </p>
              </div>
            ) : (
              ""
            )}
            {items.length > 0 ? (
              <Button className="w-full">Purchase</Button>
            ) : (
              ""
            )}
          </div>
        ) : (
          // -right-24 md:-right-0
          <div className="bg-white border-primary border rounded-md absolute invisible group-hover:visible z-20 w-[320px] md:w-[340px] max-sm:transform max-sm:-left-1/2 max-sm:-translate-x-1/2 -right-24 md:-right-0 top-10 p-2 text-wrap">
            {items.length > 0
              ? items.map((item) => <CartItem key={item.id} item={item} />)
              : "Cart Empty"}
            {items.length > 0 ? (
              <div className="flex justify-between items-center my-2 mx-1">
                <p>
                  Total Price: $
                  {items.reduce((total, item) => total + item.price, 0)}
                </p>
                <p
                  onClick={() => dispatch(clearCart())}
                  className="text-[#444444] hover:text-primary hover:cursor-pointer"
                >
                  Clear Cart
                </p>
              </div>
            ) : (
              ""
            )}
            {items.length > 0 ? (
              <Button className="w-full">Purchase</Button>
            ) : (
              ""
            )}
          </div>
        )}
      </Button>
    </>
  );
};

export default CartButton;
