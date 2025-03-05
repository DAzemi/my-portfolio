export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-xl mt-2">Feel free to reach out to me via the following channels!</p>
        </header>

        <section className="space-y-8">
          {/* Social Media and Contact Links */}
          <div>
            <h3 className="text-2xl font-semibold">Connect with me</h3>
            <div className="mt-4 space-y-4">
              {/* Social Media Links */}
              <div className="flex flex-col space-y-6">
                <div>
                  <a
                    href="https://github.com/DAzemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 px-8 text-white bg-gray-800 rounded-lg text-xl hover:bg-gray-700 hover:scale-105 transition duration-300 transform"
                  >
                    GitHub
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 px-8 text-white bg-blue-700 rounded-lg text-xl hover:bg-blue-600 hover:scale-105 transition duration-300 transform"
                  >
                    LinkedIn
                  </a>
                </div>

                <div>
                  <a
                    href="mailto:dren.azemi444@gmail.com"
                    className="inline-block py-3 px-8 text-white bg-red-600 rounded-lg text-xl hover:bg-red-500 hover:scale-105 transition duration-300 transform"
                  >
                    Email Me at <span className="font-semibold">dren.azemi444@gmail.com</span>
                  </a>
                </div>

                <div>
                  <a
                    href="tel:+046115253"
                    className="inline-block py-3 px-8 text-white bg-green-600 rounded-lg text-xl hover:bg-green-500 hover:scale-105 transition duration-300 transform"
                  >
                    Call Me at <span className="font-semibold">046115253</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
