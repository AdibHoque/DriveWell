"use client";

import {useSelector} from "react-redux";
import {Button} from "../ui/button";
import {ShoppingCart} from "lucide-react";
import {RootState} from "@/redux/store";

const CartButton = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <Button
      className={`relative ${items.length > 0 && "text-primary"}`}
      size="icon"
      variant="ghost"
    >
      <ShoppingCart />
      <div className="absolute w-1 rounded-full text-xs top-1 right-1">
        {items.length}
      </div>
    </Button>
  );
};

export default CartButton;
