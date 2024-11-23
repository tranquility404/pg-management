import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4 mt-8"
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2023 PG Booking. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}