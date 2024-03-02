"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaRocket } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import ThemeSwitcher from "../ThemeSwitcher";
import { Toaster, toast } from "react-hot-toast";
import Carousel from "@/Components/Carousel";
import { motion } from "framer-motion";

const showToast = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-white border-2 dark:border-0 dark:bg-black rounded-lg flex w-fit`}
    >
      <div className="flex-1 p-3 py-2">
        <p className="text-md font-medium text-gray-900 dark:text-white text-center">
          👋🏻 Hey There!
        </p>
      </div>
    </div>
  ));
};

// showToast();

const variants = {
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
};
const BentoLayout = () => {
  // useEffect(() => {
  // }, []);

  return (
    <>
      <Toaster position="top-left" closeButton />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-4 p-5 font-semibold h-full bg-surface dark:bg-surface2 ">
        <motion.div
          // animate={{ x: 0, opacity: 1, scale: 1 }}
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="border p-4 rounded-2xl h-full bg-white text-bp flex justify-around flex-col col-span-2 max-sm:col-span-1 dark:bg-blk dark:border-0 "
        >
          <ThemeSwitcher />
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
            <p className="text-3xl text-bp font-bold dark:text-white">
              Jenish Khemnani
            </p>
            <p className="uppercase text-xl text-gray8 ">web dev</p>
          </div>
          <div className="statusOfWork flex items-center justify-center mt-2 gap-3 bg-green-100 hover:bg-avail px-5 py-2 w-fit m-auto rounded-full">
            <p className="h-3 w-3 rounded-lg bg-avail hover:none transition duration-300 ease-in-out "></p>
            <a href="mailto:gmieee23@gmail.com">
              <p className="text-md font-semibold text-avail transition duration-300 ease-in hover:text-white hover:-translate-x-3">
                Available
              </p>
            </a>
          </div>
        </motion.div>

        <motion.div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="border p-4 rounded-2xl h-auto max-sm:h-fit max-lg:h-fit col-span-1 max-sm:col-span-1 max-md:h-fit bg-white dark:bg-blk dark:border-0"
        >
          <div className="skills text-gray8 font-bold text-xl ">
            <p className="dark:text-white">Goals</p>
          </div>
          <div className="main flex flex-col items-center justify-evenly h-full max-md:text-base max-sm:text-sm">
            <p className="text-center text-gray8 dark:text-white">
              Passionate Student and Developer,
            </p>
            <p className="text-center text-bp dark:text-white">
              On a road to become MERN Stack Dev by the end of 2024!
            </p>
            <p className="text-center text-gray8 dark:text-white">
              Excited to learn new things.
            </p>
          </div>
        </motion.div>

        <motion.div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="border p-3 rounded-2xl h-auto bg-white flex justify-around flex-col row-span-2 max-lg:col-span-2 max-sm:col-span-1 dark:bg-blk dark:border-0"
        >
          <div className="skills text-gray8 font-bold text-xl mb-0 pb-3">
            <p className="dark:text-white">Quick Links</p>
          </div>
          <div className="links flex flex-wrap justify-center gap-7 flex-col mx-3 px-1 text-md">
            <div>
              <a href="https://github.com/Gmiee" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaGithub /> Github
                </p>
              </a>
            </div>
            <div>
              <a href="https://jimmyyy.bio.link/" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                <FaRocket /> Projects
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://x.com/Gmieee23?t=wEPgroCDMZYiEREo4nDq2Q&s=09"
                target="_blank"
              >
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaXTwitter /> Twitter
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:gmieee23@gmail.com">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <IoMail /> Mail
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/"
                target="_blank"
              >
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaLinkedin /> LinkedIn
                </p>
              </a>
            </div>
            {/* <div>
              <a href="https://instagram.com/jimmmyyy_23" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <RiInstagramFill /> Instagram
                </p>
              </a>
            </div> */}
          </div>
        </motion.div>

        {/* Compartment 3 */}
        <motion.div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="border rounded-2xl h-fit bg-white col-span-3 max-sm:col-span-1 max-md:col-span-2 max-lg:col-span-2 dark:bg-blk dark:border-0"
        >
          <div className="latest text-gray8 font-bold text-xl pb-2 p-4">
            <p className="dark:text-white">Recent</p>
          </div>
          <div className="recent p-5 flex flex-wrap gap-3 justify-center">
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white  hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk  font-semibold ">
              <a
                href="https://github.com/Gmiee/Socket.io"
                target="_blank"
                className="flex items-center gap-2 "
              >
                <FaGithub style={{ fontSize: "1rem" }} /> Private chat Web-app
                <sup>New</sup>
              </a>
            </p>
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk   font-semibold">
              <a
                href="https://github.com/Gmiee/Automated-msg-in-whatsapp"
                target="_blank"
                className="flex items-center gap-2 "
              >
                <FaGithub style={{ fontSize: "1rem" }} />
                Automating WhatsApp Web Messages with Python<sup>New</sup>
              </a>
            </p>
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk   font-semibold ">
              <a
                href="https://github.com/Gmiee/RollDice-game-with-python"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub style={{ fontSize: "1rem" }} /> Roll the dice game
                using python <sup>New</sup>
              </a>
            </p>

            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk   font-semibold ">
              <a
                href="https://annapurnaa.in/"
                target="_blank"
                className="flex items-center gap-2"
              >
                ANNAPURNAA <GoArrowUpRight style={{ fontSize: "1.2rem" }} />
              </a>
            </p>
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk  font-semibold ">
              <a
                href="https://text-utilities-kappa.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 capitalize"
              >
                Text-utility web app using React
                <GoArrowUpRight style={{ fontSize: "1.2rem" }} />
              </a>
            </p>
          </div>
          <a
            href="https://jimmyyy.bio.link/"
            target="_blank"
            className="flex justify-end pb-3 pr-4 dark:text-white"
          >
            <CiCircleMore style={{ fontSize: "1.3rem" }} />
          </a>
        </motion.div>

        {/* Compartment 4 */}
        <motion.div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="border p-4 rounded-2xl h-auto col-span-2 max-sm:col-span-1 bg-white flex justify-between flex-col dark:bg-blk dark:border-0"
        >
          <div className="skills text-gray8 dark:text-white font-bold text-xl pb-2">
            <p>Skills</p>
          </div>
          <div>
            <p className="dark:text-white">Technologies:</p>

            <div className="technologies flex flex-wrap justify-center mt-4 gap-3 uppercase ">
              {/* Skills content */}
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold  ">
                HTML & CSS
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                TAILWIND
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                BOOTSTRAP
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                chakra ui
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                REACT JS
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                NEXT JS
              </p>
              {/* <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
               EXPRESS JS
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
               PHP
              </p>
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
               MY SQL
              </p> 
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold">
               NODE JS
              </p> */}
              <p className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                GIT & GITHUB
              </p>
            </div>

            {/* <div className="MERN my-1 ">
              <p>MERN Stack:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 ">
               
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold capitalize">
                    MongoDB{" "}
                  </p>
                
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold capitalize">
                    ExpressJs
                  </p>

                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold capitalize">
                  ReactJs
                  </p>

                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 font-semibold capitalize">
                    NodeJs
                  </p>
              </div>
            </div> */}

            <motion.div
              // whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              variants={variants}
              animate="visible"
              transition={{ duration: 0.5 }}
              className="programming my-1 "
            >
              <p className="dark:text-white">Programming:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 uppercase">
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                  JAVASCRIPT
                </p>
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                  PYTHON
                </p>
              </div>
            </motion.div>

            <div className="certificate my-1 ">
              <p className="dark:text-white">Certification:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 ">
                <a
                  href="https://www.freecodecamp.org/certification/fcc2d3a035f-5353-49b6-867d-8f3d03bbc619/responsive-web-design"
                  target="_blank"
                >
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold capitalize">
                    Responsive-web-design from Free Code Camp{" "}
                  </p>
                </a>

                <a href="https://www.hackerrank.com/certificates/c13919c7f36b">
                  <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold capitalize">
                    CSS certificate from Hacker Rank
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="projects flex justify-evenly items-center my-2">
            {/* Projects section */}
            <p className=" text-gray5 text-md dark:text-white">
              Note: All of these are self-taught.🚀
            </p>
          </div>
        </motion.div>

        <motion.div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="others bg-white text-bp dark:bg-blk dark:text-white col-span-2 rounded-2xl max-sm:col-span-1 p-3 h-fit"
        >
          <div className="skills text-gray8 dark:text-white font-bold text-xl pb-2">
            <p>Other</p>
          </div>

          <Carousel />
        </motion.div>
      </div>
      <div className="credits flex justify-center items-center bg-surface font-bold pb-3 dark:bg-surface2 dark:text-white">
        <p>
          UI by{" "}
          <a
            className="underline"
            href="https://vikasassudani.in/"
            target="_blank"
          >
            Vikas Assudani{" "}
          </a>
          👨‍💻
        </p>
      </div>
    </>
  );
};

export default BentoLayout;
