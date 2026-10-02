import { AnimatePresence, motion } from "motion/react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import Navbar from "./shared/components/Navbar"
import Footer from "./shared/components/Footer"

import Hero from "./features/home/components/Hero"
import SelectedProjects from "./features/home/components/SelectedProjects"
import AboutPreview from "./features/home/components/AboutPreview"
import ExperiencePreview from "./features/home/components/ExperiencePreview"
import TechMarquee from "./features/home/components/TechMarquee"
import ProjectDetailsPage from "./features/projects/pages/ProjectDetailsPage/ProjectDetailsPage"
import TechStack from "./features/home/components/TechStack"
import AboutPage from "./features/about/pages/AboutPage"
import ContactMe from "./shared/components/ContactMe"
import { useEffect } from "react"
import NotFound from "./shared/components/NoFound"


function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedProjects />
      <AboutPreview />
      <TechMarquee />
      <TechStack />
      <ExperiencePreview />
      <ContactMe />
    </main>
  )
}


function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetailsPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />
          
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AnimatedRoutes />

      <Footer />
    </BrowserRouter>
  )
}

export default App