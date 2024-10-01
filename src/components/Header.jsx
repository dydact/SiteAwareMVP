import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/organization">Organization</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/video-analysis">Video Analysis</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/billing">Billing</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header