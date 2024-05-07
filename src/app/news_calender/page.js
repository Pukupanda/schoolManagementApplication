"use client";
import React from "react";
import Navbar from "../../components/navigation/page";
import Footer from "../../components/footer/page";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/card/page";
import Moment from "react-moment";
import CalenderCard from "../../components/calenderCard/page";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const NewsCalender = () => {
  return (
    <>
      <Navbar backgroundColor='#b4e8b6'/>
      <div className="bg-green-50 py-10">
        <div className="pl-32 py-2">
          <Link href="./home" className="text-gray-500">
            Home
          </Link>
          <KeyboardArrowRightIcon />
          <Link href="#">Gallery</Link>
        </div>
        <div className="bg-white w-10/12 m-auto border-4 border-sm-green rounded-xl ">
          <div className="px-6 py-2">
            <h3 className="text-2xl text-sm-darkblue font-semibold font-sans tracking-wider uppercase">
              News/Calender
            </h3>
            <h1 className=" text-4xl text-sm-lblue800 font-bold">News</h1>
          </div>
          <div className="flex gap-10 px-12">
            <div className="bg-green-100 mb-6">
              <Card
                imageUrl="/rectangle2.png"
                width={350}
                height={300}
                title="Welcome Program"
                date={<Moment format="YYYY/MM/DD"></Moment>}
                description="Welcome Program was held at Dynamic School..."
                buttonText="see all"
                btnclass="bg-sm-green text-white px-4 rounded-lg"
              />
            </div>
            <div className="bg-green-100 mb-6">
              <Card
                imageUrl="/rectangle2.png"
                width={350}
                height={300}
                title="Welcome Program"
                date={<Moment format="YYYY/MM/DD"></Moment>}
                description="Welcome Program was held at Dynamic School..."
                buttonText="see all"
                btnclass="bg-sm-green text-white px-4 rounded-lg"
              />
            </div>
            <div className="bg-green-100 mb-6">
              <Card
                imageUrl="/rectangle2.png"
                width={350}
                height={300}
                title="Welcome Program"
                date={<Moment format="YYYY/MM/DD"></Moment>}
                description="Welcome Program was held at Dynamic School..."
                buttonText="see all"
                btnclass="bg-sm-green text-white px-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /////////// */}
      <div className="bg-white p-10">
        <div className="bg-green-50 w-10/12 m-auto p-10 shadow-lg shadow-gray-500/50">
          <div className="grid grid-cols-2 gap-8 m-auto">
            <div>
              <div className="bg-sm-green100">
                <h1 className="text-4xl text-sm-lblue800 font-bold p-10 text-center">
                  Notice
                </h1>
                <CalenderCard
                  className={"pt-4"}
                  date={<Moment format="YYYY/MM/DD"></Moment>}
                  description={"Science"}
                />
                <CalenderCard
                  className={"pt-4"}
                  date={<Moment format="YYYY/MM/DD"></Moment>}
                  description={"Management"}
                />
                <CalenderCard
                  className={"pt-4"}
                  date={<Moment format="YYYY/MM/DD"></Moment>}
                  description={"Law"}
                />
                <CalenderCard
                  className={"pt-4 text-black"}
                  date={<Moment format="YYYY/MM/DD"></Moment>}
                  description={"School"}
                />
              </div>
              <button className="bg-gradient-to-r from-sm-green200 to-sm-gray px-6 rounded-lg mt-4 text-white float-end py-1">See all Notice </button>
            </div>
            {/* ///////second card/////////// */}
            <div>
              <div className="bg-sm-green100">
                <h1 className="text-4xl text-sm-lblue800 font-bold p-10 text-center">
                  Science
                </h1>
                <CalenderCard
                  date={<Moment format="YYYY/MM/DD"></Moment>}
                  description={"Science"}
                  className={"pt-4"}
                  icon={<AccessTimeIcon className="text-sm-green" />}
                />
              </div>
              <button className="bg-gradient-to-r from-sm-green200 to-sm-gray px-6 rounded-lg mt-4 text-white float-end py-1" >See all Notice </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsCalender;
