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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5 ">
        <div className="border p-4 rounded-2xl h-full">
          <p className=" ">Heyy,</p>
          <h1 className="text-3xl font-bold ">I'm Jenish</h1>
          <p className="text-2xl font-normal ">No super bio,</p>
          <p className="text-2xl ">Excited to learn new technologies!</p>
          <p className="text-2xl ">On a road to become MERN stack developer.</p>
        </div>
        <div className="border p-4 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
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
          <p className="text-sm from-neutral-400 flex items-center justify-start mt-16">
            Note: All these technologies are self learned.😊
          </p>
        </div>

        <div className="border p-4 rounded-2xl">
          <div className="email flex justify-between items-center">
            <p className="text-xl font-bold">Email</p>
            <div className="statusOfWork flex items-center justify-end gap-2">
              <p className="h-3 w-3 rounded-lg bg-green-500 "></p>
              <p className="text-md font-semibold">Available for work</p>
            </div>
          </div>
          <div className="email01 mt-7 flex items-center justify-start ">
            <p className="font-bold text-lg">jimmykhemnani23@gmail.com</p>
            
          </div>
          <div className="emailbtn mt-5 flex gap-3">
            <button
              onClick={copyEmail}
              className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-black hover:text-white bg-transparent hover:bg-black"
            >
              Copy Email <BsCopy />
            </button>

            <Link href="https://www.linkedin.com/in/jenish-khemnani-b2ab31233/">
              <button className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-white hover:text-black bg-black hover:bg-white">
                GET IN TOUCH <MdOutlineArrowOutward />
              </button>
            </Link>
          </div>
        </div>
        <div className="border p-4 rounded-2xl">
          <div className="social flex flex-col justify-right">
            <p className="font-bold text-2xl">Let's connect </p>
            <p className="text-base font-semibold">on Social Media</p>
            <div className="image">
            <Image
              alt="Profile Image"
              className="object-cover flex flex-wrap"
              src={"/ava.png"}
              height={100}
              width={100}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
