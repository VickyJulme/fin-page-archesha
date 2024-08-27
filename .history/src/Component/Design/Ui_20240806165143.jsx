import React from 'react'

import './Ui.css'

function Ui() {
  return (
    <div>
                   {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
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
      </header> */}

      
      {/* <div className="flex justify-center  flex-col items-center">
      <div className="con220    mt-28  ) ">
        <div className="con2 w-full h-full items-end flex rounded-xl">
          <div className="flex flex-col    gap-4  w-full mb-16 pl-20   max-sm:pl-3">
            <h1 className="text-white text-5xl font-bold   ">
            Become a Better Designer in 4 Weeks
            </h1>
            <h2 className="text-white text-lg  font-normal ">
            Our live, online UI/UX design workshop helps you build the skills to excel in the industry, get hired, and earn more.
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
                    Week 2: Digital Marketing
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                  Learn how to use Digital Marketing tools and platforms effectively.
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
                <div className="text-[#0d151c]" data-icon="Brandy" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                  Week 3: Branding and Strategy
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                  Dive into the world of Branding and Marketing Strategy.
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
                 <div className="text-[#0d151c]" data-icon="Presentation" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"
                      ></path>
                    </svg>
                  </div>
                  </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                  Week 4: Marketing Analytics
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                  Master the art of Marketing Analytics and Reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

</div> */}

<div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
          <div class="flex items-center gap-4 text-[#0d151c]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Hubnex Educate</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#0d151c] text-sm font-medium leading-normal" href="#">Home</a>
              <a class="text-[#0d151c] text-sm font-medium leading-normal" href="#">Workshops</a>
              <a class="text-[#0d151c] text-sm font-medium leading-normal" href="#">Services</a>
              <a class="text-[#0d151c] text-sm font-medium leading-normal" href="#">Sign In</a>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/6b1c9f11-3bbc-4336-8f50-f084dce83415.png");'
                >
                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Become a Better Designer in 4 Weeks
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our live, online UI/UX design workshop helps you build the skills to excel in the industry, get hired, and earn more.
                    </h2>
                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span class="truncate">Start</span>
                  </button>
                </div>
              </div>
            </div>
            <h1 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Weekly Learning Objectives</h1>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <div class="flex flex-col gap-4">
                <h1
                  class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  What You'll Learn
                </h1>
                <p class="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  This is a 4-week program. Each week we'll cover a different aspect of UI/UX design. You'll learn by doing - we'll give you real-world projects to help you
                  practice what you learn. Here's the breakdown:
                </p>
              </div>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="User" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 1: Understand UI/UX</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Learn the fundamentals of UI/UX design, user research, and design thinking. Understand the role of a designer in a digital environment.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Users" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 2: Design Principles</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Develop the skills to create intuitive, user-friendly designs based on principles like hierarchy, consistency, and feedback. Learn the importance of user
                      experience in design.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Chats" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 3: Tools and Techniques</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Master the tools and techniques used in the industry, including Adobe XD, Figma, and Sketch. Understand the role of a designer in a collaborative environment.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Gauge" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 4: Industry Applications</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Learn how to apply your design skills to real-world projects, including web and mobile interfaces. Understand the role of a designer in the development
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            


    </div>
  )
}

export default Ui
