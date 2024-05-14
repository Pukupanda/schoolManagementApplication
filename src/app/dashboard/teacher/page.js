"use client";
import React from "react";
import DashboardNavbar from "./../../../components/dashboardNavbar/page";
import Attendance from "../../../components/attendentCard/page";
import AssignmentsCard from "../../../components/assignmentsCard/page";
import Result from "../../../components/results/page";
import Resource from "../../../components/resources/page";
import Image from "next/image";

const TeacherDashboard = () => {
  return (
    <>
      <div className="bg-sm-black4">
        <div className="flex gap-4 h-full">
          <div>
            <DashboardNavbar
              imageUrl="/profile.png"
              title={"Nameste"}
              name="Rupa"
            />
          </div>

          <div className="mt-4">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              <div className="bg-white rounded-lg shadow-inner py-4 px-2">
                <Attendance
                  overview={"Attendance Overview"}
                  grade={"Class 9"}
                  class_section={"class 9 A"}
                  data={[
                    { title: "Total Students", count: "10" },
                    { title: "Present", count: "0" },
                    { title: "Absent", count: "50" },
                  ]}
                />
              </div>
              <div className="bg-white rounded-lg shadow-inner p-4">
                <AssignmentsCard
                  heading={"Assignments"}
                  data={[
                    { id: "21", title: "Create new assignments" },
                    { id: "21", title: "Create new assignments" },
                  ]}
                />
              </div>
              <div>
                <Image src="/date.png" width={240} height={250} />
              </div>
            </div>
            {/* /////////////// */}
            <div className="grid grid-flow-col auto-cols-max gap-4 mt-4">
              <div className="bg-white rounded-lg shadow-inner py-4 px-2 my-4">
                <Result
                  overview={"Student Results"}
                  grade={"Class 9"}
                  class_section={"class 9 A"}
                  data={[
                    {
                      imageUrl: "/profile.png",
                      fullname: "Arya Rai",
                      marks: "57%",
                    },
                    {
                      imageUrl: "/profile.png",
                      fullname: "Arya Rai",
                      marks: "57%",
                    },
                    {
                      imageUrl: "/profile.png",
                      fullname: "Arya Rai",
                      marks: "57%",
                    },
                  ]}
                />
              </div>
              <div className="bg-white rounded-lg shadow-inner py-4 px-2 my-4">
                <Resource
                  overview={"Resources"}
                  grade={"Class 9"}
                  class_section={"class 9 A"}
                  pdf={"The Friendly Gaint.pdf"}
                />
              </div>
              <div className="bg-white rounded-lg shadow-inner py-4 px-2 my-4"></div>
            </div>
            <div className="bg-white rounded-lg shadow-inner py-4 my-4 w-full">
              <table className="w-full">
                <tr className="px-8">
                  <td>Create a Class</td>
                  <td>2024/02/29</td>
                  <td>Science</td>
                  <td>At 9:30 AM</td>
                </tr>
              </table>
            </div>
            <div className="my-6">
              <Image src='/salarychart.png' width={1100} height={400}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
