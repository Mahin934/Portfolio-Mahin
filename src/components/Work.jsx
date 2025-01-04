import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "FindTrack",
    description:
      "FindTrack is a Lost and Found platform that connects individuals who have lost personal belongings with those who may have found them. It enables users to report lost items, browse found items, and take action to recover lost belongings.",
    year: "2024",
    role: "Full Stack Developer",
    image: "https://i.ibb.co.com/Tcv7hff/Screenshot-2025-01-04-205706.png",
    demoLink: "https://mahin-find-track.surge.sh/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-Mahin934",
  },
  {
    id: 2,
    title: "FrostGuardian",
    description:
      "This platform connects donors with vulnerable communities in Bangladesh to provide warm clothing during winter. It simplifies the donation process while ensuring maximum impact for those in need.",
    year: "2024",
    role: "Full Stack Developer",
    image: "https://i.ibb.co.com/LJ3mMpR/Screenshot-2025-01-04-210809.png",
    demoLink: "https://mahin-frost-guardian.surge.sh/",
    githubLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-Mahin934",
  },
  {
    id: 3,
    title: "Gadget Shop",
    description:
      "Discover the latest gadgets and explore features designed to make your tech experience seamless. From expert reviews and hands-on tips to side-by-side comparisons, this page is your go-to guide for everything technology.",
    year: "2024",
    role: "Full Stack Developer",
    image: "https://i.ibb.co.com/sRzWV60/Screenshot-2025-01-04-211449.png",
    demoLink: "https://mahin-gadgets-shop-webpage.surge.sh/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-Mahin934",
  },
];

const Work = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card bg-gray-800 shadow-lg">
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                {/* Project Info */}
                <div className="mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white">{project.year}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-400">Role</span>
                    <span className="text-white">{project.role}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="card-actions justify-end mt-4">
                  <a
                    href={project.demoLink}
                    className="btn btn-outline btn-warning flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="btn btn-outline btn-success flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
