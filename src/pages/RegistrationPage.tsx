import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    pgName: '',
    facilities: '',
    roomSize: '',
    ownerName: '',
    contactInfo: '',
    location: '',
    availableRooms: '',
    roomTypes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Register Your PG
      </motion.h1>
      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="pgName" className="block mb-2">PG Name</label>
          <input
            type="text"
            id="pgName"
            name="pgName"
            value={formData.pgName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="facilities" className="block mb-2">Facilities</label>
          <textarea
            id="facilities"
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="roomSize" className="block mb-2">Room Size</label>
          <input
            type="text"
            id="roomSize"
            name="roomSize"
            value={formData.roomSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ownerName" className="block mb-2">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactInfo" className="block mb-2">Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableRooms" className="block mb-2">Number of Available Rooms</label>
          <input
            type="number"
            id="availableRooms"
            name="availableRooms"
            value={formData.availableRooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="roomTypes" className="block mb-2">Room Types</label>
          <input
            type="text"
            id="roomTypes"
            name="roomTypes"
            value={formData.roomTypes}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300">
          Register PG
        </button>
      </motion.form>
    </div>
  )
}