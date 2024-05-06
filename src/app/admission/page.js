import React from "react";
import Footer from "../../components/footer/page";
import Navbar from "../../components/navigation/page";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";

function Admission() {
  return (
    <>
      <Navbar backgroundColor="#b4e8b6"/>
      <div className="bg-green-50 py-10">
        <div className="pl-32 py-2">
          <Link href="./home" className="text-gray-500">
            Home
          </Link>
          <KeyboardArrowRightIcon />
          <Link href="#">Admission</Link>
        </div>
        <div className="bg-white w-10/12 m-auto border-4 border-sm-green rounded-xl ">
          <div className="flex justify-between ">
            <div className="p-4">
              <h3 className="text-2xl text-sm-darkblue font-semibold font-sans tracking-wider uppercase">
                Admission
              </h3>
              <h1 className=" text-4xl text-sm-lblue800 font-bold">
                Requirements
              </h1>
              <ol className="list-decimal p-6">
                <li>
                  Age Verification: Provide a copy of the student's birth
                  certificate for age verification.
                </li>
                <li>
                  Previous Academic Records: Submit transcripts or academic
                  records from the previous school attended.
                </li>
                <li>
                  Entrance Examination: Students applying for classes 6 to 12
                  must undergo a subject-specific entrance examination.
                </li>
                <li>
                  Extracurricular Achievements: Share information about any
                  extracurricular activities, awards, or achievements.
                </li>
              </ol>
            </div>
            <div className="py-10 pr-4">
              <Image
                className="rounded-l-lg"
                src="/image5.png"
                width={700}
                height={700}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white">
        <div className="bg-green-50 mt-8 w-10/12 m-auto rounded-xl p-6 shadow-lg  shadow-gray-500/50">
          <h3 className="text-4xl text-sm-lblue800 font-bold pb-5 font-sans tracking-wider uppercase">
            Process
          </h3>
          <div>
            <p className="px-2">Admission Process at Dynamic School:</p>

            <ul class="list-decimal px-8">
              <li>Application</li>
              <ul className="list-disc pl-4">
                <li>Inquire and fill out the online application form.</li>
              </ul>
              <li>Interview</li>
              <ul className="list-disc pl-4">
                <li>
                  Participate in a brief interview with school administrators.
                </li>
              </ul>
              <li>Tour and Orientation:</li>
              <ul className="list-disc pl-4">
                <li>Attend a school tour and orientation session.</li>
              </ul>
              <li>Decision</li>
              <ul className="list-disc pl-4">
                <li>The admissions committee communicates the decision.</li>
              </ul>
            </ul>
            <p className="px-2">
              Our efficient process ensures a smooth transition into the Dynamic
              School community. Welcome to a place where learning thrives!
            </p>
          </div>
        </div>
      </div>
      {/* //////// */}
      <div className="bg-white pb-9 ">
        <div className="bg-sm-green100 w-10/12 m-auto border-4 border-sm-green rounded-xl mt-16">
          <div className="flex justify-between ">
            <div className="px-4 py-8">
              <h1 className="pb-4 text-4xl text-sm-lblue800 font-bold px-6">
                Scholarships
              </h1>
              <p className="font-normal text-sm leading-6 px-6">
                Dynamic School provides scholarships in academics, sports, and
                Bhanubhakta Acharya's legacy, along with need-based financial
                assistance. The program aims to recognize diverse talents,
                ensuring equal opportunities for all students. Welcome to a
                school that celebrates your unique abilities! Application
                Process: Students can express their interest in scholarships
                during the regular admission process. Depending on the
                scholarship category, applicants may need to submit additional
                documentation, such as academic records, sports achievements, or
                cultural contributions. Selection Criteria: The scholarship
                committee evaluates applicants based on various criteria,
                including academic performance, sports achievements, cultural
                contributions, and financial need. Shortlisted candidates may be
                invited for an interview to discuss their aspirations and
                contributions to the school community.
              </p>
            </div>
            <div className="px-8 py-8">
              <Image
                className="rounded-l-lg"
                src="/image6.png"
                width={1500}
                height={1500}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ////// */}
      <div className="bg-green-50 py-10">
        <div className="bg-white w-10/12 m-auto shadow-lg shadow-gray-500/50 py-10">
          <h2 className="pb-4 text-4xl text-sm-lblue800 font-bold px-12" >
            Scholarship Types
          </h2>
          <p className="px-12">
            Dynamic School offers scholarships in academics, sports, and honors
            Bhanubhakta Acharya's legacy, including need-based financial
            assistance.
          </p>
          <div className="px-16">
            <ul className="list-decimal ">
              <li className="text-sm-lblue600">
                Academic Excellence Scholarship:
              </li>
              <ul className="list-disc pl-4">
                <li>For outstanding academic achievements.</li>
                <li>
                  Maintaining high academic standards is required for renewal.
                </li>
              </ul>
              <li className="text-sm-lblue600">
                Sports Achievement Scholarship:
              </li>
              <ul className="list-disc pl-4">
                <li>
                  Recognizing exceptional sports skills and sportsmanship.
                </li>
                <li>Emphasis on balancing academics and sports.</li>
              </ul>
              <li className="text-sm-lblue600">
                Bhanubhakta Acharya Legacy Scholarship:
              </li>
              <ul className="list-disc pl-4">
                <li>Honoring cultural and literary contributions.</li>
                <li>
                  Encouraging active involvement in Nepali literature and
                  cultural values.
                </li>
              </ul>
              <li className="text-sm-lblue600">
                Need-Based Financial Assistance Scholarship:
              </li>
              <ul className="list-disc pl-4">
                <li>
                  Ensuring access to education despite financial constraints.
                </li>
                <li>
                  Evaluation based on demonstrated financial need, academic
                  commitment, and community involvement.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admission;
