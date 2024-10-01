import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { organizationApi, jobApi, clientApi } from '@/services/api'
import { ClientProgressTimeline } from '../components/ClientProgressTimeline'
import { Client } from '../types'

function Dashboard() {
  const [dashboardData, setDashboardData] = useState<{
    organizations: any[];
    jobs: any[];
    clients: Client[];
  }>({
    organizations: [],
    jobs: [],
    clients: [],
  })
  const [error, setError] = useState('')

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const [orgResponse, jobsResponse, clientsResponse] = await Promise.all([
        organizationApi.getAll(),
        jobApi.getAll(),
        clientApi.getAll(),
      ])
      setDashboardData({
        organizations: orgResponse,
        jobs: jobsResponse,
        clients: clientsResponse,
      })
    } catch (err) {
      setError('Failed to fetch dashboard data')
      console.error(err)
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome to SiteAware Dashboard</h1>
        {error && <p className="error">{error}</p>}
        <div className="dashboard-summary">
          <div className="summary-card">
            <h2>Organizations</h2>
            <p>{dashboardData.organizations.length}</p>
          </div>
          <div className="summary-card">
            <h2>Jobs</h2>
            <p>{dashboardData.jobs.length}</p>
          </div>
          <div className="summary-card">
            <h2>Clients</h2>
            <p>{dashboardData.clients.length}</p>
          </div>
        </div>
        {dashboardData.clients.length > 0 && (
          <ClientProgressTimeline client={dashboardData.clients[0]} />
        )}
      </div>
    </div>
  )
}

export default Dashboard