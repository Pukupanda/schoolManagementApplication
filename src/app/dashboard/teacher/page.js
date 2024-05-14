"use client";
import React from "react";
import DashboardNavbar from "./../../../components/dashboardNavbar/page";
import Attendance from "../../../components/attendentCard/page";
import AssignmentsCard from "../../../components/assignmentsCard/page";
import Result from "../../../components/results/page";

const TeacherDashboard = () => {
  return (
    <>
      <div className="bg-sm-black4">
        <div className="flex gap-4 ">
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
              <div>ooooo</div>
            </div>
            {/* jjjj */}
          <div className="grid grid-flow-col auto-cols-max gap-4 mt-4">
          <div className="bg-white rounded-lg shadow-inner py-4 px-2 my-4">
            <Result 
              overview={"Student Results"}
              grade={"Class 9"}
              class_section={"class 9 A"}
              data={[
                { imageUrl:'/profile.png',  fullname: "Arya Rai" ,marks:'57%'},
                { imageUrl:'/profile.png', fullname: "Arya Rai", marks:'57%'},
                { imageUrl:'/profile.png', fullname: "Arya Rai", marks:'57%'},
              ]}
              />
              
              
          </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
