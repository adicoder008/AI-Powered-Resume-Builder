// import React from 'react'
// const Temp1 = ({ name, job, summary, exp, skills }) => {
//   return (
//     <>
//       <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">{name || "Your Name"}</h1>
//         <p className="text-gray-500">{job || "Job Title"}</p>
//       </div>

//       <hr className="my-4" />

//       {/* Contact Section */}
//       <div className="text-sm text-gray-700 mb-4">
//         HIIIIIIIII         HIIIIIIIIIIIIIIIII HIIIIIIIIIIIIIIIIIIIIIIIIII
//       </div>

//       {/* Summary */}
//       {/* <div className="mb-4">
//         <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
//         <p className="text-gray-600">{summary || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit alias fugiat natus. Eius dolor ratione inventore libero impedit maiores delectus! Ipsa."}</p>
//       </div> */}

//       {/* Experience Section */}
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
//         <p className="text-gray-600">{exp || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, debitis?"}</p>
//       </div>

//       {/* Skills */}
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
//         <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsam.</p>
//       </div>

//       {/* Education */}
//       <div>
//         <h2 className="text-xl font-semibold text-gray-800">Education</h2>
//         <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem similique obcaecati ducimus quo! Ex assumenda deleniti numquam fuga molestias, explicabo sed facere ullam totam tempora, a asperiores maxime illo hic.</p>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Temp1



import React from 'react';

const ResumeTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-black border-black">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">James Appleseed</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          <span>+1 555-123-4567</span>
          <span>JamesAppleseed@example.com</span>
          <span>New York, NY</span>
        </div>
      </header>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Experience</h2>
        
        {/* Company A */}
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Company A | New York, NY</h3>
            <span className="text-gray-600">01/2022 - Present</span>
          </div>
          <h4 className="italic mb-2">Business Development Manager</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed new strategic business plans and marketing strategies, that grew portfolio by $50m annually</li>
            <li>Oversee team of 5 direct reports; 2 managers and 3 individual contributors</li>
            <li>Manage vendor relationships, lead pipeline and direct marketing sales campaigns</li>
            <li>Present to company executive level quarterly on team goals and planning</li>
            <li>Responsible for new account acquisition, profitability targets, and relationship management</li>
          </ul>
        </div>

        {/* Company C */}
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Company C | Brooklyn, NY</h3>
            <span className="text-gray-600">07/2020 - 01/2022</span>
          </div>
          <h4 className="italic mb-2">Administrative Assistant</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scheduled and coordinated meetings and travel for team members</li>
            <li>Trained 3 additional administrative assistants during period of team expansion</li>
            <li>Organized meetings notes and presentations for team leadership</li>
          </ul>
        </div>

        {/* Company B */}
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Company B | New York, NY</h3>
            <span className="text-gray-600">08/2018 - 07/2020</span>
          </div>
          <h4 className="italic mb-2">Business Development Associate</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Managed sales cycle from prospect to closing independently</li>
            <li>Discussed progress with management and developed solutions to improve closing rate by 30%</li>
            <li>Created sales reports for team leadership with Python and internal data visualization tools</li>
            <li>Worked closely with marketing to build and manage thoughtful, high performing materials for sales</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <div>
            <h3 className="font-semibold">Software</h3>
            <p>Python, Data Analysis, Data Visualization</p>
          </div>
          <div>
            <h3 className="font-semibold">Communication</h3>
            <p>Conflict Resolution, Interpersonal Relationships</p>
          </div>
          <div>
            <h3 className="font-semibold">Design</h3>
            <p>Photoshop, Illustrator, Comic Design</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Education</h2>
        <div className="flex justify-between mb-1">
          <h3 className="font-bold">Dream School | Chicago, IL</h3>
          <span className="text-gray-600">07/2018</span>
        </div>
        <h4 className="italic mb-2">English</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Graduated Magna Cum Laude</li>
          <li>Studied and became conversational in Spanish during a semester abroad in Mexico</li>
          <li>Volunteered on a monthly basis to prepare meals at the local community food bank</li>
        </ul>
      </section>

      {/* Certificates */}
      <section>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Certificates</h2>
        <p>First Aid Certification, CPR Certification</p>
      </section>
    </div>
  );
};

export default ResumeTemplate;