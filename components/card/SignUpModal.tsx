import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type buttonType = {
    className: string;
}

type initialValues = {
    email: string;
    password: string;
    fullName: string;
    confirmPassword: string;
}

const initialValues: initialValues = {
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
}

const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$");
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(strongPasswordRegex, "Enter a strong password with @ or # or $ or % or ^ or & or * , please").required('Required'),
    fullName: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), "Password must be match "], 'Passwords must match').required('Required')
});

export default function SignUpModal({ className }: buttonType) {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);




    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const placements = ["inside", "outside", "outside-left"];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const handleSubmite = (values: initialValues) => {
        setLoading(true);
        fetch('http://localhost:3000/api/signUp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
            })
    };

    if (loading) {
        return (
            <div>
                <h1 className="text-6xl text-center">Loading...</h1>
            </div>
        );
    }


    return (
        <main>
            <Button className={className || "text-lg bg-[#0f766e] text-white"} onPress={onOpen} radius="sm">Sign Up</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent className="max-w-[400px] mx-auto">
                    {(onClose) => (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleSubmite(values);
                            }}
                        >
                            <Form>


                                <section className="flex flex-col gap-1 items-center text-4xl ">
                                    Create an account
                                </section>


                                <ModalBody>
                                    <label className=" text-[20px] pl-1" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                        size="lg" autoFocus
                                        placeholder="sample@gmail.com"
                                        variant="bordered"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />



                                    <label className=" text-[20px] pl-1" htmlFor="fullName">
                                        Full Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                        size="lg"
                                        placeholder="Enter your full name"
                                        variant="bordered"
                                    />
                                    <ErrorMessage name="fullName" component="div" className="text-red-500" />





                                    <label className=" text-[20px] pl-1" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                        />
                                        {
                                            !showPassword ? <EyeSlashFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} /> : <EyeFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} />
                                        }
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-red-500" />


                                    <label className=" text-[20px] pl-1" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                        size="lg"
                                        placeholder="Confirm your password"
                                        variant="bordered"
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                                </ModalBody>


                                <Button type="submit" className="my-5 text-xl p-6 text-white w-[350px] ml-[25px] " onPress={onOpen} radius="sm" color="primary">Create an account</Button>

                                <div>
                                    <div>
                                        <div className="relative">
                                            <div
                                                className="absolute inset-0 flex items-center"
                                                aria-hidden="true"
                                            >
                                                <div className="w-full border-t border-gray-200" />
                                            </div>
                                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                                <span className="bg-white px-6 text-gray-900 dark:bg-black  dark:text-gray-300 text-lg ">
                                                    Or continue with
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-[350px] ml-[25px] my-6 grid grid-cols-2 gap-2 ">
                                            <Button className=" p-6 " endContent={<GoogleIcon />}>
                                            </Button>
                                            <Button className=" p-6"
                                                size="lg" color="primary" variant="bordered" startContent={<GithubIcon />}>
                                            </Button>

                                        </div>
                                    </div>

                                </div>

                            </Form>
                        </Formik>
                    )}
                </ModalContent>
            </Modal>
        </main>
    );
}
