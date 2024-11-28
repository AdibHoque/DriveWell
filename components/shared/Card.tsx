import Image from "next/image";
import {Button} from "../ui/button";

type CardProps = {
  name: string;
  price: number;
  image: string;
  id?: string;
};

export const Card = ({name, price, image, id}: CardProps) => {
  return (
    <div className="border rounded-xl p-6 flex flex-col gap-y-5">
      <Image
        alt={name + id}
        src={image}
        width={314}
        height={208}
        className="object-cover w-full rounded-t-xl"
      />
      <h3 className="text-2xl font-bold text-[#444444]">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-primary text-xl">Price: ${price}</p>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};
