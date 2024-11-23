import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Header from './components/Header';
// import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import IndividualRegistrationPage from './pages/IndividualRegistrationPage';
import TierInfoPage from './pages/TierInfoPage';
import ProfilePage from './pages/ProfilePage';
import PGInfoPage from './pages/PGInfoPage';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <motion.main
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register-pg" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-individual" element={<IndividualRegistrationPage />} />
            <Route path="/tier-info" element={<TierInfoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/pg-info/:id" element={<PGInfoPage />} />
          </Routes>
        </motion.main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}