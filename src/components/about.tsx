import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className='w-full py-12 bg-white dark:bg-gray-800'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl lg:text-5xl  '>
              About Me
            </h1>
            <br />
            <p className='mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 text-xl'>
              I'm a Front-end Developer from Argentina, Buenos aires. I'm very
              passionate about creating interactive applications and different
              user experiences.{" "}
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
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                className='w-10 h-10'
              />

              <div>React</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                className='w-10 h-10'
              />

              <div>React Native</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                className='w-10 h-10'
              />

              <div>Next.Js</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                className='w-10 h-10'
              />

              <div>TypeScript</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                className=' h-10 w-10'
              />

              <div>JavaScript</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                className='h-10 w-10'
              />

              <div>HTML</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                className='h-10 w-10'
              />

              <div>CSS</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                className='h-10 w-10'
              />

              <div>Sass</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                className='h-10 w-10'
              />

              <div>Tailwind</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <FaGithub className='h-10 w-10' />
              <div>GitHub</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                className='h-10 w-10'
              />

              <div>Git</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
                className='h-10 w-10'
              />

              <div>WordPress</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                className='h-10 w-10'
              />

              <div>Node.js</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <SiExpress className='h-10 w-10' />
              <div>Express.js</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                className='h-10 w-10'
              />

              <div>MongoDB</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                className='h-10 w-10'
              />

              <div>Docker</div>
            </div>

            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg'
                className='h-10 w-10'
              />

              <div>Handlebars</div>
            </div>
            <div className='flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-lg text-black'>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
                className='h-10 w-10'
              />

              <div>NPM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
