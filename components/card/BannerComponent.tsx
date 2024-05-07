'use client';
import React, { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function BannerComponent() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section
            className="relative bg-[url(https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw0cfc3423/images/page-designer/2023/september/16017_Comp_A_Desktop.jpg?sw=1616&sfrm=jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" data-aos="fade-right">
                <div className="max-w-2xl ltr:sm:text-left rtl:sm:text-right">
                    <h1 className=" font-extrabold md:text-6xl tracking-wide text-[30px]  text-white">
                        Let us find your
                        <strong className="block font-extrabold text-teal-700">
                            Forever Home.
                        </strong>
                    </h1>
                    <p className="mt-4 max-w-xl text-[18px] md:text-2xl text-gray-300">
                        Shop the brand new New Balance Forest
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="/shop">
                            <Button className=" bg-[#F07423]  text-white p-6 md:p-8 text-[18px] md:text-2xl " radius="sm" >
                                Shop now
                            </Button>
                        </a>
                        <a href="/about">
                            <Button className=" bg-[#0f766e] text-white p-6 md:p-8 text-[18px] md:text-2xl " radius="sm" color="primary">
                                About Us
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
