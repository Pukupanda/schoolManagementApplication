"use client";
import React from "react";
import DashboardNavbar from "./../../../components/dashboardNavbar/page";
import Attendance from "../../../components/attendentCard/page";
import AssignmentsCard from "../../../components/assignmentsCard/page";
import Result from "../../../components/results/page";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import Image from "next/image";

const AdminDashboard = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <>
      <div className="bg-sm-black4">
        <div className="flex gap-6 h-full">
          <div>
            <DashboardNavbar
              imageUrl="/adminprofile.png"
              title={"Nameste"}
              name="Rupa"
              role="admin"
            />
          </div>
          <div className="mt-4">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              <div className="bg-white rounded-lg shadow-inner py-4 px-2">
                <Attendance
                  overview={"Total Members"}
                  data={[
                    { title: "Students", count: "6700" },
                    { title: "Teachers", count: "120" },
                    { title: "Other Members", count: "60" },
                  ]}
                />
              </div>
              <div className="bg-white rounded-lg shadow-inner p-4 px-24">
                <AssignmentsCard
                  heading={"Task"}
                  grade={"9"}
                  class_section={"class 9 A"}
                  data={[
                    {
                      id: "21",
                      title: "Upload Task",
                      titleClassName: "text-md",
                    },
                    { id: "21", title: "Upload Task" },
                    { id: "21", title: "Upload Task" },
                  ]}
                />
              </div>
              <div>
                <Image src="/date.png" width={240} height={250} />
              </div>
            </div>
            {/* /////////////// */}
            <div className="flex gap-4 mt-4">
              <div className="bg-white w-2/5 rounded-lg shadow-inner py-4 px-2 my-4">
                <Result
                  overview={"Top Results"}
                  //   grade={"Class 9"}
                  //   class_section={"class 9 A"}
                  data={[
                    {
                      imageUrl: "/profile.png",
                      fullname: "Hira Kumar Shrestha",
                      marks: "97%",
                    },
                    {
                      imageUrl: "/profile.png",
                      fullname: "Parmila Chaudharyi",
                      marks: "89%",
                    },
                    {
                      imageUrl: "/profile.png",
                      fullname: "Arya Rai",
                      marks: "87%",
                    },
                  ]}
                />
              </div>
              <div className="bg-white w-2/5 rounded-lg shadow-inner py-4 px-8 my-4 ">
                <div className="flex justify-center">
                  <PeopleRoundedIcon className="text-sm-green text-4xl bg-gray-200 rounded-full w-24 h-24 p-4" />
                </div>
                <div className="flex justify-between gap-10 mt-12">
                  <div>
                    <p className="mb-2 text-sm-black6">
                      <MaleRoundedIcon className="bg-sm-lblue300 text-white rounded-full" />{" "}
                      Male
                    </p>
                    <span>57%</span>
                  </div>
                  <div>
                    <p className="mb-2 text-sm-black6 ">
                      <FemaleRoundedIcon className="bg-sm-green text-white rounded-full" />
                      Female
                    </p>
                    <span >57%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white w-1/5 rounded-lg shadow-inner py-4 px-6 my-4 mr-2">
                <h4 className="text-lg text-black">Recent meeting</h4>
                <div className="flex gap-4 mt-4">
                  <CalendarViewMonthRoundedIcon className="text-red-600 " />
                  <p>{new Date().getFullYear()}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <AccessTimeRoundedIcon className="text-sm-green " />
                  <h2 align="center"> {showTime}</h2>
                </div>
                <div className="flex gap-4 mt-4 ">
                  <Person4RoundedIcon className="text-blue-400 " />
                  <p>
                    Class ten social<br></br> teacher- Raj Kumar Khadka
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <TextSnippetRoundedIcon className="text-gray-400"/>
                  <p>For performance review </p>
                </div>
              </div>
            </div>

            <div className="my-6">
              <Image src="/salarychart.png" width={1100} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
