"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Basic Blog Website",
    description: "Developed a full-stack blog application using ReactJS, Node/Express.js, MongoDB, and MaterialUI,demonstrating proficiency in the MERN stack.",
    image: "/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohanBohra8/Blog-App",
    previewUrl: "https://basic-blogger.netlify.app/",
  },
  {
    id: 2,
    title: "Simple Chatting Application",
    description: "A real-time chat application using ReactJS and Node.js, leveraging Socket.io for WebSocket communication.",
    image: "/projects/chat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohanBohra8/Chat-App",
    previewUrl: "https://chatty-chatters.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An E-commerce platform using MongoDB, Express.js, React, and Node.js, demonstrating proficiency in the MERN stack.",
    image: "/projects/ecom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohanBohra8/Ecommerce-MERN",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
