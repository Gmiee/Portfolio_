"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4 ">
        <div className="bg-gray-200 p-4 rounded-2xl">
          <p>Heyy,</p>
          <h1 className="text-3xl font-bold">I'm Jenish</h1>
          <p className="text-2xl font-normal">No super bio,</p>
          <p className="text-2xl">Excited to learn new technologies!</p>
          <p className="text-2xl">On a road to become MERN stack developer.</p>
          <div className="statusOfWork flex items-center gap-2">
            <p className="h-3 w-3 rounded-lg bg-green-500 "></p>
            <p className="text-md font-semibold">Available for work</p>
          </div>
        </div>
        <div className="bg-gray-300 p-4 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="skills text-blue-600 font-bold text-xl">
          <p>Skills</p>
        </div>
        <div className="technologies flex flex-wrap justify-center mt-4 gap-3">
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> HTML&CSS</p>
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> JAVASCRIPT</p>
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> REACT .JS</p>
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> NEXT .JS</p>
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> BOOTSTRAP</p>
          <p className="bg-slate-300 w-auto rounded-xl p-3 text-white font-semibold"> TAILWIND</p>
        </div>
        </div>

        
        <div className="bg-gray-400 p-4 rounded-2xl">Content 3</div>
        <div className="bg-gray-500 p-4 rounded-2xl">Content 4</div>
      </div>
    </>
  );
};

export default page;
