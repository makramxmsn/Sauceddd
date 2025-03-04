// components/Test.tsx
import React, { useState, useEffect } from 'react';

// Types for job data
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

const Test: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [formData, setFormData] = useState({
    job_title: '',
    job_location: '',
    job_description: '',
    workplace_type: '', // Added missing fields
    job_type: '',
    frequency: '',
    minimum_salary: 0,
    maximum_salary: 0,
    currency_type: ''
  });
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      if (!res.ok) throw new Error('Failed to fetch jobs');
      const data: Job[] = await res.json();
      setJobs(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Add new job via API
  const addJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to add job');
      const newJob: Job = await res.json();
      setJobs([...jobs, newJob]);
      // Reset form data to initial state
      setFormData({
        job_title: '',
        job_location: '',
        job_description: '',
        workplace_type: '',
        job_type: '',
        frequency: '',
        minimum_salary: 0,
        maximum_salary: 0,
        currency_type: ''
      });
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Load jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle input changes (supporting both text and number inputs)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Handle number inputs differently
    if (name === 'minimum_salary' || name === 'maximum_salary') {
      setFormData({ ...formData, [name]: value ? parseFloat(value) || 0 : 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="container">
      {/* Form to add new job */}
      <form onSubmit={addJob} className="job-form">
        <div>
          <label htmlFor="job_title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="job_location">Location:</label>
          <input
            type="text"
            id="job_location"
            name="job_location"
            value={formData.job_location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="job_description">Description:</label>
          <textarea
            id="job_description"
            name="job_description"
            value={formData.job_description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Add missing fields to the form */}
        <div>
          <label htmlFor="workplace_type">Workplace Type:</label>
          <input
            type="text"
            id="workplace_type"
            name="workplace_type"
            value={formData.workplace_type}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="job_type">Job Type:</label>
          <input
            type="text"
            id="job_type"
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="frequency">Frequency:</label>
          <input
            type="text"
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="minimum_salary">Minimum Salary:</label>
          <input
            type="number"
            id="minimum_salary"
            name="minimum_salary"
            value={formData.minimum_salary || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="maximum_salary">Maximum Salary:</label>
          <input
            type="number"
            id="maximum_salary"
            name="maximum_salary"
            value={formData.maximum_salary || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="currency_type">Currency Type:</label>
          <input
            type="text"
            id="currency_type"
            name="currency_type"
            value={formData.currency_type}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Job</button>
        {error && <p className="error">{error}</p>}
      </form>

      {/* Display jobs */}
      <div className="jobs-list">
        <h2>Current Jobs</h2>
        {jobs.length > 0 ? (
          jobs.map((job) => (
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
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </div>

      {/* Styling */}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
        }
        .job-form {
          margin-bottom: 20px;
        }
        .job-form div {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
        .job-item {
          border: 1px solid #ddd;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 4px;
        }
        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Test;