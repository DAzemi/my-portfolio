import Image from 'next/image';

export default function About() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-12">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-4xl w-full text-center md:text-left space-y-12">
        <header>
          <h1 className="text-4xl font-extrabold drop-shadow-md mt-12">About Me</h1>
          <p className="mt-3 text-lg text-white/90">
            Learn more about who I am and what I love to build.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <Image
            src="/me.jpg"
            alt="Dren Azemi"
            className="rounded-full border-4 border-white shadow-xl w-40 h-40 sm:w-48 sm:h-48 object-cover mb-6 md:mb-0"
            width={192}
            height={192}
          />
          <div>
            <h2 className="text-2xl font-bold">Hi, I'm Dren Azemi 👋</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              I'm a Computer Science and Engineering graduate with a passion for creating fast, responsive, and user-friendly web apps. I thrive in building modern full-stack solutions using tools like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>. I'm constantly learning, evolving, and taking on exciting new challenges.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">🛠 My Skills</h3>
          <ul className="mt-4 space-y-3 text-lg text-white/90">
            <li>🌐 Frontend: React, Next.js, Tailwind CSS</li>
            <li>🗃️ Backend: Node.js, Express, GraphQL, MySQL</li>
            <li>🔐 Security: OAuth, JWT Authentication</li>
          </ul>
        </div>

        <div className="pt-4">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            ✉️ Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
