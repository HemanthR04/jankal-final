/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface InfrastructureMessageProps {
  message: string;
}

const InfrastructureMessage: React.FC<InfrastructureMessageProps> = ({
  message,
}) => {
  return (
    <p className="self-start font-GeneralSans text-[24px] md:text-3xl tracking-tight leading-7 text-neutral-300 pt-24">
      {message}
    </p>
  );
};

export default InfrastructureMessage;
