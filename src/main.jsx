import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider, SignIn } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router=createBrowserRouter([
//   {
//     element:<App/>,
//     children:[
//       {
//         path:'/home',
//         element:<Home/>
//       },
//       {
//         path:'/dashboard',
//         element:<Dashboard/>
//       }
      
//     ]
//   },
//   {
//     path:'/auth/signin',
//     element:<SignIn/>
//   }
// ])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
      <App/>
    {/* </ClerkProvider> */}
  </StrictMode>
);
