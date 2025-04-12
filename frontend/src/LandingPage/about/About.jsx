import React from "react";

function About() {
  return (
    <section id="about" className="text-white px-6 py-10 md:my-25">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">About Me</h2>
        <div className="border-1 border-gray-600 p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-lg hover:shadow-orange-500">
          <p className="text-lg">
          👋Hello ! I'm{" "}
            <span className="text-orange-400 font-semibold">Arman Ali</span>, a
            passionate and self-driven
            <span className="text-blue-400"> Software Engineer</span> and{" "}
            <span className="text-green-400">Full Stack Web Developer</span>. I
            specialize in front-end technologies and have hands-on experience
            with{" "}
            <span className="font-medium">
              HTML, CSS, JavaScript, React, and the MERN Stack
            </span>
            . I love turning ideas into real-world projects and creating clean,
            responsive, and user-friendly web designs.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I've completed my summer internship at
            <span className="font-semibold text-yellow-300"> Softpro India</span>,
            where I gained solid knowledge full-stack development. I also share
            tech content and tutorials on my{" "}
            <span className="text-red-400">YouTube channel</span> to help students
            learn easily.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            My goal is to become a successful software engineer, contribute to
            impactful projects, and keep learning new technologies. I believe in
            consistency, curiosity, and always improving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
