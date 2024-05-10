'use client'
import React from "react";
import Footer from "../../../components/footer/page";
import Navbar from "../../../components/navigation/page";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from 'react-select';
const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' },
    { value: 'Staffs', label: 'Staffs' }
  ]
const Login = () => {
    const schema = yup
  .object({
    Identity: yup.string().required("Identity is required"),
    email: yup
      .string()
      .email("Email format is not valid")
      .required(" Email is required"),
    password: yup.string().required(" password is required"),
   
  })
  .required();
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
  return (
    <>
      <Navbar backgroundColor="#b4e8b6" />
      <div className="bg-green-50 py-10">
        <div className="pl-32 py-2">
          <Link href="./home" className="text-gray-500">
            Home
          </Link>
          <KeyboardArrowRightIcon />
          <Link href="#">Login</Link>
        </div>
        <div className="w-10/12 m-auto ">
          <div className="grid grid-cols-2 my-4">
            <div>
              <Image src="/login.png" width={600} height={500} />
            </div>
            <div className="bg-white px-10">
              <h1 className="text-5xl py-10 font-bold text-center">Login</h1>
              <form onSubmit=''>

                <label>
                Identity
                <Select options={options}  className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-green-100 w-3/4"/>
                  <p>{errors.email?.message}</p>
                </label>
                <label>
                Email
                  <input
                    {...register("email")}
                    placeholder="Enter your username/email"
                    type="text"
                    className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-green-100 w-3/4"
                  />
                  <p>{errors.email?.message}</p>
                </label>
                <label>
                Email
                  <input
                    {...register("password")}
                    placeholder="Enter your password"
                    type="password"
                    className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-green-100 w-3/4"
                  />
                  <p>{errors.email?.message}</p>
                </label>
                <button className="bg-sm-green p-4 rounded-lg text-white w-3/4  mt-6">Submit now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
