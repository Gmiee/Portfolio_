"use client";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

const Page = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-surface dark:bg-surface2 select-none outline-none">
        {/* Background Video */}
        <video
          src="https://server-onu2.onrender.com/video/videoBG"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        />

        {/* Scrollable Content */}
        <div className="relative z-10 h-full p-5">
          <div className="p-5 rounded-2xl bg-[transparent] text-black flex flex-col gap-10 dark:bg-[transparent]">
            <ThemeSwitcher />

            {/* Horizontal Scrolling Section */}
            <div className="img flex flex-col items-center text-4xl dark:text-[#fff] py-5">
              <div className="flex gap-5 overflow-x-scroll scrollbar-hide max-sm:overflow-y-scroll max-md:overflow-y-scroll ">
                <video
                  src="https://server-onu2.onrender.com/video/"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/one"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/Christmas"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/two"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/five"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/three"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/video1"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
                <video
                  src="https://server-onu2.onrender.com/video/002"
                  className="aspect-[9/16] rounded-md w-[300px] flex-shrink-0"
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
