import React from "react";

function LeftSection(props) {
  return (
    <div className="md:flex p-2 text-white">
      <div className="w-full md:w-[50%] flex flex-col">
        <div>
          <img src={props.image} alt="edushine_project" />
        </div>
        <div className="mx-auto">
          <a
            className="text-lg bg-orange-500 pl-10 pe-10 pt-2 pb-2 rounded-lg"
            target="_blank"
            href={props.link}
          >
            Visit Live <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
      <div className="w-full md:w-[50%] mt-4 md:mt-8">
        <h1 className="text-2xl font-semibold text-orange-500">
          <i className="fa-solid fa-graduation-cap"></i> {props.title}
        </h1>
        <p className="text-green-500">{props.category}</p>
        <p>{props.description}</p>
        <div className="flex flex-wrap mt-3 space-y-2 space-x-4">
          {props.technologies.map((data,index) => {
            return (
              <div key={index} className="border-1 border-gray-500 ps-3 pe-3 rounded-2xl ">
                <ul>
                  <li>{data}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
