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
      <div className="con111    mt-28  ) ">
        <div className="con2 w-full h-full items-end flex rounded-xl">
          <div className="flex flex-col    gap-4  w-full mb-16 pl-20   max-sm:pl-3">
            <h1 className="text-white text-5xl font-bold   ">
            Become a Marketing Pro in 4 Weeks
            </h1>
            <h2 className="text-white text-lg  font-normal ">
            Our live, online Marketing workshop helps you build the skills to excel in the industry, get hired, and earn more.
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
              This is a 4-week program. Each week we'll cover a different aspect of Marketing. You'll learn<br/> by doing - we'll give you real-world projects to help you practice
              what you learn. Here's the breakdown:
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0 ">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  hover:shadow-lg hover:shadow-red-300">
                <div
                  className="text-[#0d151c]"
                  data-icon="Question"
                  data-size="24px"
                  data-weight="regular"
                >
                    <div className="text-[#0d151c]" data-icon="Storefront" data-size="24px" data-weight="regular"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"
                      ></path>
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 1: Introduction to Marketing</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Understand the basics of Marketing and its applications in the industry.</p>
                  </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  hover:shadow-lg hover:shadow-red-300">
                <div
                  className="text-[#0d151c]"
                  data-icon="Person"
                  data-size="24px"
                  data-weight="regular"
                >
                 <div className="text-[#0d151c]" data-icon="Television" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"
                      ></path>
                    </svg>
                </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 2: Employee Relations
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Learn how to manage employee relations and handle conflicts.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col hover:shadow-lg hover:shadow-red-300">
                <div
                  className="text-[#0d151c]"
                  data-icon="Control"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,125.66a8,8,0,0,1-11.32,0L128,59.31,61.66,125.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,125.66Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 3: Talent Management
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Dive into the world of Talent Management and learn about
                    different HR systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col hover:shadow-lg hover:shadow-red-300">
                <div
                  className="text-[#0d151c]"
                  data-icon="Checks"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 4: Compliance and Ethics
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Master the art of Compliance and Ethics in the workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

</div>
    </div>
  )
}

export default Marketing
