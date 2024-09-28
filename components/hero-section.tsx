import Link from "next/link";
import React from "react";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const title = "Who we are";
const content =
  "Jankal Group is a distinguished, family-owned enterprise with a longstanding presence in the construction industry, spanning several decades. Originally focused on executing major government infrastructure projects such as roads, bridges, and railways, we have played a significant role in shaping the foundation of our nation’s growth .Guided by our philosophy of “Building for Eternity” we meticulously design and construct properties across India that stand as lasting symbols of quality, trust, and vision. ";
const HeroSection = () => {
  return (
    <>
      <section className="heroSection flex flex-col items-end gap-2 mx-auto w-full pt-12">
        <div className=" relative w-full">
          <video
            src="https://res.cloudinary.com/dj0z4bjt0/video/upload/v1727344142/WhatsApp_Video_2024-09-23_at_7.32.12_PM_atnj7j.mp4"
           loop muted autoPlay controls={false}
            className="w-full -z-30"
          />
          <div className="px-2 text-[14px] md:text-xl flex items-center justify-between absolute bottom-0 md:bottom-20 md:hidden">
            <div>
              <p className=" text-offwhite font-GeneralSans tracking-wide">
                Luxury High Rise
              </p>
              <p className=" text-offwhite font-GeneralSans  tracking-wide">
                123456 sq ft | 2 & 3 BHK Apartments
              </p>
            </div>

           
          </div>
        </div>
        <div className="w-[140px] mr-8 md:w-[200px] md:absolute bottom-20 items-center justify-center  my-4 md:my-2 py-1 md:py-2 text-[12px] text-center bg-offwhite text-darkblue rounded-full font-GeneralSans font-medium tracking-wider flex px-2 md:mr-12">
              <Link href={"/stellarheights"} className="px-4">
                EXPLORE NOW
              </Link>
            </div>
      
      </section>
      
      <WhoWeAre title={title} content={content} />
      
    </>
  );
};

export default HeroSection;
