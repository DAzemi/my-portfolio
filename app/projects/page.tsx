import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-4 sm:px-6">
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 w-full max-w-6xl pt-32 pb-16">

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md">
            Explore My Projects
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-4">
            Visit my GitHub to see detailed code and more projects.
          </p>
          <a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-6 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            View GitHub Profile
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={`/project-${index + 1}.jpeg`}
                alt={`Project ${index + 1}`}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                width={300}
                height={225}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white text-base sm:text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Project {index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
