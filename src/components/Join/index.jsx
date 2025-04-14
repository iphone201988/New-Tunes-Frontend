import React from "react";
import { Link } from "react-router";

const Join = () => {
  return (
    <div className=" py-[80px] max-mlg:py-[40px] px-[20px] max-w-[1600px] mx-auto">
      <div className="bg-[#8A4DFF] w-full max-w-[760px] rounded-[32px] p-[60px] text-[#ffffff] mx-auto max-md:p-[40px] max-sm:px-[20px] max-md:max-w-full">
        <h2 className="text-[42px] font-bold text-center max-md:text-[32px] max-sm:text-[26px]">
          Join the Prelaunch Email List
        </h2>
        <p className="text-center text-[18px] mt-[20px] mb-[40px] max-md:text-[16px] max-md:mb-[20px]">
          Like what you hear? Join our prelaunch email list to stay updated on
          the app's development. Be one of the first to know when the app is
          released and be part of the NewTunes community from the very
          beginning.
        </p>
        <Link
          className="btn-sec block mx-auto text-center"
          to="https://docs.google.com/forms/d/e/1FAIpQLSdJY7yJaiIzS7mmi1IrEcc3e9DtB5SaYm2AYJOmgQUVz8e4-w/viewform"
          target="__blank"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default Join;
