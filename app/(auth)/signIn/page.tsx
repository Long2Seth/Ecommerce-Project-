'use client'
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react"
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectToken, setAccessToken } from '@/redux/features/auth/authSlice';
import { fetchUserProfile } from '@/redux/features/userProfile/userProfileSlice';
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FaGithub } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { initialValues } from "@/libs/constants";


const initialValues: initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export default function SignIn() {



  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  console.log('Token from Redux store', token);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);



  const handleSubmit = (values: initialValues) => {
    setLoading(true);
    fetch(`http://localhost:3000/api/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push('/')
        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="">
        <h1 className="text-6xl text-center">Loading...</h1>
      </div>
    );
  }



  return (
    <main className=" h-screen grid place-content-center bg-purple-200">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        <Form className=" bg-gray-100 p-4 rounded-lg w-[500px] ">

          <section className="flex flex-col gap-1 items-center text-4xl my-10">
            <img width={100} src="../E-commerce-Store.png" alt="logo" />
          </section>


          <section>

            {/* Email */}
            <section className=" mb-6">
              <label className=" text-[20px] pl-2" htmlFor="email">
                Email
              </label>

              <Field
                type="email"
                name="email"
                id="email"
                className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                size="lg" autoFocus
                placeholder="sample@gmail.com"
                variant="bordered"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 pl-2 dark:focus:border-blue-500 border-red-600" />
            </section>





            {/* password */}

            <section className="mb-6">
              <label className=" text-[20px] pl-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="custom-placeholder-size bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                />
                {
                  !showPassword ? <EyeSlashFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} /> : <EyeFilledIcon className="absolute w-6 right-2 top-2.5 text-gray-500 cursor-pointer" onClick={handleShowPassword} />
                }
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 pl-2" />
            </section>


          </section>


          <Button type="submit" className="my-5 text-xl p-6 text-white w-full bg-[#F07423] " radius="sm" >
            Sigin Account
          </Button>
          <Button onClick={() => router.push('/signUp')} type="submit" className="mb-5 text-xl p-6 text-white w-full bg-[#0f766e] " radius="sm" >
            Create an account
          </Button>

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
                  <span className=" text-lg px-4 bg-gray-100 ">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="w-full my-6 grid grid-cols-2 gap-2 ">
                <Button onClick={() => {
                  signIn('google', { callbackUrl: '/' })
                }} className=" p-6 " variant="bordered" endContent={<GoogleIcon />}>
                </Button>
                <Button onClick={() => signIn('github', { callbackUrl: '/' })} className=" p-6"
                  size="lg" color="default" variant="bordered" startContent={<FaGithub size={50} />}>
                </Button>

              </div>
              <div className="relative">
                <a href="/">
                  <div className="relative flex justify-center text-sm font-medium leading-6 cursor-pointer">
                    <span className=" text-lg px-4 bg-gray-100 ">
                      Back to Home page
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </Form>
      </Formik>
    </main>
  );
}
