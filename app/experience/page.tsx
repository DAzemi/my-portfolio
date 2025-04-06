// app/experience/page.tsx

import { FC } from "react";

const Experience: FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto">

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold pt-12">Professional Experience</h1>
          <p className="text-lg sm:text-xl mt-4">Here are some of the key experiences that have helped shape my development journey.</p>
        </header>

        {/* Experience Items */}
        <div className="space-y-12 pb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">Software Engineer Intern - Pabau</h3>
            <p className="text-gray-400 text-base sm:text-lg mt-2">November 2024 - February 2025</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg">
              <li>Collaborated with a team of 60+ developers.</li>
              <li>Gained expertise in TypeScript, Next.js, GraphQL, MySQL, Hasura, CSS, and modern development practices.</li>
              <li>Worked on optimizing performance, implementing new features, and ensuring scalability.</li>
              <li>Contributed to frontend and backend improvements while maintaining clean and efficient code.</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">Software Engineer Intern - Starlabs</h3>
            <p className="text-gray-400 text-base sm:text-lg mt-2">September 2023 - December 2023</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-lg">
              <li>Developed a sophisticated e-commerce application using React.js, Node.js, and MySQL.</li>
              <li>Implemented secure authentication, authorization, and payment processing.</li>
              <li>Optimized database queries and backend performance for scalability.</li>
              <li>Gained hands-on experience in full-stack development, security protocols, and payment integration.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
