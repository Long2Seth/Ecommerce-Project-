import React from 'react'
import { Metadata, ResolvedMetadata } from 'next';
import ProductCardDetailComponent from '@/components/card/ProductCardDetailComponent';

type propsType = {
    params: {
        id: string;
    }
    searchParams:
    {
        [key: string]: string | string[] | undefined;
    }
};


const getData = async (id: string) => {
    const res = await fetch(`https://store.istad.co/api/products/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
};



export async function getMetadata({ params, searchParams } : propsType , parent:ResolvedMetadata): Promise<Metadata> {
    const id = params.id;
    const product = await fetch(`https://store.istad.co/api/products/${id}`)
        .then((res) => res.json())

    return {
        title: product.title,
        description: product.description,
        openGraph:
        {
            images: product.image,
        }
    }
}


export default async function DetailProduct(prop: propsType) {
    const data = await getData(prop.params.id);

    return (
        <ProductCardDetailComponent
                name={data?.name || "NoTitle"}
                desc={data?.desc || "No Description"}
                price={data?.price || 0}
                image={
                    data?.image ||
                    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                }
            />
    )
}
