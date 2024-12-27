import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    description: 'Complete digital transformation for a leading retail brand, resulting in 200% growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'E-Commerce'
  },
  {
    id: 2,
    title: 'Global Market Entry',
    description: 'Successful market penetration strategy for a tech startup in Asian markets.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Strategy'
  },
  {
    id: 3,
    title: 'Brand Transformation',
    description: 'Complete rebranding and digital presence overhaul for a traditional business.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Branding'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600">Discover how we've helped businesses achieve their digital goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium text-primary-300 mb-2">{project.category}</span>
                <h3 className="text-xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}