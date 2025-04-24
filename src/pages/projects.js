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
    {
      id: 3,
      title: "Reserved: Admin Panel for a booking system.",
      shortDescription:
        "Reserved: the app offers an Admin Panel for business owners to manage their operations. In the Admin Panel...",
      fullDescription:
        "restaurant owners can create and manage their establishments, set availability, and configure all relevant features such as menu offerings, booking times, and promotional deals. It also includes tools for tracking bookings, generating reports, and managing customer interactions, making it a complete solution for both service providers and customers.",
      tags: ["Next.js", "Context API", "Material UI"],
      github: "#",
      live: "http://143.198.219.56:3008/",
      image: "/UserLogin.png",
    },
    {
      id: 4,
      title: "United Hospital Ltd: A healthcare medical website",
      shortDescription:
        "Developed the intuitive website for United Hospital, providing comprehensive details on departments and doctors, facilitating easy appointment scheduling...",
      fullDescription:
        "Users can create accounts for streamlined access to medical reports and personalized healthcare services.Crafted intuitive user interfaces for department selection, doctor appointments, and profile management, enhancing functionality with real-time appointment scheduling, health report access, and emergency service requests.Integrated ERP API and ensured seamless payment processing, significantly improving the user experience on United Hospital's innovative healthcare platform.",
      tags: ["Next.js", "Context API", "Bootstrap"],
      github: "#",
      live: "https://uhlbd.com/",
      image: "/uhl.png",
    },
    {
      id: 5,
      title: "Mave CMS: A headless CMS solution for dynamic websites",
      shortDescription:
        "Developed front end for the CMS, enabling API generation for dynamic websites, allowing users to effortlessly manage their website front end...",
      fullDescription:
        "Empowered users to build custom websites with a headless CMS. Next.js and Ant Design used to build the foundation for a seamless user experience. Craft unique pages, menus, and interactive components (cards, sliders, forms, etc.) for a truly personalized online presence.",
      tags: ["Next.js", "Context API", "Ant design"],
      github: "#",
      live: "https://cms.uurotravels.com/",
      image: "/dfsdf.PNG",
    },
    // ... other projects
  ];

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen p-4 sm:p-5 transition-colors duration-300">
      <div className="border border-gray-200 dark:border-[#F5F5F5] max-w-screen-lg mx-auto text-gray-900 dark:text-white rounded-3xl px-4 sm:px-8 md:px-16 py-6">
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
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Projects;
