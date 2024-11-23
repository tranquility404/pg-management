import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Home, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stats = [
    { number: "11K+", label: "Happy PG residents" },
    { number: "22K+", label: "Verified PG listings" },
    { number: "520+", label: "Cities covered across India" },
  ]

  const partners = [
    { name: "QuickStay", logo: "/placeholder.svg" },
    { name: "ComfyDwell", logo: "/placeholder.svg" },
    { name: "UrbanNest", logo: "/placeholder.svg" },
    { name: "CozyCorner", logo: "/placeholder.svg" },
    { name: "HomelyHaven", logo: "/placeholder.svg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-8 py-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6" />
              <span className="font-bold text-xl">PG Finder</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Home
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Find PG
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                List Your PG
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                About
              </Link>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Log In</Button>
              <Button>Sign Up</Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link className="text-sm font-medium hover:text-primary" href="#">
                  Home
                </Link>
                <Link className="text-sm font-medium hover:text-primary" href="#">
                  Find PG
                </Link>
                <Link className="text-sm font-medium hover:text-primary" href="#">
                  List Your PG
                </Link>
                <Link className="text-sm font-medium hover:text-primary" href="#">
                  About
                </Link>
                <div className="pt-4 space-y-2">
                  <Button className="w-full" variant="ghost">
                    Log In
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Find Your Perfect PG Accommodation
                </h1>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                  Discover comfortable and affordable Paying Guest accommodations that feel just like home. Your ideal PG is just a few clicks away.
                </p>
                <Button size="lg" className="mb-8">
                  Start Your Search
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cozy PG room"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input placeholder="Enter city or area" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">PG Type</label>
                  <Select>
                    <option value="">Select type</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="coed">Co-ed</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget</label>
                  <Input placeholder="Enter max budget" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Find PG
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Your Comfort, Our Priority
                </h2>
                <p className="text-muted-foreground mb-6">
                  We understand the importance of finding a PG that feels like home. Our platform offers a wide range of verified PGs, detailed amenities, and transparent pricing to ensure you find the perfect match for your needs and budget.
                </p>
                <Button>Explore PGs</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Comfortable PG common area"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                  <span className="block text-2xl font-bold text-primary">22K+</span>
                  <span className="text-sm text-muted-foreground">Verified PGs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-zinc-950 text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 px-4 bg-zinc-950 text-white border-t border-zinc-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Home Away From Home</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Whether you're a student, working professional, or anyone in need of a comfortable PG, we've got you covered. Start your search today and find the perfect PG that suits your lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                Search PGs
              </Button>
              <Button variant="outline" size="lg">
                List Your PG
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}