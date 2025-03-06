import Image from 'next/image';

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6 py-12">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative z-10 max-w-3xl w-full">
        <header className="mb-8">
          <p className="text-xl">Learn more about me and my journey!</p>
        </header>

        <section className="space-y-10">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <Image
              src="/me.jpg"
              alt="Dren Azemi"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-indigo-600 mb-6 md:mb-0"
              width={192}
              height={192}
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">Hi, I'm Dren Azemi</h2>
              <p className="mt-4 text-lg leading-relaxed">
                I am a recent graduate in Computer Science and Engineering with a strong foundation in software development, web technologies, and database management. I specialize in building modern, scalable web applications using React, Node.js, and various other technologies.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold">My Skills</h3>
            <ul className="mt-4 space-y-3 text-lg">
              <li>🌐 Web Development (React, Next.js, Tailwind CSS)</li>
              <li>🗃️ Backend Development (Node.js, Express, GraphQL, MySQL)</li>
              <li>🔐 Security & Authentication (OAuth, JWT)</li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block py-3 px-6 text-white bg-indigo-600 rounded-lg text-lg sm:text-xl hover:bg-indigo-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
