// This file will not be used directly by Next.js
// See the new pages/index.tsx file instead
import React from 'react';
import Navbar from '../components/navbar';

const greeting: string = "Hello, TSX!";

const App = () => {
  return (
    <>
      <Navbar />
      <div>{greeting}</div>
    </>
  );
};

// Show a more readable output in the console
console.log("Greeting message:", greeting);
