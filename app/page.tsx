import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 sm:px-6">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <Image
          src="/me.jpg"
          alt="Profile Picture"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-lg border-4 border-white"
          width={160}
          height={160} 
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 sm:mt-6 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-base sm:text-lg mt-3 sm:mt-4 opacity-90">
          Turning innovative ideas into interactive, user-friendly web solutions.
        </p>
        <div className="mt-5 sm:mt-6">
          <a
            href="/projects"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
