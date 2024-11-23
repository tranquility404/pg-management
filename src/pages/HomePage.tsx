import { useState } from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// Mock data for PGs
const mockPGs = [
  { id: 1, name: 'Sunshine PG', location: 'Mumbai', price: 8000 },
  { id: 2, name: 'Green Valley PG', location: 'Delhi', price: 7500 },
  { id: 3, name: 'Comfort Zone PG', location: 'Bangalore', price: 9000 },
  { id: 4, name: 'City View PG', location: 'Chennai', price: 8500 },
]

const popularPGs = [
  {
    name: "Sunshine PG",
    image: "/placeholder.svg",
    price: "₹8,000/month",
    rating: 4.8,
    reviews: 128,
    location: "Koramangala, Bangalore"
  },
  {
    name: "Green View PG",
    image: "/placeholder.svg",
    price: "₹7,500/month",
    rating: 4.6,
    reviews: 95,
    location: "HSR Layout, Bangalore"
  },
  {
    name: "City Comfort PG",
    image: "/placeholder.svg",
    price: "₹9,000/month",
    rating: 4.9,
    reviews: 156,
    location: "Indira Nagar, Bangalore"
  },
  {
    name: "Student Haven",
    image: "/placeholder.svg",
    price: "₹6,500/month",
    rating: 4.7,
    reviews: 112,
    location: "BTM Layout, Bangalore"
  },
  {
    name: "Metro PG",
    image: "/placeholder.svg",
    price: "₹8,500/month",
    rating: 4.5,
    reviews: 89,
    location: "JP Nagar, Bangalore"
  },
  {
    name: "Comfort Zone PG",
    image: "/placeholder.svg",
    price: "₹7,000/month",
    rating: 4.7,
    reviews: 134,
    location: "Electronic City, Bangalore"
  }
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')

  const filteredPGs = mockPGs.filter(pg =>
    pg.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    pg.location.toLowerCase().includes(location.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Explore PGs
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search PGs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button className="bg-primary text-white p-2 rounded">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPGs.map((pg, index) => (
          <motion.div
            key={pg.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{pg.name}</h2>
            <p className="mb-2">Location: {pg.location}</p>
            <p className="mb-4">Price: ₹{pg.price}/month</p>
            <Link to={`/pg-info/${pg.id}`} className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors duration-300">
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    

    {/* Popular PGs Section */}
    {/*< section className="py-16 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Popular PGs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPGs.map((pg, index) => (
          <motion.div
            key={pg.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={pg.image}
              alt={pg.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{pg.name}</h3>
              <p className="text-gray-600 mb-2">{pg.location}</p>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm">{pg.rating}</span>
                <span className="text-gray-600 text-sm ml-1">({pg.reviews} reviews)</span>
              </div>
              <p className="font-bold text-primary">{pg.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button size="lg">View All PGs</Button>
      </div>
      </div>
    </section> */}
    </div>
  )
}