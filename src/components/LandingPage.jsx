import React from 'react'
import { CgNotes } from "react-icons/cg";
import { UserButton } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <>
      <div className='NAVBAR px-3'>
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                {/* <UserButton/>---->LOOK INTO THIS */}
                <img src="/logo3.jpg" className='h-12' alt=""  />
                <Link to="/" className='flex mx-3 text-[1.2rem] text-center items-center'>Home </Link>
                <Link to="/ShowTemplates" className='flex mx-3 text-[1.2rem] text-center items-center'>Templates</Link>
                <Link to="/one" className='flex mx-3 text-[1.2rem] text-center items-center'>Contact Us</Link>
                {/* <div className='flex mx-3 text-center items-center'></div> */}
              </div>
              
              <button className='m-2 mx-3 bg-[#011b10] text-white rounded-md p-2 px-3'>Getting started</button>
              
            </div>
            <hr />
          </div>
          {/* // ............................................ */}
            <div className='text-center text-6xl my-4 mb-6 text-[#253429]'>AI RESUME BUILDER</div>
            <div className='flex justify-around  mt-12'> 
              <div className='w-[40vw] ' >
                <div className='text-[2.35rem]'>Craft a <span className=''>STANDOUT</span> resume with out <span>AI</span> powered builder</div>
                <div className='text-[1.2rem]'>Turn rough notes into polished, interview-winning resumes with cutting-edge AI. Our tool uses Google’s Gemini API to analyze your experience, suggest powerful phrasing, and generate custom, ATS-friendly resumes tailored to your dream job—effortlessly.</div>
                <div className='flex gap-10 my-3'>
                  <button className='m-2 mr-3 bg-[#011b10] text-white rounded-md p-2 px-3'>Getting started</button>
                  <button className='m-2 mx-3 text-[#011b10] bg-white rounded-md p-2 px-3 ring-2'>Templates</button>
                </div>
                
              </div>
              <img src="/n.jpg" className='w-[40vw] h-[70vh] overflow-hidden object-cover object-top' alt="" />
            </div>
            {/* ....................................... */}
            <div className='mt-20 text-center text-5xl '>
                How it works?
            </div>
            <div className='flex justify-around gap-6 my-5 pt-4'>
              <div className='shadow-xl bg-white w-[29vw] flex flex-col p-6'>
                <div>
                <CgNotes size={30}/>
                </div>
                <div className='font-bold text-xl my-2'>
                Smart Content Enhancement
                </div>
                <div className='text-[1rem] '>
                Simply upload your handwritten notes or bullet points—our AI instantly extracts skills, achievements, and keywords using Gemini’s advanced NLP. It rewrites your content with impactful, recruiter-approved language
                </div>
              </div>
              <div className='shadow-xl bg-white w-[29vw] flex flex-col p-6'>
                <div>
                <CgNotes size={30}/>
                </div>
                <div className='font-bold text-xl my-2'>
                One-Click Professional Formatting
                </div>
                <div className='text-[1rem] '>
                No more struggling with templates. The AI picks the best layout for your industry—clean ,structured and perfectly organizes sections (Experience, Education, Projects). Every detail, from fonts to spacing, is optimized for readability and professionalism.
                </div>
              </div>
              <div className='shadow-xl bg-white w-[29vw] flex flex-col p-6'>
                <div>
                <CgNotes size={30}/>
                </div>
                <div className='font-bold text-xl my-2'>
                Real-Time AI Coaching
                </div>
                <div className='text-[1rem] '>
                Get live suggestions to make your resume stronger (“Try ‘Led a cross-functional team’ instead of ‘Worked with others’”). The system even learns your preferences over time, ensuring future updates are faster and more personalized.
                </div>
              </div>
          </div>
          {/* .......................... */}
          <div className='text-center items-center my-10'><button className='bg-[#011b10] text-white rounded-md p-2 px-3 w-[16vw]'>Get started</button></div>
    </>
  )
}

export default LandingPage
