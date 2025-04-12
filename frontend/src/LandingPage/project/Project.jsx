import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Project() {
  return (
    <section id="projects">
      <div className="text-white">
        <h1 className="text-center text-4xl font-semibold mb-5 text-orange-500">
          Projects
        </h1>
        <LeftSection
          title="EduShine Classes"
          category="E-Learning Plateform"
          description="• Designed and Deployed the EduShine Classes website, a platform utilized by thousands of students for accessing study notes, video lectures, and academic resources."
          link="https://edushineclasses.in"
          image="edushine.png"
          technologies={[
            "#html",
            "#css",
            "#javascript",
            "#mongoDB",
            "#expressJs",
            "#nodeJs",
            "#RESTAPIs",
          ]}
        />
      </div>
      <RightSection
        title="WanderLust - A Travel Discovery Plateform"
        category="Travel Discovery Plateform"
        description="• Developed a full-stack travel discovery & listing platform following the MVC (Model-View-Controller)
architecture to ensure scalability and maintainability.
• Integrated Cloudinary for image storage, Google Maps API for location services, and MERN stack for
smooth performance"
        link="https://wanderlustguide.onrender.com/"
        image="wanderlust.png"
        technologies={[
          "#html",
          "#css",
          "#javascript",
          "#mongoDB",
          "#expressJs",
          "#nodeJs",
          "#RESTAPIs",
          "#MVCFramework",
        ]}
      />
      <LeftSection
        title="Zerodha – A Full Stack Trading Plateform"
        category="Stock Market Plateform"
        description="• Developed a fully functional trading plateform inspired by Zerodha, Built from scratch using MERN
Stack. The plateform enables to users to sign up, log in securely using JWT and Cookies and view a
clean, responsive interface similar to Zerodha’s UI/UX. "
        link="https://zerodhatrading.onrender.com/"
        image="zerodha.png"
        technologies={[
          "#html",
          "#css",
          "#javascript",
          "#mongoDB",
          "#expressJs",
          "#react.js",
          "#nodeJs",
          "#JWTAuth",
          "#RESTAPIs",
        ]}
      />
      <RightSection
        title="Portfolio Website"
        category="Portfolio(Arman Ali)"
        description="• Developed a personal portfolio website using React and Tailwind CSS to showcase my projects, skills, and teaching work through EduShine Classes."
        link="https://armanali.onrender.com/"
        image="portfolio.png"
        technologies={[
          "#html",
          "#css",
          "#javascript",
          "#react.js",
          "#tailwindcss",
        ]}
      />
      <LeftSection
        title="Flipkart Clone (Frontend Only)"
        category="E-Commerce Frontent Design"
        description="• Built a Flipkart-inspired e-commerce UI using HTML, CSS, and JavaScript."
        link="https://flipkartclone.onrender.com/"
        image="flipkart.png"
        technologies={[
          "#html",
          "#css",
          "#javascript",
        ]}
      />
    </section>
  );
}

export default Project;
