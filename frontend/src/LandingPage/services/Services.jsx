import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      type: "Full-Stack Web Developement",
      description:
        "End-to-end development using the MERN stack (MongoDB, Express.js, React.js, Node.js) to build scalable and high-performance web applications.",
    },
    {
      id: 2,
      type: "Frontend Developement",
      description:
        "Responsive and interactive UI development using HTML, CSS, JavaScript, and React.js, with a focus on user experience and performance.",
    },
    {
      id: 3,
      type: "Backend Developement",
      description:
        "Robust server-side logic and API development using Node.js and Express.js, along with secure data handling and integration with databases.",
    },
    {
      id: 4,
      type: "Database Management",
      description:
        "Designing and managing databases using MongoDB and SQL to ensure efficient data storage, retrieval, and integrity.",
    },
    {
      id: 5,
      type: "Project Deployment",
      description:
        "Deploying web applications using platforms like Vercel, Netlify, and Render, ensuring your project is live, secure, and optimized..",
    },
    {
      id: 6,
      type: "Content Creator",
      description:
        "I love teaching and building projects. Through EduShine Classes, I share tutorials, notes, and real-world projects to make technical topics easier for students.",
    },
  ];
  return (
    <section id="services">
      <div className="text-white">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-5">
          Services
        </h1>
        <div className="flex flex-wrap justify-evenly p-3">
          {services.map((service) => {
            return (
              <div className="w-full md:w-[30%] transition-transform duration-300 ease-initial hover:scale-105 border-1 border-gray-600 p-4 rounded-3xl mb-8 hover:shadow-lg hover: shadow-orange-500" key={service.id}>
                <h1 className="text-2xl font-semibold">
                  {service.type}
                </h1>
                <p className="mt-3 text-lg text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
