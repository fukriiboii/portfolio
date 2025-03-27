import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Bild på dig */}
        <img
          src="/aboutPic.jpg"
          alt="Fahri Kuzey"
          className="w-48 h-48 sm:w-58 sm:h-58 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-lg object-cover shadow-lg"
        />

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-500 uppercase tracking-wider">Get to know more</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">About me</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
          I am a passionate <span className="font-semibold text-cyan-600">Software Developer </span>  
          with experience in web development and backend systems. I love building sleek and  
          functional applications that solve problems and create value for users.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
          When I'm not programming, I enjoy <span className="font-semibold">exploring new technology, working out,  
          playing games and learning new things</span>. I always strive to improve my skills and  
          stay up to date with the latest trends in tech.
          </p>


          {/* Sektion för Education & Experience */}
          <div className="mt-8 md:flex md:gap-6">
            
            {/* Education */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Education</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-xl font-semibold text-gray-700">Higher Vocational Diploma in Agile Java Development</h4>
                  <p className="text-gray-600 mt-1">Edugrade | Gävle</p>
                  <p className="text-gray-500 italic">2023 - 2025</p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-1/2 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-xl font-semibold text-gray-700">Frontend Developer Intern</h4>
                  <p className="text-gray-600 mt-1">The Knowledge Formula | Stockholm</p>
                  <p className="text-gray-500 italic">2024 Oct - 2025 March</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
