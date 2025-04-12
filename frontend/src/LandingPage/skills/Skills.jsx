import React from "react";

function Skills() {
  const skills = [
    {
      id: 1,
      type: "Frontend Technologies",
      skill: [
        {
          name: "HTML",
          icon : 'fa-brands fa-html5'
        },
        {
          name: "CSS",
          icon : 'fa-brands fa-css3-alt'
        },
        {
          name: "JavaScript",
          icon : 'fa-brands fa-js'
        },
        {
          name: "React.JS",
          icon : 'fa-brands fa-react'
        },
      ]
    },
    {
      id: 2,
      type: "Backend Technologies",
      skill: [
        {
          name : "Node.JS",
          icon : 'fa-brands fa-node-js'
        },
        {
          name : "Express.JS",
          icon : 'fa-solid fa-truck-fast'
        }
      ],
    },
    {
      id: 3,
      type: "Database Technologies",
      skill: [
        {
          name : "MongoDB",
          icon : 'fa-solid fa-database'
        },
        {
          name : "MySQL",
          icon : 'fa-solid fa-database'
        }
      ],
    },
    {
      id: 4,
      type: "Programming Languages",
      skill: [
        {
          name : "Java",
          icon : 'fa-solid fa-code'
        },
        {
          name :"C",
          icon : 'fa-solid fa-code'
        },
        {
          name : "JavaScript",
          icon :'fa-brands fa-js'
        }
      ],
    },
    {
      id: 5,
      type: "Other Skill",
      skill: ["Communication Skill", "Time Management", "YouTube Instructor"],
    },
  ];
  return (
    <section id="skills" className="md:my-18">
      <div className="text-white">
        <h1 className="text-center text-4xl font-bold text-orange-500 mb-5">
          Skills
        </h1>
        <div className="md:flex flex-wrap justify-evenly">
          {skills.map((data) => {
            return (
              <div key={data.id} className="border-1 border-gray-600 p-5 md:w-[30%] transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-orange-500 rounded-3xl text-lg mb-5">
                <h1 className="font-semibold text-2xl">{data.type}</h1>
                <hr className="my-3 text-gray-800" />
                {data.skill.map((innerData,index) => {
                  return (
                    <div key={index} className="bg-orange-400 p-2 rounded-3xl mb-2 pl-3">
                      {innerData?.name || innerData} <i className={innerData?.icon}></i>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
