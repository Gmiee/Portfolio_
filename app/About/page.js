import React from "react";
import { BsCopy } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const copyEmail = () => {
  navigator.clipboard.writeText("jimmykhemnani23@gmail.com");
};

const BentoLayout = () => {
  return (
    

    
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 p-5 font-semibold h-full bg-surface">
      
      <div className="border p-4 rounded-2xl h-[369px] bg-white ">
      
        <div className="img flex justify-center items-center h-[70%] flex-col">
          <div className="bg h-auto w-auto bg-bp rounded-full">
        <Image className="" src="/hey.png" width={110} height={110} />
          </div>
          <p className="text-3xl text-bp font-bold">Khemnani Jenish</p>
          <p className="uppercase text-xl text-gray8">React js Dev</p>
        </div>
        <div className="statusOfWork flex items-center justify-center mt-0 gap-1 bg-green-100 p-3 w-fit m-auto rounded-full">
            <p className="h-3 w-3 rounded-lg bg-avail transition duration-300 ease-in-out "></p>
            <p className="text-md font-semibold text-avail">Available for Opportunity</p>
          </div>
      </div>

      {/* Compartment 2 */}
      <div className="border p-4 rounded-2xl h-[369px] bg-white">
        <div className="skills text-black font-bold text-xl">
          <p>Skills</p>
        </div>
        <div className="technologies flex flex-wrap justify-center mt-4 gap-3">
          {/* Skills content */}
          <p className="bg-black w-auto rounded-xl p-3 hover:bg-white hover:text-black cursor-pointer text-white font-semibold">
            HTML&CSS
          </p>
          
        </div>
        <div className="projects flex justify-evenly items-center mt-16">
          {/* Projects section */}
          <p className="text-sm from-neutral-400">
            Note: All these technologies are self-taught🚀
          </p>
          <Link href="https://jimmyyy.bio.link/" target="_blank">
            <button className="border font-bold py-2 px-4 rounded-md flex items-center gap-3 text-white hover:text-black bg-black hover:bg-white">
              PROJECTS <MdOutlineArrowOutward />
            </button>
          </Link>
        </div>
      </div>

      {/* Compartment 3 */}
      <div className="border p-4 rounded-2xl h-[369px] bg-white">
        <div className="email flex justify-between items-center">
          <p className="text-xl font-bold">Email</p>
          
        </div>
        <div className="email01 mt-7 flex items-center justify-start">
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

      {/* Compartment 4 */}
      <div className="border p-4 rounded-2xl col-span-2 max-sm:col-span-1 h-[369px] bg-white">
        <div className="social flex items-center justify-evenly gap-3">
          <p className="font-bold sm:text-2xl text-base">
            Let's connect on Social Media
          </p>
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
      <div className="border p-4 rounded-2xl h-[369px] bg-white">
        <div className="social flex items-center justify-evenly gap-3">
          <p className="font-bold sm:text-2xl text-base">
            Let's connect on Social Media
          </p>
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
  );
};

export default BentoLayout;
