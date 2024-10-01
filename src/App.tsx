import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Dashboard from './pages/Dashboard'
import OrganizationManagement from './pages/OrganizationManagement'
import Login from './pages/Login'
import { authApi } from './services/api'

const App: React.FC = () => {
  const [user, setUser] = useState(null)

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
      <Layout user={user}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/organization" element={<OrganizationManagement />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App