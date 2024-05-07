'use client';
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import BannerComponent from "@/components/card/BannerComponent";
import InfiniteLogoCarouselComponent from "@/components/card/InfiniteLogoCarouselComponent";
import { useRouter } from "next/navigation";
import PaginationComponent from "@/components/card/PaginationComponent";
import ProductCardComponent from "@/components/card/ProductCardComponent";
import { Image } from "@nextui-org/react";

export default function Home() {
	const [getData, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const router = useRouter();

	useEffect(() => {
		const url = `https://store.istad.co/api/products/?page=${currentPage}&page_size=10`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data.results);
				const totalPages = Math.ceil(data.total / 10);
				setTotalPage(totalPages);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, [currentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};



	return (
		<main className='w-full flex flex-col justify-center'>
			<BannerComponent />
			<InfiniteLogoCarouselComponent />
			<section className="w-[80%] px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-20 " data-aos="fade-up">
				<div>
					<h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white ">
						New Collection
					</h1>

					<p className="max-w-2xl text-xl mx-auto mt-4 text-gray-500 dark:text-white ">
						Our new shoes collection is designed for those who want to step out in style and comfort, with
						innovative features and sustainable materials.
					</p>
				</div>

				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3">
					<li>
						<a href="product.html" className="relative block group">
							<Image src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
								className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg" />

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 className="text-xl font-medium text-white">Casual Trainers</h3>

								<Button className="text-lg bg-[#0f766e] text-white" onClick={() => router.push('/myShop')} radius="sm">
									Shop Now
								</Button>
							</div>
						</a>
					</li>

					<li>
						<a href="product.html" className="relative block group">
							<Image src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
								alt=""
								className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg" />

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

								<Button className="text-lg bg-[#0f766e] text-white" onClick={() => router.push('/myShop')} radius="sm">
									Shop Now
								</Button>
							</div>
						</a>
					</li>

					<li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 md:col-span-2">
						<a href="" className="relative block group">
							<Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt=""
								className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg" />

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

								<Button className="text-lg bg-[#0f766e] text-white" onClick={() => router.push('/myShop')} radius="sm">
									Shop Now
								</Button>
							</div>
						</a>
					</li>
				</ul>
			</section>
			<section className="w-full flex justify-center my-[100px] bg-gray-50 rounded-md">
				<section className="grid justify-center w-[80%]" data-aos="fade-up">
					<h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white ">Popular Products</h1>
					<p className="max-w-2xl text-xl mx-auto mt-4 mb-10 text-gray-500 dark:text-white ">
						Our new shoes collection is designed for those who want to step out in style and comfort, with
						innovative features and sustainable materials.
					</p>
					<section className='grid place-content-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 '>
						{getData.map((product: any, index) => (
							<ProductCardComponent
								key={index}
								name={product.name}
								image={product.image}
								price={product.price}
								onClick={() => router.push(`/${product.id}`)}
							/>
						))}
					</section>
				</section>
			</section>
			<section className=" w-full flex justify-center">
				<PaginationComponent currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
			</section>




{/* 
			<section className=" w-full flex justify-center">
				<section className="bg-white">
					<div className="mx-auto w-[80%] px-4 py-12 sm:px-6 lg:px-8 lg:py-16" data-aos="fade-up">
						<h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white mt-20 mb-10 ">
							Read trusted reviews from our customers
						</h1>

						<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
							<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
								<div className="flex items-center gap-4">

									<Image src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&amp;q=80"

										className="h-14 w-14 rounded-full object-cover" />

									<div>
										<div className="flex justify-center gap-0.5 text-green-500">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
									</div>
								</div>

								<p className="mt-4 text-gray-700">
									I've been using the Nike for a few weeks now and I'm absolutely loving it! It's so easy to use
									and it's really helped me to walk really well.
								</p>
							</blockquote>

							<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
								<div className="flex items-center gap-4">
									<Image alt="Man"
										src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
										className="h-14 w-14 rounded-full object-cover" />

									<div>
										<div className="flex justify-center gap-0.5 text-green-500">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
									</div>
								</div>

								<p className="mt-4 text-gray-700">
									I would highly recommend this website to anyone who is looking for a high quality shoes. It's a
									great product and it's really worth the investment.
								</p>
							</blockquote>

							<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
								<div className="flex items-center gap-4">
									<Image 
									alt="Man"
									width={500} height={300}
										src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
										className="h-14 w-14 rounded-full object-cover" />

									<div>
										<div className="flex justify-center gap-0.5 text-green-500">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
												fill="currentColor">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
									</div>
								</div>

								<p className="mt-4 text-gray-700">
									I've been using the New Balance for a few months now and I'm amazed at how much it's helped my
									feets. I used to have really bad feets, but now my feets is heal. Thanks to the New Balance is
									easy to use and it's gentle on my skin. I would highly recommend it to anyone who is struggling
									with feets.
								</p>
							</blockquote>
						</div>
					</div>
				</section>
			</section> */}
		</main>
	);
}
