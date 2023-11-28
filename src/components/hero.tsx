import Image from "next/image";

export function HeroComponent() {
  return (
    <section className='w-full py-7 bg-white dark:bg-gray-800  '>
      <div className='container mx-auto px-4 md:px-6 '>
        <div className='flex flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl '>
              Hello , I'm{"  "}
              <span className=''> Agustín Pfarherr </span>
            </h1>
            <p className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-400 text-xl pt-5'>
              I'm a Web Developer specialized in Front-end development.
              Experienced with all stages of the development cycle for dynamic
              web projects.
            </p>
            <p className='mx-auto max-w-[400px] text-gray-600 dark:text-gray-400 text-xl '></p>
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
      </div>
    </section>
  );
}
