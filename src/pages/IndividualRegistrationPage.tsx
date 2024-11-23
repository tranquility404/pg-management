import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const tiers = [
  { name: 'Free', price: 0 },
  { name: 'Basic', price: 299 },
  { name: 'Advanced', price: 599 },
]

export default function IndividualRegistrationPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedTier, setSelectedTier] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration submitted:', { email, password, selectedTier })
    // Here you would typically send the registration request to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Individual Registration
      </motion.h1>
      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Select Tier</label>
          <div className="space-y-2">
            {tiers.map((tier) => (
              <label key={tier.name} className="flex items-center">
                <input
                  type="radio"
                  name="tier"
                  value={tier.name}
                  checked={selectedTier === tier.name}
                  onChange={() => setSelectedTier(tier.name)}
                  className="mr-2"
                />
                {tier.name} (₹{tier.price})
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6 flex items-center">
          <Link to="/tier-info" className="text-primary hover:underline">
            <InformationCircleIcon className="h-5 w-5 inline mr-1" />
            View Tier Information
          </Link>
        </div>
        <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300">
          Register
        </button>
      </motion.form>
    </div>
  )
}