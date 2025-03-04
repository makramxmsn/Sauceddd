import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import SubNavbar from '../components/subnavbar';
import AddJobStep1 from '../components/AddJobStep1';


const JobsPage = () => {
  React.useEffect(() => {
    console.log("Jobs page loaded");
  }, []);

  return (
    <>
      <Navbar />
      <SubNavbar />
      <AddJobStep1 />
      <Head>
        <title>Jobs | Saucedd</title>
      </Head>
      <main className="container">
        <h1>Jobs Dashboard</h1>
        <div className="jobsContainer">
          <p>Manage your job listings here</p>
          <input type="text" placeholder="name" />
          <button> button</button>
          {/* Jobs content will go here */}
        </div>
      </main>
    </>
  );
};

export default JobsPage;
