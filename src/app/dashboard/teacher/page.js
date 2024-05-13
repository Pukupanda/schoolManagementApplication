import React from 'react'
import DashboardNavbar from './../../../components/dashboardNavbar/page'
import Attendance from '../../../components/attendentCard/page'

const TeacherDashboard = () => {
  return (
    <div className='flex gap-4 	bg-sm-black4'>
        <div className='w-1/5	'>
        <DashboardNavbar imageUrl='/profile.png' title={'Nameste'} name='Rupa'/>
        </div>
      
      <div className='w-4/5 mt-4'>
       <div className='grid grid-cols-3 gap-5 '>
            <div className='bg-white rounded-lg shadow-inner p-2'>
                <Attendance 
                    overview={'Attendance Overview'} 
                    grade={'class 9'}
                    class_section={'class 9 A'}
                    data={[{title:'Total Students', count:'10'}, {title:'Present', count:'0'}, {title:'Absent', count:'50'}]}/>
            </div>
            <div>ooooo</div>
            <div>ooooo</div>
       </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
