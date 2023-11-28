import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function PortfolioComponent() {
  return (
    <section className='w-full py-12 bg-white dark:bg-dark'>
      <motion.div
        className='container mx-auto px-4 md:px-6'
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.75 }}
      >
        <div className='flex flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl lg:text-5xl pb-4'>
              My Portfolio
            </h1>
          </div>
          <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12'>
            <div className='rounded-md shadow overflow-hidden'>
              <Link
                className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                href='https://movies-proyect-sotelius-utcx.vercel.app/'
                target='_blank'
              >
                <Image
                  alt='Sotelius Movies'
                  className='aspect-[1/1] object-cover object-center'
                  height='500'
                  src='/assets/sotelius.png'
                  width='500'
                />
              </Link>
              <div className='p-6 bg-white dark:bg-darkbut'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-50'>
                  Sotelius Movies
                </h3>

                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Movie landing based on Next.Js , TypeScript & TMDB Api.
                </p>
                <div className='mt-4'>
                  <Link
                    className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                    href='https://movies-proyect-sotelius-utcx.vercel.app/'
                    target='_blank'
                  >
                    <button className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700 text-xl pt-2 bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg px-2 py-2 '>
                      Visit Site
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='rounded-md shadow overflow-hidden'>
              <Link
                className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                href='https://angry-mestorf-fbb8cc.netlify.app/'
                target='_blank'
              >
                <Image
                  alt='Website 2'
                  className='aspect-[1/1] object-cover object-center'
                  height='500'
                  src='/assets/coco.png'
                  width='500'
                />
              </Link>
              <div className='p-6 bg-white dark:bg-darkbut'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-50'>
                  Coco Light
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  E-commerce project based on React.Js , JavaScript & FireBase
                </p>
                <div className='mt-4'>
                  <Link
                    className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                    href='https://angry-mestorf-fbb8cc.netlify.app/'
                    target='_blank'
                  >
                    <button className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700 text-xl pt-2 bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg px-2 py-2 '>
                      Visit Site
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='rounded-md shadow overflow-hidden'>
              <Link
                className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                href='https://lylhium.github.io/weather-app'
                target='_blank'
              >
                <Image
                  alt='Website 3'
                  className='aspect-[1/1] object-cover object-center'
                  height='500'
                  src='/assets/weather.png'
                  width='500'
                />
              </Link>
              <div className='p-6 bg-white dark:bg-darkbut'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-50'>
                  Lilius Weather
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-400'>
                  Simple weather app project based on React, Javascript &
                  Api-rest
                </p>
                <div className='mt-4'>
                  <Link
                    className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                    href='https://lylhium.github.io/weather-app'
                    target='_blank'
                  >
                    <button className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700 text-xl pt-2 bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg px-2 py-2 '>
                      Visit Site
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
