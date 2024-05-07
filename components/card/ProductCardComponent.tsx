'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";

type propsType = {
  name: string,
  image?: string,
  price: number,
  onClick?: () => void
}

const placeholderImage = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

function ProductCardComponent({ onClick, name, image, price }: propsType) {
  return (
    <section className=' relative ' onClick={onClick}>
      <section className="group block overflow-hidden rounded-md">
        <img src={image || placeholderImage}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
        <Button className=' absolute m-2 top-0 right-0 bg-slate-100 py-1 px-2 rounded-md'>
          <MdOutlineShoppingCart size={25} />
        </Button>

        <div className="relative bg-white pt-2">
          <h3 className="text-lg font-medium text-gray-600 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="">
            <span className="tracking-wider text-lg text-[#0f766e]"> ${price} </span>
          </p>
        </div>
      </section>
    </section>
  );
}

export default ProductCardComponent;
