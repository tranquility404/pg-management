import { motion } from 'framer-motion'
// import { useParams } from 'react-router-dom'

// Mock PG data
const pgData = {
  id: '1',
  name: 'Sunshine PG',
  location: 'Mumbai',
  facilities: ['Wi-Fi', '3 meals/day', 'Laundry', 'AC rooms'],
  roomSize: '12x12 sq ft',
  ownerName: 'Jane Smith',
  contactInfo: '+91 9876543210',
  availableRooms: 5,
  roomTypes: ['Single', 'Double', 'Triple'],
  price: 8000,
}

export default function PGInfoPage() {
  // const { id } = useParams<{ id: string }>()

  // In a real application, you would fetch the PG data based on the ID
  // For now, we'll just use the mock data

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {pgData.name}
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p>{pgData.location}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Price</h2>
            <p>₹{pgData.price}/month</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Facilities</h2>
            <ul className="list-disc list-inside">
              {pgData.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Room Size</h2>
            <p>{pgData.roomSize}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Owner Name</h2>
            <p>{pgData.ownerName}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>{pgData.contactInfo}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Available Rooms</h2>
            <p>{pgData.availableRooms}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Room Types</h2>
            <ul className="list-disc list-inside">
              {pgData.roomTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}