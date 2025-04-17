import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="banner h-[80vh] relative max-lg:h-[50vh] max-sm:h-[40vh]">
      <div className="px-[20px] max-w-[1600px] mx-auto h-full flex justify-center items-center isolate flex-col gap-[30px]">
        <h1 className="flex flex-col items-center text-center uppercase tracking-[2px]">
          <span className="text-[2rem] font-medium  text-[#000] max-md:text-[2rem] max-sm:text-[1.2rem]">
            Enabling more efficient
          </span>
          <span className="text-[2.6rem] font-extrabold my-[2px] text-[#000] max-md:text-[2.2rem] max-sm:text-[1.2rem]">
            promotion <span className="text-[#8A4DFF]  font-medium">and</span> networking
          </span>
          <span className="text-[3rem]   font-medium   max-md:text-[2.4rem] max-sm:text-[1.2rem]">
            for <span className="text-grad font-extrabold ">musicians</span>
          </span>
        </h1>
        <Link
          className="btn-pri block mx-auto text-center max-md:!max-w-[120px]"
          to="https://docs.google.com/forms/d/e/1FAIpQLSdJY7yJaiIzS7mmi1IrEcc3e9DtB5SaYm2AYJOmgQUVz8e4-w/viewform"
          target="__blank"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
