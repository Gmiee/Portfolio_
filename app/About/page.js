"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";


const BentoLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-5 font-semibold h-screen bg-surface">
      <div className="border p-4 rounded-2xl h-[369px] bg-white flex justify-around flex-col">
        <div className="img flex justify-center items-center h-[70%] flex-col">
          <div className="bg h-auto w-fit bg-bp flex  rounded-full p-0">
            <Image className="" src="/hey.png" width={120} height={120} />
          </div>
          <p className="text-3xl text-bp font-bold">Khemnani Jenish</p>
          <p className="uppercase text-xl text-gray8">React js Dev</p>
        </div>
        <div className="statusOfWork flex items-center justify-center mt-0 gap-3 bg-green-100 px-5 py-3 w-fit m-auto rounded-full">
          <p className="h-3 w-3 rounded-lg bg-avail transition duration-300 ease-in-out "></p>
          <a href="mailto:gmieee23@gmail.com">
          <p className="text-md font-semibold text-avail">
            Looking For Opportunity
          </p>
          </a>
        </div>
      </div>

      {/* Compartment 2 */}
      <div className="border p-4 rounded-2xl h-[369px] bg-white flex justify-between flex-col">
        <div className="skills text-gray8 font-bold text-3xl">
          <p>Skills</p>
        </div>
        <div className="technologies flex flex-wrap justify-center mt-4 gap-3 uppercase">
          {/* Skills content */}
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            HTML&CSS
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            JAVASCRIPT
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            Node js
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            REACT JS
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            NEXT JS
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            TAILWIND
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            BOOTSTRAP
          </p>
        </div>

        <div className="projects flex justify-evenly items-center mt-16">
          {/* Projects section */}
          <p className=" text-gray5 text-md">
            Note: All these technologies are self-taught🚀
          </p>
        </div>
      </div>

      {/* Compartment 3 */}
      <div className="border p-3 rounded-2xl h-[369px] bg-white flex justify-around flex-col">
        <div className="skills text-gray8 font-bold text-3xl mb-0">
          <p>Quick Links</p>
        </div>
        <div className="links flex flex-wrap justify-center gap-5 flex-col mx-3 px-1 text-md">
          <div>
            <a href="https://jimmyyy.bio.link/">
              <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl ">
              <BsFillPinAngleFill /> Projects
              </p>
            </a>
          </div>
          <div>
            <a href="mailto:gmieee23@gmail.com">
              <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl">
              <IoMail /> Mail
              </p>
            </a>
          </div>

          <div>
            <a href="https://github.com/Gmiee" target="_blank">
            <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl">
            <FaGithub /> Github
            </p>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/" target="_blank">
            <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl">
            <FaLinkedin /> LinkedIn
            </p>
            </a>
          </div>
          <div>
            <a href="https://instagram.com/jimmmyyy_23" target="_blank">
            <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl">
            <RiInstagramFill />  Instagram
            </p>
            </a>
          </div>
        </div>
      </div>

      {/* Compartment 4 */}
      <div className="border p-4 rounded-2xl col-span-1 max-sm:col-span-1 bg-white">
        <div className="main my-1 flex flex-col items-center justify-evenly h-full">
          <p className="text-center text-gray8">
            Passionate Student and Developer,
          </p>
          <p className="text-center text-bp">
            On a road to become a MERN STACK Dev!
          </p>
          <p className="text-center text-gray8">Excited to learn new things.</p>
        </div>
      </div>

      <div className="border rounded-2xl bg-white">
        <div className="spotify">
        <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/artist/203J4D1ULDOphC8VgLC3Iy?utm_source=generator&theme=0" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
