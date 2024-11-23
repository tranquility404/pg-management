import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Search, Menu, X, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stats = [
    { number: "11K+", label: "Happy PG residents" },
    { number: "22K+", label: "Verified PG listings" },
    { number: "520+", label: "Cities covered across India" },
  ]

  const partners = [
    { name: "QuickStay", logo: "https://t4.ftcdn.net/jpg/04/24/01/43/360_F_424014391_pIsVnz0NMtPcsVL5appIbqMrWu8bU6vA.jpg" },
    { name: "ComfyDwell", logo: "https://www.shutterstock.com/image-vector/partner-network-logo-design-template-260nw-1361999207.jpg" },
    { name: "UrbanNest", logo: "https://www.shutterstock.com/image-vector/guest-letter-original-monogram-logo-260nw-1713195124.jpg" },
    { name: "CozyCorner", logo: "https://www.shutterstock.com/image-vector/creative-people-connect-logo-minimal-260nw-2451554031.jpg" },
    { name: "HomelyHaven", logo: "https://images-platform.99static.com//WjDR9Miq1z-7nSlKJ8mxb_CWms0=/0x0:1200x1200/fit-in/500x500/99designs-contests-attachments/96/96429/attachment_96429374" },
  ]

  const testimonials = [
    {
      text: "Found my perfect PG through this platform. The verification process gave me confidence, and I'm extremely happy with my choice.",
      author: "Priya Sharma",
      image: "https://this-person-does-not-exist.com/img/avatar-gen22c16785186602a42aca94a3c4aacae1.jpg"
    },
    {
      text: "As a student new to the city, this platform made finding a good PG so much easier. Great options and transparent pricing!",
      author: "Rahul Verma",
      image: "https://this-person-does-not-exist.com/img/avatar-gene874dcc8deda6553fbfdf6e8b83554f7.jpg"
    },
    {
      text: "The detailed listings and genuine reviews helped me make an informed decision. Highly recommend for anyone looking for PG accommodation.",
      author: "Anita Patel",
      image: "https://this-person-does-not-exist.com/img/avatar-gen2feb181c897f6739547e24482be554dc.jpg"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-8 py-4 bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">PG Finder</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                Home
              </Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                Find PG
              </Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                List Your PG
              </Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
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
              className="md:hidden text-primary"
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
                <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                  Home
                </Link>
                <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                  Find PG
                </Link>
                <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
                  List Your PG
                </Link>
                <Link className="text-sm font-medium hover:text-primary transition-colors" to="#">
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
        <section className="relative py-20 lg:py-32 mb-[80px]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2467636091/display_1500/stock-photo-interior-of-cozy-living-room-with-grey-sofa-and-reed-diffuser-on-coffee-table-2467636091.jpg"
              alt="Cozy PG room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Find Your Perfect PG Accommodation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8 text-gray-200"
              >
                Discover comfortable and affordable Paying Guest accommodations that feel just like home. Your ideal PG is just a few clicks away.
              </motion.p>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                  Start Your Search
                </Button>
              </motion.div> */}
            </div>
          </div>

        {/* Search Section */}
            <div className="absolute left-1/2 -translate-x-1/2 w-9/12 bg-white rounded-lg shadow-xl p-8 z-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Find Your Ideal PG</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input placeholder="Enter city or area" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Persons</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select occupancy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Single (1 Person)</SelectItem>
                      <SelectItem value="2">Double (2 Persons)</SelectItem>
                      <SelectItem value="3">Triple (3 Persons)</SelectItem>
                      <SelectItem value="4">Four or more</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget</label>
                  <Input placeholder="Enter max budget" className="w-full" />
                </div>
              </div>
              <div className="text-center mt-6">
                <Button className="w-full md:w-auto bg-primary text-white">
                  Find PG
                  <Search className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
        </section>


        {/* Partners Section */}
        <section className="pt-72 p-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Trusted Partners</h2>
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
                    className="w-48 h-16 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-8 py-16 sm:pl-32 sm:pr-16 bg-gray-100 overflow-hidden">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-1 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-16'
              >
                <h2 className="text-3xl font-bold mb-4">
                  Your Comfort, Our Priority
                </h2>
                <p className="text-gray-600 mb-6">
                  We understand the importance of finding a PG that feels like home. Our platform offers a wide range of verified PGs, detailed amenities, and transparent pricing to ensure you find the perfect match for your needs and budget.
                </p>
                <Button className="bg-primary text-white">Explore PGs</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-fit mx-auto"
              >
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2473456967/display_1500/stock-photo-interior-of-light-living-room-with-sofa-olive-tree-and-shelf-units-2473456967.jpg"
                  alt="Comfortable PG common area"
                  className="rounded-lg shadow-xl w-[400px] h-[480px] object-cover"
                />
                <div className="absolute top-8 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <span className="block text-2xl font-bold text-primary">22K+</span>
                  <span className="text-sm text-gray-600">Verified PGs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-primary text-white relative mb-[200px]">
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
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className='w-4/5 mx-auto my-16 border border-gray-700' />
          
          <div className="w-4/5 mx-auto mb-[300px]">
            <div className="mb-12 grid sm:grid-cols-2 gap-4">
              <h2 className="text-3xl font-bold mb-4 max-w-sm">
                Where Comfort Meets Convenience
              </h2>
              <p className="text-zinc-400 max-w-md">
                Discover PG accommodations that perfectly blend comfort with convenience, making your stay feel just like home.
              </p>
            </div>
            <div className="absolute w-4/5 left-1/2 -translate-x-1/2 rounded-xl overflow-hidden">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2523111685/display_1500/stock-photo-living-room-interior-wall-mockup-with-yellow-armchair-and-green-plant-in-the-pot-on-empty-white-2523111685.jpg"
                alt="Modern PG Building"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Home Away From Home</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a student, working professional, or anyone in need of a comfortable PG, we've got you covered. Start your search today and find the perfect PG that suits your lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary">
                Search PGs
              </Button>
              <Button size="lg" className="bg-primary text-white border-white">
                List Your PG
              </Button>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Kind Words From Our Happy Residents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About PG Finder</h3>
              <p className="text-sm text-gray-400">We're dedicated to helping you find the perfect PG accommodation that feels just like home.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Find PG</Link></li>
                <li><Link to="#" className="text-sm text-gray-400 hover:text-white">List Your PG</Link></li>
                <li><Link to="#" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; 2023 PG Finder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}