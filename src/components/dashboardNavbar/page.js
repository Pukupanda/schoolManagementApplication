"use client";
import React from "react";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import Person2Icon from "@mui/icons-material/Person2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const DashboardNavbar = ({ imageUrl, width, height, name, title, data, role }) => {
  
  let navigationItems = [];

    // Define navigation items based on the user's role
    if (role === 'teacher') {
      navigationItems = [
        { label: 'Dashboard',icon:<HistoryToggleOffIcon className="mr-4 text-xl " />, link: '' },
        { label: 'MyProfile',icon:  <Person2Icon className="mr-4 text-xl" />, link: '' },
        { label: 'Salary',icon:<MonetizationOnIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Result',icon:<FactCheckIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Attendance',icon:<HowToRegIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Assignments',icon:<AssignmentIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Resources',icon:<ArticleIcon className="mr-4 text-xl" />, link: '' },
       
      ];
    } else if (role === 'student') {
      navigationItems = [
        { label: 'Dashboard',icon:<HistoryToggleOffIcon className="mr-4 text-xl" />, link: '' },
        { label: 'MyProfile',icon:  <Person2Icon className="mr-4 text-xl" />, link: '' },
        { label: 'fee',icon:<MonetizationOnIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Result',icon:<FactCheckIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Attendance',icon:<HowToRegIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Assignments',icon:<AssignmentIcon className="mr-4 text-xl" />, link: '' },
        { label: 'Resources',icon:<ArticleIcon className="mr-4 text-xl" />, link: '' },
      ];
    } else if (role === 'admin') {
      navigationItems = [
        { label: 'Dashboard',icon:<HistoryToggleOffIcon className="mr-4 text-xl " />, link: '' },
        { label: 'Teacher',icon:<Person3OutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Student',icon:<Groups2OutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Finance',icon:<MonetizationOnIcon className="mr-4 text-xl " />, link: '' },
        { label: 'Result',icon:<FactCheckIcon className="mr-4 text-xl " />, link: '' },
        { label: 'Attendance',icon:<HowToRegIcon className="mr-4 text-xl " />, link: '' },
        { label: 'Landing Page',icon:<FlightLandOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'About Us',icon:<InfoOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Academics',icon:<LibraryBooksOutlinedIcon className="mr-4 text-xl "/>,link: '' },
        { label: 'Asmission',icon:<AccountBalanceOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Gallery',icon:<PhotoOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Facilities',icon:<SubtitlesOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Contact Us',icon:<ContactPageOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        { label: 'Notice', icon:<NotificationsOutlinedIcon className="mr-4 text-xl "/>, link: '' },
        
      ];
    }
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
              {navigationItems.map((item) => {
                return (
              <li className="grid grid-flow-row text-white text-sm gap-6 py-6">
                <a >
                  {item.icon}
                  {item.label}
                </a>
              </li>)
              })}
        </ul>
      </nav>
      <div className="flex px-12">
        <PersonIcon className="text-white" />
        <ArrowDropDownIcon className="text-white" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
