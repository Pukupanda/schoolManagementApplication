'use client'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Result = ({overview, grade, class_section,data }) => {
  return (
    <div className="bg-white ">
      <div className="flex justify-between">
        <div>
          <p className="text-sm-black9 text-lg pl-4">{overview}</p>
        </div>
        <div>
          <ul className="w-full flex">
            <li className="group relative dropdown px-4 text-black cursor-pointer text-base tracking-wide">
              <a className="text-sm-black11">{grade}<ArrowDropDownIcon/></a>
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
      <div>
        {data.map((item) => {
          return (
            <div className="flex gap-4 bg-sm-green100 m-4 px-4 rounded-xl hover:bg-sm-green300">
              <div className='w-1/5	'><img className='mt-2' src={item.imageUrl} alt="Card Image" width={40} height={40}/></div>
              
              <div className='w-3/5	'><p className="text-black text-sm text-center p-4">{item.fullname}</p></div>
              <div className='w-1/5	'><p className="text-black text-sm text-center p-4">{item.marks}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Result
