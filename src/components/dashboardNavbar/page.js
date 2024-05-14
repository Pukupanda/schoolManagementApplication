'use client'
import React from "react";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Person2Icon from '@mui/icons-material/Person2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DashboardNavbar = ({ imageUrl, width, height, name, title }) => {
  return (
    <div className="w-full bg-sm-lblue500 h-full ">
      <div className="px-8">
        <NotificationImportantIcon className="text-white my-4 text-4xl " />
        <div>
          <img src={imageUrl} alt="Card Image" width={width} height={height} />
          <div className="flex gap-2 mt-4 px-6 mb-8">
            <p className="text-white text-center ">{title},</p>
            <p className="text-white text-center">{name}</p>
          </div>
          <span className="text-white text-center pl-6">Main Navigation</span>
        </div>
      </div>
      
      <nav className="px-12 mt-6">
        <ul>
            <li className="grid grid-flow-row text-white text-sm gap-6 py-6">
               <a><HistoryToggleOffIcon className="mr-4 text-xl"/> Dashboard</a>
               <a><Person2Icon  className="mr-4"/> My Profile</a>
               <a><MonetizationOnIcon  className="mr-4"/>Salary</a>
               <a><FactCheckIcon  className="mr-4"/>Result</a>
               <a><HowToRegIcon  className="mr-4"/>Attendance</a>
               <a><AssignmentIcon  className="mr-4"/>Assignments</a>
               <a><ArticleIcon  className="mr-4"/>Resources</a>
            </li>
        </ul>
      </nav>
      <div className="flex px-12">  
        <PersonIcon className="text-white"/>
        <ArrowDropDownIcon className="text-white"/>
      </div>
    </div>
  );
};

export default DashboardNavbar;
