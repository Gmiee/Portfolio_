import React from "react";
const page = () => {
  return (
    <>
    <div className="title text-4xl flex justify-center items-center mx-auto mt-10 font-black mb-11">CONTACT ME!</div>
   <div className="form flex justify-center items-center flex-col my-11 border-gray-300 border-2 p-11 rounded-lg sm:mx-auto lg:mx-80">
    <form method="POST" action="https://formspree.io/f/xayglawa">
          <label className='block text-xl'  htmlFor="txt">Enter Your Name</label>
          <input name="Name" type="text" id="txt" className="px-10 py-1 rounded-md text-black" placeholder="Name" />


          <label className='block text-xl mt-4'  htmlFor="mail">Enter Your Email</label>
          <input type="email" name="Email" id="mail" className="px-10 py-1 rounded-md text-black" placeholder="Email" />


          <label className='block text-xl mt-4'  htmlFor="txtx">Message</label>
          <textarea id="txtx" name="Message" cols="30" rows="10" placeholder="Enter your Message here" className="rounded-md text-black px-3"></textarea>


        <button type="submit" className="block justify-center bg-white text-black border-2 px-4 py-1 rounded font-bold"> Submit</button>
        </form>
   </div>
    </>
  );
};

export default page;
