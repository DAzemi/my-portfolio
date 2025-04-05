import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-4 sm:px-6">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-2xl px-4">
        <Image
          src="/me.jpg"
          alt="Profile Picture"
          className="mx-auto rounded-full border-4 border-white shadow-xl w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
          width={160}
          height={160}
        />

        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
          Hey, I'm Dren 👋
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-white/90 leading-relaxed">
          I build modern, responsive, and user-focused web applications.
          Turning innovative ideas into seamless digital experiences.
        </p>

        <div className="mt-6">
          <a
            href="/projects"
            className="inline-block bg-white text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            🚀 View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
