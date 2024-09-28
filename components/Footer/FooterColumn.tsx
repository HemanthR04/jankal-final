import React from 'react';

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col justify-center pb-6 uppercase max-w-[1623px] w-[190px]">
      <div className="flex flex-col pr-4 pl-12 max-w-full min-h-[244px] w-[190px] max-md:pl-5">
        <h3 className="sr-only">{title}</h3>
        <ul className="flex flex-col w-full">
          {links.map((link, index) => (
            <li key={index} className={`pb-px ${index > 0 ? 'mt-3.5' : ''} w-full whitespace-nowrap`}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterColumn;