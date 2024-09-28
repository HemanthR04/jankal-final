import React from 'react';
import Divider from '../WhoWeAre/Divider';

interface BuildingForEternityProps {
  title: string;
  highlightedText: string;
  description: string;
}

const BuildingForEternity: React.FC<BuildingForEternityProps> = ({ title, highlightedText, description }) => {
  return (
    <section className="flex flex-col text-center text-offwhite  font-GeneralSans px-2">
      <Divider/> 
      <h2 className="z-10 self-center  text-3xl md:text-5xl font-semibold mt-12">
        <span className="">{title}</span>{" "}
        <span className="text-yellow-600 ">{highlightedText}</span>
      </h2>
      <p className="w-full text-base ">
        {description}
      </p>
    
    </section>
  );
};

export default BuildingForEternity;