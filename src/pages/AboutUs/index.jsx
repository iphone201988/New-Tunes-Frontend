import React from "react";
import AboutUsImg from "../../assets/about-us.jpg";
import Img1 from "../../assets/img-1.jpg";
import Img2 from "../../assets/img-2.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="banner-sec h-[28vh] relative">
        <div className="px-[20px] max-w-[1600px] mx-auto h-full flex justify-center items-center isolate">
          <h2 className="text-[46px] font-bold flex flex-col items-center text-center uppercase max-md:text-[36px]">
            About Us
          </h2>
        </div>
      </section>

      <section className="py-[80px] max-mlg:py-[40px]">
        <div className="px-[20px] max-w-[1600px] mx-auto">
          <div className="flex items-center justify-center max-lg:flex-col-reverse max-lg:gap-[20px]">
            <div className="w-[40%] bg-[#8A4DFF] text-[#FFF] p-[40px] mr-[-80px] z-10 rounded-[16px] max-lg:w-[100%] max-lg:py-[20px] max-lg:mr-0 ">
              <h3 className="text-[36px] font-bold mb-[12px] max-lg:text-[26px]">
                About NewTunes
              </h3>
              <p>
                NewTunes is an dating app-style social media platform with
                WhatsApp-style messaging for musicians/artists to have more
                freedom on an app to create a personal brand and more easily
                display their music and talent to potential fans worldwide as
                well as to local and non-local artists.
              </p>
              <ul className=" list-[circle] flex flex-col gap-[12px] mt-[12px] ">
                <li>
                  Gives musicians the opportunity to expose their content more
                  directly to others in the industry as well as to the right
                  audience
                </li>
                <li>
                  Listeners will be incentivized to listen to music with money
                </li>
                <li>
                  NewTunes is currently in the R&D/pre-startup stage of
                  development
                </li>
              </ul>
            </div>
            <div className="w-[50%] max-lg:w-[100%]">
              <img className="rounded-[16px]" src={AboutUsImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] max-mlg:py-[40px] bg-[#F9F0FF]">
        <div className="px-[20px] max-w-[1600px] mx-auto">
          <h3 className="text-grad text-[36px] font-bold mb-[12px] text-center max-md:text-[26px]">
            About the Founders
          </h3>
          <div className="flex items-center justify-center gap-[40px] mt-[40px] max-lg:mt-[30px] max-lg:flex-col max-lg:gap-[20px]">
            <div className="w-[20%] max-lg:w-[100%]">
              <img className=" rounded-[16px]" src={Img1} alt="" />
            </div>
            <div className="w-[50%] max-lg:w-[100%]">
              <h4 className="text-[28px] text-[#8A4DFF] font-bold">
                Eric Davtyan
              </h4>
              <p>
                Eric is a Senior at he University of Utah David Eccles School of
                Business studying Finance, Entrepreneurship, and Accounting. He
                was also inspired to start his own business due to working in
                poor work environments. Management was always giving him a hard
                time and making him hate the job. Even though he stuck out these
                jobs, he told himself that he didn’t want to be in those kinds
                of environments ever again and that he wanted to work for
                himself so he could be his own boss and not have anyone
                disrespect him just because they are his superior in terms of
                their position in the office. Before launching this venture, he
                gained experience in the world of music promotion by helping
                some of his friends, who are musicians, run their social media
                pages and their marketing campaigns on these platforms.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[40px] mt-[40px] max-lg:mt-[30px]  max-lg:flex-col-reverse max-lg:gap-[20px]">
            <div className="w-[50%] max-lg:w-[100%]">
              <h4 className="text-[28px] text-[#8A4DFF] font-bold">
                Collin Rentz
              </h4>
              <p>
                Collin is an IOS developer who graduated from Devmountain in
                January 2023 and has worked on multiple projects before joining
                the NewTunes team as our lead developer. Collin deals with all
                of the technical aspects of the business. Along with being an
                IOS app developer, Collin is also an artist and a husband. He is
                extremely passionate about anything that he puts his mind to and
                desires to create something new and of value in this world.
              </p>
            </div>
            <div className="w-[20%] max-lg:w-[100%]">
              <img className=" rounded-[16px]" src={Img2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
