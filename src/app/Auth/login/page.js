"use client";
import React from "react";
import Footer from "../../../components/footer/page";
import Navbar from "../../../components/navigation/page";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { addUserDetails } from "@/redux/reducerSlice/userSlice";

const Role = {
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
  staff: "Staffs",
};

const data = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin",
      firstName: "A",
      lastName: "S",
      role: Role.admin,
    },
    {
      id: 2,
      username: "student",
      password: "student",
      firstName: "S",
      lastName: "S",
      role: Role.student,
    },
    {
      id: 2,
      username: "teacher",
      password: "teacher",
      firstName: "T",
      lastName: "S",
      role: Role.teacher,
    },
    {
      id: 2,
      username: "staff",
      password: "staff",
      firstName: "S",
      lastName: "S",
      role: Role.staff,
    },
  ],
};
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

  // mock data
  // x = submicForm();
  // {
  //   const e = "admin";
  //   const password = "admin";
  //   const identity = "identity";
  //   var selected = data.users.filter((user) => {
  //     return user.username == "admin1" && user.password == "admin"
  //       ? true
  //       : false;
  //   });

  //   if (selected.length == 1) {
  //     alert("success");
  //   } else {
  //     alert("failed");
  //   }
  // }
  
  const submicForm =  () => {
    const e = "admin";
    const password = "admin";
    const identity = "identity";
    var selected = data.users.filter((user) => {
      return user.username == "admin1" && user.password == "admin"
        ? true
        : false;
    });

    if (selected.length == 1) {
      dispatch(addUserDetails(data))
      if(data?.userDetails.role === 'student') return router.push('dashboard/student')
      if(data?.userDetails.role === 'teacher') return router.push('dashboard/teacher')
      if(data?.userDetails.role === 'admin') return router.push('dashboard/admin')
    } else {
      toast("user not found");
    }
  }
  
  

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
              <form onSubmit={submicForm}>
                <label>
                  Identity
                  <Select
                    options={Object(options)
                      .keys()
                      .map((key) => ({ value: key, label: options[key] }))}
                    className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-green-100 w-3/4"
                  />
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
                  Password
                  <input
                    {...register("password")}
                    placeholder="Enter your password"
                    type="password"
                    className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-green-100 w-3/4"
                  />
                  <p>{errors.email?.message}</p>
                </label>
                <button className="bg-sm-green p-4 rounded-lg text-white w-3/4  mt-6">
                  Submit now
                </button>
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
