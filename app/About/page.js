"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Toaster, toast } from "react-hot-toast";

const showToast = () => {
  toast("Hey There!", {
    style: {
      border: "1px solid #f6f6f7",
      padding: "5px",
    },
    icon: '👋',
    
  });
};

const BentoLayout = () => {
  useEffect(() => {
    showToast();
  }, []);

  return (
    <>
      <Toaster position="top-right" closeButton />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-5 font-semibold h-full bg-surface">
        <div className="border p-4 rounded-2xl h-max bg-white flex justify-around flex-col col-span-2 max-sm:col-span-1">
          <div className="img flex justify-center items-center h-[70%] flex-col">
            {/* <div className="bg h-auto w-fit bg-bp flex rounded-full p-0"> */}
              <Image
                className=""
                src="/hey.png"
                width={120}
                height={120}
                alt="avatar"
                priority={false}
              />
            {/* </div> */}
            <p className="text-3xl text-bp font-bold">Jenish Khemnani</p>
            <p className="uppercase text-xl text-gray8">web dev</p>
          </div>
          <div className="statusOfWork flex items-center justify-center mt-0 gap-3 bg-green-100 hover:bg-avail px-5 py-2 w-fit m-auto rounded-full">
            <p className="h-3 w-3 rounded-lg bg-avail hover:none transition duration-300 ease-in-out "></p>
            <a href="mailto:gmieee23@gmail.com">
              <p className="text-md font-semibold text-avail transition duration-300 ease-in hover:text-white hover:-translate-x-3">Available</p>
            </a>
          </div>
        </div>

        {/* Compartment 2 */}
        {/* <div className="border p-4 rounded-2xl h-[369px] bg-white flex justify-between flex-col">
        <div className="skills text-gray8 font-bold text-3xl">
          <p>Skills</p>
        </div>
        <div className="technologies flex flex-wrap justify-center mt-4 gap-3 uppercase">
          
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            HTML&CSS
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            JAVASCRIPT
          </p>
          <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
            GITHUB
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

        <div className="projects flex justify-evenly items-center ">
          
          <p className=" text-gray5 text-md">
            Note: All these technologies are self-taught🚀
          </p>
        </div>
      </div> */}

        <div className="border p-4 rounded-2xl h-auto max-sm:h-fit max-lg:h-full col-span-1 max-sm:col-span-1 bg-white">
          <div className="skills text-gray8 font-bold text-3xl">
            <p>Goals</p>
          </div>
          <div className="main flex flex-col items-center justify-evenly h-full max-md:text-base max-sm:text-sm">
            <p className="text-center text-gray8">
              Passionate Student and Developer,
            </p>
            <p className="text-center text-bp">
              On a road to become MERN Stack Dev!
            </p>
            <p className="text-center text-gray8">
              Excited to learn new things.
            </p>
          </div>
        </div>

        {/* Compartment 3 */}
        <div className="border p-3 rounded-2xl h-auto bg-white flex justify-around flex-col">
          <div className="skills text-gray8 font-bold text-3xl mb-0 pb-3">
            <p>Quick Links</p>
          </div>
          <div className="links flex flex-wrap justify-center gap-5 flex-col mx-3 px-1 text-md">
            <div>
              <a href="https://github.com/Gmiee" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaGithub /> Github
                </p>
              </a>
            </div>
            <div>
              <a href="https://jimmyyy.bio.link/" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <BsFillPinAngleFill /> Projects
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:gmieee23@gmail.com">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <IoMail /> Mail
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/"
                target="_blank"
              >
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaLinkedin /> LinkedIn
                </p>
              </a>
            </div>
            <div>
              <a href="https://instagram.com/jimmmyyy_23" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <RiInstagramFill /> Instagram
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Compartment 4 */}
        <div className="border p-4 rounded-2xl h-auto col-span-2 max-sm:col-span-1 bg-white flex justify-between flex-col">
          <div className="skills text-gray8 font-bold text-3xl pb-2">
            <p>Skills</p>
          </div>
          <div>
            <p>Technologies:</p>

            <div className="technologies flex flex-wrap justify-center mt-4 gap-3 uppercase">
              {/* Skills content */}
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold ">
                HTML & CSS
                
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                TAILWIND
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                BOOTSTRAP
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                chakra ui
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                REACT JS
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                NEXT JS
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                GITHUB
              </p>
            </div>
            <div className="programming my-1 ">
              <p className="">Programming:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 uppercase">
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                  JAVASCRIPT
                </p>
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                  PYTHON
                </p>
              </div>
            </div>
            <div className="certificate my-1 ">
              <p>Certification:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 ">
                <a
                  href="https://www.freecodecamp.org/certification/fcc2d3a035f-5353-49b6-867d-8f3d03bbc619/responsive-web-design"
                  target="_blank"
                >
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                    Responsive-web-design from Free Code Camp{" "}
                  </p>
                </a>

                <a href="https://www.hackerrank.com/certificates/c13919c7f36b">
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
                    CSS certificate from Hacker Rank
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="projects flex justify-evenly items-center my-2">
            {/* Projects section */}
            <p className=" text-gray5 text-md">
              Note: All of these are self-taught.🚀
            </p>
          </div>
        </div>

        {/* <div className="border rounded-2xl h-fit bg-white col-span-3 max-sm:col-span-1 max-md:col-span-1 max-lg:col-span-1">
          <div className="spotify">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/203J4D1ULDOphC8VgLC3Iy?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div> */}
      </div>
      <div className="credits flex justify-center items-center bg-surface font-bold pb-3">
        <p>
          UI by{" "}
          <a
            className="underline"
            href="https://vikasassudani.in/"
            target="_blank"
          >
            Vikas Assudani
          </a>
          
        </p>
      </div>
    </>
  );
};

export default BentoLayout;
