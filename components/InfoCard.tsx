import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  city: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, city }) => {
  return (
    <div className=" rounded-lg bg-[#2b2b2b] p-4 shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <p>{city}</p>
    </div>
  );
};

export default InfoCard;
