import React from "react";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navigation/page";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Academics() {
  return (
    <>
      <Navbar backgroundColor="#b4e8b6" />
      <div className="bg-green-50 pb-9">
        <div className="pl-32 py-2">
          <Link href="./home" className="text-gray-500">
            Home
          </Link>
          <KeyboardArrowRightIcon />
          <Link href="#">Academics</Link>
        </div>
        <div className="bg-white w-10/12 m-auto border-4 border-sm-green rounded-xl">
          <div className="flex justify-between ">
            <div className="p-4">
              <h3 className="text-2xl text-sm-darkblue font-semibold pb-4 font-sans tracking-wider uppercase">
                Academics
              </h3>
              <h1 className="pb-4 text-4xl text-sm-darkblue font-bold	">
                Kindergarten level
              </h1>
              <p className="font-serif font-medium text-sm">
                Welcome to Dynamic School's kindergarten level! Our vibrant
                classrooms and dedicated teachers create a playful learning
                environment. Through engaging activities, circle time, and
                outdoor play, we nurture language, math, and social skills. Art
                and show-and-tell sessions celebrate each child's uniqueness. We
                prioritize parent involvement, fostering a sense of community.
                At Dynamic School, we spark a love for learning and build a
                strong foundation for future education.
              </p>
            </div>
            <div className="p-4">
              <Image
                className="rounded-l-lg"
                src="/image.png"
                width={1000}
                height={1000}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div className="bg-white pb-9">
        <div className="bg-green-50 w-10/12 m-auto rounded-xl mt-8 shadow-lg  shadow-gray-500/50">
          <h1 className="p-4 text-4xl text-sm-darkblue font-bold">
            Lower Secondary Level
          </h1>
          <div className="flex justify-between ">
            <div className="p-4">
              <Image
                className="rounded-l-lg"
                src="/image2.png"
                width={1500}
                height={1500}
                alt="img"
              />
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-sm leading-8">
                Welcome to Dynamic School's kindergarten level! Our vibrant
                classrooms and dedicated teachers create a playful learning
                environment. Through engaging activities, circle time, and
                outdoor play, we nurture language, math, and social skills. Art
                and show-and-tell sessions celebrate each child's uniqueness. We
                prioritize parent involvement, fostering a sense of community.
                At Dynamic School, we spark a love for learning and build a
                strong foundation for future education.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /////// */}
      <div className="bg-white pb-9">
        <div className="bg-green-100 w-10/12 m-auto border-4 border-sm-green rounded-xl">
          <div className="flex justify-between ">
            <div className="px-4 py-8">
              <h1 className="pb-4 text-4xl text-sm-darkblue font-bold	">
                Secondary Level
              </h1>
              <p className="font-serif font-medium text-sm leading-8">
                Dynamic School's Secondary Level, spanning classes 5 to 10, is
                committed to providing a well-rounded education that emphasizes
                critical thinking skills. Our dedicated teachers guide students
                through interactive learning, real-world applications, and
                engaging projects to prepare them for future challenges. Beyond
                academics, we value extracurricular activities, creating a
                holistic educational experience that nurtures essential life
                skills and allows students to explore their passions. We believe
                in fostering a supportive community where students not only
                excel academically but also develop into confident individuals
                ready to take on the world.
              </p>
            </div>
            <div className="pr-4 py-8">
              <Image
                className="rounded-l-lg"
                src="/image3.png"
                width={1000}
                height={1000}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* //////// */}
      <div className="bg-green-50 pb-9">
        <div className="bg-white w-10/12 m-auto rounded-xl mt-8 shadow-lg shadow-gray-500/50">
          <h1 className="p-4 text-4xl text-sm-darkblue font-bold">
            Higher Secondary Level
          </h1>
          <div className="flex justify-between ">
            <div className="p-4">
              <Image
                className="rounded-l-lg"
                src="/image4.png"
                width={2000}
                height={2000}
                alt="img"
              />
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-md p-8 leading-8">
                Welcome to Dynamic School's Higher Secondary Level, comprising
                classes 11 and 12. At this crucial stage, students can
                specialize further in three distinct faculties: Science,
                Management, and Law. In the Science faculty, advanced subjects
                and practical exploration deepen understanding, fostering
                critical thinking skills. The Management faculty focuses on
                imparting essential business skills, preparing students for
                leadership roles through hands-on learning experiences. In the
                Law faculty, legal knowledge and critical analysis are
                emphasized, molding future legal professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /////////// */}
      <div className="bg-green-50 ">
        <div className=" w-10/12  m-auto">
          <h1 className="p-4 text-4xl text-sm-darkblue font-bold	">
            Higher Secondary Level Courses
          </h1>
          <div className="flex gap-8 my-8">
            <div className="grid bg-green-100 rounded-xl">
              <Image
                className="rounded-l-lg"
                src="/rectangle3.png"
                width={500}
                height={500}
                alt="img"
              />
              <div className="px-8 pt-4">
                <p className="pb-4">Science</p>
                <p className="text-sm">
                  We provide science faculty in other two subject major as
                  computer and biology with proper lab.
                </p>
              </div>
              <div className="p-4">
                <button className="bg-green-400 text-white rounded-xl px-4 shadow-lg shadow-green-500/50">
                  see all
                </button>
              </div>
            </div>
            <div className="grid bg-green-100 rounded-xl">
              <Image
                className="rounded-l-lg"
                src="/rectangle2.png"
                width={500}
                height={500}
                alt="img"
              />
              <div className="px-8 pt-4">
                <p className="pb-4">Science</p>
                <p className="text-sm">
                  We provide science faculty in other two subject major as
                  computer and biology with proper lab.
                </p>
              </div>
              <div className="p-4">
                <button className="bg-green-400 text-white rounded-xl px-4  shadow-lg shadow-green-500/50">
                  see all
                </button>
              </div>
            </div>
            <div className="grid bg-green-100 rounded-xl">
              <Image
                className="rounded-l-lg"
                src="/rectangle1.png"
                width={500}
                height={500}
                alt="img"
              />
              <div className="px-8 pt-4">
                <p className="pb-4">Science</p>
                <p className="text-sm">
                  We provide science faculty in other two subject major as
                  computer and biology with proper lab.
                </p>
              </div>
              <div className="p-4">
                <button className="bg-green-400 text-white rounded-xl px-4  shadow-lg shadow-green-500/50">
                  see all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Academics;
