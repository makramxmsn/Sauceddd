// pages/api/jobs.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

// Configure database connection
const pool = new Pool({
  connectionString: 'postgresql://postgres:847888@localhost:5433/postgres',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all jobs
    try {
      const { rows } = await pool.query('SELECT * FROM jobs');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else if (req.method === 'POST') {
    // Add a new job
    const { job_title, job_location, job_description } = req.body;
    try {
      const query = `
        INSERT INTO jobs (job_title, job_location, job_description, created_at)
        VALUES ($1, $2, $3, NOW())
        RETURNING *
      `;
      const values = [job_title, job_location, job_description];
      const { rows } = await pool.query(query, values);
      res.status(201).json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}