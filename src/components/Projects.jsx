import React from 'react';
import { PROJECTS } from '../constants/projects';

const Projects = () => {
    return (
      <section id="contact" className="border-b border-neutral-900 pb-12 px-4 sm:px-8">
        <h1 className="my-16 text-center text-4xl">Projects</h1>
  
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:space-x-12"
            >
              {/* Image */}
              <div className="w-full lg:w-1/3 flex-shrink-0 mb-6 lg:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-80 object-cover rounded-lg"
                />
              </div>
  
              {/* Details */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="mb-2 text-2xl font-semibold text-neutral-100">
                  {project.title}
                </h3>
                <p className="mb-4 text-neutral-300">{project.description}</p>
  
                {/* Tech stack badges in bright purple */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="mr-2 round bg-neutral-900 px-2 py-1 text-sm font-medium 
                                 text-purple-800 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;