import React from "react";
import FooterColumn from "./FooterColumn";

const locationLinks = [
  "Bengaluru",
  "Tumkur",
  "Sira",
  "Hassan",
  "Mysore",
  "Dodballapur",
  "Chickballapura",
];

const companyLinks = ["CAREERS"];

const FooterLinks: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink text-sm basis-[30px] max-w-[1728px] min-w-[240px] text-neutral-300 max-md:max-w-full">
      <div className="flex flex-wrap w-full max-md:max-w-full">
        <FooterColumn title="Locations" links={locationLinks.slice(0, 7)} />

       
        <div className="flex flex-col justify-center pb-6 text-sm max-w-[1623px">
          <div className="flex flex-col pr-4 pl-12 max-w-full min-h-[244px] w-sm max-md:pl-5">
            <h3 className="pb-px w-full tracking-widest leading-tight">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col mt-4 w-full text-sm gap-4">
              <p className="pb-px w-full">+91 1234567890</p>
              <p className="pb-px w-full whitespace-nowrap">info@jankal.in</p>
              <p>
                No. 52 (Old No. 272), 12th Cross, TRIVENI 3 Rd, Main Road, COMPLEX, 2nd Floor, Reliance Smart, PID No. 10-33-52, Mahalakshmi Layout, Mahalakshmi Puram, Bangalore - 560086
              </p>
            </div>
            {/* <h3 className="pt-8 pb-px mt-4 w-full tracking-widest leading-tight">CIN Details</h3>
            <p className="pb-px mt-4 w-full text-sm leading-5">
              Jankal inifity <br /> L45201KA1995PLC018475
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
