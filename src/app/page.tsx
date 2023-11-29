"use client";
//components
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

//Pages
import { Hero } from "./hero/hero";
import About from "@/app/about/about";
import Portfolio from "@/app/portfolio/portfolio";
import Contact from "@/app/contact/contact";
//framermotion
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <main>
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
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
