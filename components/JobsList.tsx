import React, { useState, useEffect } from 'react';
import styles from '../assets/stylesheets/addjob.module.css';

// Define Job interface
interface Job {
  id: number;
  job_title: string;
  job_location: string;
  job_description: string;
  workplace_type: string;
  job_type: string;
  frequency: string;
  minimum_salary: number;
  maximum_salary: number;
  currency_type: string;
  created_at: string;
}

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch jobs when component mounts
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/jobs');
      
      if (!response.ok) {
        throw new Error(`Error fetching jobs: ${response.statusText}`);
      }
      
      const data = await response.json();
      setJobs(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch jobs');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="jobs-list">
      <h2>Current Jobs</h2>
      
      {isLoading && <p>Loading jobs...</p>}
      {error && <p className="error">Error: {error}</p>}
      
      {!isLoading && !error && jobs.length === 0 && (
        <p>No jobs available.</p>
      )}
      
      {!isLoading && !error && jobs.length > 0 && (
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.job_title}</h3>
              <p>Location: {job.job_location}</p>
              <p>{job.job_description}</p>
              <p>Workplace Type: {job.workplace_type}</p>
              <p>Job Type: {job.job_type}</p>
              <p>Frequency: {job.frequency}</p>
              <p>Salary: {job.minimum_salary} - {job.maximum_salary} {job.currency_type}</p>
              <p>Created: {new Date(job.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;

