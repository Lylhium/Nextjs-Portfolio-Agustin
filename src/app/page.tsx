"use client";
import { Navbar } from "@/components/navbar";
import { CircleIndicator } from "@/components/circleIndicator";
//Components
import AboutMe from "@/components/about";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { HeroComponent } from "@/components/hero";
import PortfolioComponent from "@/components/portfolio";
//framermotion
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  return (
    <main className=''>
      <AnimatePresence mode='wait'>
        <motion.div
          initial='initialState'
          animate='animateState'
          exit='exitState'
          className='base-page-size'
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <Navbar />
          <HeroComponent />
          <AboutMe />
          <PortfolioComponent />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
