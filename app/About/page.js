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
import { LiaAmericanSignLanguageInterpretingSolid } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { PiCrownSimpleFill } from "react-icons/pi";
import { SiGotomeeting } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

const techStack = [
  {
    id: 0,
    skill: "HTML",
  },
  {
    id: 1,
    skill: "CSS",
  },
  {
    id: 2,
    skill: "BOOTSTRAP",
  },
  {
    id: 3,
    skill: "TAILWIND",
  },
  {
    id: 4,
    skill: "CHAKRA UI",
  },
  {
    id: 5,
    skill: "REACT. Js",
  },
  {
    id: 6,
    skill: "NEXT. Js",
  },
  {
    id: 7,
    skill: "GIT & GITHUB",
  },
];

const showToast = () => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? "animate-enter" : "animate-leave"
        } bg-white  -2 dark: -0 dark:bg-black rounded-lg flex w-fit`}
    >
      <div className="flex-1 p-3 py-2">
        <p className="text-md font-medium text-gray-900 dark:text-white text-center">
          Welcome to Jenish's Portfolio !
        </p>
      </div>
    </div>
  ));
};

showToast();

const variants = {
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
};
const BentoLayout = () => {
  // useEffect(() => {
  // }, []);

  return (
    <>
      <Toaster position="top-center" closeButton />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-4 p-5 font-semibold h-full bg-surface dark:bg-surface2 cursor-custom select-none outline-none">
        <div className="p-4 rounded-2xl h-full bg-[white] text-balck flex justify-around flex-col col-span-2 max-sm:col-span-1 dark:bg-blk dark: -0 ">
          <ThemeSwitcher />
          <div className="img flex justify-start items-start h-[70%]">
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
            <div className="abtme flex flex-col">
              <div className="statusOfWork mb-2 bg-gray9 dark:bg-[#343232] px-3 py-1 w-fit rounded-3xl flex items-center gap-3">
                <div className="greendot h-3 w-3 rounded-xl bg-[#6DD33D]"></div>
                <a href="mailto:gmieee23@gmail.com">
                  <p className="text-sm max-sm:text-xs font-semibold flex justify-start text-black dark:text-white">
                    Avialable to work
                  </p>
                </a>
              </div>
              <p className="text-3xl max-sm:text-base text-black font-bold dark:text-white">
                Jenish Khemnani
              </p>
              <div className="flex gap-1">
                <p className="text-lg flex text-gray8 font-bold dark:text-white">
                  I'm
                </p>
                <p className="text-lg flex text-[#916CE7] font-bold dark:text-white">
                  Web dev
                </p>
              </div>
              {/* <p className="text-lg text- ">Frontend Web Dev</p> */}
            </div>
          </div>
          <div className="location p-3 bg-[#E8E8E8] dark:bg-surface2 rounded-xl flex gap-5 flex-wrap">
            <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2  w-fit px-4 py-2 rounded-3xl cursor-pointer ">
              <FaLocationDot className="dark:text-[#fff] text-surface2 text-xl" />
              Ahmedabad, India
            </p>
            <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2  w-fit px-4 py-2 rounded-3xl cursor-pointer ">
              <FaGlobe className="dark:text-[#fff] text-surface2 text-xl " /> English & Hindi
            </p>
            <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2  w-fit px-4 py-2 rounded-3xl cursor-pointer ">
              <FaFlag className="dark:text-[#fff] text-surface2 text-xl " /> Web Devloper &
              Product Designer
            </p>
            <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2  w-fit px-4 py-2 rounded-3xl cursor-pointer ">
              <FaGraduationCap className="dark:text-[#fff] text-surface2 text-xl" /> Silver Oak
              University 2024
            </p>
            <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2 w-fit px-4 py-2 rounded-3xl cursor-pointer ">
              <MdWork className="dark:text-[#fff] text-surface2 text-xl" /> Rao Consultants
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl h-auto max-sm:h-fit max-lg:h-fit col-span-1 max-sm:col-span-1 max-md:h-fit bg-white dark:bg-blk dark: -0">
          <div className="skills text-gray8 font-bold text-xl">
            <p className="dark:text-white">About</p>
          </div>
          <div className="main flex flex-col items-center justify-evenly h-full max-md:text-base max-sm:text-sm">
            <p className="text-center text-gray8 dark:text-white">
              Welcome to Jenish Khemnani's portfolio!
            </p>
            <p className="text-center text-bp dark:text-white">
              Jenish is a skilled Frontend web developer specializing in
              JavaScript and React.js. Explore his projects and expertise to
              discover innovative solutions for your web development needs.
            </p>

            <i className="text-center text-gray8 dark:text-white">
              Excited to learn new things
            </i>
          </div>
        </div>

        <div className="p-5 rounded-2xl h-full bg-white flex justify-around flex-col row-span-2 max-lg:col-span-2 max-sm:col-span-1 dark:bg-blk dark: -0">
          <div className="skills text-gray8 font-bold text-xl mb-0 pb-3">
            <p className="dark:text-white">Follow Me</p>
            <p className="text-[#999999] dark:text-gray8 text-lg max-sm:text-sm flex justify-start">
              Online Presence!{" "}
            </p>
          </div>
          <div className="links flex flex-wrap justify-center gap-7 flex-col mx-3 px-1 text-md">
            <div>
              <a
                href="https://drive.google.com/file/d/1Y2ACikgWA1m3yeeHiaOz4NlSH7hk_7Pu/view?usp=sharing"
                target="_blank"
              >
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <LiaAmericanSignLanguageInterpretingSolid fontSize={"25px"} />{" "}
                  Resume
                </p>
              </a>
            </div>
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
                href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/"
                target="_blank"
              >
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <FaLinkedin /> LinkedIn
                </p>
              </a>
            </div>

            <div>
              <a href="mailto:jenishkhemnani23@outlook.com">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-3 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <IoMail /> Mail
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
              <div className="location p-3 mt-5 bg-[#E8E8E8] dark:bg-[#000] rounded-xl flex gap-5 flex-wrap w-fit max-md:w-fit max-sm:m-4 justify-center m-auto ">
                <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2 w-fit px-4 py-2 rounded-3xl cursor-pointer max-sm:text-sm ">
                  <FaLocationDot className="dark:text-[#fff] text-surface2 text-xl" />
                  <a href="mailto:jenishkhemnani23@outlook.com">
                    Hire Me for Project
                  </a>
                </p>
                <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] dark:text-[#fff] text-surface2 w-fit px-4 py-2 rounded-3xl cursor-pointer max-sm:text-sm">
                  <BsDiscord className="dark:text-[#fff] text-surface2 text-xl" />
                  <a href="https://discordapp.com/users/756809169750720552/">
                    Add me on Discord
                  </a>
                </p>
              </div>
            </div>

            {/* <div>
              <a href="https://instagram.com/jimmmyyy_23" target="_blank">
                <p className="text-bp flex items-center gap-2 bg-white shadow-sm mb-1 dark:bg-surface2 dark:text-white dark:shadow-md  px-5 py-1 rounded-xl hover:translate-x-4 transition duration-200 ease-in-out">
                  <RiInstagramFill /> Instagram
                </p>
              </a>
            </div> */}
          </div>
        </div>

        {/* Compartment 3 */}
        <div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="  rounded-2xl h-fit bg-white col-span-1 max-sm:col-span-1 max-md:col-span-2 max-lg:col-span-2 dark:bg-blk dark: -0"
        >
          <div className="latest text-gray8 font-bold text-xl pb-2 p-4">
            <p className="dark:text-white">Recent</p>
          </div>
          <div className="recent p-5 flex flex-wrap gap-3 justify-center">
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white  hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk  font-semibold  ">
              <a
                href="https://lazyychatt.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 "
              >
                LazyyChatt-(Chat App) <sup>New</sup>{" "}
                <GoArrowUpRight style={{ fontSize: "1.2rem" }} />
              </a>
            </p>
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white  hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk  font-semibold ">
              <a
                href="https://khufiya-baatein.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 "
              >
                Private chat Web-app <sup>New</sup>{" "}
                <GoArrowUpRight style={{ fontSize: "1.2rem" }} />
              </a>
            </p>
            <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk font-semibold">
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
                using python
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
        </div>
        {/* compartment 4 */}
        <div
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          variants={variants}
          animate="visible"
          transition={{ duration: 0.5 }}
          className="  rounded-2xl h-full bg-white col-span-2 max-sm:col-span-1 max-md:col-span-2 max-lg:col-span-2 dark:bg-blk dark: -0"
        >
          <div className="latest font-bold text-xl pb-2 p-4">
            <p className="dark:text-white text-gray8 ">Experience</p>
          </div>
          <div className="recent p-2 flex flex-wrap gap-3 justify-start">
            <p className=" rounded-xl w-fit text-lg p-2 dark:text-white dark:hover:bg-blk font-semibold ">
              Jr. Research Executive
            </p>
            <p className="dark:text-white p-2 ">
              Currently working as Jr. Research Executive with{" "}
              <a
                href="https://www.raoconsultants.com/"
                className="italic text-[#916CE7] dark:text-[#916CE7]"
              >
                Rao Consultants{" "}
              </a>
              where, I focused on researching potential clients to drive
              business development.
            </p>
          </div>

          <div className="flex justify-center">
            <p className="dark:text-white p-2 text-lg text-gray5 ">
              May 2024 - Present
            </p>
          </div>

          <div className="workTogether">
            <p className="m-auto flex items-center justify-center bg-gray9 dark:bg-[#343232] w-fit p-3 rounded-full ">
              <PiCrownSimpleFill className="text-4xl max-sm:text-2xl text-[#916CE7] " />
            </p>
            <p className="text-black dark:text-white text-2xl flex justify-center">
              Lets Work Together
            </p>
            <p className="text-[#999999] dark:text-gray8 text-lg max-sm:text-sm flex justify-center">
              Let's Make Magic Happen Together!{" "}
            </p>
            <div className="location p-3 mt-5 bg-[#E8E8E8] dark:bg-[#000] rounded-xl flex gap-5 flex-wrap w-fit max-md:w-fit max-sm:m-4 justify-center m-auto ">
              <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] text-[#916CE7] w-fit px-4 py-2 rounded-3xl cursor-pointer ">
                <FaLocationDot className="text-[#916CE7] text-xl" />
                <a href="mailto:jenishkhemnani23@outlook.com">
                  Mail Me
                </a>
              </p>
              <p className="flex items-center gap-1 bg-[#F8F8F8] dark:bg-[#343232] text-[#916CE7] w-fit px-4 py-2 rounded-3xl cursor-pointer ">
                <SiGotomeeting className="text-[#916CE7] text-xl" />
                <a href="https://wa.me/+919510553908/">
                  Schedule a Meeting
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Compartment 4 */}
        <div className="  p-4 rounded-2xl h-auto col-span-2 max-sm:col-span-1 bg-white flex justify-between flex-col dark:bg-blk dark: -0">
          <div className="skills text-gray8 dark:text-white font-bold text-xl pb-2">
            <p>Skills</p>
          </div>
          <div>
            <p className="dark:text-white">Technologies:</p>

            <div className="technologies flex flex-wrap justify-center mt-4 gap-3 uppercase ">
              {/* Skills content */}

              {techStack.map((item, id) => {
                return (
                  <p
                    key={id}
                    className="bg-gray-100 rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold  "
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <div className="programming my-1 ">
              <p className="dark:text-white">Programming:</p>
              <div className="flex flex-wrap justify-center mt-4 gap-3 uppercase">
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                  JAVASCRIPT
                </p>
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                  TYPESCRIPT
                </p>
                <p className="bg-gray-100 w-fit rounded-xl text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-white dark:hover:text-blk font-semibold">
                  PYTHON
                </p>
              </div>
            </div>

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
        </div>
        {/* Compartment 5 */}
        <div className="others bg-white text-bp dark:bg-blk dark:text-white col-span-2 rounded-2xl max-sm:col-span-1 p-4 h-full flex flex-col justify-between">
          <div className="skills text-gray8 dark:text-white font-bold text-xl p-3">
            <p>Blogs</p>
          </div>
          <div className="flex justify-start gap-3 p-2 mb-10 items-center ">
            <a
              href="https://jenishh.notion.site/TypeScript-main-Concepts-9fade6f18055458dbebd496759117dbc"
              target="_blank"
            >
              <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk font-semibold ">
                Typescript Tutorial
              </p>
            </a>
            <a
              href="https://discordapp.com/users/756809169750720552/"
              target="_blank"
            >
              <p className="bg-gray-100 rounded-xl w-fit text-sm p-3 hover:bg-white hover:text-black cursor-pointer text-gray-800 dark:text-white dark:bg-surface2 dark:hover:bg-blk font-semibold ">
                Lets play GTA V
              </p>
            </a>
          </div>
          <div className="others bg-white text-bp dark:bg-blk dark:text-white col-span-2 rounded-2xl max-sm:col-span-1 p-3 ">
            <div className="skills text-gray8 dark:text-white font-bold text-xl pb-2">
              <p>Other</p>
            </div>
            <Carousel />
          </div>
        </div>
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
