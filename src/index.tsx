// This file will not be used directly by Next.js
// See the new pages/index.tsx file instead
import React from 'react';
import Navbar from '../components/navbar';
import SubNavbar from '../components/subnavbar';

const greeting: string = "Hello, TSSSX!";

const App = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <div>{greeting}</div>
    </>
  );
};

// Show a more readable output in the console
console.log("Greeting message:", greeting);
