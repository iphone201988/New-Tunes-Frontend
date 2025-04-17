import React from "react";
import LogoIcon from "../../assets/logo.png";

const Features = () => {
  return (
    <div className="px-[20px] max-w-[1600px] mx-auto py-[80px] max-mlg:py-[40px] ">
      <h2 className="text-grad text-[48px] font-bold max-lg:text-[36px] max-sm:text-[26px]">
        NewTunes Features
      </h2>
      <div className="flex flex-wrap justify-center gap-[25px] mt-[40px] max-lg:mt-[30px]">
        <div className="feature-box">
          <div className="px-[20px] py-[40px] flex justify-center items-center flex-col max-lg:py-[20px]">
            <img className="w-[120px]" src={LogoIcon} alt="" />
            <h3 className="text-[38px] text-[#8A4DFF] font-bold text-center mt-[20px] mb-[10px] max-lg:text-[26px]">
              Discover
            </h3>
            <p className="text-[24px] text-[#000] font-medium text-center leading-[normal] max-lg:text-[18px]">
              Discover new music from <br /> upcoming artists
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="px-[20px] py-[40px] flex justify-center items-center flex-col max-lg:py-[20px]">
            <img className="w-[120px]" src={LogoIcon} alt="" />
            <h3 className="text-[38px] text-[#8A4DFF] font-bold text-center mt-[20px] mb-[10px] max-lg:text-[26px]">
              Collaborate
            </h3>
            <p className="text-[24px] text-[#000] font-medium text-center leading-[normal] max-lg:text-[18px]">
              Collaborate with fellow musicians <br /> and others in the music
              industry
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="px-[20px] py-[40px] flex justify-center items-center flex-col max-lg:py-[20px]">
            <img className="w-[120px]" src={LogoIcon} alt="" />
            <h3 className="text-[38px] text-[#8A4DFF] font-bold text-center mt-[20px] mb-[10px] max-lg:text-[26px]">
              Promote
            </h3>
            <p className="text-[24px] text-[#000] font-medium text-center leading-[normal] max-lg:text-[18px]">
              Promote your work to potential fans <br /> and others in the music
              industry
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="px-[20px] py-[40px] flex justify-center items-center flex-col max-lg:py-[20px]">
            <img className="w-[120px]" src={LogoIcon} alt="" />
            <h3 className="text-[38px] text-[#8A4DFF] font-bold text-center mt-[20px] mb-[10px] max-lg:text-[26px]">
              Network
            </h3>
            <p className="text-[24px] text-[#000] font-medium text-center leading-[normal] max-lg:text-[18px]">
              Reach out and stay in touch with <br /> fans and colleagues
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="px-[20px] py-[40px] flex justify-center items-center flex-col max-lg:py-[20px]">
            <img className="w-[120px]" src={LogoIcon} alt="" />
            <h3 className="text-[38px] text-[#8A4DFF] font-bold text-center mt-[20px] mb-[10px] max-lg:text-[26px]">
              Simplify
            </h3>
            <p className="text-[24px] text-[#000] font-medium text-center leading-[normal] max-lg:text-[18px]">
              Simplify the process of expanding your music career with our many
              additional resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
