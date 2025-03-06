import Image from "next/image";
export default function Projects() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 max-w-5xl">         
              {/* GitHub Profile Link */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold">Check out my GitHub profile to see the projects</h3>
                <a
                  href="https://github.com/DAzemi" // Replace with your GitHub username
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 px-6 mt-4 text-white bg-indigo-600 rounded-lg text-xl hover:bg-indigo-700 transition duration-300"
                >
                  GitHub Profile
                </a>
              </div>
    
              {/* Project Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Loop through the 8 images */}
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/project-${index + 1}.jpeg`}
                      alt={`Project ${index + 1}`}
                      className="w-full h-56 object-cover"
                      width={192}
                      height={192} 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Project {index + 1}
                    </div>
                  </div>
                ))}
              </div>      
          </div>
        </section>
      );
    };
    