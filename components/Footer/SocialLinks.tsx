/**
 * This code was generated by Builder.io.
 */
import Link from "next/link";
import React from "react";

type SocialLinkProps = {
  name: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ name }) => (
  <Link href={`#${name.toLowerCase()}`} className="self-stretch my-auto underline">
    {name}
  </Link>
);

const SocialLinks: React.FC = () => (
  <nav className="flex gap-1 justify-center items-center self-center mt-12 font-bold tracking-normal text-neutral-300">
    <SocialLink name="Instagram" />
    <span className="self-stretch my-auto tracking-tighter text-white">.</span>
    <SocialLink name="Facebook" />
    <span className="self-stretch my-auto tracking-tighter text-white">.</span>
    <SocialLink name="Linkedin" />
  </nav>
);

export default SocialLinks;
