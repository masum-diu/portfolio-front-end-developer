import React, { useState } from "react";
import Layout from "./components/Layout";
import Link from "next/link";

const Projects = () => {
  // SVG Icon Components
  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleReadMore = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const projects = [
    {
      id: 1,
      title:
        "Aranya: A B2C Ecommerce web app for a clothing brand called Aranya",
      shortDescription:
        "Full-featured online store with product catalog, cart, and checkout system...",
      fullDescription:
        "Full-featured online store with product catalog, cart, and checkout system built with Next.js, Redux Toolkit, and Node.js. Implemented secure payment gateways, product filtering, and admin dashboard for inventory management.",
      tags: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB", "Material UI"],
      github: "#",
      live: "https://aranya.com.bd/",
      image: "/aranya.png",
    },
    {
      id: 2,
      title: "Reserved: A booking system Mobile Application.",
      shortDescription:
        "A comprehensive booking system mobile application developed for EtherTech, featuring both salon and hotel booking functionalities...",
      fullDescription:
        "The app provides users with detailed information on available services, real-time booking capabilities, and reservation management. Key features include integrated salon and hotel listings, dynamic scheduling, personalized booking recommendations, secure payment options, and push notifications for upcoming appointments. Additionally, the app allows businesses to manage availability, track bookings, and generate reports, making it a robust solution for both customers and service providers",
      tags: ["React Native", "Context API", "Expo", "CLI", "Tailwind CSS"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.ethertech.ryserved_frontend&pcampaignid=web_share",
      image: "/Cover.png",
    },
    // ... other projects
  ];

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen p-4 sm:p-5 transition-colors duration-300">
      <div className="border border-gray-200 dark:border-[#F5F5F5] max-w-screen-lg mx-auto text-gray-900 dark:text-white rounded-3xl px-4 sm:px-8 md:px-16 py-10">
        <Layout>
          <div className="flex flex-col gap-8 mt-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold">My Projects</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                Here are some of my featured projects. Each one was built to
                solve specific problems and demonstrate different technical
                skills.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-gray-200 dark:border-[#333] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Project Image */}
                    <div className="md:w-1/3 bg-gray-100 dark:bg-gray-800 h-48 md:h-auto relative overflow-hidden group">
                      <div className="w-full h-full transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-left"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/50 rounded-full backdrop-blur-sm">
                          {project.tags[0]}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="md:w-2/3 p-6">
                      <h2 className="text-xl font-bold mb-2">
                        {project.title}
                      </h2>

                      {/* Description with Read More */}
                      <div className="text-gray-600 dark:text-gray-300 mb-4">
                        {expandedProjects[project.id] ? (
                          <>
                            {project.fullDescription}
                            <button
                              onClick={() => toggleReadMore(project.id)}
                              className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Read Less
                            </button>
                          </>
                        ) : (
                          <>
                            {project.shortDescription}
                            {project.fullDescription.length >
                              project.shortDescription.length && (
                              <button
                                onClick={() => toggleReadMore(project.id)}
                                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                Read More
                              </button>
                            )}
                          </>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <GitHubIcon />
                          <span>Code</span>
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLinkIcon />
                          <span>Live Demo</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-4">More Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions,
                and open-source work.
              </p>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View GitHub Profile
              </Link>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Projects;
