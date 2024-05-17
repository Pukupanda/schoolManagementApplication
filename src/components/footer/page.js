import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <>
      <div className="w-full bg-sm-lightblue py-10">
        <div className="flex justify-around px-14 gap-12">
          <div>
            <Image src="/logo.svg" width={200} height={100} alt="img" />
            <p className="text-white text-left">
              Illuminating Minds, Inspiring Innovation,<br></br> and Shaping
              Global Leaders
            </p>
          </div>

          <div className="flex-initial md:w-2/12 font-light text-left">
            <div className="mt-4 text-md grid grid-rows-1 gap-2 text-white">
              <div className="mb-1">
                <a href="#">Home</a>
              </div>
              <div className="mb-1">
                <a href="#">Academics</a>
              </div>
              <div className="mb-1">
                <a href="#">Admission</a>
              </div>
              <div>
                <a href="#">News/Calendar</a>
              </div>
            </div>
          </div>
          <div className="flex-initial md:w-2/12 font-light text-left">
            <div className="mt-4 text-md grid grid-rows-1 gap-2 text-white">
              <div className="mb-1">
                <a href="#">Contact</a>
              </div>
              <div className="mb-1">
                <a href="#">Nepal</a>
              </div>
              <div className="mb-1">
                <a href="#">01111111</a>
              </div>
              <div>
                <a href="#">dynamicschool@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex-initial md:w-4/12 text-left">
            <h1 className="text-md text-white mb-4">social media link</h1>

            <div className="mt-4 flex flex-row gap-6 ">
              <a>
                <FacebookIcon className="text-white" />
              </a>
              <a>
                <XIcon className="text-white" />
              </a>
              <a>
                <InstagramIcon className="text-white" />
              </a>
            </div>
            <p className="text-md text-white mb-2">Term and condition</p>
          </div>
        </div>

        
      </div>
      <div className="bg-sm-blue">
          <div className="w-11/12 mx-auto  text-white text-xs font-light ">
            <p className="text-center text-base py-4">
              &copy; 2024 - {new Date().getFullYear()} Travel the world pvt.
              Ltd.All rights reserved.
            </p>

            <div className="clear-both"></div>
          </div>
        </div>
    </>
  );
}

export default Footer;
