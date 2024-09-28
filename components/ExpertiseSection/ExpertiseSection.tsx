/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import Divider from "../WhoWeAre/Divider";

interface ExpertiseData {
  title: string;
  number: string;
  imageSrc: string;
}

const expertiseData: ExpertiseData[] = [
  {
    title: "Residential",
    number: "01",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e6e65325f99debc9260a5d866b496cb39511f66f0c656f64b60c4e04f9d39ea0?placeholderIfAbsent=true&apiKey=f1716b67ec4e483e95e723d993b0aceb",
  },
  {
    title: "Commercial",
    number: "02",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9e6b627e65f6d30dda2dd033533a26594435fda091cf802589ece4cb371f1ebe?placeholderIfAbsent=true&apiKey=f1716b67ec4e483e95e723d993b0aceb",
  },
  {
    title: "Manufacturing",
    number: "03",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b6db5c009e0c942d944b39264c0756cfcf6c8db71b40b16bff048eb4163c5a53?placeholderIfAbsent=true&apiKey=f1716b67ec4e483e95e723d993b0aceb",
  },
];

const ExpertiseSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start  w-full max-w-[480px] md:max-w-7xl mx-auto px-4 py-4">
      <Divider/>
      <h2 className="text-xl md:text-3xl text-offwhite my-4 md:my-12 ">Our Expertise</h2>
      <div className="flex flex-col gap-16 items-center justify-center mt-2 w-full md:max-w-7xl">
        {expertiseData.map((expertise, index) => (
          <ExpertiseCard
            key={index}
            title={expertise.title}
            number={expertise.number}
            imageSrc={expertise.imageSrc}
            isFirst={index === 0}
          />
        ))}
        
      </div>
    </section>
  );
};

export default ExpertiseSection;
