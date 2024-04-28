import React from "react";
import style from "./style.module.css";
import Navbar from "@/components/navigation/page";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      <div className={style.banner}>
        <Navbar />
        <div className="w-10/12 m-auto flex justify-between pt-6 my-3">
          <div className="pb-7 w-3/6">
            <h1 className="text-6xl text-white leading-relaxed">
              The Best School Of The State
            </h1>
            <p className="text-white mb-4">
              Illuminating Minds, Inspiring Innovation, and Shaping Global
              Leaders
            </p>
            <button className="bg-sm-green px-6 p-2 text-white rounded-lg mt-2">
              Apply Now
            </button>
          </div>
          <div className="w-64 h-60 bg-sm-green rounded-md relative">
            <div className="w-72 h-60 bg-white rounded-md absolute top-3 right-4 p-2 pt-8 text-center">
              <h1 className="text-3xl">
                Practical Teaching & Social Development
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* //////////// */}
      <div className="w-8/12 m-auto flex justify-between pt-4 my-3 bg-green-50 shadow-2xl">
        <div className="p-8">
          <h3 className="text-4xl text-sm-darkblue">About Us</h3>
          <p>
            At Dynamic School, we're committed to providing a vibrant and
            innovative educational experience. Our focus is on cultivating
            creativity, critical thinking, and a passion for learning. With a
            dynamic curriculum and a supportive community, we aim to nurture
            individuals ready to excel in the modern world. Welcome to a school
            where every student's potential is recognized and encouraged!
          </p>
        </div>
        <div className="rounded-lg p-8">
          <Image
            className="rounded-l-lg"
            src="/class.jpg"
            width={3000}
            height={3000}
            alt="img"
          />
        </div>
      </div>

      {/* ///////////// */}
      <div className="bg-green-50 mt-8">
        <div className="bg-white w-8/12 m-auto border-4 border-sm-green rounded-xl">
        <h1 className="text-center pt-6 text-xl text-sm-darkblue font-semibold	">Message From The Principal</h1>
          <div className="flex justify-between">
            <div className="p-6 mt-6 ">
              <p className="font-serif font-medium text-lg">
                " Thrilled to witness ongoing student success and growth,
                dedicated teachers and engaged parents. Exciting plans we
                continue to nurture a dynamic learning environment. Pooja
                Shrestha "
              </p>
              <p className="mt-2">Pooja Shrestha</p>
            </div>
            <div className="p-10">
              <Image
                className="rounded-l-lg"
                src="/class.jpg"
                width={700}
                height={1000}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
