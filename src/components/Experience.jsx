import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaJava, FaGitAlt, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiMongodb, SiJabber, SiJavascript, SiExpress, SiGit, SiPostman, SiDocker, SiJunit5, SiJira } from "react-icons/si";
import { MdApi } from "react-icons/md";
import hibernateLogo from '../assets/hibernate.svg';

const Experience = () => {
    return (
        <section id='experience' className='bg-white py-16 px-6'>

            <div className='max-w-7xl mx-auto text-center'>

                {/* Titel & Divider */}
                <p className='text-lg text-gray-500 uppercase tracking-wider'>What I Excel At</p>
                <h2 className='text-4xl font-bold text-gray-900 mt-2'>Experience</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>

                <div className='md:flex md:gap-6 text-left'>

                    {/* Frontend Experience */}
                    <div className='border border-gray-300 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-1/2 mb-6'>
                        <h3 className='text-3xl font-semibold mb-4 text-cyan-600'>Frontend Development</h3>
                        <p className='text-gray-700 mb-4'>I have experience in building modern applications with modern tools like:</p>
                        <div className='flex flex-wrap gap-4'>

                            <div className='flex flex-col items-center'>
                                <FaHtml5 className="text-orange-500 text-4xl" />
                                <p className='text-sm text-gray-600'>HTML5</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <FaCss3Alt className='text-blue-500 text-4xl' />
                                <p className='text-sm text-gray-600'>CSS3</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <FaJs className='text-yellow-500 text-4xl' />
                                <p className='text-sm text-gray-600'>JavaScript</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <FaReact className='text-blue-400 text-4xl' />
                                <p className='text-sm text-gray-600'>React</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiTailwindcss className='text-cyan-500 text-4xl' />
                                <p className='text-sm text-gray-600'>Tailwind CSS</p>
                            </div>

                            <div className='flex flex-col items center'>
                                <SiJira className='text-blue-500 text-4xl'/>
                                <p className='text-sm text-gray-600'>Jira</p>

                            </div>

                        </div>
                    </div>

                    {/* Backend Experience */}
                    <div className='border border-gray-300 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-1/2 mb-6'>
                        <h3 className='text-3xl font-semibold mb-4 text-cyan-600'>Backend Development</h3>
                        <p className='text-gray-700 mb-4'>I work on building stable and efficient backend solutions with:</p>
                        <div className='flex flex-wrap gap-4'>

                            <div className='flex flex-col items-center'>
                                <FaJava className='text-red-600 text-4xl' />
                                <p className='text-sm text-gray-600'>Java</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiSpringboot className='text-green-600 text-4xl' />
                                <p className='text-sm text-gray-600'>Spring Boot</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <FaNodeJs className='text-green-500 text-4xl' />
                                <p className='text-sm text-gray-600'>Node.js</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiMysql className='text-blue-600 text-4xl' />
                                <p className='text-sm text-gray-600'>MySQL</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiExpress className='text-gray-700 text-4xl' />
                                <p className='text-sm text-gray-600'>Express.js</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <FaGithub className='text-gray-900 text-4xl'/>
                                <p className='text-sm text-gray-600'>GitHub</p>
                            </div>

                            <div className='flec flex-col items-center'>
                                <MdApi className='text-purple-600 text-4xl'/>
                                <p className='text-sm text-gray-600'>REST & API</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiPostman className='text-orange-500 text-4xl'/>
                                <p className='text-sm text-gray-600'>Postman</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <SiJunit5 className='text-green-500 text-4xl'/>
                                <p className='text-sm text-gray-600'>JUnit5</p> 
                            </div>
                            
                            <div className='flex flex-col items-center'>
                                <img src={hibernateLogo} alt="Hibernate" className='w-9 h-9'/>
                                <p className='text-sm text-gray-600'>Hibernate</p>
                            </div>

                           

                        </div>
                        
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Experience;
