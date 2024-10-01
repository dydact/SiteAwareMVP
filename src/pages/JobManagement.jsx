import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getJobs, createJob } from '../services/api'
import Layout from '@/components/Layout';

function JobManagement() {
  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState({ title: '', description: '', classification: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await getJobs()
      setJobs(response.data)
    } catch (err) {
      setError('Failed to fetch jobs')
    }
  }

  const handleInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createJob(newJob)
      setNewJob({ title: '', description: '', classification: '' })
      fetchJobs()
    } catch (err) {
      setError('Failed to create job')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Job Management</h1>
        {error && <p className="error">{error}</p>}
        <h2>Create New Job</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={newJob.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={newJob.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="classification"
            placeholder="Job Classification"
            value={newJob.classification}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Create Job</button>
        </form>
        <h2>Existing Jobs</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>Classification: {job.classification}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobManagement