"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiLoader2Line } from "react-icons/ri";

type Card = {
  picture: string;
  title: string;
  description: string;
  link: string;
  buttonclick: any;
  techUsed: string[];
};

const CardItemMobile = (props: Card) => {
  const { picture, title, description, link, buttonclick, techUsed } = props;
  const [color, setColor] = useState(false);

  const toggle = () => {
    setColor((prevState) => !prevState);
  };

  const colorChange = color ? "bg-textback" : "bg-cardgrey";

  const [load, setLoad] = useState(false);
  const LoadEffect = load ? "hidden" : "flex";
  const loadImage = load ? "" : "hidden";
  const textEffect = load ? "visible" : "invisible";
  const effect = load ? "" : "animate-pulse";

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <div
      onClick={buttonclick}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className={`block max-w-[408px] h-fit z-10 ${effect}`}
    >
      <Link href={`${link}`} target="_blank" rel="noopener noreferrer">
        <div
          className={`${LoadEffect} h-[215px] w-full items-center justify-center transition-all ease-out`}
        >
          <RiLoader2Line className="animation-spin animate-pulse text-2xl" />
        </div>
        <img src={`${picture}`} className={`${loadImage} w-full`} alt={""} />
        <div
          className={`w-full flex flex-col items-start justify-between h-fit max-h-[250px] ${colorChange} p-3 md:p-[18px] gap-3`}
        >
          <div
            className={`${textEffect} inline-flex font-poppins font-semibold text-xl text-[#F2F2F2]`}
          >
            {title}
          </div>
          <div
            title={description}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              webkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className={`${textEffect} inline-block font-poppins font-normal text-xs sm:text-sm text-[#ABABAB]`}
          >
            {description}
          </div>
          <div className="flex flex-wrap w-full items-center">
            {techUsed.map((tech, index) => (
              <div
                key={index}
                className={`${textEffect} items-center bg-textback w-fit ml-l mr-1 mt-1 p-2 rounded-[5px] font-poppins font-normal text-skyblue text-[8px] sm:text-xs`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CardItemMobile;
