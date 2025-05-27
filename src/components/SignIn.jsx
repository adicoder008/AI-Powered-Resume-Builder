import React from 'react'
import { SignIn } from '@clerk/clerk-react';

const SignIn = () => {
  return (
    <>
    <div className='flex justify-center items-center h-100vh pl-10'>
      <SignIn routing="path" path="/auth/sign-in" />
    </div>
    </>
    
  );
};

export default SignIn;


// const signin = () => {
//   return (
//     <>
//       <div>hi
//         this is sign in
//       </div>
//     </>
//   )
// }

// export default signin
