"use client";

import React, { useState } from "react";
import projectsData from "@/data/projectsData";
import "./projects.css";
import {
  BsBehance,
  BsDribbble,
  BsGithub,
  BsImage,
  BsInstagram,
  BsLaptop,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <div className="buttons-container">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All Projects
        </button>
        <button
          className={selectedCategory === "Web Development" ? "active" : ""}
          onClick={() => setSelectedCategory("Web Development")}
        >
          Front-End Projects
        </button>
        <button
          className={selectedCategory === "Design" ? "active" : ""}
          onClick={() => setSelectedCategory("Design")}
        >
          Graphic Design Projects
        </button>
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projectsCard">
            <Image
              src={project.image}
              alt={project.title}
              className="pr-img"
              width={1250}
              height={200}
            />

            <div className="projectsInfo">
              <h3>{project.title}</h3>
              <p>Category: {project.category}</p>
              <div className="linksProject">
                {project.category === "Web Development" && (
                  <>
                    <Link href={project?.githubLink} target="_blank">
                      <BsGithub className="githubIconProject" />
                    </Link>
                    <Link href={project?.demoLink} target="_blank">
                      <BsLaptop className="demoIconProject" />
                    </Link>
                  </>
                )}
                {project.category === "Design" && (
                  <>
                    {project.behanceLink && (
                      <Link href={project?.behanceLink} target="_blank">
                        <BsBehance className="githubIconProject" />
                      </Link>
                    )}
                    {project.dribbbleLink && (
                      <Link href={project?.dribbbleLink} target="_blank">
                        <BsDribbble className="githubIconProject" />
                      </Link>
                    )}
                    {project.instagramLink && (
                      <Link href={project?.instagramLink} target="_blank">
                        <BsInstagram className="demoIconProject" />
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
