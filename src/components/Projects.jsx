import React, { useState, useRef } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import TP1 from '../assets/TP1.png';
import TP2 from '../assets/TP2.png';
import TP3 from '../assets/TP3.png';
import TP4 from '../assets/TP4.png';
import TP5 from '../assets/TP5.png';
import TP6 from '../assets/TP6.png';
import TP7 from '../assets/TP7.png';
import TP8 from '../assets/TP8.png';

// VIDEO
import trafficVideo from '../assets/trafficVideo.mp4';
import portfolioVideo from '../assets/portfolioVideo.mp4';



const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const videoRef = useRef(null);

  const projects = [
    {
      title: 'Traffic School System',
      description:
        'A modular traffic school platform that provides quizzes and educational content for users to learn traffic rules and regulations. Includes frontend in React and multiple backend services in Spring Boot.',
      image: TP1,
      video: trafficVideo,
      images: [TP1, TP2, TP3, TP4, TP5, TP6, TP7, TP8],
      githubLink: 'https://github.com/TrafficSchool-System',
      tech: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'Maven',
        'MySQL',
        'React',
        'Tailwind CSS',
        'Microservices',
      ],
      features: [
        'Interactive and responsive UI with React and Tailwind CSS',
        'User authentication and profile management',
        'Quiz creation, management, and session tracking',
        'RESTful API communication between frontend and backend',
        'Modular backend architecture with DTOs',
        'CORS enabled for seamless integration',
      ],
    },
    {
      title: 'Personal Portfolio',
      description:
        'A modern and responsive portfolio website built with JavaScript, React, and TailwindCSS.',
      image: p1,
      video: portfolioVideo,
      images: [p1],
      githubLink: 'https://github.com/fukriiboii/portfolio',
      tech: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
      features: [
        'Responsive design',
        'Modern UI',
        'Animations',
        'Project showcase',
      ],
    },
    {
      title: 'Transport App',
      description:
        'Admin can list transports and users can book transports. CRUD operations, full auth, MySQL.',
      image: p2,
      video: null,
      images: [p2],
      githubLink: 'https://github.com/fukriiboii/Transport-System',
      tech: ['React', 'Express', 'MySQL', 'Sequelize', 'Node.js'],
      features: [
        'User authentication',
        'Admin dashboard',
        'Booking system',
        'Full CRUD support',
      ],
    }
  ];

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const total = projects.length;

    let normalized = diff;
    if (diff > total / 2) normalized -= total;
    if (diff < -total / 2) normalized += total;

    return normalized;
  };

  const openProject = (project) => {
    setMediaIndex(0);
    setSelectedProject(project);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedProject(null);
  };

  const getMediaLength = () => {
    if (!selectedProject) return 0;
    return (selectedProject.video ? 1 : 0) + selectedProject.images.length;
  };

  const nextMedia = () => {
    setMediaIndex((prev) =>
      prev + 1 >= getMediaLength() ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setMediaIndex((prev) =>
      prev - 1 < 0 ? getMediaLength() - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-500 uppercase tracking-wider">
            See some of
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>
        </div>

        {/* CAROUSEL */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              const isCenter = position === 0;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 cursor-pointer"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${position * 300}px)
                      translateZ(${isCenter ? '0px' : '-250px'})
                      scale(${isCenter ? 1 : 0.75})
                      rotateY(${position * -15}deg)
                    `,
                    opacity: Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.6,
                    zIndex: isCenter ? 50 : 30 - Math.abs(position),
                    pointerEvents: Math.abs(position) > 2 ? 'none' : 'auto',
                  }}
                  onClick={() => isCenter && openProject(project)}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-[300px] md:w-[520px] ${
                      isCenter ? 'ring-4 ring-blue-500 ring-offset-4' : ''
                    }`}
                  >
                    <div className="h-60 md:h-72 bg-gradient-to-br from-blue-50 to-purple-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                      {/* Kort beskrivning */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {project.description.length > 80
                          ? project.description.substring(0, 80) + '...'
                          : project.description}
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

          <button
            onClick={prevProject}
            className="absolute left-4 p-4 bg-white rounded-full shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 p-4 bg-white rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
            >
              <FaTimes size={22} />
            </button>

            {/* MEDIA RULLE */}
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-50 to-purple-50">
              {selectedProject.video && mediaIndex === 0 && (
                <video
                  ref={videoRef}
                  src={selectedProject.video}
                  controls
                  className="w-full h-full object-contain p-8"
                />
              )}

              {(mediaIndex > 0 || !selectedProject.video) && (
                <img
                  src={
                    selectedProject.video
                      ? selectedProject.images[mediaIndex - 1]
                      : selectedProject.images[mediaIndex]
                  }
                  alt="Project media"
                  className="w-full h-full object-contain p-8"
                />
              )}

              {getMediaLength() > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-500 hover:text-white p-3 rounded-full shadow"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-500 hover:text-white p-3 rounded-full shadow"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
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

              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
