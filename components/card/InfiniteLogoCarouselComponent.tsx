"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function InfiniteLogoCarouselComponent() {
  return (
    <main>
      <div className="flex justify-center items-center my-20">
        <Marquee
          gradient
          pauseOnHover={false} // Changed from true to false
          className="h-[200px]  overflow-hidden grid"
        >
          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../adidas.svg" className="w-40  " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../converse.svg" className="w-60  " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../fila.svg" className="w-60 " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../jordan.svg" className="w-40 " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../newbalance.svg" className="w-56 " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../nike.svg" className="w-60 " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../puma.svg" className="w-40 " alt="" />
          </div>

          <div className=" flex pr-20 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../reebok.svg" className="w-60 " alt="" />
          </div>
        </Marquee>
      </div>
    </main>
  );
}
