"use client";
import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
const AssignmentsCard = ({ heading, grade, class_section, data,titleClassName }) => {
  return (
    <div className="bg-white">
      <div className="flex justify-between">
      <div>
          <p className="text-sm-black9 text-lg pl-4">{heading}</p>
        </div>
      <div>
          {grade &&
          <ul className="w-full flex">
            <li className="group relative dropdown px-4 text-black cursor-pointer text-base tracking-wide">
              <a className="text-sm-black11">{grade}<ArrowDropDownIcon/></a>
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
}
        </div>
        </div>
      <div className="grid grid-flow-row gap-6">
        {data.map((e) => {
          return (
            <div className="flex justify-between hover:bg-sm-green100 hover:rounded-md p-2 gap-4">
              <h3 className="bg-sm-green100 rounded-full px-2 py-1 text-2xl">
                {e.id}
              </h3>
              <p className={titleClassName} >{e.title}</p>
              <a>{<BorderColorOutlinedIcon className="text-2xl mt-2" />}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsCard;
