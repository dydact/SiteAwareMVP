import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getPricing, updatePricing } from '../services/api'
import Layout from '@/components/Layout';

function PricingManagement() {
  const [pricingPlans, setPricingPlans] = useState([])
  const [newPlan, setNewPlan] = useState({ name: '', price: '', features: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPricingPlans()
  }, [])

  const fetchPricingPlans = async () => {
    try {
      const response = await getPricing()
      setPricingPlans(response.data)
    } catch (err) {
      setError('Failed to fetch pricing plans')
    }
  }

  const handleInputChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updatePricing([...pricingPlans, newPlan])
      setNewPlan({ name: '', price: '', features: '' })
      fetchPricingPlans()
    } catch (err) {
      setError('Failed to create pricing plan')
    }
  }

  return (
    <Layout>
      <div>
        <Header />
        <div className="container">
          <h1>Pricing Management</h1>
          {error && <p className="error">{error}</p>}
          <h2>Create New Pricing Plan</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Plan Name"
              value={newPlan.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newPlan.price}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="features"
              placeholder="Features (comma-separated)"
              value={newPlan.features}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Create Plan</button>
          </form>
          <h2>Existing Pricing Plans</h2>
          <ul>
            {pricingPlans.map((plan, index) => (
              <li key={index}>
                <h3>{plan.name}</h3>
                <p>Price: ${plan.price}</p>
                <p>Features: {plan.features}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PricingManagement