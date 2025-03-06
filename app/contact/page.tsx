export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-xl w-full">  
        
        <header className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
          <p className="text-base sm:text-lg mt-2 sm:mt-3">
            Reach out to me through any of the following channels!
          </p>
        </header>

        <section className="space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Find Me Online</h3>
            <div className="mt-4 sm:mt-5 space-y-4 sm:space-y-5 flex flex-col items-center">
              
              <a
                href="https://github.com/DAzemi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-white bg-blue-600 rounded-lg text-base sm:text-lg hover:bg-blue-500 hover:scale-105 transition duration-300 text-center"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-white bg-blue-600 rounded-lg text-base sm:text-lg hover:bg-blue-500 hover:scale-105 transition duration-300 text-center"
              >
                LinkedIn
              </a>

              <a
                className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-white bg-blue-600 rounded-lg text-base sm:text-lg hover:bg-blue-500 hover:scale-105 transition duration-300 text-center"
              >
                Email Me: <span className="font-semibold">dren.azemi444@gmail.com</span>
              </a>

              <a
                className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-10 text-white bg-blue-600 rounded-lg text-base sm:text-lg hover:bg-blue-500 hover:scale-105 transition duration-300 text-center"
              >
                Call Me: <span className="font-semibold">046115253</span>
              </a>

            </div>
          </div>
        </section>
        
      </div>
    </section>
  );
}
