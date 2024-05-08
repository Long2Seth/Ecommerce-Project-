import { title } from "@/components/primitives";

export default function BlogPage() {
	return (
		<main className="w-[80%] mx-auto px-4 py-8">
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
							Policy
						</a>
					</li>
				</ol>
			</section>




			<h1 className="text-3xl font-bold mb-4 text-AscendColo text-primaryColor">
				Privacy Policy
			</h1>
			<p className="mb-4 text-AscendColo">
				This privacy policy sets out how our website uses and protects any
				information that you give us when you use this website.
			</p>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">
				Information We Collect
			</h2>

			<p className="mb-4 text-AscendColo">
				We may collect the following information:
			</p>

			<ul className="list-disc list-inside mb-4 text-AscendColo">
				<li>Your name and contact information</li>
				<li>Demographic information</li>
				<li>Other information relevant to customer surveys and/or offers</li>
			</ul>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">
				How We Use the Information
			</h2>

			<p className="mb-4 text-AscendColo">
				We require this information to understand your needs and provide you
				with a better service, and in particular for the following reasons:
			</p>

			<ul className="list-disc list-inside mb-4 text-AscendColo">
				<li>Internal record keeping</li>
				<li>Improving our products and services</li>
				<li>Sending promotional emails about new products, special offers, or
					other information which we think you may find interesting
				</li>
				<li>
					From time to time, we may also use your information to contact you
					for market research purposes. We may contact you by email, phone, or
					mail. We may use the information to customize the website according
					to your interests.
				</li>
			</ul>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">Security</h2>

			<p className="mb-4 text-AscendColo">
				We are committed to ensuring that your information is secure. In order
				to prevent unauthorized access or disclosure, we have put in place
				suitable physical, electronic, and managerial procedures to safeguard
				and secure the information we collect online.
			</p>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">Cookies</h2>

			<p className="mb-4 text-AscendColo">
				A cookie is a small file that asks permission to be placed on your
				computer hard drive. Once you agree, the file is added, and the cookie
				helps analyze web traffic or lets you know when you visit a particular
				site. Cookies allow web applications to respond to you as an
				individual. The web application can tailor its operations to your
				needs, likes, and dislikes by gathering and remembering information
				about your preferences.
			</p>

			<p className="mb-4 text-AscendColo">
				Overall, cookies help us provide you with a better website by enabling
				us to monitor which pages you find useful and which you do not. A
				cookie in no way gives us access to your computer or any information
				about you, other than the data you choose to share with us.
			</p>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">
				Links to Other Websites
			</h2>

			<p className="mb-4 text-AscendColo">
				Our website may contain links to other websites of interest. However,
				once you have used these links to leave our site, you should note that
				we do not have any control over that other website. Therefore, we
				cannot be responsible for the protection and privacy of any
				information which you provide whilst visiting such sites and such
				sites are not governed by this privacy statement. You should exercise
				caution and look at the privacy statement applicable to the website in
				question.
			</p>

			<h2 className="text-2xl font-bold mb-2 text-primaryColor">
				Controlling Your Personal Information
			</h2>

			<p className="mb-4 text-AscendColo">
				You may choose to restrict the collection or use of your personal
				information in the following ways:
			</p>

			<ul className="list-disc list-inside mb-4 text-AscendColo">
				<li>
					If you have previously agreed to us using your personal information
					for direct marketing purposes, you may change your mind at any time
					by writing to or emailing us at [email protected]
				</li>
				<li>
					We will not sell, distribute, or lease your personal information to
					third parties unless we have your permission or are required by law
					to do so. We may use your personal information to send you
					promotional information about third parties which we think you may
					find interesting if you tell us that you wish this to happen.
				</li>
				<li>
					You may request details of personal information which we hold about
					you. If you would like a copy of the information held on you, please
					write to [Your Company Name, Address, City, State, Zip Code] or
					email [email protected]
				</li>
				<li>
					If you believe that any information we are holding on you is
					incorrect or incomplete, please write to or email us as soon as
					possible at the above address. We will promptly correct any
					information found to be incorrect.
				</li>
			</ul>

			<p className="mb-4 text-AscendColo">
				This privacy policy is subject to change without notice.
			</p>
		</main>
	);
}
