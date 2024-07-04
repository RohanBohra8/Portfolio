"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>C++</li>
        <li>Data Structures</li>
        <li>Java</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>React.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Guru Gobind Singh Indraprastha University</li>
        <li>MSIT</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Coding Ninjas C++</li>
        <li>Coding Ninjas Data Structure and Algorithms</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [Tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/one.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack developer. basically my about section
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={Tab == "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={Tab == "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certifications")}
              active={Tab == "Certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === Tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
