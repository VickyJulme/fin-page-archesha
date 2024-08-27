import React from 'react'
import './Finance.css'

function Finance() {
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


<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/6c7c771b-113e-44e6-823d-fe54c33f285f.png");'
                >
                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Become Expert in Finance in 5 Weeks
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our live, online Finance workshop helps you build the skills to excel in the industry, get hired, and earn more.
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
                  This is a 5-week program. Each week we'll cover a different aspect of Finance. You'll learn by doing - we'll give you real-world projects to help you practice
                  what you learn. Here's the breakdown:
                </p>
              </div>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Money" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 1: Introduction to Finance</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Understand the basics of Finance and its applications in the industry.</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Presentation" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 2: Financial Analysis</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Learn how to analyze financial statements and make investment decisions.</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Control" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M205.66,125.66a8,8,0,0,1-11.32,0L128,59.31,61.66,125.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,125.66Z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 3: Investment Management</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Dive into the world of Investment Management and learn about different asset classes.</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Warning" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 4: Risk Management</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Master the art of Risk Management and its various techniques.</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Perspective" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M240,120H224V48a16,16,0,0,0-18.86-15.74l-160,29.09A16,16,0,0,0,32,77.09V120H16a8,8,0,0,0,0,16H32v42.91a16,16,0,0,0,13.14,15.74l160,29.09A16.47,16.47,0,0,0,208,224a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM48,77.09,208,48v72H48ZM208,208,48,178.91V136H208Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Week 5: Financial Modeling</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Explore the realm of Financial Modeling and its applications in modern finance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <div class="flex flex-col gap-4">
                <h1
                  class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  Benefits of the Program
                </h1>
                <p class="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  Our Finance program is designed to help you grow as a Financial Analyst. Here are some of the benefits you'll get from completing the program.
                </p>
              </div>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Trophy" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Earn a certificate and badge</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Get a certificate of completion and a digital badge to add to your portfolio</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="User" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Learn from experienced Financial Analysts</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Our instructors are experienced Financial Analysts from top companies</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Lightning" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Master Financial Analysis skills</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Our curriculum is designed to help you master the skills needed in the industry</p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div class="text-[#0d151c]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">Boost your career</h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">Get Job opportunities such as Financial Analyst, Investment Banker, Financial Planner, Risk Manager, Accountant, Financial Advisor, Tax Advisor, Credit Analyst, Budget Analyst.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Certificate Criteria</h2>
            <p class="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              To earn the certificate, you must complete all the course requirements and the capstone project. The certificate will be issued by our institution and can be shared
              on your LinkedIn profile or resume.
            </p>
            <h2 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Cancellation Policy</h2>
            <p class="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              You can cancel your enrollment up to 7 days before the start of the program and get a full refund. After that, the refund will be prorated based on the completed
              portion of the program.
            </p>
            <h1 class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Our Industry Partners</h1>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/70ebdf53-18a5-41e4-b706-625bf73a1b76.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/d49ef172-0dfc-4b6d-a5b5-2e9ceaa714f5.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/030ac155-b7a3-41db-942d-26c9010d5763.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/a7333b6a-c870-430e-a740-313e88e3eaa4.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/51151cc1-b54f-49e5-8533-4b297ef796ba.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/fa974156-5500-4990-a688-3c7205878831.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/0ad9f026-f3a1-4ae8-b53e-3fc5d4c46dd1.png");'
                ></div>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/204cc2f5-585d-4878-af98-bddeae082269.png");'
                ></div>
              </div>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Get started</span>
              </button>
            </div>
            <h1 class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">What Our Students Say</h1>
            <div class="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4">
              <div class="flex flex-col gap-3 bg-slate-50">
                <div class="flex-1">
                  <p class="text-[#0d151c] text-base font-medium leading-normal">Rachel Williams</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">June 1, 2024</p>
                </div>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-[#0d151c] text-base font-normal leading-normal">
                  The program is fantastic. It's helped me learn a lot about Finance. I've improved my skills, learned new tools, and gained valuable insights. I've also learned a
                  lot about the industry and the role of a Financial Analyst.
                </p>
                <div class="flex gap-9 text-[#49779c]">
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">5</p>
                  </button>
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-3 bg-slate-50">
                <div class="flex-1">
                  <p class="text-[#0d151c] text-base font-medium leading-normal">John Smith</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">May 15, 2024</p>
                </div>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-[#0d151c] text-base font-normal leading-normal">
                  I learned a lot from this program. The instructors were great, and the content was very relevant. I've already started applying what I learned in my projects, and
                  I'm seeing results. I would definitely recommend this program to others.
                </p>
                <div class="flex gap-9 text-[#49779c]">
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">7</p>
                  </button>
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-3 bg-slate-50">
                <div class="flex-1">
                  <p class="text-[#0d151c] text-base font-medium leading-normal">Sarah Johnson</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">April 30, 2024</p>
                </div>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-[#0d151c] text-base font-normal leading-normal">
                  This program is excellent. It covers all the essential Finance skills, and the instructors are very knowledgeable. I've gained a lot of valuable insights that I
                  can apply to my work. I'm looking forward to the next session.
                </p>
                <div class="flex gap-9 text-[#49779c]">
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">4</p>
                  </button>
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <h2 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">FAQ</h2>
            <div class="flex flex-col p-4">
              <details class="flex flex-col border-t border-t-[#cedde8] py-2 group" open="">
                <summary class="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p class="text-[#0d151c] text-sm font-medium leading-normal">What are the prerequisites for this workshop?</p>
                  <div class="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p class="text-[#49779c] text-sm font-normal leading-normal pb-2">
                  Before attending the finance workshop, it's essential to have a basic understanding of accounting principles, financial statements, and economic concepts. Familiarity with spreadsheets, basic investment knowledge, and analytical skills are beneficial. A keen interest in financial markets and a willingness to engage with complex topics will enhance your learning experience.
                </p>
              </details>
              <details class="flex flex-col border-t border-t-[#cedde8] py-2 group">
                <summary class="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p class="text-[#0d151c] text-sm font-medium leading-normal">Is this workshop suitable for beginners?</p>
                  <div class="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p class="text-[#49779c] text-sm font-normal leading-normal pb-2">
                  Yes, the finance workshop is suitable for beginners. It starts with fundamental concepts, making it accessible to those with little to no prior knowledge of finance. The course builds a solid foundation, gradually introducing more complex topics to ensure a comprehensive understanding.
                </p>
              </details>
              <details class="flex flex-col border-t border-t-[#cedde8] py-2 group">
                <summary class="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p class="text-[#0d151c] text-sm font-medium leading-normal">Will I get a certificate after completing the workshop?</p>
                  <div class="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p class="text-[#49779c] text-sm font-normal leading-normal pb-2">
                  Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.
                </p>
              </details>
            </div>
            <h2 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Workshops</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/3ddf6040-24b0-421c-ad2e-7927c0027705.png");'
                ></div>
                <div>
                  <p class="text-[#0d151c] text-base font-medium leading-normal">Financial Analysis Workshop</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">August 15th, 2024</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/82d8eaea-95cf-46a8-b0d4-097370f35a58.png");'
                ></div>
                <div>
                  <p class="text-[#0d151c] text-base font-medium leading-normal">Investment Management Workshop</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">August 22nd, 2024</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/e4f57ffe-98f3-4938-a986-0bd87e751c45.png");'
                ></div>
                <div>
                  <p class="text-[#0d151c] text-base font-medium leading-normal">Risk Management Workshop</p>
                  <p class="text-[#49779c] text-sm font-normal leading-normal">August 29th, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  <?div </div>

    </div>
  )
}

export default Finance
