import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getUsers, createUser } from '../services/api'
import Layout from '@/components/Layout';

function UserManagement() {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({ email: '', firstName: '', lastName: '', role: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await getUsers()
      setUsers(response.data)
    } catch (err) {
      setError('Failed to fetch users')
    }
  }

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUser(newUser)
      setNewUser({ email: '', firstName: '', lastName: '', role: '' })
      fetchUsers()
    } catch (err) {
      setError('Failed to create user')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>User Management</h1>
        {error && <p className="error">{error}</p>}
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={handleInputChange}
            required
          />
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="client">Client</option>
          </select>
          <button type="submit">Create User</button>
        </form>
        <h2>Existing Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserManagement