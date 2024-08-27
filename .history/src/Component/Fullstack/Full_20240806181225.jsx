import React from 'react'
import './Full.css'

function Full() {
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
        <div className="cont203     mt-28  ) ">
          <div className="con2 w-full h-full items-end flex rounded-xl">
            <div className="flex flex-col    gap-4  w-full mb-16 pl-16   max-sm:pl-3">
              <h1 className="text-white text-5xl font-bold   ">
              Become a Full Stack Developer in 8 Weeks
              </h1>
              <h2 className="text-white text-lg  font-normal ">
              Our live, online Full Stack Developer workshop helps you build the skills to excel in the industry, get hired, and earn more.
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
                This is an 8-week program. Each week we'll cover a different aspect of Full Stack <br/>Development. You'll learn by doing - we'll give you real-world projects to help
                  you practice<br/> what you learn. Here's the breakdown:
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="Globe" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 1: Introduction to Web Development</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Understand the basics of Web Development and its applications in the industry.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="Link" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 2: Frontend Development</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Learn how to build interactive and responsive user interfaces.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="Door" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,92a12,12,0,1,1-12-12A12,12,0,0,1,168,132Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 3: Backend Development</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Dive into the world of Backend Development and learn about server-side logic.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="Database" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 4: Databases and APIs</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Master the art of Database Design and RESTful APIs.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 5: Authentication and Security</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Explore the realm of Authentication and Security in modern web applications.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col  cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-[#0d151c]" data-icon="TestTube" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 6: Testing and Debugging</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Learn the best practices for Testing and Debugging your code.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0d151c]" data-icon="Rocket" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 7: Deployment and DevOps</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">Understand the concepts of Deployment and DevOps in a production environment.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0d151c]" data-icon="CodaLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.37,48.37,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">Week 8: Capstone Project</h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Work on a real-world project under the guidance of our instructors. Get hands-on experience in an industry-relevant environment.
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

export default Full
