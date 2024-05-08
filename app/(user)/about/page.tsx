

export default function AboutPage() {
	return (
		<main>
			<section>

				<section className="mx-auto w-[80%] px-4 sm:px-6 lg:px-8 mt-4">

					<section aria-label="Breadcrumb" className="flex my-10">
						<ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
							<li className="flex items-center">
								<a
									href="#"
									className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>

									<span className="ms-1.5 text-xs font-medium"> Home </span>
								</a>
							</li>

							<li className="relative flex items-center">
								<span
									className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
								>
								</span>

								<a
									href="#"
									className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
								>
									About
								</a>
							</li>
						</ol>
					</section>
					<div className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div className="lg:pr-8 lg:pt-4">
							<div className="lg:max-w-lg">
								<h2 className=" font-semibold text-lg leading-7 text-teal-600">Shop with</h2>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">E-COMMERCE STORE</p>
								<p className="mt-6 text-lg leading-8 text-gray-600 text-justify indent-12">E-COMMERCE STORE is a popular e-commerce store that specializes in providing authentic Shoes products to customers all over the world. The online store offers a wide range of shoes. Customers can browse through an extensive selection of high-quality items sourced from Japan and purchase them with ease via E-COMMERCE STORE &apos;s user-friendly website. The store prides itself on providing exceptional customer service, quick delivery times, and competitive pricing.</p>
							</div>
						</div >



						<img
							data-aos="fade-left"
							src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
							loading="lazy"
							alt="Product screenshot"
							className="w-[48rem] rounded-lg mt-8"
							width={2003}
							height={1335}
						/>
					</div>
				</section>
			</section>
		</main>
	);
}
