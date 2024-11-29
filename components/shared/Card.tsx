"use client";

import Image from "next/image";
import {Button} from "../ui/button";
import {useDispatch} from "react-redux";
import {addToCart} from "@/redux/cartSlice";
import Swal from "sweetalert2";

type CardProps = {
  name: string;
  price: number;
  image: string;
  id: string;
};

export const Card = ({name, price, image, id}: CardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({id, name, price, image}));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to your Cart!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="border rounded-xl p-6 flex flex-col gap-y-5">
      <Image
        alt={name + id}
        src={image}
        width={314}
        height={208}
        className="object-cover w-full h-full rounded-t-xl"
      />
      <h3 className="text-2xl font-bold text-[#444444]">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-primary text-xl">Price: ${price}</p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};
