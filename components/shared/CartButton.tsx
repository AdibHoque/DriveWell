"use client";

import {useSelector} from "react-redux";
import {Button} from "../ui/button";
import {ShoppingCart} from "lucide-react";
import {RootState} from "@/redux/store";
import Image from "next/image";
import {Product} from "@/constants";
import {useState} from "react";

const CartItem = ({item}: {item: Product}) => {
  const {id, name, price, image} = item;
  return (
    <div className="w-full flex gap-5 items-center my-2 mx-1 hover:bg-black/10">
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
          <div className="bg-white border-slate-600/50 border rounded-sm absolute z-50 min-w-[300px] -right-24 md:-right-0 top-10 p-2 text-wrap">
            {items.length > 0
              ? items.map((item) => <CartItem key={item.id} item={item} />)
              : "Cart Empty"}
            {items.length > 0 ? (
              <div className="flex justify-between items-center my-2 mx-1">
                <p>Total Price:</p>{" "}
                <p>${items.reduce((total, item) => total + item.price, 0)}</p>
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
          <div className="bg-white border-slate-600/50 border rounded-sm absolute invisible group-hover:visible z-20 min-w-[300px] -right-24 md:-right-0 top-10 p-2 text-wrap">
            {items.length > 0
              ? items.map((item) => <CartItem key={item.id} item={item} />)
              : "Cart Empty"}
            {items.length > 0 ? (
              <div className="flex justify-between items-center my-2 mx-1">
                <p>Total Price:</p>{" "}
                <p>${items.reduce((total, item) => total + item.price, 0)}</p>
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
