import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A blend of professional experience, education, and continuous
            learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} /> Work Experience
            </h3>
            <div className="relative border-l-2 border-blue-200 pl-6">
              {[
                {
                  year: "2021 - Present",
                  title: "Senior Software Developer",
                  company: "Tech Solutions Inc.",
                  desc: "Leading a team of developers in building scalable web applications.",
                },
                {
                  year: "2018 - 2021",
                  title: "Full Stack Developer",
                  company: "Digital Innovations",
                  desc: "Developed and maintained enterprise-level applications using React and Node.js.",
                },
              ].map((job, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                  <p className="text-sm text-gray-500">{job.year}</p>
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <p className="text-blue-600 mb-2">{job.company}</p>
                  <p className="text-gray-600">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h3>
            <div className="relative border-l-2 border-blue-200 pl-6">
              {[
                {
                  year: "2014 - 2018",
                  degree: "Bachelor of Computer Science",
                  school: "University of Technology",
                  desc: "Specialized in software engineering and web development.",
                },
                {
                  year: "2012 - 2014",
                  degree: "High School Diploma",
                  school: "Science Academy",
                  desc: "Focus on mathematics and computer science.",
                },
              ].map((edu, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-blue-600 mb-2">{edu.school}</p>
                  <p className="text-gray-600">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
