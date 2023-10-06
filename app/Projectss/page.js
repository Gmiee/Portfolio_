"use client";
import React from "react";
import Header from "@/Components/Header";
import Image from "next/image";
// import Images from '../public/next.svg';

const page = () => {
  return (
    <>
      <Header />

      <h1 className="Headingz text-white flex justify-center text-3xl">
        Projects
      </h1>
      <div className="Context skills flex justify-center">
        <p></p>
      </div>

      <div className="container flex justify-center">
        <div className="card">
          <Image src={"/todo list'.png"} width={200} height={200} alt="Card Image" />
          <div className="card-content">
            <h2>Todo-List</h2>
            <p>A simple Todo list made with Next js (it do not store data).</p>
            <a href="https://todo-list-002.vercel.app/">Visit</a>
          </div>
        </div>


        <div className="card">
          <Image src={'/text.png'} width={200} height={200}  alt="Card Image" />
          <div className="card-content">
            <h2>Text-Utility Web App</h2>
            <p>Text utility is made with Next js which help to modify your text.</p>
            <a href="https://text-utilities-kappa.vercel.app/">Visit</a>
          </div>
        </div>


        <div className="card">
          <Image src={'/CALC.png'} width={200} height={200} alt="Card Image" />
          <div className="card-content">
            <h2>Calculator</h2>
            <p>A simple Calculator made with HTML , CSS & JS</p>
            <a href="https://gmiee.me/Calculator/">Visit</a>
          </div>
        </div>


        <div className="card">
          <Image src={'/pass.png'} width={200} height={200}  alt="Card Image" />
          <div className="card-content">
            <h2>Pass-Strength Checker</h2>
            <p>Password strength checker,where you can check the strength of password</p>
            <a href="https://pass-checker-zeta.vercel.app/">Visit</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
