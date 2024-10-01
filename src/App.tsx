import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import OrganizationManagement from './pages/OrganizationManagement'
import Login from './pages/Login'
import ClientProgressTimelinePage from './pages/ClientProgressTimelinePage'
import ClientManagementPage from './pages/ClientManagement'
import AnalyticsPage from './pages/Analytics'
import BillingPage from './pages/Billing'
import JobManagementPage from './pages/JobManagement'
import ProfilePage from './pages/Profile'
import RegisterPage from './pages/Register'
import SchedulingPage from './pages/Scheduling'
import TimeTrackingPage from './pages/TimeTracking'
import UserManagementPage from './pages/UserManagement'
import VideoAnalysisPage from './pages/VideoAnalysis'
import { authApi } from './services/api'
import { User } from './types'
import Chat from './pages/chat'
import Clients from './pages/clients'
import Payroll from './pages/payroll'
import PriceManagement from './pages/pricemanagement'

// Main App component
const App: React.FC = () => {
  // State to hold the current user
  const [user, setUser] = useState<User | null>(null)

  // Effect to fetch the current user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authApi.getCurrentUser()
        setUser(response.data)
      } catch (error) {
        console.error('Failed to fetch user:', error)
      }
    }

    fetchUser()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organization" element={<OrganizationManagement user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client-progress" element={<ClientProgressTimelinePage user={user} />} />
        <Route path="/client-management" element={<ClientManagementPage user={user} />} />
        <Route path="/analytics" element={<AnalyticsPage user={user} />} />
        <Route path="/billing" element={<BillingPage user={user} />} />
        <Route path="/job-management" element={<JobManagementPage user={user} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/register" element={<RegisterPage user={user} />} />
        <Route path="/scheduling" element={<SchedulingPage user={user} />} />
        <Route path="/time-tracking" element={<TimeTrackingPage user={user} />} />
        <Route path="/user-management" element={<UserManagementPage user={user} />} />
        <Route path="/video-analysis" element={<VideoAnalysisPage user={user} />} />
        <Route path="/chat" element={<Chat user={user} />} />
        <Route path="/clients" element={<Clients user={user} />} />
        <Route path="/payroll" element={<Payroll user={user} />} />
        <Route path="/price-management" element={<PriceManagement user={user} />} />
      </Routes>
    </Router>
  )
}

export default App