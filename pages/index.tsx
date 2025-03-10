import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import SubNavbar from '../components/subnavbar';

const greeting: string = "Hello, TSX!";

const HomePage = () => {
  // Log to browser console when component mounts
  React.useEffect(() => {
    console.log("Greeting message:", greeting);
  }, []);

  return (
    <>
      <Navbar />
      <SubNavbar />
      <Head>
        <title>Next.js TSX Example</title>
      </Head>
      <div>{greeting}</div>
    </>
  );
};

export default HomePage;
