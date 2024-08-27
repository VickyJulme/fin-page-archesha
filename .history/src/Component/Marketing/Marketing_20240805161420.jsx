import React from 'react'
import './Marketing.css'

function Marketing() {
  return (
    <div>
                                                    
                                                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d151c]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] ">
            Hubnex Educate
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal "
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Workshops
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Services
            </a>
            <a
              className="text-[#0d151c] text-sm font-medium leading-normal"
              href="#"
            >
              Sign In
            </a>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <a href="Get Started">
              {" "}
              <span className="truncate">Get Started</span>
            </a>
          </button>
        </div>
      </header>


      <div className="flex justify-center  flex-col items-center">
        <div className="con     mt-28  ) ">
          <div className="con2 w-full h-full items-end flex rounded-xl">
            <div className="flex flex-col    gap-4  w-full mb-16 pl-20   max-sm:pl-3">
              <h1 className="text-white text-5xl font-bold   ">
                Get Mastery in Data Science in just 6 <br /> weeks
              </h1>
              <h2 className="text-white text-lg  font-normal ">
                Our live, online Data Science workshop helps you build the
                skills to excel in the industry, get hired, and earn
                <br /> more.
              </h2>

              <div className=" w-full ">
                <button className="  w-24 py-3   cursor-pointer   rounded-xl px-4  bg-[#2094f3] text-slate-50 text-base font-bold leading-normal hover:shadow-lg hover:shadow-gray-600">
                  <span className="truncate">Start</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <h1 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Weekly Learning Objectives
            </h1>
            <div className="flex flex-col gap-10 px-4 py-10 @container ">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  What You'll Learn
                </h1>
                <p className="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  This is a 6-week program. Each week we'll cover a different
                  aspect of Data Science. You'll <br />
                  learn by doing - we'll give you real-world projects to help
                  you practice what you learn. Here's <br />
                  the breakdown:
                </p>
              </div>
              </div>
      </div>

</div>
</div>
    </div>
  )
}

export default Marketing
