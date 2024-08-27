import React from 'react'
import './Hr.css'

function Hr() {
  return (
    <div className='flex justify-center items-center'>


      <div className='con1     mt-28  ) '>

        <div className='con2 w-full h-full items-end flex rounded-xl'>
          <div className="flex flex-col   bg-black gap-4  w-full mb-16 pl-20 ">
            <h1
              className="text-white text-5xl font-bold   "
            >
              Master HR in just 4 Weeks
            </h1>
            <h2 className="text-white text- font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
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



      {/* <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  // style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/f19572df-3304-4064-aa15-f19df58d4b06.png");'
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Master HR in just 4 Weeks
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our live, online HR workshop helps you build the skills to excel in the industry, get hired, and earn more.
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Start</span>
                  </button>
                </div>
              </div>
            </div> */}



    </div>
  )
}

export default Hr

