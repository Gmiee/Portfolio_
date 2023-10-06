import React from "react";
import Header from "@/Components/Header";
const page = () => {
  return (
    <>
      <Header />
      <h1 className='Headingz text-white flex justify-center text-3xl'>Contact</h1>
      <div className="form flex justify-center mt-7">
        <form method="POST" action="https://formspree.io/f/xayglawa">
          <label className='block text-xl'  htmlFor="txt">Enter Your Name</label>
          <input name="Name" type="text" id="txt" className="px-10 py-1 rounded-md text-black" placeholder="Name" />


          <label className='block text-xl mt-4'  htmlFor="mail">Enter Your Email</label>
          <input type="email" name="Email" id="mail" className="px-10 py-1 rounded-md text-black" placeholder="Email" />


          <label className='block text-xl mt-4'  htmlFor="txtx">Message</label>
          <textarea id="txtx" name="Message" cols="30" rows="10" placeholder="Enter your Message here" className="rounded-md text-black px-3"></textarea>


        <button type="submit" className="block justify-center bg-white text-black px-1 rounded font-bold"> Submit</button>
        </form>
      </div>
    </>
  );
};

export default page;
