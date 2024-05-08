'use client';
import { Button } from '@nextui-org/react';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from '@/redux/hook';
import { increment } from '@/redux/features/counter/counterSlice';


type propsType = {
  id: number,
  name: string,
  image: string,
  price: number,
  onClick?: () => void
}

const placeholderImage = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

function ProductCardComponent({ onClick, name, image, price, id }: propsType) {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value)
  return (
    <section className=' relative ' onClick={onClick}>
      <section className="group block overflow-hidden rounded-md">
        <img src={image || placeholderImage}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
        <Button className=' absolute m-2 top-0 right-0 bg-slate-100 py-1 px-2 rounded-md'>
          <MdOutlineShoppingCart size={25} onClick={() => {
            // Assuming you have the missing properties available
            const productToAdd = {
              id,
              name,
              image,
              price,
              title: "Your Title Here",
              description: "Your Description Here",
              category: "Your Category Here",
            };
            dispatch(addToCart(productToAdd)
              ,
              dispatch(increment()));
          }} />
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
