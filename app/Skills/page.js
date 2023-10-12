import React from "react";
import Header from "@/Components/Header";
import Image from "next/image";

const skills = () => {
  return (
    <>
    <Header/>
      <h1 className="Headingz text-white flex justify-center text-3xl">
        Technologies I Work With
      </h1>
      <div className="Context flex justify-center">
        <p className="flex-wrap">
          I create websites using HTML, CSS, and JavaScript, making them look
          great with Bootstrap.
          <br />
          For interactive and dynamic features, I use React and Next.js. My
          skills bring your web projects to life!
        </p>
      </div>

      {/* <div className="lang" >
      <div className="items"> <p> <a href="">HTML</a> </p>  </div>
      <div className="items"> <p> <a href="">CSS</a> </p> </div>
      <div className="items"> <p> <a href="">JS</a> </p> </div>
      <div className="items"> <p> <a href="">Bootstrap</a> </p> </div>
      <div className="items"> <p> <a href="">React JS</a></p> </div>
      </div> */}


      <div className="lang">
          <div className="items">  <Image src={"/html-5.png"} height={100} width={100} alt="HTML" /> </div>
          <div className="items">  <Image src={"/css-3.png"} height={100} width={100} alt="css" /> </div>
          <div className="items">  <Image src={"/js.png"} height={100} width={100} alt="JS" /> </div>
          <div className="items">  <Image src={"/bootstrap.png"} height={100} width={100} alt="Bootstrap" /> </div>
          <div className="items">  <Image src={"/structure.png"} height={100} width={100} alt="React js" /> </div>
          <div className="items">  <Image src={"/nxt2.png"} height={100} width={100} alt="Next js" /> </div>
      </div>
    </>
  );
};

export default skills;
