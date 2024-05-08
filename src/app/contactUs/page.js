"use client";
import React from "react";
import Navbar from "../../components/navigation/page";
import Footer from "../../components/footer/page";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    fullname: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Email format is not valid")
      .required(" Email is required"),
    subject: yup.string().required(" Sbject is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactUs = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="bg-green-50 py-10">
        <div className="pl-32 py-2">
          <Link href="./home" className="text-gray-500">
            Home
          </Link>
          <KeyboardArrowRightIcon />
          <Link href="#">Contact us</Link>
        </div>
        <div className="w-10/12 m-auto border-4 border-sm-green rounded-xl ">
          <div className="bg-[url('/main.png')] bg-no-repeat bg-cover">
            <div className="px-6 py-2">
              <h3 className="text-2xl text-sm-darkblue font-semibold font-sans tracking-wider uppercase">
                Contact
              </h3>
              <h1 className=" text-4xl text-sm-lblue800 font-bold">
                Contact us
              </h1>
            </div>
            <div className="p-10 items-center">
              <h1 className="text-center text-5xl font-bold pb-32">
                Get In Touch
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ////// */}
      <div className="bg-white py-10">
        <div className="bg-green-50 w-10/12 m-auto ">
          <div className="grid grid-cols-3 py-20 content-center">
            <div className="grid justify-center">
              <PhoneIcon />
              <div>
                <h3>Phone</h3>
                <p>
                  +9812345678,01-987654,<br></br> (Dynamic School and +2
                  Program)
                </p>
              </div>
            </div>
            <div className="grid justify-center">
              <EmailIcon />
              <div>
                <h3>Email</h3>
                <p>info@dynamiccollege.edu.np</p>
              </div>
            </div>
            <div className="grid justify-center">
              <LocationOnIcon />
              <div>
                <h3>Locatio</h3>
                <p>Butwal, Bhairawa,Nepal</p>
                <a>View on Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////// */}
      <div className="bg-white py-10">
        <div className="bg-sm-lgreen w-10/12 m-auto border-4 border-sm-green rounded-xl">
          <div className="justify-self-center m-auto w-80 pt-8">
            <h3 className="text-2xl font-bold tracking-wider">CONNECT WITH US</h3>
            <p className="text-sm">AND WE WILL GET BACK TO YOU.</p>
          </div>
          <div className="w-8/12 m-auto py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("fullname")}
                  placeholder="Full Name *"
                  type="text"
                  className="my-4 p-3 block w-full rounded-md  text-blueGray-600 text-md"
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
              </div>
              <div>
                <input
                {...register("email")}
                  placeholder="Email *"
                  type="text"
                  className="my-4 p-3 block w-full rounded-md text-blueGray-600 text-md"
                />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <input
                {...register("subject")}
                  id="Subject"
                  placeholder="Subject *"
                  className="my-4 p-3 block w-full rounded-md text-blueGray-600 text-md"
                />
                <p>{errors.subject?.message}</p>
              </div>
              <div>
                <textarea
                {...register("message")}
                  className="h-40 w-full my-6 pl-4"
                  id="Message*"
                  placeholder="Message*"
                ></textarea>
                <p>{errors.message?.message}</p>
              </div>
              <button  type="submit" className="bg-sm-green my-4 block w-full rounded-md text-white text-2xl font-bold py-2">SUBMIT NOW</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
