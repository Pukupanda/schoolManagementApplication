"use client";
import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Attendance = ({ overview, grade, class_section, data }) => {
  return (
    <div className="bg-white ">
      <div className="flex justify-between">
        <div>
          <p>{overview}</p>
        </div>
        <div>
          <ul className="w-full flex">
            <li className="group relative dropdown px-4 text-black cursor-pointer text-base tracking-wide">
              <a>{grade}<ArrowDropDownIcon/></a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white shadow px-6 py-8">
                  <li className="py-1">
                    <a className="block text-black text-base  hover:text-sm-green cursor-pointer">
                      {class_section}
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-black  text-base  hover:text-sm-green cursor-pointer">
                      {class_section}{" "}
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="block text-black text-base  hover:text-sm-green cursor-pointer">
                      {class_section}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((e, i) => {
          return (
            <div className={i <=1?'border-r':''}>
              <p className="text-sm-green py-4 text-4xl font-semibold">{e.count}</p>
              <p className="text-black text-sm">{e.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
