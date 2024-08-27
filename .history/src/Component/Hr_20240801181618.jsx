import React from 'react'
import './Hr.css'

function Hr() {
  return (
    <div className='flex justify-center items-center'>


      <div className='con1     mt-28  ) '>

        <div className='con2 w-full h-full items-end flex rounded-xl'>
          <div className="flex flex-col    gap-4  w-full mb-16 pl-20 ">
            <h1
              className="text-white text-5xl font-bold   "
            >
              Master HR in just 4 Weeks
            </h1>
            <h2 className="text-white text-lg font-normal ">
              Our live, online HR workshop helps you build the skills to excel in the industry, get hired, and earn more.
            </h2>

            <div className=' w-full '>

              <button
                className="  w-24 py-3   cursor-pointer   rounded-xl px-4  bg-[#2094f3] text-slate-50 text-base font-bold leading-normal "
              >
                <span className="truncate">Start</span>
              </button>
            </div>




          </div>




        </div>
      </div>



      



    </div>
  )
}

export default Hr

