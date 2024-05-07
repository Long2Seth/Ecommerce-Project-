// 'use client'
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button, useDisclosure } from "@nextui-org/react";
// import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
// import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
// import { GithubIcon } from "@/components/icons/GithubIcon";
// import { FaGithub } from "react-icons/fa";
// import { GoogleIcon } from "@/components/icons/GoogleIcon";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// type buttonType = {
//     className: string;
// }

// type initialValues = {
//     email: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     confirmPassword: string;
// }

// const initialValues: initialValues = {
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     confirmPassword: ''
// }

// const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$");
// const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string()
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(strongPasswordRegex, "Enter strong password with @ or # or $ ...").required('Required'),
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password'), "Password must be match "]).required('Required')
// });

// export default function SignUpModal({ className }: buttonType) {

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const handleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
//     const handleShowPassword = () => setShowPassword(!showPassword);
//     const [isVisible, setIsVisible] = useState(false);
//     const toggleVisibility = () => setIsVisible(!isVisible);
//     const { isOpen, onOpen, onOpenChange } = useDisclosure();


//     const handleSubmite = (values: initialValues) => {
//         setLoading(true);
//         fetch('http://localhost:3000/api/signUp/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(values)
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.log(err)
//                 setLoading(false);
//             })
//     };

//     if (loading) {
//         return (
//             <div className="">
//                 <h1 className="text-6xl text-center">Loading...</h1>
//             </div>
//         );
//     }



//     return (
//         <main className="  grid place-content-center bg-purple-200">
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => {
//                     handleSubmite(values);
//                 }}
//             >
//                 <Form className=" bg-gray-100 p-4 rounded-lg w-[500px] ">

//                     <section className="flex flex-col gap-1 items-center text-4xl my-10">
//                         <img width={100} src="../E-commerce-Store.png" alt="logo" />
//                     </section>

//                     <section className="flex flex-col gap-1 items-center text-2xl text-gray-500 mb-10">
//                         Create an account
//                     </section>


//                     <section>
//                         {/* Email */}
//                         <section className=" mb-6">
//                             <label className=" text-[20px] pl-2" htmlFor="email">
//                                 Email
//                             </label>

//                             <Field
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   "
//                                 size="lg" autoFocus
//                                 placeholder="sample@gmail.com"
//                                 variant="bordered"
//                             />
//                             <ErrorMessage name="email" component="div" className="text-red-500 pl-2 " />
//                         </section>


//                         {/* first name  */}
//                         <section className=" mb-6">
//                             <label className=" text-[20px] pl-2" htmlFor="firstName">
//                                 First Name
//                             </label>
//                             <Field
//                                 type="text"
//                                 name="firstName"
//                                 id="fullName"
//                                 className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
//                                 size="lg"
//                                 placeholder="First name"
//                                 variant="bordered"
//                             />
//                             <ErrorMessage name="fullName" component="div" className="text-red-500 pl-2" />
//                         </section>




//                         {/* last name */}
//                         <section className=" mb-6">
//                             <label className=" text-[20px] pl-2" htmlFor="lastName">
//                                 Last Name
//                             </label>
//                             <Field
//                                 type="text"
//                                 name="lastName"
//                                 id="lastName"
//                                 className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
//                                 size="lg"
//                                 placeholder="Last name"
//                                 variant="bordered"
//                             />
//                             <ErrorMessage name="lastName" component="div" className="text-red-500 pl-2" />
//                         </section>




//                         {/* password */}

//                         <section className="mb-6">
//                             <label className=" text-[20px] pl-2" htmlFor="password">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <Field
//                                     type={showPassword ? "text" : "password"}
//                                     name="password"
//                                     id="password"
//                                     placeholder="Password"
//                                     className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
//                                 />
//                                 {
//                                     !showPassword ? <EyeSlashFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} /> : <EyeFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} />
//                                 }
//                             </div>
//                             <ErrorMessage name="password" component="div" className="text-red-500 pl-2" />
//                         </section>




//                         {/* confirmPassword */}
//                         <section className="mb-6">
//                             <label className=" text-[20px] pl-2" htmlFor="confirmPassword">
//                                 Confirm Password
//                             </label>
//                             <div className="relative">
//                                 <Field
//                                     type={showConfirmPassword ? "text" : "password"}
//                                     name="confirmPassword"
//                                     id="confirmPassword"
//                                     placeholder="Confirm Password"
//                                     className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
//                                 />
//                                 {
//                                     !showConfirmPassword ? <EyeSlashFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleConfirmPassword} /> : <EyeFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleConfirmPassword} />
//                                 }
//                             </div>
//                             <ErrorMessage name="confirmPassword" component="div" className="text-red-500 pl-2" />
//                         </section>
//                     </section>


//                     <Button type="submit" className="my-5 text-xl p-6 text-white w-full " onPress={onOpen} radius="sm" color="primary">Create an account</Button>

//                     <div>
//                         <div>
//                             <div className="relative">
//                                 <div
//                                     className="absolute inset-0 flex items-center"
//                                     aria-hidden="true"
//                                 >
//                                     <div className="w-full border-t border-gray-200" />
//                                 </div>
//                                 <div className="relative flex justify-center text-sm font-medium leading-6">
//                                     <span className=" text-lg px-4 bg-gray-100 ">
//                                         Or continue with
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="w-full my-6 grid grid-cols-2 gap-2 ">
//                                 <Button className=" p-6 " variant="bordered" endContent={<GoogleIcon />}>
//                                 </Button>
//                                 <Button className=" p-6"
//                                     size="lg" color="default" variant="bordered" startContent={<FaGithub size={50} />}>
//                                 </Button>

//                             </div>
//                             <div className="relative">
//                                 <a href="/">
//                                     <div className="relative flex justify-center text-sm font-medium leading-6 cursor-pointer">
//                                         <span className=" text-lg px-4 bg-gray-100 ">
//                                             Back to Home page
//                                         </span>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>

//                     </div>

//                 </Form>
//             </Formik>
//         </main>
//     );
// }
