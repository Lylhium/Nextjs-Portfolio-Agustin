import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className='w-full py-7 bg-white dark:bg-dark '>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.75 }}
        className='container mx-auto px-4 md:px-6 '
      >
        <div className='flex flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl '>
              Hello , I'm{"  "}
              <span className=''> Agustín Pfarherr </span>
            </h1>
            <p className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-400 text-xl py-2 '>
              I'm a Web Developer specialized in Front-end development.
              Experienced with all stages of the development cycle for dynamic
              web projects.
            </p>
            <button className='mx-auto max-w-[400px] transition-colors text-white dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-dark text-xl pt-2 bg-darkbut hover:bg-gray-700 hover:text-white rounded-full px-3 py-2 '>
              <a
                href='/assets/PortfolioEnglish2024.pdf'
                download='Agustin_CV'
                target='_blank'
                rel='noreferrer'
                style={{ fontWeight: 500, textAlign: "center" }}
              >
                Download CV
              </a>
            </button>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
            <Image
              alt='pfp'
              className='mx-auto object-cover rounded-full shadow-lg '
              height={400}
              src='/assets/yo-pic.jpg'
              width={350}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
