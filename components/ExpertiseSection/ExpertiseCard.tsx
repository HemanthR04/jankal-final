
import React from "react";

interface ExpertiseCardProps {
  title: string;
  number: string;
  imageSrc: string;
  isFirst: boolean;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  number,
  imageSrc,
  
}) => {
  return (
    <article
      className='font-GeneralSans flex flex-col w-full '
    >
      <div className="flex gap-5 justify-between md:justify-start w-full text-center whitespace-nowrap">
      <span className="my-auto text-2xl tracking-wider text-white">
          {number}
        </span>
        <h3 className="text-4xl font-medium tracking-tighter text-neutral-300">
          {title}
        </h3>
        
      </div>
     <div className="flex">
     <img
        src={imageSrc}
        alt={`${title} expertise`}
        loading="lazy"
        className={`object-contain mt-2 w-full rounded max-w-xl`}
      />
      <p className="text-offwhite text-xl leading-8 px-4 hidden md:block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum aliquid sunt doloremque tenetur quo, alias error doloribus voluptate accusamus, quia vel magni dolores nesciunt molestiae, eaque autem rem! Nulla.</p>
     </div>
     
    </article>
  );
};

export default ExpertiseCard;
