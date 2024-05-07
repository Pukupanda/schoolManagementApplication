import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navigation/page";
import Footer from "../../components/footer/page";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Card from "../../components/card/page";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="bg-green-50">
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
              Gallery
            </h3>
            <h1 className=" text-4xl text-sm-lblue800 font-bold">
              Introduction
            </h1>
          </div>
          <div className="px-6 pb-6">
            <Image
              className="rounded-l-lg"
              src="/student.png"
              width={1200}
              height={700}
              alt="img"
            />
          </div>
        </div>
      </div>
      {/* ////// */}
      <div className="bg-white mt-8">
        <div className="bg-green-50 w-10/12 m-auto rounded-xl p-8">
        <h1 className="text-2xl pl-4 pt-4">School Basics</h1>
            <div className="bg-white "> 
         
          <div className="flex gap-8 justify-between p-12">
            <div>
              <Image
                className="rounded-lg"
                src="/robort.png"
                width={500}
                height={500}
                alt="img"
              />
              <p className="text-2xl font-bold pt-4">Robot Championship</p>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="/gradu.png"
                width={500}
                height={500}
                alt="img"
              />
              <p className="text-2xl font-bold pt-4">Graduation</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* //////////// */}
      <div className="bg-white py-8">
        <div className="bg-sm-green100 w-10/12 m-auto border-4 border-sm-green rounded-xl ">
            <h2 className="text-2xl text-sm-darkblue font-semibold font-sans tracking-wider uppercase pl-6 pt-4">
            Sports
            </h2>
            <div className="flex p-8 gap-10">
                <div className="">
                <Image
                className="rounded-lg"
                src="/volleyball.png"
                width={400}
                height={400}
                alt="img"
              />
              <h3 className="text-2xl font-bold pt-4">Basketball </h3>
                </div>

                <div className="">
                <Image
                className="rounded-lg"
                src="/swimming.png"
                width={400}
                height={400}
                alt="img"
              />
              <h3 className="text-2xl font-bold pt-4">Swimming </h3>
                </div>
                <div className="">
                <Image
                className="rounded-lg"
                src="/holi.png"
                width={400}
                height={400}
                alt="img"
              />
              <h3 className="text-2xl font-bold pt-4">Holi </h3>
                </div>
            </div>
        </div>
      </div>
      {/* //////// */}
      <div className="bg-green-50 py-10">
        <div className="bg-white w-10/12 m-auto rounded-xl ">
            <h2 className="text-4xl font-bold">Extra Curriculum</h2>
            <div className="flex gap-6">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Gallery;
