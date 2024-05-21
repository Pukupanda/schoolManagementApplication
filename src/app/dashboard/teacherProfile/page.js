"use client";
import React from "react";
import DashboardNavbar from "./../../../components/dashboardNavbar/page";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const TeacherProfile = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <>
      <div className="bg-sm-black4">
        <div className="flex gap-6 h-full">
          <div>
            <DashboardNavbar
              imageUrl="/profile.png"
              title={"Nameste"}
              name="Rupa"
              role="teacher"
            />
          </div>
          <div className="mt-4 w-full">
            <div className="flex gap-8">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="Ptofile"
              />
              <h1 className="text-3xl font-bold pt-20 ">Rupa Basnet Nepal</h1>
            </div>

            <div className="mt-8">
              <form>
                <div className="grid grid-cols-2 gap-10 px-8">
                  <label>
                    Name:
                    <input
                    //   {...register("email")}
                      placeholder="Ex:Rupa Basnet Lamicchane"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>


                  <label>
                    Teacher ID No.:
                    <input
                    //   {...register("email")}
                      placeholder="Ex:112"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-10 px-8">
                  <label>
                  Optional Contact Name:
                    <input
                    //   {...register("name")}
                      placeholder="Ex: Hari Lal Basnet"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>


                  <label>
                  DOB:
                    <input
                    //   {...register("email")}
                      placeholder="Ex: yyyy/mm/dd"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-10 px-8">
                  <label>
                  Email:

                    <input
                    //   {...register("name")}
                      placeholder="Ex: rupabasnet@gmail.com"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>


                  <label>
                  Gender:
                    <input
                    //   {...register("email")}
                      placeholder="Ex:Male"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-10 px-8">
                  <label>
                  Address:

                    <input
                    //   {...register("name")}
                      placeholder="Ex: Lumbini, Nepal"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>


                  <label>
                  Monthly Salary:                    
                  <input
                    //   {...register("email")}
                      placeholder="Ex: 60000"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-10 px-8">
                  <label>
                  Position:
                    <input
                    //   {...register("name")}
                      placeholder="Ex: Higher Secondary Full-time Teacher"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>


                  <label>
                  Joined date:                
                  <input
                    //   {...register("email")}
                      placeholder="Ex: 2018-11-04"
                      type="text"
                      className="my-4 p-3 block rounded-lg text-blueGray-600 text-md bg-white w-4/5"
                    />
                    {/* <p>{errors.email?.message}</p> */}
                  </label>
                </div>
              </form>
              <div className="flex gap-8 pl-8">
                <button className="bg-sm-green100 text-blue-500 px-8 py-3 uppercase border border-blue-300 shadow-md shadow-sm-green"><BookmarkBorderIcon/>save</button>
                <button className="bg-sm-green100 text-blue-500 px-8 py-3 uppercase border border-blue-300 shadow-md shadow-sm-green">close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
