import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import OrganizationManagement from './pages/OrganizationManagement'
import UserManagement from './pages/UserManagement'
import JobManagement from './pages/JobManagement'
import ClientManagement from './pages/ClientManagement'
import PricingManagement from './pages/PricingManagement'
import VideoAnalysis from './pages/VideoAnalysis'
import Analytics from './pages/Analytics'
import Billing from './pages/Billing'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/organization" element={<OrganizationManagement />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/jobs" element={<JobManagement />} />
          <Route path="/clients" element={<ClientManagement />} />
          <Route path="/pricing" element={<PricingManagement />} />
          <Route path="/video-analysis" element={<VideoAnalysis />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/billing" element={<Billing />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
