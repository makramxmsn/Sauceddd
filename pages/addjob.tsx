import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import JobList from '../components/JobsList';
import styles from '../assets/stylesheets/addjob.module.css';

// Use function declaration instead of arrow function
function AddJobPage() {
  React.useEffect(() => {
    console.log("Add Job page loaded");
  }, []);

  return (
    <>
      <Head>
        <title>Add New Job | Saucedd</title>
        <meta name="description" content="Create a new job posting" />
      </Head>
      <Navbar />
      <div className="container">
        <h1>Add New Job</h1>
        <p>Create a new job posting for candidates to apply</p>
        <JobList />
      </div>
    </>
  );
}

export default AddJobPage;