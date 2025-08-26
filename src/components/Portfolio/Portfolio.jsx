import React from "react";
import "./Portfolio.css";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 60 },
    { name: "React", level: 65 },
    { name: "Node.js", level: 50 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Java", level: 60 },
    { name: "C++", level: 55 },
  ];

  const softSkills = [
    { name: "Communication", level: 75 },
    { name: "Team Collaboration", level: 65 },
    { name: "Project Management", level: 75 },
    { name: "Agile Methodology", level: 70 },
    { name: "Adaptability", level: 80 },
    { name: "Time Management", level: 70 },
    { name: "Leadership", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my journey as a
            developer, allowing me to tackle complex challenges and deliver
            high-quality solutions.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="h3 font-weight-bold mb-3">Technical Skills</h3>
              <div className="skills-container">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-section">
                    <div className="skill-title d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill technical"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <h3 className="h3 font-weight-bold mb-3">Soft Skills</h3>
              <div className="skills-container">
                {softSkills.map((skill, index) => (
                  <div key={index} className="skill-section">
                    <div className="skill-title d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill soft"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Technologies I Use</h3>
          <div className="tech-grid">
            {[
              "JavaScript",
              "React js",
              "Node js",
              "Python",
              "Java",
              "C++",
              "html5",
              "Css3",
              "Bootstrap",
              "PostgreSQL",
              "SQL",
              "Git",
            ].map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">
                  <img
                    src={`/images/tech/${tech
                      .toLowerCase()
                      .replace(".", "")}.png`}
                    alt={tech}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
