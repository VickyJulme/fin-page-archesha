import React from 'react'
import './Hr.css'

function Hr() {
  return (
    <div>
      <h1 className="font-semibold text-center text-5xl">
      Explore My Offerings for you
    </h1>
    <p className='text-center m-5 text-2xl'>Discover tailored solutions infused with cutting edge<br/>
      innovation and expertise</p>


      <div id="flex-container">
        <div className="flex-item"> 

            <h3 className='text-left my-16  mx-10 font-semibold text-2xl '>Interactive Sessions</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Engage with hands-on activities,<br/>
             Q&A, and networking discussions</p>
            
             </div>


        <div className="flex-item"> 

        <h3 className='text-left my-16  mx-10 font-semibold text-2xl '>Expert Mentors</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Invite industry experts to share<br/>
            their knowledge and experiences</p>


             </div>

        <div className="flex-item"> 


        <h3 className='text-left my-16  mx-10 font-semibold text-2xl '>Resource Sharing</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Engage with hands-on activities,<br/>
             Q&A, and networking discussions</p>
            
             </div>
             <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/f19572df-3304-4064-aa15-f19df58d4b06.png");'
                ></div>
            
    </div>


    </div>
  )
}

export default Hr

