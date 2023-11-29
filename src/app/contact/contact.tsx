import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className='w-full py-12 bg-white dark:bg-dark'>
      <motion.div
        className='container mx-auto px-4 md:px-6'
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.75 }}
      >
        <div className='flex flex-col items-center justify-center space-y-6 pb-10'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl pb-5 '>
              Contact me
            </h1>
            <Link
              target='_blank'
              href={
                "mailto:agustinpfarherr@gmail.com?subject=Hello Agustín&body="
              }
            >
              <p className='text-gray-600 dark:text-gray-400 text-xl '>
                Email: agustinpfarherr@gmail.com
              </p>
            </Link>
            <p className='text-gray-600 dark:text-gray-400 text-xl py-4'>
              Phone: +54 9 11 7360-7075
            </p>
            <Link
              href='https://www.google.com/maps/place/Villa+Crespo,+CABA/@-34.5980532,-58.4514483,15z/data=!3m1!4b1!4m6!3m5!1s0x95bcca0c687ee0b7:0x879b67a1fd77fb98!8m2!3d-34.5947209!4d-58.4442897!16zL20vMDZwbGhz?shorturl=1 '
              target='_blank'
            >
              <p className='text-gray-600 dark:text-gray-400 text-xl '>
                Location: Villa Crespo, Capital Federal, Argentina
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
