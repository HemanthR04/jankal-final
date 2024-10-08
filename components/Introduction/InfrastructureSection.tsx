/**
 * This code was generated by Builder.io.
 */
import React from "react";
import InfrastructureMessage from "./InfrastructureMessage";
import ImageContainer from "./ImageContainer";

const InfrastructureSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:gap-5  px-2 md:max-w-7xl  mx-auto py-4">
       <ImageContainer
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f766ce984886ae064254dc3d94e09fd075c180cd035b4a7cf0fd7cca0d74fe5c?placeholderIfAbsent=true&apiKey=f1716b67ec4e483e95e723d993b0aceb"
        alt="Jankal Group infrastructure project"
      />
      <InfrastructureMessage message="At Jankal Group, we are dedicated to creating infrastructure that enhances communities and enriches the lives of the people we serve." />
     
    </section>
  );
};

export default InfrastructureSection;
