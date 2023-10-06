import React from "react";
import Header from "@/Components/Header";

const page = () => {
  return (
    <>
      <Header />

      <h1 className="Headingz text-white flex justify-center text-3xl">
        Chillll Zoneeee!
      </h1>
      <div className="music flex justify-center mt-10" >
        <iframe
        //   style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/0CFuMybe6s77w6QQrJjW7d?utm_source=generator"
          width="70%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default page;
