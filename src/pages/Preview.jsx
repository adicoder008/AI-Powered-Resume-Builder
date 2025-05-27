import React, { useState } from 'react';
import axios from 'axios';
import { LuBrain } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
// import Temp1 from './templates/Temp1';

const Preview = () => {
    const [name, setName] = useState("Aditya Singh");
    const [job, setJob] = useState("Software developer intern");
    const [summary, setSummary] = useState("good foundation and experinece, he is from NITK sureathkal");
    const [exp, setExp] = useState("6 months");
    const [skills, setSkills] = useState(["MERN_stack","TailwindsCSS","Bootstrap"]);
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        if (!name || !job || !summary || !exp || skills.length === 0) {
            alert("Please fill in all the fields.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/getres", { 
                name, 
                job,
                skills, 
                summary,
                experience: exp
            });

            const resumeText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No resume generated yet";
            setData(resumeText);
        } catch (error) {
            console.error("Error fetching resume:", error);
            setData("Error generating resume. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* <div className='text-5xl text-center'>MY RESUME</div> */}
            <div className='flex'>
                <div className='w-[45vw] border-t-[6px] rounded-lg border-[#011b10] LEFT shadow-2xl flex flex-col gap-6 m-4 mt-5'>

                    <div className='flex mt-5'>
                        <button className='flex bg-[#b7bf96] rounded-md  items-center px-3 py-2 mx-3'> <RiGalleryView2 className='mr-2' /> Themes</button>


                    </div>

                    <div className=' gap-2 ml-3'>
                        <label className='text-xl' htmlFor="name">Name : </label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className='border text-xl rounded-md border-zinc-600' />
                    </div>
                    <div className='ml-3'>
                        <label className='text-xl' htmlFor="job">Job Title </label>
                        <input type="text" id='job' value={job} onChange={(e) => setJob(e.target.value)} className='border  text-xl rounded-md border-zinc-600' />
                    </div>
                    <div className='ml-3 flex flex-col'>
                        <label className='text-xl' htmlFor="summary">Summary </label>
                        <textarea id='summary' rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} className='border text-xl rounded-md  border-zinc-600 mr-2' />
                    </div>
                    <div className='ml-3 flex flex-col'>
                        <label className='text-xl' htmlFor="exp">Experience </label>
                        <input type="text" id='exp' value={exp} onChange={(e) => setExp(e.target.value)} className='border text-xl rounded-md border-zinc-600 mr-2' />
                    </div>
                    <div className='ml-3 flex flex-col'>
                        <label className='text-xl' htmlFor="skills">Skills </label>
                        <input type="text" id='skills' value={skills.join(', ')} onChange={(e) => setSkills(e.target.value.split(", "))} className='border text-xl rounded-md border-zinc-600 mr-2' />
                    </div>
                    <div>
                        <button className='m-2 mx-3 text-xl bg-[#011b10] text-white rounded-md p-2 px-3 flex items-center' 
                                onClick={(e) => { e.preventDefault(); getData(); }}
                                disabled={isLoading}><LuBrain className='mr-2' />
                            {isLoading ? "Generating..." : "Generate Resume"}
                        </button>
                    </div>
                </div>

                <div className='RIGHT w-1/2 bg-slate-300'>
                    <div className=' p-4 whitespace-pre-line'>{data}</div>
                    {/* <Temp1/> */}
                </div>
            </div>
        </>
    );
};

export default Preview;

