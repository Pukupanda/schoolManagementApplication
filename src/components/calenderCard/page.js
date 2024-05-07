import React, { Children } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const CalenderCard = ({date,description,className,icon}) => {
  return (
    <div className='w-full'>
        <div className='p-8 flex justify-between'>
            <div>
            {date && <div className='flex'><AccessTimeIcon className="text-4xl mr-2 "/><p className='text-sm text-sm-black8 pt-2'>{date}</p></div>}
            {description && <p className={className}>{description}</p>}
            </div>
           {icon && <p>{icon}</p>}
            
        </div>
       
    </div>
  )
}
export default CalenderCard

