import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message.");
        }
      );

    e.target.reset();
  };


  return (
    <section id="contact" className="my-15">
      <div className="text-white">
        <h1 className="text-center text-4xl font-bold">
          Contact <span className="text-orange-500">Me</span>{" "}
        </h1>
        <p className="text-md text-center">
          Have a project in mind or want to collaborate? Feel free to reach out
          to me through any of the following channels.
        </p>
        <div className="md:flex justify-around p-3">
          <div className="border-1 border-gray-400 md:h-[200px] md:w-[40%] hover:shadow-lg hover:shadow-orange-500 rounded-2xl p-5 my-4">
            <h1 className="text-2xl font-semibold mb-3">Contact Information</h1>
            <div className="flex items-center">
              <i className="fa-solid fa-envelope"></i>
              <p className="ms-3">armanaliofficial36@gmail.com</p>
            </div>
            <div className="flex items-center my-3">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="ms-3">+91 9795358008</p>
            </div>
            <div className="space-x-3">
              <a href="/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="border-1 md:w-[40%] border-gray-400 hover:shadow-lg hover:shadow-orange-500 rounded-2xl p-4 space-y-5">
            <h1 className="text-2xl font-semibold">
              Send me a <span className="text-orange-500">Message</span>
            </h1>
            <ToastContainer position="top-center"/>
            <form
             onSubmit={sendEmail}
              className="space-y-4"
            >
              <div>
                <div>
                  <label forname="name">Your Name</label>
                </div>
                <input
                  required
                  type="text"
                  className="border border-gray-400 p-2 w-full rounded-2xl focus:border-orange-500 outline-none"
                  id="name"
                  placeholder="John Doe"
                  name="name"
                />
              </div>
              <div>
                <div>
                  <label forname="email">Your Email</label>
                </div>

                <input
                  required
                  type="email"
                  className="border border-gray-400 p-2 w-full rounded-2xl focus:border-orange-500 outline-none"
                  id="email"
                  name="email"
                  placeholder="John@example.com"
                />
              </div>
              <div>
                <div>
                  <label forname="subject">Subject</label>
                </div>

                <input
                  required
                  className="border border-gray-400  p-2 w-full rounded-2xl focus:border-orange-500 outline-none"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="How can i help you?"
                />
              </div>
              <div>
                <div>
                  <label forname="message">Message</label>
                </div>

                <textarea
                  required
                  className="border border-gray-400 p-2 w-full rounded-2xl focus:border-orange-500 outline-none"
                  placeholder="Enter your message here"
                  id="message"
                  name="message"
                ></textarea>
                <button className="text-lg bg-orange-500 cursor-pointer p-2 rounded-lg w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
