"use client";
import React from "react";
import { BsCopy } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
const copyEmail = () => {
  navigator.clipboard.writeText("jimmykhemnani23@gmail.com");
};
const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-5 font-semibold">
        <div className="border p-4 rounded-2xl h-full shadow-xl ">
          <div className="skills text-black font-bold text-xl ">
            <p>About</p>
          </div>
          <p className="mt-4">Heyy👋🏻,</p>
          <h1 className="text-3xl font-bold ">I'm Jenish</h1>
          <p className="text-2xl font-normal ">No super bio,</p>
          <p className="text-2xl ">Excited to learn new technologies!</p>
          <p className="text-2xl ">On a road to become MERN stack developer.</p>
        </div>


        <div className="border p-4 rounded-2xl shadow-xl">
          <div className="skills text-black font-bold text-xl">
            <p>Skills</p>
          </div>
          <div className="technologies flex flex-wrap justify-center mt-4 gap-3">
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              HTML&CSS
            </p>
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              JAVASCRIPT
            </p>
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              REACT .JS
            </p>
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              NEXT .JS
            </p>
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              BOOTSTRAP
            </p>
            <p className="bg-black w-auto rounded-xl p-3 :hover cursor-pointer text-white font-semibold">
              {" "}
              TAILWIND
            </p>
          </div>

          <div className="projects flex justify-evenly items-center mt-16">
          <p className="text-sm from-neutral-400">
            Note: All these technologies are self-taught🚀
          </p>
          <Link
            href="https://jimmyyy.bio.link/"
            target="_blank"
          >
            <button className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-white hover:text-black bg-black hover:bg-white">
              PROJECTS <MdOutlineArrowOutward />
            </button>
          </Link>
          </div>
        </div>


        <div className="border p-4 rounded-2xl shadow-xl">
          <div className="email flex justify-between items-center">
            <p className="text-xl font-bold">Email</p>
            <div className="statusOfWork flex items-center justify-end gap-1">
              <p className="h-3 w-3 rounded-lg bg-green-500 transition duration-300 ease-in-out hover:bg-green-700 "></p>
              <p className="text-md font-semibold">Available for work</p>
            </div>
          </div>
          <div className="email01 mt-7 flex items-center justify-start ">
            <p className="font-bold text-lg">jimmykhemnani23@gmail.com</p>
          </div>
          <div className="emailbtn mt-5 flex gap-3">
            <button
              onClick={copyEmail}
              className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-black hover:text-white bg-transparent hover:bg-black transition duration-300 ease-in-out font uppercase text-base"
            >
              Copy Email <BsCopy />
            </button>

            <Link
              href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/"
              target="_blank"
            >
              <button className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-white hover:text-black bg-black hover:bg-white transition duration-300 ease-in-out">
                GET IN TOUCH <MdOutlineArrowOutward />
              </button>
            </Link>
          </div>
        </div>
        <div className="border p-4 rounded-2xl shadow-xl">
          <div className="social flex items-center justify-evenly gap-3">
            <p className="font-bold sm:text-2xl text-base">Let's connect on Social Media</p>
            <p className="text-2xl font-semibold"></p>
            <div className="image">
              <Image
                alt="Profile Image"
                className="object-cover flex flex-wrap"
                src={"/ava.png"}
                height={100}
                width={100}
              />
            </div>
            <div className="social flex justify-center items-center">
              <Link
                href="https://www.instagram.com/jimmmyyy_23/"
                target="_blank"
              >
                <button className="border font-bold py-2 px-4 sm:rounded-md rounded-md flex items-center gap-3 text-white hover:text-black bg-black hover:bg-white transition duration-300 ease-in-out">
                  LET'S TALK
                  <MdOutlineArrowOutward className="hidden sm:inline" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
