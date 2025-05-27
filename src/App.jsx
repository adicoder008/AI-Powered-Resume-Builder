import React from 'react'

import LandingPage from './components/LandingPage';
// import SignIn from './components/SignIn';
import { SignIn } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import Preview from './pages/Preview';

import { useUser } from '@clerk/clerk-react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"; 
import { ClerkProvider } from '@clerk/clerk-react'
import Temp1 from './templates/Temp1';
import ShowTemplates from './components/ShowTemplates';



const router=createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>, 
  }
  ,
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/showTemplates',
    element:<ShowTemplates/>

  },
  {
    path:'/signin',
    element:<SignIn/>
  },{
    path:'/one',
    element:<Temp1/>
  },{
    path:'/res',
    element:<Preview/>
  }
]);

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <p>Loading...</p>; //  Prevent errors by waiting until auth is loaded
  if (!isSignedIn) return <Navigate to="/signin" replace />; //  Redirect unauthorized users

  return children; //  Allow access if signed in
};

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const App = () => {
  
  return (
    <>
    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
    
    </>
  )
};



export default App
