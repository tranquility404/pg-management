import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Basic search functionality',
      'View PG listings',
      'Limited number of bookings per month',
    ],
  },
  {
    name: 'Basic',
    price: 299,
    features: [
      'All Free tier features',
      'Advanced search filters',
      'Unlimited bookings',
      'Priority customer support',
    ],
  },
  {
    name: 'Advanced',
    price: 599,
    features: [
      'All Basic tier features',
      'Virtual tour of PGs',
      'Exclusive deals and discounts',
      '24/7 premium customer support',
    ],
  },
]

export default function TierInfoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Tier Information
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{tier.name}</h2>
            <p className="text-3xl font-bold mb-6">₹{tier.price}<span className="text-sm font-normal">/month</span></p>
            <ul className="space-y-2">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}