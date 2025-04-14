import React from "react";
import SideImage from "../../assets/premium-bg-img.jpg";

const PremiumPlan = () => {
  return (
    <div className="px-[20px] max-w-[1600px] flex gap-[50px] items-center mx-auto pb-[80px] max-mlg:pb-[40px]">
      <div className=" relative max-h-[540px] w-full max-md:max-h-[420px]">
        <img
          className=" rounded-[32px] max-h-[540px] min-h-[540px] w-full object-cover max-md:max-h-[420px] max-md:min-h-[420px]"
          src={SideImage}
          alt=""
        />
        <div className=" absolute left-0 top-0 text-center w-full h-full flex justify-center items-center flex-col p-[20px]">
          <h4 className="text-[38px] text-[#ffff] font-bold mb-[10px] max-md:text-[26px]">
            Premium Plan
          </h4>
          <p className="text-[22px] text-[#fff] font-medium max-w-[750px] leading-[normal] mx-auto max-md:text-[16px]">
            The NewTunes Premium Plan allows musicians to take their careers
            another step further than what they can already do with all the
            regular features. The premium plan includes multiple additional
            benefits: a boost in appearances, networking prioritization, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
