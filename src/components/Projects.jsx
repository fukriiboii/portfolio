import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import projectPortfolio from '../assets/projectPortfolio.png';
import projectTransport from '../assets/projectTransport.png'; 

const Projects = () => {
  // Skapa en array av projekt
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern and responsive portfolio website built with JavaScript, React, and TailwindCSS. This project showcases my skills, previous work, and experience, featuring a projects section, blog, and contact form. Designed to provide a clean and intuitive user experience.',
      image: projectPortfolio,  // Endast en bild per projekt
      githubLink: 'https://github.com/fukriiboii/portfolio',
    },
    {
      title: 'Transport App',
      description: 'Admin can list transports and users can book transports. Users can sign up and login, and then book transports, which are stored in the user\'s booking list. CRUD operations. Built with JavaScript, React, Express. Database built with Sequelize and MySQL.',
      image: projectTransport,
      githubLink: 'https://github.com/fukriiboii/Transport-System',
    },
    {
      title: 'Projekt 3',
      description: 'Description',
      image: '/project2-image.png',  // Endast en bild per projekt
      githubLink: 'https://github.com/ditt-användarnamn/projekt-2',
    },
    // Lägg till fler projekt här om du vill
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-500 uppercase tracking-wider">Here are some of my</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>

        {/* Lista över projekt */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            // State för att hantera visningen av fullständig beskrivning
            const [isExpanded, setIsExpanded] = useState(false);

            const handleToggleDescription = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>

                {/* Visar del av beskrivningen och en Read More länk */}
                <p className="text-gray-700 mt-4">
                  {isExpanded ? project.description : `${project.description.substring(0, 100)}...`}
                  <button 
                    onClick={handleToggleDescription} 
                    className="text-blue-500 hover:underline ml-2">
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </p>

                {/* Visar en bild för varje projekt utan bakgrund */}
                <div className="mt-6">
                  <img
                    src={project.image}
                    alt={`Project ${index} image`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain rounded-lg"
                  />
                </div>

                {/* GitHub Länk */}
                <div className="mt-6 text-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaGithub className="inline-block mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
