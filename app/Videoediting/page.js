"use client";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-5 font-semibold bg-surface dark:bg-surface2 select-none outline-none">
        <div className="p-4 rounded-2xl bg-[white] text-black flex justify-around flex-col h-full lg:h-screen col-span-4 max-sm:col-span-1 dark:bg-blk">
          <ThemeSwitcher />
          <div className="img flex justify-center underline items-start text-4xl dark:text-[#fff] py-5">
            About Me!
          </div>
          <div className="flex flex-wrap gap-5  justify-center">
            <video
              src="/videos/002.mp4"
              className="aspect-[9/16] rounded-md w-full sm:w-[30%] lg:w-[20%]"
              controls
              autoPlay
              muted
              style={{ backgroundColor: 'transparent' }}
            />
            <video
              src="/videos/002.mp4"
              className="aspect-[9/16] rounded-md l sm:w-[20%] lg:w-[20%]"
              controls
              autoPlay
              muted
              style={{ backgroundColor: 'transparent' }}
            />
            <video
              src="/videos/002.mp4"
              className="aspect-[9/16] rounded-md w-full sm:w-[48%] lg:w-[20%]"
              controls
              autoPlay
              muted
              style={{ backgroundColor: 'transparent' }}
            />
            <video
              src="/videos/002.mp4"
              className="aspect-[9/16] rounded-md w-full sm:w-[48%] lg:w-[20%]"
              controls
              autoPlay
              muted
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default page;