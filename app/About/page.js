import React from "react";
import { ToastContainer,toast } from "react-toastify";
const Notify = ()=>{
  toast('Hey There!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
  let onload = Notify();
const About = () => {
 
  return (
    <>
     <ToastContainer />
      <section className="section  mt-5" id="home" />
      <div className="sec__container flex justify-center">
        <div className="content mx-20 text-5xl justify-center">
          <p className="subtitle text-2xl">HELLO</p>
          <h2 className="title text-3xl">
            I'm{" "}
            <span>
              Jenish a <br />  
            </span>
             Jr. Web-developer.
          </h2>
          <p className="description">Welcome to my website!</p>
          <div className="action__btns text-2xl mt-4 ">
            <button className="hire_me rounded-xl bg-white text-black p-2 px-3">
              <a
                href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/"
                target="_blank"
                className="AA"
              >
                {" "}
                Hire Me!
              </a>
            </button>
            <button className="portfolio ml-2 rounded-xl bg-white text-black p-2 px-3">
              <a href="https://github.com/Gmiee" target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>
        <div className="image flex justify-end  ">
          <a
            href="Jenish Khemnani.pdf"
            title="Click on image to download resume"
            download
          >
            {" "}
            {/* <img className="flex rounded-full bottom-20 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="squareME.jpg" alt="Image" /> */}
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
