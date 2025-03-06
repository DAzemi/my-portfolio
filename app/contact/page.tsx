export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-3xl">
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold">Get in Touch</h1>
          <p className="text-lg mt-3">Reach out to me through any of the following channels!</p>
        </header>

        <section className="space-y-6">
          <div>
            <h3 className="text-3xl font-semibold">Find Me Online</h3>
            <div className="mt-5 space-y-5">
              <div className="flex flex-col space-y-4">
                <div>
                  <a
                    href="https://github.com/DAzemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-4 px-10 text-white bg-blue-600 rounded-xl text-lg hover:bg-blue-500 hover:scale-110 transition duration-300"
                  >
                    GitHub
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-4 px-10 text-white bg-blue-600 rounded-xl text-lg hover:bg-blue-500 hover:scale-110 transition duration-300"
                  >
                    LinkedIn
                  </a>
                </div>

                <div>
                  <a
                    className="inline-block py-4 px-10 text-white bg-blue-600 rounded-xl text-lg hover:bg-blue-500 hover:scale-110 transition duration-300"
                  >
                    Email Me: <span className="font-semibold">dren.azemi444@gmail.com</span>
                  </a>
                </div>

                <div>
                  <a
                    className="inline-block py-4 px-10 text-white bg-blue-600 rounded-xl text-lg hover:bg-blue-500 hover:scale-110 transition duration-300"
                  >
                    Call Me: <span className="font-semibold">046115253</span>
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
