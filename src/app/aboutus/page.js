import Footer from "@/components/footer/page";
import Navbar from "@/components/navigation/page";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicationIcon from "@mui/icons-material/Medication";
import CottageIcon from "@mui/icons-material/Cottage";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

function About({ backgroundColor }) {
  return (
    <>
      <Navbar backgroundColor="#b4e8b6" />
      <div>
        {/* ////// */}
        <div className="bg-green-50 pb-9">
          <div className="pl-32 py-2">
            <Link href="./home" className="text-gray-500">
              Home
            </Link>
            <KeyboardArrowRightIcon />
            <Link href="#">About Us</Link>
          </div>
          <div className="bg-white w-10/12 m-auto border-4 border-sm-green rounded-xl">
            <div className="flex justify-between ">
              <div className="p-4">
                <h3 className="text-2xl text-sm-darkblue font-semibold pb-4 font-sans tracking-wider uppercase">About</h3>
                <h1 className="pb-4 text-4xl text-sm-darkblue font-bold	">
                  Dynamic School
                </h1>
                <p className="font-serif font-medium text-lg">
                  Dynamic School, founded in 2021, is a Center of Excellence. As
                  an advocate for child-centered education, we work to take the
                  best practices crafted at our school to the larger community.
                </p>
              </div>
              <div className="p-4">
                <Image
                  className="rounded-l-lg"
                  src="/left-educators.png"
                  width={600}
                  height={500}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /////// Message From The Principal////// */}

        <div className="bg-white w-10/12 m-auto ">
          <div className="bg-sm-green100 rounded-xl flex justify-between gap-4 px-4 my-10">
            <div className="bg-white m-auto rounded-xl shadow-2xl shadow-gray-500/50">
              <h1 className="text-center pt-6 text-xl text-sm-darkblue font-semibold	">
                Message From The Principal
              </h1>
              <div className="flex justify-between ">
                <div className="p-6 mt-6 ">
                  <p className="font-serif font-medium text-lg">
                    " Thrilled to witness ongoing student success and growth,
                    dedicated teachers and engaged parents. Exciting plans we
                    continue to nurture a dynamic learning environment. Pooja
                    Shrestha "
                  </p>
                  <p className="mt-2">Pooja Shrestha</p>
                </div>
                <div className="py-6">
                  <Image
                    className="rounded-l-lg"
                    src="/persona.jpg"
                    width={800}
                    height={800}
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white m-auto rounded-xl my-6 shadow-2xl shadow-gray-500/50">
              <h1 className="text-center pt-6 text-xl text-sm-darkblue font-semibold	">
                Message From The Principal
              </h1>
              <div className="flex justify-between ">
                <div className="p-6 mt-6 ">
                  <p className="font-serif font-medium text-lg">
                    " Thrilled to witness ongoing student success and growth,
                    dedicated teachers and engaged parents. Exciting plans we
                    continue to nurture a dynamic learning environment. Pooja
                    Shrestha "
                  </p>
                  <p className="mt-2">Pooja Shrestha</p>
                </div>
                <div className="py-6">
                  <Image
                    className="rounded-l-lg"
                    src="/persona.jpg"
                    width={800}
                    height={800}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Mission and vision */}

        <div className="bg-green-50 my-12 py-10">
          <div className="bg-[url('/section.png')] bg-no-repeat bg-cover w-10/12 m-auto rounded-xl mt-8 p-8 pb-20 leading-7">
            <h1 className="text-4xl font-bold text-sm-darkblue text-center my-4">
              Mission and vision
            </h1>
            <div>
              <p>
                1. Foster a dynamic learning environment, nurturing curiosity,
                and critical thinking, to be a leading institution.
              </p>
              <p>
                2. Cultivate a culture of inclusivity, respect, and
                collaboration, inspiring a passion for lifelong learning and
                continual growth.
              </p>
              <p>
                
                3. Provide innovative and personalized education for a rapidly
                changing world, creating an educational ecosystem that prepares
                students for future challenges.
              </p>
              <p>
                4. Instill values of integrity, responsibility, and resilience,
                striving for excellence in academic achievements, character
                development, and community engagement.
              </p>
              <p>
                5. Embrace diversity and celebrate individual strengths for
                holistic development, establishing a reputation for innovation
                and excellence in education.
              </p>
            </div>
          </div>
        </div>
        {/* ////School Facilities///// */}
        <div className="bg-white w-10/12 m-auto border-4 border-sm-green rounded-xl my-8 p-6 relative">
          <h1 className="text-center text-4xl font-bold text-sm-darkblue">
            School Facilitie
          </h1>
          <div>
            <h1 className="text-2xl font-bold">Transportation:</h1>
            <p className="text-base">
              Safe and efficient transportation services with multiple
              accessible routes.
            </p>
            <h1 className="text-2xl font-bold">Sports:</h1>
            <p className="text-base">
              State-of-the-art facilities, professional coaching, and regular
              inter-school competitions.
            </p>
            <h1 className="text-2xl font-bold">Hostels:</h1>
            <p className="text-base">
              Secure, comfortable hostels with dedicated staff, nutritious
              meals, and structured study hours.
            </p>
            <h1 className="text-2xl font-bold">Library:</h1>
            <p className="text-base">
              Extensive collection, quiet study environment, and regular
              literary events.
            </p>
            <h1 className="text-2xl font-bold">Counseling:</h1>
            <p className="text-base">
              Qualified counselors, confidential support, workshops for mental
              health, and collaboration with parents and teachers.
            </p>
          </div>
          <div className="absolute top-12 right-16">
            <Image
              className="rounded-l-lg"
              src="/illustration.png"
              width={300}
              height={200}
              alt="img"
            />
          </div>
        </div>
        {/* //////////////Health and Safety////////////// */}
        <div className="bg-green-50 ">
          <h1 className="text-center text-4xl font-bold text-sm-darkblue py-4 ">
            Health and Safety
          </h1>
          <div className="w-10/12 m-auto flex pb-10">
            <div className="w-2/5">
              <div className="flex justify-between ">
                <div className="mt-40 bg-sm-green rounded-full w-20 h-20 p-6">
                  <HealthAndSafetyIcon />
                </div>

                <div className="grid gap-20 mr-14">
                  <div className="flex relative" >
                    <div className="line line1 absolute border-0 border-t-2 "
                     style={{  width:'320px',rotate: '334deg',right: '41px',top: '96px'}}>

                    </div>
                    <div className="bg-sm-green rounded-full w-12 h-12 p-3">
                      <MedicalServicesIcon />
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="line line2  absolute border-0 border-t-2" 
                    style={{  width:'260px',rotate: '351deg',right: '68px',top: '60px'}}>
                      
                    </div>
                    <div className="bg-sm-green rounded-full w-12 h-12 p-3">
                      <MedicationIcon className="" />
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="line line3  absolute border-0 border-t-2"
                     style={{  width:'280px',rotate: '11deg',right: '57px',top: '0px'}}>
                        
                     </div>
                    <div className="bg-sm-green rounded-full w-12 h-12 p-3">
                      <CottageIcon />
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="line line4  absolute border-0 border-t-2 "
                      style={{  width:'345px',rotate: '28deg',right: '41px',top: '-62px'}}> 
                     
                      </div>
                    <div className="bg-sm-green rounded-full w-12 h-12 p-3">
                      <CoronavirusIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 w-3/5">
              <div>
                <h4 className="text-lg font-medium font-serif">
                  Safety First at Dynamic School
                </h4>
                <p className="text-sm">
                  We believe that safety should always come first and every
                  decision we make keeps this in mind.
                </p>
              </div>
              <div>
                 
                <h4 className="text-lg font-medium font-serif">
                  Infirmary with full-time Nurse
                </h4>
                <p className="text-sm">
                  Full-time certified Nurse is on duty in the Infirmary during
                  school hours.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium font-serif">
                  Earthquake Safety
                </h4>
                <p className="text-sm">
                  Earthquake drills are regular and earthquake safety protocols
                  are in place with a team that oversees it.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium font-serif">
                  Pandemic Related Safety Protocols
                </h4>
                <p className="text-sm">
                  The leadership team of the school has worked closely with
                  public health professionals to design strict safety protocols
                  during the COVID-19 pandemic. The in-person school has opened
                  in gradual phases and multi-layered safety plans have been
                  implemented to keep all the students and the staff safe .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
