import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Services(){
return (
  <div className='bg-[#F5F7FA] py-10 flex justify-center text-center'>
    <div>
      <h3 className='text-[#1E3A8A] text-[2.25rem] font-semibold leading-[1]'>ผลงานและบริการของเรา</h3>
      <a href="" className='line-flex justity-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] text-while rounded-md'>ดูผลงานทั้งหมด <HiOutlineArrowNarrowRight className='inline' /> </a>
    </div>
  </div>
  )
}

export default Services
