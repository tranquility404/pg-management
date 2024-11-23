import { motion } from 'framer-motion'

// Mock user data
const user = {
  name: 'John Doe',
  location: 'Mumbai',
  preferredLocations: ['Andheri', 'Bandra', 'Powai'],
  tier: 'Basic',
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Profile
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          <p>{user.name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p>{user.location}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Preferred Locations</h2>
          <ul className="list-disc list-inside">
            {user.preferredLocations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Tier/Plan</h2>
          <p>{user.tier}</p>
        </div>
      </motion.div>
    </div>
  )
}