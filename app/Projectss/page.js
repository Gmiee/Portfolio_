"use client";
import React from "react";
import Header from "@/Components/Header";
import Image from "next/image";
const page = () => {
  return (
    <>
     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 to-blue-600">
      <div className="max-w-sm w-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Glass Card</h2>
        <p className="text-white opacity-80">
          This is a simple glassmorphism card example using Tailwind CSS.
        </p>
        <div className="mt-4">
          <button className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-md">
            Click Me
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default page;
