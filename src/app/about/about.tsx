import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className='w-full py-12 bg-white dark:bg-dark'
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.75 }}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl lg:text-5xl  '>
              About Me
            </h1>
            <br />
            <p className='mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 text-xl'>
              I'm from Argentina, Buenos aires. I'm very passionate about
              creating interactive applications and different user experiences.{" "}
            </p>
            <br />
            <p className='mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 text-xl'>
              As a developer, I am excited to learn and expand my knowledge as a
              full-stack developer. Some of my other hobbies are drawing,
              playing with my cat and taking pictures.
            </p>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  pt-10'>
            Technologies I Work With
          </h2>
          <div className='flex flex-wrap justify-center gap-4 py-8'>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='react'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                width={24}
                height={24}
              />

              <div>React</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='native'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                width={24}
                height={24}
              />

              <div>React Native</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='next'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                width={24}
                height={24}
              />

              <div>Next.Js</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='ts'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                width={24}
                height={24}
              />

              <div>TypeScript</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='Js'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                width={24}
                height={24}
              />

              <div>JavaScript</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='html'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                width={24}
                height={24}
              />

              <div>HTML</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='css'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                width={24}
                height={24}
              />

              <div>CSS</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='sass'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                width={24}
                height={24}
              />

              <div>Sass</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='tailwind'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                width={24}
                height={24}
              />

              <div>Tailwind</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <FaGithub width={24} height={24} />
              <div>GitHub</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='git'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                width={24}
                height={24}
              />

              <div>Git</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='wordpress'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
                width={24}
                height={24}
              />

              <div>WordPress</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='node'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                width={24}
                height={24}
              />

              <div>Node.js</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <SiExpress width={24} height={24} />
              <div>Express.js</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='mongodb'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                width={24}
                height={24}
              />

              <div>MongoDB</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='docker'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                width={24}
                height={24}
              />

              <div>Docker</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='handlebars'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg'
                width={24}
                height={24}
              />

              <div>Handlebars</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <Image
                alt='npm'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
                width={24}
                height={24}
              />

              <div>NPM</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
