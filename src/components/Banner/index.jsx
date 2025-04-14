import React from "react";
const Banner = () => {
  return (
    <div className="banner h-[80vh] relative max-lg:h-[50vh] max-sm:h-[40vh]">
      <div className="px-[20px] max-w-[1600px] mx-auto h-full flex justify-center items-center isolate">
        <h1 className="flex flex-col items-center text-center uppercase">
          <span className="text-[2.4rem] font-bold bg-[#8A4DFF] px-[6px] py-[2px] rounded-[4px] text-[#FFFFFF] max-md:text-[2rem] max-sm:text-[1.2rem]">
            Enabling more efficient
          </span>
          <span className="text-[2.6rem] font-bold bg-[#5B1782] px-[6px] py-[2px] rounded-[4px] my-[2px] text-[#FFFFFF] max-md:text-[2.2rem] max-sm:text-[1.2rem]">
            promotion and networking
          </span>
          <span className="text-[3rem] font-bold bg-[#53A4D6] px-[6px] py-[2px] rounded-[4px] text-[#FFFFFF] max-md:text-[2.4rem] max-sm:text-[1.2rem]">
            for musicians
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
