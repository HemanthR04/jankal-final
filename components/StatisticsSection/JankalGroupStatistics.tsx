/**
 * This code was generated by Builder.io.
 */
import React from "react";
import StatisticsCard from "./StatisticsCard";

const JankalGroupStatistics: React.FC = () => {
  const statistics = [
    { value: "1500+", label: "Homes Delivered" },
    { value: "21 Million Sq Ft", label: "Luxurious Residences" },
    { value: "3000+", label: "Residential Plots" },
    { value: "50+", label: "Projects" },
   
  ];

  return (
    <StatisticsCard title="Jankal Group Statistics" statistics={statistics} />
  );
};

export default JankalGroupStatistics;
