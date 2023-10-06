"use client"
import React from "react";
import About from "./About/page";
import Header from "@/Components/Header";
import { ToastContainer,toast } from "react-toastify";


const page = () => {
  const notify = ()=>{
    toast('Hey There!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
     onload = notify;
    return (
    <>
    
    <ToastContainer />
      <Header />
      <About />
       
    </>
  );
};

export default page;
