import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-bgBlack py-[38px] px-5 md:px-20 lg:px-60 items-center border-t border-t-Gray z-50">
        <div className="flex w-full h-5 justify-between items-center">
          <div className=" grid grid-cols-2 md:flex gap-x-10 gap-y-4 lg:gap-[50px]">
            <span className="font-inter font-normal text-xs md:text-base text-white">
              <a href="https://twitter.com/kolaniyi3">Twitter</a>
            </span>
            <span className="font-inter font-normal text-xs md:text-base text-white">
              <a href="https://www.linkedin.com/in/kolaniyi/">Linkedin</a>
            </span>
            <span className="font-inter font-normal text-xs md:text-base text-white">
              <a href="https://github.com/kolniy">Github</a>
            </span>
          </div>
          <div className="flex items-start lg:items-center">
            <div className="inline-flex items-center font-inter font-normal text-base text-white gap-1">
              <FaRegCopyright />
              {new Date().getFullYear()}
              <span className="ml-[2px]">kolaniyi.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
