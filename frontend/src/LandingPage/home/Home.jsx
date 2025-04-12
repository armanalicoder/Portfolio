import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section id="home" className="md:my-10">
      <div className="md:flex">
        <div className="w-full md:w-[70%] md:pl-20 text-white my-7">
          <div className="text-3xl space-y-2">
            <h1>Hi, My Self</h1>
            <p className="font-bold">Arman Ali</p>
            <p>
              And I'm a{" "}
              <span className="text-orange-600 font-bold">
                <Typewriter
                  words={["Software Engineer", "Web Developer", "Educator"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
          <p className="md:w-[90%] md:text-2xl">
            Intern@Softpro India I'm a 3rd-year B.Tech CSE student passionate
            about becoming a software engineer. I’m currently learning the MERN
            stack and have experience in building user-friendly web
            applications. I love solving problems, learning new technologies,
            and working on projects that make an impact.
          </p>
          <div className="space-x-4 mt-4 text-2xl">
            <a target="_blank" href="https://www.youtube.com/@rrsimtclasses/">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a target="_blank" href="https://github.com/armanalicoder">
              <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/arman-ali-5789b6281/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="mt-5">
            <a
              href="/"
              className="p-2 rounded-2xl pl-6 pe-8 bg-orange-600 hover:bg-blue-700"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="p-2 rounded-2xl ml-3 pl-6 pe-8 bg-orange-600 hover:bg-blue-700"
            >
              About Me
            </a>
          </div>
          
        </div>
        <div className="w-full md:w-[30%] text-center">
          <img className="rounded-full hover:shadow-[0_0_25px_10px_orange] transition-shadow duration-300 w-80 mx-auto md:w-full" src="profile.png"/>
        </div>
      </div>
    </section>
  );
}

export default Home;
