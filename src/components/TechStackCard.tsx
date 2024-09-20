import React from "react";

type TechStackCardProps = {
  iconUrl: string;
};

const TechStackCard = (props: TechStackCardProps) => {
  const { iconUrl } = props;
  return (
    <div className="bg-cardgrey rounded-lg hover:cursor-pointer mt-3 w-32 p-4 flex items-center justify-center">
      <img className="img-fluid" src={iconUrl} alt="" />
    </div>
  );
};

export default TechStackCard;
