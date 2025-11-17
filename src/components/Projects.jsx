import React, { useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Traffic School System',
      description: 'A modular traffic school platform that provides quizzes and educational content for users to learn traffic rules and regulations. Includes frontend in React and multiple backend services in Spring Boot.',
      image: p3,
      githubLink: 'https://github.com/TrafficSchool-System',
      liveLink: null,
      tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Maven', 'MySQL', 'React', 'Tailwind CSS', 'Microservices'],
      features: [
        'Interactive and responsive UI with React and Tailwind CSS',
        'User authentication and profile management',
        'Quiz creation, management, and session tracking',
        'RESTful API communication between frontend and backend',
        'Modular backend architecture with DTOs',
        'CORS enabled for seamless integration'
      ],
    },
    {
      title: 'Transport App',
      description: 'Admin can list transports and users can book transports. CRUD operations, full auth, MySQL.',
      image: p2,
      githubLink: 'https://github.com/fukriiboii/Transport-System',
      liveLink: null,
      tech: ['React', 'Express', 'MySQL', 'Sequelize', 'Node.js'],
      features: [
        'User authentication',
        'Admin dashboard',
        'Booking system',
        'Full CRUD support',
      ],
    },
    {
     title: 'Personal Portfolio',
      description:'A modern and responsive portfolio website built with JavaScript, React, and TailwindCSS.',
      image: p1,
      githubLink: 'https://github.com/fukriiboii/portfolio',
      liveLink: null,
      tech: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
      features: ['Responsive design', 'Modern UI', 'Animations', 'Project showcase'],
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const total = projects.length;

    let normalized = diff;
    if (diff > total / 2) normalized -= total;
    if (diff < -total / 2) normalized += total;

    return normalized;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <p className="text-lg text-gray-500 uppercase tracking-wider">See some of</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">My project's</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>
        </div>

        {/* 3D CAROUSEL */}
        <div
          className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              const isCenter = position === 0;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${position * 280}px)
                      translateZ(${isCenter ? '0px' : '-250px'})
                      scale(${isCenter ? 1 : 0.7})
                      rotateY(${position * -15}deg)
                    `,
                    opacity: Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.6,
                    zIndex: isCenter ? 50 : 30 - Math.abs(position),
                    pointerEvents: Math.abs(position) > 2 ? 'none' : 'auto',
                  }}
                  onClick={() => isCenter && setSelectedProject(project)}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-[280px] md:w-[350px] transition-all duration-300 ${
                      isCenter ? 'ring-4 ring-blue-500 ring-offset-4' : ''
                    }`}
                  >
                    <div className="relative h-48 md:h-56 bg-gradient-to-br from-blue-50 to-purple-50">
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" />
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description.substring(0, 80)}...
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevProject}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-500 text-gray-800 hover:text-white p-4 rounded-full shadow-lg transition"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-500 text-gray-800 hover:text-white p-4 rounded-full shadow-lg transition"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all ${
                i === currentIndex ? 'w-8 h-3 bg-blue-500' : 'w-3 h-3 bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-50 to-purple-50">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain p-8"
              />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6">{selectedProject.description}</p>

              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="mb-8 space-y-2">
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
