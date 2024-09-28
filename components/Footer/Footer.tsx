import React from 'react';
import SocialIcons from '../public/Bangalore.webp.png'
import Logo from '../public/Bangalore.webp.png'
import FooterLinks from './Footerlinks';
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center self-stretch px-24 pt-5 pb-5 bg-darkblue max-md:px-5 border-t border-[#0A111F] mt-12">
       
      <div className="flex flex-col w-full max-w-[1728px] max-md:max-w-full">
        <div className="flex flex-wrap w-full max-md:max-w-full">
        <FooterLinks />
        </div>
        
        <div className="flex flex-wrap justify-center pt-4 w-full font-light text-neutral-300 max-md:max-w-full mx-au">
          <div className="flex flex-col flex-1 shrink px-4 text-sm leading-7 basis-0 max-w-[864px] min-w-[240px] max-md:max-w-full">
            <p className="w-full max-md:max-w-full text-center">
              Jankal © Copyright 2024 All rights reserved
            </p>
          </div>
          <nav className="flex flex-col flex-1 shrink px-4 text-sm leading-7 text-right basis-0 max-w-[864px] min-w-[240px] max-md:max-w-full">
            <ul className="flex flex-wrap gap-2 items-center justify-center pr-1 pb-px pl-72 w-full max-md:pl-5 max-md:max-w-full">
              <li>Terms of Use</li>
              <li className="text-sm leading-7">|</li>
              <li>Privacy Policy</li>
              <li className="text-sm leading-7">|</li>
              <li className="whitespace-nowrap">Disclaimer</li>
              <li className="text-sm leading-7">|</li>
              <li>RERA Disclaimer</li>
              <li className="text-sm leading-7">|</li>
              <li className="whitespace-nowrap">Sitemap</li>
              <li className="text-sm leading-7">|</li>
              <li className="whitespace-nowrap">Blog</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;