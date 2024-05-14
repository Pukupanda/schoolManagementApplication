import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
const Resource = ({ overview, grade, class_section, pdf }) => {
  return (
    <div className="bg-white ">
      <div className="flex justify-between">
        <div>
          <p className="text-sm-black9 text-lg pl-4">{overview}</p>
        </div>
        <div>
          <ul className="w-full flex">
            <li className="group relative dropdown px-4 text-black cursor-pointer text-base tracking-wide">
              <a className="text-sm-black11">
                {grade}
                <ArrowDropDownIcon />
              </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-32 bg-white shadow px-6 py-8">
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

      <div className="flex justify-between gap-8 bg-sm-green100 m-4 px-4 rounded-xl hover:bg-sm-green300">
        <p className="text-black text-sm text-center p-4">{pdf}</p>
        <a className="mt-3">
          <PictureAsPdfOutlinedIcon className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Resource;
