import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PG Booking</Link>
        <ul className="flex space-x-4">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/register-pg">Register PG</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register-individual">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}