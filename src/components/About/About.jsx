import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faMobile,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

// Import image properly in Vite
import profileImg from "../../webpage.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate software developer with expertise in building modern web
            applications and solving complex technical challenges.
          </p>
        </div>

        {/* Profile + Bio */}
        <div className="flex flex-wrap items-center">
          {/* Bio Content */}
          <div className="w-full md:w-2/3 md:pl-10">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a software developer with over 5 years of experience creating
              robust applications for clients across various industries. My
              journey in tech started when I built my first website at age 16,
              and I've been passionate about creating digital solutions ever
              since.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in full-stack development with a focus on modern
              JavaScript frameworks like React and Node.js. I'm also experienced
              in cloud technologies, database design, and implementing secure,
              scalable architectures.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: faCode,
                  title: "Frontend Development",
                  desc: "Modern, responsive interfaces",
                },
                {
                  icon: faServer,
                  title: "Backend Development",
                  desc: "Scalable server solutions",
                },
                {
                  icon: faMobile,
                  title: "Mobile Development",
                  desc: "Native and cross-platform apps",
                },
                {
                  icon: faLaptopCode,
                  title: "DevOps",
                  desc: "CI/CD and cloud infrastructure",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-xl"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-blue-600 text-2xl mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                    <p className="text-gray-600">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
