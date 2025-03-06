import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-5xl w-full">         
        
        {/* GitHub Profile Link */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold mt-16">
            Check out my GitHub profile to see the projects
          </h3>
          <a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2.5 sm:py-3 px-5 sm:px-6 mt-4 text-white bg-indigo-600 rounded-lg text-lg sm:text-xl hover:bg-indigo-700 transition duration-300"
          >
            GitHub Profile
          </a>
        </div>

        {/* Project Images Grid */}
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
