"use client";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
const AssignmentsCard = ({ heading, data }) => {
  return (
    <div className="bg-white">
      <p className="text-black text-lg pl-3">{heading}</p>
      <div className="grid grid-flow-row gap-6">
        {data.map((e) => {
          return (
            <div className="flex justify-between hover:bg-sm-green100 hover:rounded-md p-2 gap-4">
              <h3 className="bg-sm-green100 rounded-full px-2 py-1 text-2xl">
                {e.id}
              </h3>
              <p className="text-2xl">{e.title}</p>
              <a>{<BorderColorOutlinedIcon className="text-2xl mt-2" />}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsCard;
