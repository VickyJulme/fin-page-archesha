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

            <h3 className='text-left mx-20  font-semibold text-base '>Interactive Sessions</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Engage with hands-on activities,<br/>
             Q&A, and networking discussions</p>
            
             </div>


        <div className="flex-item"> 

        <h3 className='text-left m-20 font-semibold text-base '>Expert Mentors</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Invite industry experts to share<br/>
            their knowledge and experiences</p>


             </div>

        <div className="flex-item"> 


        <h3 className='text-left m-20 font-semibold text-base '>Resource Sharing</h3>
            <p className=' para text-left py-0.5 text-slate-400 '>Engage with hands-on activities,<br/>
             Q&A, and networking discussions</p>
            
             </div>
    </div>


    </div>
  )
}

export default Hr

