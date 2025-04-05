export default function Contact() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-4 sm:px-6">
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-xl w-full">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Get in Touch</h1>
          <p className="text-lg sm:text-xl opacity-90">
            Feel free to reach out through any of the options below.
          </p>
        </header>

        <div className="space-y-6">
          <a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            LinkedIn
          </a>

          <div className="block w-full py-3 px-6 bg-white text-black font-semibold rounded-lg shadow-md">
            Email: <span className="font-normal">dren.azemi444@gmail.com</span>
          </div>

          <div className="block w-full py-3 px-6 bg-white text-black font-semibold rounded-lg shadow-md">
            Phone: <span className="font-normal">046 115 253</span>
          </div>
        </div>
      </div>
    </section>
  );
}
